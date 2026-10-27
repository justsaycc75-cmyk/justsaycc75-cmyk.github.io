(()=>{
  'use strict';
  const panel=document.querySelector('.front-live-today');
  if(!panel)return;
  const eplTarget=panel.querySelector('#live-epl-game');
  const cricketTarget=panel.querySelector('#live-cricket-game');
  const refresh=panel.querySelector('[data-game-refresh]');
  if(!eplTarget||!cricketTarget)return;
  const TZ='Australia/Sydney';
  const ESPN='https://site.api.espn.com/apis/site/v2/sports/';
  const CRICKET_MATCH='https://www.cricket.com.au/matches/CA:39992/south-africa-men-australia-men-3rd-test';
  const CRICKET_SCHEDULE='https://www.cricket.com.au/matches/tours';
  const CRICKET_END=Date.parse('2026-11-02T00:00:00Z');
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dateKey=(now,offset)=>new Date(now+offset*86400000).toISOString().slice(0,10).replace(/-/g,'');
  const localDate=d=>new Intl.DateTimeFormat('en-AU',{timeZone:TZ,weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true}).format(new Date(d));
  const status=e=>e.competitions?.[0]?.status||e.status||{};
  const state=e=>status(e).type?.state||'pre';
  const teams=e=>{
    const c=e.competitions?.[0]?.competitors||[];
    return [c.find(t=>t.homeAway==='away')||c[1]||c[0],c.find(t=>t.homeAway==='home')||c[0]||c[1]];
  };
  const teamCard=(t,kind,pre)=>{
    const name=t?.team?.displayName||t?.team?.name||'Team';
    const abbr=t?.team?.abbreviation||name.slice(0,3).toUpperCase();
    const logo=t?.team?.logo;
    const img=typeof logo==='string'&&/^https:\/\/a\.espncdn\.com\//.test(logo)?'<img src="'+esc(logo)+'" alt="" width="74" height="62">':'';
    return '<div class="live-game-team"><div class="live-game-logo"><span aria-hidden="true">'+esc(abbr)+'</span>'+img+'</div><div class="live-game-team-name">'+esc(name)+'</div><strong class="live-game-score'+(kind==='cricket'?' cricket-score':'')+'">'+(pre?'–':esc(t?.score||'–'))+'</strong></div>';
  };
  const link=(href,label)=>'<a class="live-game-link" href="'+esc(href)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' ↗</a>';
  async function json(url){
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),9000);
    try{const response=await fetch(url,{cache:'no-store',signal:controller.signal});if(!response.ok)throw Error('Score feed unavailable');const data=await response.json();if(!Array.isArray(data.events))throw Error('Invalid score feed');return data.events;}
    finally{clearTimeout(timer);}
  }
  function pick(events,now,selected){
    const unique=[...new Map(events.map(e=>[e.id,e])).values()];
    const live=unique.filter(e=>state(e)==='in');
    const current=live.find(e=>e.id===selected);
    const upcoming=unique.filter(e=>state(e)==='pre'&&Date.parse(e.date)>now-3600000).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date));
    const recent=unique.filter(e=>state(e)==='post'&&Date.parse(e.date)>now-36*3600000).sort((a,b)=>Date.parse(b.date)-Date.parse(a.date));
    return current||live.sort((a,b)=>Date.parse(a.date)-Date.parse(b.date))[0]||upcoming[0]||recent[0]||null;
  }
  function finishImages(target){target.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>img.remove(),{once:true}));}
  function markStale(target,label){
    const article=target.querySelector('[data-sport-state]');
    if(article?.dataset.sportState==='in')article.dataset.sportState='stale-live';
    const badge=target.querySelector('.live-game-badge');
    if(badge){badge.classList.remove('is-live');badge.classList.add('is-stale');badge.textContent=label+' · UPDATE DELAYED';}
  }
  let eplBusy=false,eplLast=null,eplSelected=null,futureAt=0,future=[];
  async function updateEpl(){
    if(eplBusy)return;eplBusy=true;
    try{
      const now=Date.now();
      const near=await Promise.allSettled([-1,0,1].map(n=>json(ESPN+'soccer/eng.1/scoreboard?dates='+dateKey(now,n))));
      const fresh=near.filter(r=>r.status==='fulfilled').flatMap(r=>r.value);
      if(!futureAt||now-futureAt>10*60000){
        const more=await Promise.allSettled([2,3,4,5,6,7].map(n=>json(ESPN+'soccer/eng.1/scoreboard?dates='+dateKey(now,n))));
        if(more.some(r=>r.status==='fulfilled')){future=more.filter(r=>r.status==='fulfilled').flatMap(r=>r.value);futureAt=now;}
      }
      if(!near.some(r=>r.status==='fulfilled'))throw Error('EPL feed unavailable');
      const game=pick([...future,...fresh],now,eplSelected);
      if(!game){eplTarget.innerHTML='<div class="live-game-badge">EPL · SCHEDULE</div><p class="live-game-empty">No match in the current schedule window.</p>'+link('https://www.premierleague.com/en/matches','Premier League fixtures');return;}
      eplLast=game;eplSelected=game.id;
      const [away,home]=teams(game),s=state(game),competition=game.competitions?.[0]||{};
      const detail=s==='pre'?localDate(game.date)+' Sydney':status(game).type?.shortDetail||status(game).type?.detail||'Latest score';
      const gameUrl=(game.links||[]).map(l=>l.href).find(u=>/^https:\/\/www\.espn\.com\//.test(u))||'https://www.premierleague.com/en/matches';
      eplTarget.innerHTML='<article data-game-id="'+esc(game.id)+'" data-sport-state="'+s+'" data-sport-start="'+Date.parse(game.date)+'"><div class="live-game-badge '+(s==='in'?'is-live':'')+'">EPL · '+(s==='in'?'● LIVE':s==='post'?'FINAL':'COMING UP')+'</div><div class="live-game-teams">'+teamCard(away,'epl',s==='pre')+'<span class="live-game-versus" aria-hidden="true">'+(s==='pre'?'v':'–')+'</span>'+teamCard(home,'epl',s==='pre')+'</div><div class="live-game-clock">'+esc(detail)+'</div><p class="live-game-venue">'+esc(competition.venue?.fullName||'Premier League')+'</p>'+link(gameUrl,s==='in'?'Live game centre':s==='post'?'Final score & match details':'Match preview')+'</article>';
      finishImages(eplTarget);
    }catch(error){
      if(eplLast){markStale(eplTarget,'EPL');if(!eplTarget.querySelector('.live-game-stale'))eplTarget.insertAdjacentHTML('beforeend','<p class="live-game-stale">EPL update delayed</p>');}
      else eplTarget.innerHTML='<div class="live-game-badge">EPL · UPDATE DELAYED</div><p class="live-game-empty">Scores are temporarily unavailable.</p>'+link('https://www.premierleague.com/en/matches','Premier League fixtures');
    }finally{eplBusy=false;}
  }
  let cricketBusy=false,cricketLast=null;
  async function updateCricket(){
    if(cricketBusy)return;cricketBusy=true;
    try{
      if(Date.now()>CRICKET_END){
        cricketTarget.innerHTML='<div class="live-game-badge">AUSTRALIA CRICKET · NEXT MATCH</div><p class="live-game-empty">The Cape Town Test has finished. Check Cricket Australia for the next fixture.</p>'+link(CRICKET_SCHEDULE,'Australian cricket fixtures');
        return;
      }
      const events=await json(ESPN+'cricket/24203/scoreboard?dates=20261027');
      const game=events.find(e=>String(e.id)==='1525661');
      if(!game)throw Error('Match missing');
      cricketLast=game;
      const [away,home]=teams(game),s=state(game),competition=game.competitions?.[0]||{};
      const pause=status(game).type?.description||'';
      const paused=s==='in'&&/stumps|lunch|tea|break|rain|delay|suspend|interruption/i.test(pause);
      const detail=s==='pre'?localDate(game.date)+' Sydney':paused?pause+(status(game).session?' · '+status(game).session:''):status(game).summary||status(game).type?.shortDetail||status(game).type?.detail||'Latest score';
      cricketTarget.innerHTML='<article data-game-id="'+esc(game.id)+'" data-sport-state="'+(paused?'paused':s)+'" data-sport-start="'+Date.parse(game.date)+'"><div class="live-game-badge '+(s==='in'&&!paused?'is-live':'')+'">CRICKET · 3RD TEST · '+(s==='in'?(paused?esc(pause.toUpperCase()):'● LIVE'):s==='post'?'FINAL':'COMING UP')+'</div><div class="live-game-teams">'+teamCard(away,'cricket',s==='pre')+'<span class="live-game-versus" aria-hidden="true">'+(s==='pre'?'v':'–')+'</span>'+teamCard(home,'cricket',s==='pre')+'</div><div class="live-game-clock">'+esc(detail)+'</div><p class="live-game-venue">'+esc(competition.venue?.fullName||'Newlands, Cape Town')+'</p>'+link(CRICKET_MATCH,s==='in'?'Live scorecard & commentary':s==='post'?'Result & scorecard':'Match centre')+'</article>';
      finishImages(cricketTarget);
    }catch(error){
      if(cricketLast){markStale(cricketTarget,'CRICKET');if(!cricketTarget.querySelector('.live-game-stale'))cricketTarget.insertAdjacentHTML('beforeend','<p class="live-game-stale">Cricket update delayed</p>');}
      else cricketTarget.innerHTML='<div class="live-game-badge">AUSTRALIA CRICKET · UPDATE DELAYED</div><p class="live-game-empty">Scores are temporarily unavailable.</p>'+link(CRICKET_MATCH,'Open the match centre');
    }finally{cricketBusy=false;}
  }
  function update(){updateEpl();updateCricket();}
  refresh?.addEventListener('click',update);
  window.addEventListener('online',update);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)update();});
  update();window.setInterval(()=>{if(!document.hidden)update();},30000);
})();
