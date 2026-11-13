(()=>{
  'use strict';
  const panel=document.querySelector('.front-live-today');
  if(!panel)return;
  const eplTarget=panel.querySelector('#live-epl-game');
  const cricketTarget=panel.querySelector('#live-cricket-game');
  const refresh=panel.querySelector('[data-game-refresh]');
  if(!eplTarget)return;
  const TZ='Australia/Sydney';
  const ESPN='https://site.api.espn.com/apis/site/v2/sports/';
  const CRICKET_API='https://apiv2.cricket.com.au/web/';
  const CRICKET_SCHEDULE='https://www.cricket.com.au/matches';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const dateKey=(now,offset)=>new Date(now+offset*86400000).toISOString().slice(0,10).replace(/-/g,'');
  const localDate=d=>new Intl.DateTimeFormat('en-AU',{timeZone:TZ,weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true}).format(new Date(d));
  const dayKey=d=>new Intl.DateTimeFormat('en-AU',{timeZone:TZ,year:'numeric',month:'2-digit',day:'2-digit'}).format(d);
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
    const unique=[...new Map(events.map(e=>[e.id,e])).values()].filter(e=>['pre','in'].includes(state(e)));
    const live=unique.filter(e=>state(e)==='in');
    const current=live.find(e=>e.id===selected);
    const upcoming=unique.filter(e=>state(e)==='pre'&&Date.parse(e.date)>now-3600000).sort((a,b)=>Date.parse(a.date)-Date.parse(b.date));
    return current||live.sort((a,b)=>Date.parse(a.date)-Date.parse(b.date))[0]||upcoming[0]||null;
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
      eplTarget.hidden=false;
      if(!game){eplTarget.innerHTML='<div class="live-game-badge">EPL · SCHEDULE</div><p class="live-game-empty">No match in the current schedule window.</p>'+link('https://www.premierleague.com/en/matches','Premier League fixtures');return;}
      eplTarget.hidden=false;eplLast=game;eplSelected=game.id;
      const [away,home]=teams(game),s=state(game),competition=game.competitions?.[0]||{};
      const detail=s==='pre'?localDate(game.date)+' Sydney':status(game).type?.shortDetail||status(game).type?.detail||'Latest score';
      const gameUrl=(game.links||[]).map(l=>l.href).find(u=>/^https:\/\/www\.espn\.com\//.test(u))||'https://www.premierleague.com/en/matches';
      eplTarget.innerHTML='<article data-game-id="'+esc(game.id)+'" data-sport-state="'+s+'" data-sport-start="'+Date.parse(game.date)+'"><div class="live-game-badge '+(s==='in'?'is-live':'')+'">EPL · '+(s==='in'?'● LIVE':s==='post'?'FINAL':'COMING UP')+'</div><div class="live-game-teams">'+teamCard(away,'epl',s==='pre')+'<span class="live-game-versus" aria-hidden="true">'+(s==='pre'?'v':'–')+'</span>'+teamCard(home,'epl',s==='pre')+'</div><div class="live-game-clock">'+esc(detail)+'</div><p class="live-game-venue">'+esc(competition.venue?.fullName||'Premier League')+'</p>'+link(gameUrl,s==='in'?'Live game centre':s==='post'?'Final score & match details':'Match preview')+'</article>';
      finishImages(eplTarget);
    }catch(error){
      if(eplLast&&['pre','in'].includes(state(eplLast))&&(state(eplLast)==='in'||Date.parse(eplLast.date)>Date.now())){eplTarget.hidden=false;markStale(eplTarget,'EPL');if(!eplTarget.querySelector('.live-game-stale'))eplTarget.insertAdjacentHTML('beforeend','<p class="live-game-stale">EPL update delayed</p>');}
      else {eplTarget.hidden=false;eplTarget.innerHTML='<div class="live-game-badge">EPL · UPDATE DELAYED</div><p class="live-game-empty">Scores are temporarily unavailable.</p>'+link('https://www.premierleague.com/en/matches','Premier League fixtures');}
    }finally{eplBusy=false;}
  }
  let cricketBusy=false,cricketLast=null;
  const australianMen=f=>f&&!f.isWomensMatch&&!f.competition?.isWomensCompetition&&[f.homeTeamId,f.awayTeamId,f.homeTeam?.id,f.awayTeam?.id].some(id=>Number(id)===23);
  const cricketEligible=(f,now)=>australianMen(f)&&!f.isCompleted&&(f.isLive||f.isInProgress||dayKey(new Date(f.startDateTime))===dayKey(new Date(now)));
  async function cricketJson(path){
    const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),12000);
    try{
      const response=await fetch(CRICKET_API+path,{cache:'no-store',signal:controller.signal});
      if(!response.ok)throw Error('Cricket feed unavailable');
      const data=await response.json();
      if(data.responseError)throw Error('Cricket feed error');
      return data;
    }finally{clearTimeout(timer);}
  }
  const cricketUrl=f=>'https://www.cricket.com.au/matches/CA:'+encodeURIComponent(f.id);
  function cricketScore(f,t){
    const innings=(f.innings||[]).filter(i=>Number(i.battingTeamId)===Number(t.id));
    return innings.map(i=>(i.numberOfWicketsFallen===10?'':i.numberOfWicketsFallen+'/')+i.runsScored+(i.isDeclared?'d':'')+' ('+i.oversBowled+')').join(' & ')||'–';
  }
  async function updateCricket(){
    if(!cricketTarget||cricketBusy)return;cricketBusy=true;
    try{
      const now=Date.now(),year=new Date(now).getUTCFullYear();
      const data=await cricketJson('fixtures/yearfilter?teamId=23&isWomenMatch=false&year='+year+'&isCompleted=false&limit=25&isInningInclude=true&jsconfig=eccn%3Atrue&format=json');
      if(!Array.isArray(data.fixtures))throw Error('Invalid cricket fixtures');
      const fixtures=data.fixtures.filter(f=>cricketEligible(f,now)).sort((a,b)=>Number(!!(b.isLive||b.isInProgress))-Number(!!(a.isLive||a.isInProgress))||Date.parse(a.startDateTime)-Date.parse(b.startDateTime));
      if(!fixtures.length){cricketTarget.hidden=true;cricketTarget.innerHTML='';cricketLast=null;return;}
      const fixture=fixtures[0];
      const detail=await cricketJson('views/scorecard?fixtureId='+encodeURIComponent(fixture.id)+'&jsconfig=eccn%3Atrue&format=json');
      const f=detail.fixture;
      if(!f||String(f.id)!==String(fixture.id))throw Error('Invalid cricket scorecard');
      if(!cricketEligible(f,now)){cricketTarget.hidden=true;cricketTarget.innerHTML='';cricketLast=null;return;}
      cricketLast=f;cricketTarget.hidden=false;
      const pause=/stumps|lunch|tea|break|rain|delay|suspend|interruption/i.test(f.gameStatus||'');
      const live=!!f.isLive&&!pause,active=f.isLive||f.isInProgress;
      const state=live?'in':active?'paused':'pre';
      const team=t=>({team:{displayName:t.name,abbreviation:t.shortName},score:cricketScore(f,t)});
      const info=active?(f.resultText||f.gameStatus||'Match in progress'):localDate(f.startDateTime)+' Sydney';
      cricketTarget.innerHTML='<article data-game-id="'+esc(f.id)+'" data-sport-state="'+state+'" data-sport-start="'+Date.parse(f.startDateTime)+'"><div class="live-game-badge '+(live?'is-live':'')+'">CRICKET · '+esc(f.name)+' · '+(live?'● LIVE':active?esc(f.gameStatus||'PAUSED'):'TODAY')+'</div><div class="live-game-teams">'+teamCard(team(f.awayTeam),'cricket',!active)+'<span class="live-game-versus" aria-hidden="true">v</span>'+teamCard(team(f.homeTeam),'cricket',!active)+'</div><div class="live-game-clock">'+esc(info)+'</div><p class="live-game-venue">'+esc(f.venue?.name||'')+'</p>'+link(cricketUrl(f),'Official scorecard & commentary')+'<p class="live-game-empty">Cricket Australia · checked '+esc(new Intl.DateTimeFormat('en-AU',{timeZone:TZ,hour:'numeric',minute:'2-digit',second:'2-digit',hour12:true}).format(now))+' Sydney · refreshes every 30 seconds</p></article>';
    }catch(error){
      if(cricketLast&&cricketEligible(cricketLast,Date.now())){cricketTarget.hidden=false;markStale(cricketTarget,'CRICKET');if(!cricketTarget.querySelector('.live-game-stale'))cricketTarget.insertAdjacentHTML('beforeend','<p class="live-game-stale">Cricket update delayed. Displayed scores are the last successful check, not confirmed current.</p>');}
      else {cricketTarget.hidden=false;cricketTarget.innerHTML='<div class="live-game-badge">AUSTRALIA CRICKET · UPDATE UNAVAILABLE</div><p class="live-game-empty">Current match status could not be checked.</p>'+link(CRICKET_SCHEDULE,'Official cricket fixtures & scores');}
    }finally{cricketBusy=false;}
  }
  function update(){updateEpl();updateCricket();}
  refresh?.addEventListener('click',update);
  window.addEventListener('online',update);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)update();});
  update();window.setInterval(()=>{if(!document.hidden)update();},30000);
})();
