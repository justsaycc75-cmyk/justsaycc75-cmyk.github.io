/* NFL/EPL round boards. Wednesday rollover uses Australia/Sydney, never the visitor's timezone. */
(function(root){
'use strict';
const TZ='Australia/Sydney',DAY=86400000;
const status=e=>e.competitions?.[0]?.status||e.status||{};
const state=e=>status(e).type?.state||'pre';
const stamp=e=>Date.parse(e.date);
const localKey=t=>new Intl.DateTimeFormat('en-CA',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date(t));
const dayNumber=t=>Date.parse(localKey(t)+'T00:00:00Z');
function windowStart(now){const d=dayNumber(now);return d-((new Date(d).getUTCDay()+4)%7)*DAY;}
function selectRound(events,now,league){
 const unique=[...new Map(events.filter(e=>e.competitions?.[0]?.competitors?.length===2&&Number.isFinite(stamp(e))).map(e=>[e.id,e])).values()];
 const start=windowStart(now),end=start+7*DAY;
 const groups=new Map();
 for(const e of unique){
  // NFL supplies actual season/week IDs. EPL scoreboard does not supply matchweek IDs,
  // so use the explicitly labelled Wednesday–Tuesday Sydney fixture window.
  const key=league==='NFL'&&e.week?.number?`${e.season?.year}-${e.season?.type}-${e.week.number}`:String(windowStart(stamp(e)));
  if(!groups.has(key))groups.set(key,[]);groups.get(key).push(e);
 }
 const rounds=[...groups.values()].map(g=>g.sort((a,b)=>stamp(a)-stamp(b)));
 // Never discard a genuinely ongoing match at a calendar rollover.
 let chosen=rounds.filter(g=>g.some(e=>state(e)==='in')).sort((a,b)=>stamp(a[0])-stamp(b[0]))[0];
 if(!chosen)chosen=rounds.filter(g=>g.some(e=>dayNumber(stamp(e))>=start&&dayNumber(stamp(e))<end)).sort((a,b)=>stamp(a[0])-stamp(b[0]))[0];
 if(!chosen)chosen=rounds.filter(g=>g.some(e=>state(e)==='pre'&&stamp(e)>now)).sort((a,b)=>stamp(a[0])-stamp(b[0]))[0];
 if(!chosen)return [];
 // Full round remains visible, including finals. A genuinely completed Tuesday
 // round naturally contains finals only; delayed/postponed fixtures keep their status.
 return chosen.sort((a,b)=>stamp(a)-stamp(b));
}
const api={selectRound,windowStart,state,localKey};
if(typeof module==='object'&&module.exports)module.exports=api;
if(!root.document)return;
const panel=document.querySelector('.front-live-today');if(!panel)return;
const configs=[{league:'NFL',path:'football/nfl',target:panel.querySelector('#live-sports-games'),url:'https://www.espn.com/nfl/scoreboard'}, {league:'EPL',path:'soccer/eng.1',target:panel.querySelector('#live-epl-game'),url:'https://www.premierleague.com/en/matches'}];
const venuePhotos={"Reliant Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3e/Nrg_stadium.jpg/960px-Nrg_stadium.jpg","name":"NRG Stadium","source":"https://commons.wikimedia.org/wiki/File:Nrg_stadium.jpg","credit":"Carlos.dkfi","license":"CC0","licenseUrl":"http://creativecommons.org/publicdomain/zero/1.0/deed.en","description":"nrg stadium.jpg"},"Highmark Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Bills_Stadium_May26.jpg/960px-Bills_Stadium_May26.jpg","name":"Highmark Stadium","source":"https://commons.wikimedia.org/wiki/File:Bills_Stadium_May26.jpg","credit":"Dekema","license":"CC0","licenseUrl":"http://creativecommons.org/publicdomain/zero/1.0/deed.en","description":"Highmark Stadium viewed from the west"},"Soldier Field":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Soldier_Field_S.jpg/960px-Soldier_Field_S.jpg","name":"Soldier Field","source":"https://commons.wikimedia.org/wiki/File:Soldier_Field_S.jpg","credit":"Sea Cow","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0","description":"Soldier Field looking south."},"AT&T Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/1/11/Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg/960px-Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg","name":"AT&T Stadium","source":"https://commons.wikimedia.org/wiki/File:Arlington_June_2020_4_%28AT%26T_Stadium%29.jpg","credit":"Michael Barera","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0","description":"AT&amp;T Stadium in Arlington, Texas (United States)."},"Ford Field":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/Detroit_December_2015_09_%28Ford_Field%29.jpg/960px-Detroit_December_2015_09_%28Ford_Field%29.jpg","name":"Ford Field","source":"https://commons.wikimedia.org/wiki/File:Detroit_December_2015_09_%28Ford_Field%29.jpg","credit":"Michael Barera","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0","description":"Ford Field in Detroit, Michigan (United States)."},"Arrowhead Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ac/Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg/960px-Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg","name":"Arrowhead Stadium","source":"https://commons.wikimedia.org/wiki/File:Aerial_view_of_Arrowhead_Stadium_08-31-2013.jpg","credit":"Ichabod","license":"CC BY-SA 3.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/3.0","description":"Aerial view of Arrowhead Stadium 08-31-2013"},"Lincoln Financial Field":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d2/Lincoln_Financial_Field%2C_Philadelphia%2C_Pennsylvania%2C_United_States.jpg/960px-Lincoln_Financial_Field%2C_Philadelphia%2C_Pennsylvania%2C_United_States.jpg","name":"Lincoln Financial Field","source":"https://commons.wikimedia.org/wiki/File:Lincoln_Financial_Field%2C_Philadelphia%2C_Pennsylvania%2C_United_States.jpg","credit":"Dough4872","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0","description":"Lincoln Financial Field, Philadelphia, Pennsylvania, United States"},"Bank of America Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b9/Aerial_view_of_Bank_of_America_Stadium_in_Charlotte.jpg/960px-Aerial_view_of_Bank_of_America_Stadium_in_Charlotte.jpg","name":"Bank of America Stadium","source":"https://commons.wikimedia.org/wiki/File:Aerial_view_of_Bank_of_America_Stadium_in_Charlotte.jpg","credit":"Quintin Soloviev","license":"CC BY 4.0","licenseUrl":"https://creativecommons.org/licenses/by/4.0","description":"Aerial view of Bank of America Stadium in Charlotte, North Carolina. Home to the Carolina Panthers and Charlotte FC."},"SoFi Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/SoFi_Stadium_2023.jpg/960px-SoFi_Stadium_2023.jpg","name":"SoFi Stadium","source":"https://commons.wikimedia.org/wiki/File:SoFi_Stadium_2023.jpg","credit":"Troutfarm27","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0","description":"Exterior of SoFi Stadium in April 2023 - WrestleMania 39"},"Empower Field at Mile High":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Empower_Field_at_Mile_High_20241001.jpg/960px-Empower_Field_at_Mile_High_20241001.jpg","name":"Empower Field at Mile High","source":"https://commons.wikimedia.org/wiki/File:Empower_Field_at_Mile_High_20241001.jpg","credit":"Pdubs.94","license":"CC BY-SA 4.0","licenseUrl":"https://creativecommons.org/licenses/by-sa/4.0","description":"Empower Field at Mile High"},"MetLife Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Metlife_stadium_%28Aerial_view%29.jpg/960px-Metlife_stadium_%28Aerial_view%29.jpg","name":"MetLife Stadium","source":"https://commons.wikimedia.org/wiki/File:Metlife_stadium_%28Aerial_view%29.jpg","credit":"Anthony Quintano from Hillsborough, NJ, United States","license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0","description":"Aerial view of Metlife Stadium in East Rutherford, New Jersey, on 20 January 2014"},"Estadio Banorte":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg/960px-Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg","name":"Estadio Azteca","source":"https://commons.wikimedia.org/wiki/File:Vista_a%C3%A9rea_del_Estadio_Azteca_-_2026_-_02.jpg","credit":"ProtoplasmaKid","license":"CC BY 4.0","licenseUrl":"https://creativecommons.org/licenses/by/4.0","description":"Drone aerial view of the Azteca Stadium in Mexico City after its 2026 renovation as Banorte Stadium."},"Northwest Stadium":{"url":"https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Commanders_vs_Giants_%2853345178211%29.jpg/960px-Commanders_vs_Giants_%2853345178211%29.jpg","name":"Northwest Stadium","source":"https://commons.wikimedia.org/wiki/File:Commanders_vs_Giants_%2853345178211%29.jpg","credit":"Maryland GovPics","license":"CC BY 2.0","licenseUrl":"https://creativecommons.org/licenses/by/2.0","description":"Governor Moore and Lt Governor Miller Attend the Commanders vs Giants Football Game by Pat Siebert at 1600 Fedex Way, Hyattsville, MD 20785"}};
const visualCards=document.body.classList.contains('sport-page');
const refresh=panel.querySelector('[data-game-refresh]'),updated=panel.querySelector('[data-game-updated]');
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const format=t=>new Intl.DateTimeFormat('en-AU',{timeZone:TZ,weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true}).format(new Date(t));
const clock=t=>new Intl.DateTimeFormat('en-AU',{timeZone:TZ,hour:'numeric',minute:'2-digit',second:'2-digit',hour12:true}).format(new Date(t));
const dateParam=n=>new Date(n).toISOString().slice(0,10).replace(/-/g,'');
const caches=new Map();
async function read(c,query=''){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
 try{const r=await fetch('https://site.api.espn.com/apis/site/v2/sports/'+c.path+'/scoreboard'+query,{cache:'no-store',signal:controller.signal});if(!r.ok)throw Error('HTTP '+r.status);const d=await r.json();if(!Array.isArray(d.events))throw Error('No events');return d;}finally{clearTimeout(timer);}
}
async function events(c,now){
 if(c.league==='NFL'){
  const first=await read(c),w=Number(first.week?.number),s=first.season;
  const out=[...first.events];
  if(w&&s?.year){
   // ESPN can advance its default week early. Keep the previous round available
   // until Wednesday, and have the next round ready for the rollover.
   const adjacent=await Promise.allSettled([w-1,w+1].filter(n=>n>0&&n<=(s.type===2?18:s.type===3?5:5)).map(n=>read(c,`?seasontype=${s.type}&week=${n}&dates=${s.year}`)));
   for(const r of adjacent)if(r.status==='fulfilled')out.push(...r.value.events);
   if(adjacent.some(r=>r.status==='rejected'))throw Error('Incomplete round feeds');
  }return out;
 }
 // ESPN's EPL endpoint accepts individual UTC dates, not a date range.
 // Cache quiet dates for ten minutes; recheck active dates every 30 seconds.
 const start=windowStart(now),today=Math.floor(now/DAY)*DAY;
 const days=Array.from({length:9},(_,i)=>start+(i-1)*DAY);
 const load=async d=>{const k=dateParam(d),old=caches.get(k);const active=Math.abs(d-today)<=DAY||old?.events.some(e=>state(e)==='in');if(old&&now-old.at<(active?20000:600000))return old.events;const data=await read(c,'?dates='+k);caches.set(k,{at:now,events:data.events});return data.events;};
 let out=(await Promise.all(days.map(load))).flat();
 // An international break/off-week should not display old results as current.
 if(!selectRound(out,now,c.league).length)out.push(...(await Promise.all(Array.from({length:8},(_,i)=>load(start+(8+i)*DAY)))).flat());
 return out;
}
function teamName(t){return t?.team?.displayName||t?.team?.name||'Team';}
function render(c){
 const now=Date.now();
 let games=selectRound(c.games||[],now,c.league);
 // Never carry last week's final board across Wednesday when the fresh feed failed.
 if(!games.length){c.target.innerHTML='<div class="live-game-badge">'+c.league+' · '+(c.stale?'UPDATE DELAYED':'SCHEDULE')+'</div><p class="live-game-empty">'+(c.stale?'Current round could not be checked.':'No fixtures in the current schedule window.')+'</p><a class="live-game-link" href="'+c.url+'" target="_blank" rel="noopener noreferrer">Official fixtures & results ↗</a>';return;}
 const live=games.filter(e=>state(e)==='in'),pre=games.filter(e=>state(e)==='pre'),post=games.filter(e=>state(e)==='post');
 const featured=live.length?live[Math.floor(now/12000)%live.length]:pre[0]||games[games.length-1];
 const boardState=live.length?(c.stale?'stale-live':'in'):pre.length?'pre':'post';
 const title=c.league==='NFL'&&games[0].week?.number?'Week '+games[0].week.number:'Weekly fixtures';
 const label=c.stale?'UPDATE DELAYED':live.length?'● LIVE + ROUND RESULTS':pre.length?(post.length?'ROUND IN PROGRESS':'COMING UP'):'ROUND RESULTS';
 const row=e=>{
  const s=state(e),comp=e.competitions[0],ts=comp.competitors;
  const home=ts.find(t=>t.homeAway==='home')||ts[0],away=ts.find(t=>t.homeAway==='away')||ts[1];
  const detail=s==='pre'?format(e.date)+' Sydney':status(e).type?.shortDetail||status(e).type?.detail||'Status unavailable';
  // Football convention is home first; NFL retains its away-first display.
  const first=c.league==='EPL'?home:away,last=c.league==='EPL'?away:home;
  const score=s==='pre'?'v':esc(first.score??'–')+' – '+esc(last.score??'–');
  const href=(e.links||[]).map(l=>l.href).find(u=>/^https:\/\/www\.espn\.com\//.test(u))||c.url;
  const teamMarkup=t=>{
   const raw=t.team?.logo||t.team?.logos?.[0]?.href;
   const logo=typeof raw==='string'&&/^https:\/\/a\.espncdn\.com\//.test(raw)?'<img src="'+esc(raw)+'" alt="" loading="lazy" decoding="async" width="52" height="52">':'';
   return visualCards?'<span class="round-team-visual">'+logo+'<span>'+esc(teamName(t))+'</span></span>':'<span>'+esc(teamName(t))+'</span>';
  };
  const photo=visualCards&&c.league==='NFL'?venuePhotos[comp.venue?.fullName]:null;
  const picture=photo?'<img class="round-venue-photo" src="'+esc(photo.url)+'" alt="'+esc(photo.name)+' venue photograph" loading="lazy" decoding="async"><span class="round-venue-label">'+esc(comp.venue.fullName)+' · venue photo, not live</span>':'';
  const credit=photo?'<small class="round-photo-credit"><a href="'+esc(photo.source)+'" target="_blank" rel="noopener noreferrer">'+esc(photo.credit)+' · photo source</a> · <a href="'+esc(photo.licenseUrl)+'" target="_blank" rel="noopener noreferrer">'+esc(photo.license)+'</a></small>':'';
  return '<li class="round-game '+(s==='in'?'round-live':'')+'" data-game-id="'+esc(e.id)+'"><a href="'+esc(href)+'" target="_blank" rel="noopener noreferrer">'+picture+'<span class="round-status">'+(s==='in'?(c.stale?'LAST LIVE SNAPSHOT':'LIVE'):s==='post'?'FINAL':'UPCOMING')+' · '+esc(detail)+'</span><span class="round-teams">'+teamMarkup(first)+'<strong>'+score+'</strong>'+teamMarkup(last)+'</span></a>'+credit+'</li>';
 };
 const focus=live.length?'<p class="round-focus">Now: '+esc(featured.shortName||featured.name)+' · '+esc(status(featured).type?.shortDetail||'In play')+(live.length>1?' · live focus rotates every 12 seconds':'')+'</p>':'';
 const msg=c.stale?'Update delayed. Scores below are the last successful snapshot, not confirmed current.':'Checked '+clock(c.at)+' Sydney · refreshes every 30 seconds';
 c.target.innerHTML='<article data-sport-state="'+boardState+'" data-sport-start="'+stamp(featured)+'"><div class="live-game-badge '+(live.length&&!c.stale?'is-live':'')+'">'+c.league+' · '+label+'</div><h3 class="round-title">'+esc(title)+'</h3><p class="round-policy">Finished games stay through Tuesday. New round from Wednesday (Sydney). Midweek games remain visible while in play.</p>'+focus+'<ul class="round-games">'+games.map(row).join('')+'</ul><p class="live-game-empty '+(c.stale?'live-game-stale':'')+'">'+esc(msg)+'</p><a class="live-game-link" href="'+c.url+'" target="_blank" rel="noopener noreferrer">All fixtures & results ↗</a></article>';
}
let busy=false;
async function update(){if(busy)return;busy=true;if(refresh)refresh.disabled=true;
 try{await Promise.all(configs.filter(c=>c.target).map(async c=>{try{c.games=await events(c,Date.now());c.at=Date.now();c.stale=false;}catch(e){c.stale=true;}render(c);}));if(updated)updated.textContent='Round boards checked '+clock(Date.now())+' Sydney';}finally{busy=false;if(refresh)refresh.disabled=false;}}
const style=document.createElement('style');style.textContent='.round-title{margin:.4rem 0;font-size:1.15rem}.round-policy,.round-focus{font-size:.76rem;line-height:1.4;margin:.5rem 0}.round-games{list-style:none;padding:0;margin:.6rem 0}.round-game{border-top:1px solid #b8cbd1;padding:.55rem 0}.round-game a{display:block;text-decoration:none;color:inherit}.round-status{display:block;font-size:.69rem;line-height:1.4;margin-bottom:.3rem}.round-teams{display:grid;grid-template-columns:minmax(0,1fr) auto minmax(0,1fr);align-items:center;gap:.45rem;font-size:.78rem;line-height:1.35}.round-teams span:last-child{text-align:right}.round-teams strong{white-space:nowrap;font-size:.95rem}.round-live{border-left:3px solid #057d52;padding-left:.4rem}.round-live .round-status{font-weight:800;color:#b9ffd6}.round-game a:hover{text-decoration:underline}.round-game a:focus-visible{outline:2px solid #006541;outline-offset:3px}';document.head.appendChild(style);
refresh?.addEventListener('click',update);window.addEventListener('online',update);document.addEventListener('visibilitychange',()=>{if(!document.hidden)update();});update();setInterval(()=>{if(!document.hidden)update();},30000);setInterval(()=>{if(!document.hidden)configs.filter(c=>c.target&&c.games).forEach(render);},12000);
})(typeof window==='object'?window:globalThis);
