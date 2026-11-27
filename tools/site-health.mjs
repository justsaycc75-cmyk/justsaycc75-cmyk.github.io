import {chromium} from 'playwright';
import fs from 'node:fs/promises';
const base=new URL(process.env.SITE_URL||'https://justsaycc75-cmyk.github.io/');
const mode=process.env.AUDIT_MODE||'full';
const imageStatuses=new Map();
const findings=[],seen=new Set(),queue=[base.href],external=new Set(),assets=new Set();
const add=(level,page,detail)=>findings.push({level,page,detail});
const browser=await chromium.launch({headless:true});
await fs.mkdir('health-report',{recursive:true});
const context=await browser.newContext({viewport:{width:1440,height:900},ignoreHTTPSErrors:false});
const page=await context.newPage();
let current=base.href;
page.on('pageerror',e=>add('error',current,'JavaScript: '+e.message));
page.on('requestfailed',r=>{if(!r.failure()?.errorText?.includes('ERR_ABORTED'))add(r.url().startsWith(base.origin)?'error':'warning',current,'Request failed: '+r.url()+' '+r.failure()?.errorText)});
page.on('response',r=>{imageStatuses.set(r.url(),r.status());if(r.status()>=400)add(r.url().startsWith(base.origin)?'error':'warning',current,'HTTP '+r.status()+': '+r.url())});
const clean=u=>{const x=new URL(u);x.hash='';return x.href};
const eligible=u=>{const x=new URL(u);return x.origin===base.origin&&(/\/$|\.html?$/i.test(x.pathname)||!x.pathname.split('/').pop().includes('.'))};
try{
while(queue.length&&seen.size<(mode==='full'?150:1)){
 const url=clean(queue.shift());if(seen.has(url))continue;seen.add(url);current=url;
 try{
 const res=await page.goto(url,{waitUntil:'domcontentloaded',timeout:35000});if(!res||res.status()>=400){add('error',url,'Navigation failed');continue}
 await page.waitForTimeout(1500);
 await page.locator('img[loading="lazy"]').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));
 // Give visible and below-the-fold content images time to settle after eager loading.
 await page.waitForFunction(()=>[...document.images].filter(i=>i.checkVisibility({checkOpacity:true,checkVisibilityCSS:true})&&i.getBoundingClientRect().width>1&&i.getBoundingClientRect().height>1).every(i=>i.complete),null,{timeout:10000}).catch(()=>{});
 const data=await page.evaluate(()=>({title:document.title,links:[...document.querySelectorAll('a[href]')].map(a=>({url:a.href,raw:a.getAttribute('href')})),images:[...document.images].filter(i=>i.checkVisibility({checkOpacity:true,checkVisibilityCSS:true})&&i.getBoundingClientRect().width>1&&i.getBoundingClientRect().height>1).map(i=>({url:i.currentSrc||i.src,ok:i.complete&&i.naturalWidth>0,alt:i.alt})),tour:[...document.querySelectorAll('.tour-photo-strip')].map(s=>({count:s.querySelectorAll('img').length,loaded:[...s.querySelectorAll('img')].filter(i=>i.complete&&i.naturalWidth>0).length})),overflow:document.documentElement.scrollWidth>innerWidth+5,text:document.body.innerText.slice(0,200000),resources:[...document.querySelectorAll('script[src],link[rel=stylesheet][href]')].map(x=>x.src||x.href)}));
 if(!data.title)add('warning',url,'Missing page title');
 if(data.overflow)add('warning',url,'Desktop horizontal overflow');
 for(const i of data.images){
  if(!i.ok){
   // Remote hosts may reject a CI runner while serving ordinary visitors. Keep
   // these visible in the report without treating an access failure as a 404.
   const local=!i.url||new URL(i.url).origin===base.origin;
   const missing=[404,410].includes(imageStatuses.get(i.url));
   add(local||missing?'error':'warning',url,(local||missing?'Missing image: ':'External image could not be verified: ')+i.url);
  }
  if(!i.alt)add('warning',url,'Missing image alt: '+i.url);
 }
 if(url.includes('world-cruise-journal')){const framing=await page.evaluate(()=>[...document.querySelectorAll('.tour-photo-frame img,.real-pair figure>a>img')].filter(i=>i.complete&&i.naturalWidth>0&&i.getBoundingClientRect().width>0).map(i=>{const b=i.getBoundingClientRect(),style=getComputedStyle(i),r=i.naturalWidth/i.naturalHeight,t=b.width/b.height;return{alt:i.alt,url:i.currentSrc||i.src,ratio:t,fit:style.objectFit,visible:Math.min(r/t,t/r)}}));for(const i of framing){if(Math.abs(i.ratio-16/9)>.08)add('warning',url,'Thumbnail frame is not 16:9: '+i.alt);if(!['cover','contain'].includes(i.fit))add('error',url,'Thumbnail may be distorted: '+i.alt);if(i.fit==='cover'&&i.visible<.73)add('warning',url,'Excessive thumbnail crop: '+i.alt)}}
 if(url.includes('world-cruise-journal')){const clarity=await page.evaluate(()=>[...document.querySelectorAll('.tour-photo-frame img,.real-pair figure>a>img')].filter(i=>i.complete&&i.naturalWidth>0&&i.getBoundingClientRect().width>0).map(i=>{const b=i.getBoundingClientRect(),fit=getComputedStyle(i).objectFit;const scale=fit==='contain'?Math.min(b.width/i.naturalWidth,b.height/i.naturalHeight):Math.max(b.width/i.naturalWidth,b.height/i.naturalHeight);return{alt:i.alt,source:i.currentSrc||i.src,w:i.naturalWidth,h:i.naturalHeight,scale}}));for(const i of clarity){if(i.w<600||i.h<340)add('warning',url,'Low-resolution thumbnail source ('+i.w+'x'+i.h+'): '+i.alt);if(i.scale>1.05)add('warning',url,'Thumbnail enlarged beyond native resolution: '+i.alt)}}
 for(const t of data.tour)if(t.count!==3||t.loaded!==3)add('error',url,'Tour strip: '+t.loaded+' of '+t.count+' images loaded');
 for(const a of data.links){if(!/^https?:/.test(a.url))continue;const x=new URL(a.url);if(x.origin!==base.origin){external.add(clean(a.url));continue}if(eligible(a.url)){queue.push(clean(a.url));if(x.hash&&clean(a.url)===url){const id=decodeURIComponent(x.hash.slice(1));if(!await page.evaluate(id=>!!(document.getElementById(id)||document.getElementsByName(id).length),id))add('warning',url,'Missing anchor: '+a.raw)}}else assets.add(clean(a.url))}
 for(const a of data.resources)if(a.startsWith(base.origin))assets.add(a);
 if(url===base.href||url.includes('world-cruise-journal')){await page.screenshot({path:'health-report/'+(url===base.href?'home':'journal')+'-desktop.png',fullPage:false});if(url===base.href){for(const s of data.text.match(/.{0,65}(?:data unavailable|unable to load|failed to load|feed unavailable|last updated|last verified|stale data).{0,90}/gi)||[])add('warning',url,'Feed status: '+s.trim())}}
 if(mode==='full'){await page.setViewportSize({width:390,height:844});await page.waitForTimeout(300);if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+5))add('warning',url,'Mobile horizontal overflow');if(url===base.href||url.includes('world-cruise-journal'))await page.screenshot({path:'health-report/'+(url===base.href?'home':'journal')+'-mobile.png'});await page.setViewportSize({width:1440,height:900})}
 }catch(e){add('error',url,String(e))}
}
if(queue.length&&mode==='full')add('warning',base.href,'Crawl limit reached; additional pages remain');
async function check(u,level){try{let res=await fetch(u,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(12000)});if([403,405,429].includes(res.status))res=await fetch(u,{method:'GET',redirect:'follow',signal:AbortSignal.timeout(12000)});if(!res.ok)add(level,u,'Link HTTP '+res.status);await res.body?.cancel()}catch(e){add(level,u,'Link check: '+e.message)}}
if(mode==='full'){const jobs=[...Array.from(assets,u=>[u,'error']),...Array.from(external,u=>[u,'warning'])];for(let i=0;i<jobs.length;i+=8)await Promise.all(jobs.slice(i,i+8).map(([u,l])=>check(u,l)))}
}finally{await browser.close()}
const unique=[...new Map(findings.map(f=>[JSON.stringify(f),f])).values()];const errors=unique.filter(f=>f.level==='error').length,warnings=unique.length-errors;
const report={time:new Date().toISOString(),mode,pages:[...seen],internalAssets:assets.size,externalLinks:external.size,errors,warnings,findings:unique};
await fs.writeFile('health-report/report.json',JSON.stringify(report,null,2));
const safe=s=>String(s).replace(/[\r\n]+/g,' ').replace(/\|/g,'\\|').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const md=['# Website health report','Checked '+report.time,'Pages: '+seen.size+' · Internal assets: '+assets.size+' · External links: '+external.size,'Errors: '+errors+' · Warnings: '+warnings,'','| Severity | Page | Finding |','|---|---|---|',...unique.map(f=>'| '+safe(f.level)+' | '+safe(f.page)+' | '+safe(f.detail)+' |')].join('\n');
await fs.writeFile('health-report/report.md',md);if(process.env.GITHUB_STEP_SUMMARY)await fs.appendFile(process.env.GITHUB_STEP_SUMMARY,md.slice(0,900000));console.log(md);if(errors)process.exitCode=1;

