(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='hero-polish.css';
  document.head.appendChild(css);
})();

(()=>{
  document.querySelectorAll('[data-scroll-to]').forEach(link=>{
    link.addEventListener('click',event=>{
      const id=link.getAttribute('data-scroll-to');
      const target=document.getElementById(id);
      if(!target)return;
      event.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
      if(history.replaceState)history.replaceState(null,'',`#${id}`);
    });
  });
})();

(()=>{
  const img=document.querySelector('[data-artist-image]');
  const visual=document.querySelector('.artist-visual');
  if(!img)return;
  const artist=(document.querySelector('[data-daily-artist]')?.textContent||'').trim();
  const track=(document.querySelector('[data-daily-track]')?.textContent||'').trim();
  img.alt=track?`${artist} — ${track}`:artist;

  if(artist==='Ed Kuepper'){
    const direct='https://www.youtube.com/watch?v=dGvy2IOmvp4';
    document.querySelectorAll('[data-youtube]').forEach(e=>e.href=direct);
    document.querySelectorAll('[data-daily-track]').forEach(e=>e.textContent="(When There's) This Party");
    const box=document.querySelector('[data-video-frame]');
    if(box)box.innerHTML='<iframe src="https://www.youtube.com/embed/dGvy2IOmvp4?rel=0" title="Ed Kuepper — (When There\'s) This Party" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    if(visual)visual.style.display='none';
    return;
  }

  if(artist==='Arcadia'){
    const direct='https://www.youtube.com/watch?v=hqRBqT0iZKo';
    document.querySelectorAll('[data-youtube]').forEach(e=>e.href=direct);
    img.src='https://i.ytimg.com/vi/hqRBqT0iZKo/maxresdefault.jpg';
    img.alt='Arcadia — El Diablo';
    const box=document.querySelector('[data-video-frame]');
    if(box)box.innerHTML='<iframe src="https://www.youtube.com/embed/hqRBqT0iZKo?rel=0" title="Arcadia — El Diablo" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    if(visual)visual.style.display='none';
    return;
  }

  const frame=document.querySelector('[data-video-frame] iframe');
  if(frame){
    const m=frame.src.match(/embed\/([^?]+)/);
    if(m){
      if(visual)visual.style.display='none';
      return;
    }
  }

  const wikiPages={
    'The Buoys':'The Buoys (band)',
    'Teen Jesus and the Jean Teasers':'Teen Jesus and the Jean Teasers',
    'The Brian Jonestown Massacre':'The Brian Jonestown Massacre',
    'V Spy V Spy':'Spy vs Spy (Australian band)',
    'Machine Gun Fellatio':'Machine Gun Fellatio',
    'Ed Kuepper':'Ed Kuepper',
    'Mental As Anything':'Mental As Anything',
    'POND':'Pond (Australian band)',
    'Models':'Models (band)',
    'Visage':'Visage (band)',
    'Talking Heads':'Talking Heads',
    'The Church':'The Church (band)',
    'Simple Minds':'Simple Minds',
    'RocKwiz':'RocKwiz',
    'Parquet Courts':'Parquet Courts',
    'Tony Joe White':'Tony Joe White',
    'King Stingray':'King Stingray',
    'Arcadia':'Arcadia (band)'
  };
  const page=wikiPages[artist]||artist;
  fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page)}`)
    .then(r=>r.ok?r.json():Promise.reject())
    .then(d=>{if(d.thumbnail&&d.thumbnail.source){img.src=d.thumbnail.source;}})
    .catch(()=>{});
})();

(()=>{
  const montage=document.querySelector('.stream-montage');
  if(!montage)return;
  const brands=[
    {name:'Netflix',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Netflix_2015_logo.svg'},
    {name:'Stan',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Stan_Logo_2016.svg'},
    {name:'HBO Max',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Max_logo.svg'},
    {name:'Prime Video',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Prime_Video_logo.svg'},
    {name:'Apple TV+',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Apple_TV_Plus_Logo.svg'},
    {name:'Foxtel',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Foxtel_logo.svg'}
  ];
  [...montage.querySelectorAll('span')].forEach((tile,i)=>{
    const brand=brands[i];
    if(!brand)return;
    tile.textContent='';
    tile.classList.add('stream-logo-cell');
    const logo=document.createElement('img');
    logo.src=brand.logo;
    logo.alt=brand.name;
    logo.loading='lazy';
    logo.className='stream-logo-img';
    const fallback=document.createElement('strong');
    fallback.textContent=brand.name;
    fallback.className='stream-logo-fallback';
    logo.addEventListener('error',()=>{logo.style.display='none';fallback.style.display='block';});
    tile.append(logo,fallback);
  });
})();

(()=>{
  const rail=document.querySelector('.front-photo-rail');
  if(!rail)return;
  rail.setAttribute('aria-label','Main section shortcuts');
  rail.innerHTML=`
    <a href="music.html" class="front-photo-card"><img src="assets/img/cassette.webp" alt="Music"><span>Music</span><em>Daily clip + archive</em></a>
    <a href="journeys.html" class="front-photo-card"><img src="assets/img/crown_sunset.webp" alt="Journeys and cruises"><span>Journeys</span><em>Cruises + side trips</em></a>
    <a href="hunter.html" class="front-photo-card"><img src="assets/img/hunter1.webp" alt="Hunter Valley"><span>Hunter Valley</span><em>Cellar doors + favourites</em></a>
    <a href="watching.html" class="front-photo-card rail-graphic rail-watch"><b>NETFLIX · STAN<br>HBO · PRIME</b><span>Watching</span><em>Current watch list</em></a>
    <a href="sport.html" class="front-photo-card rail-graphic rail-sport rail-sport-teams">
      <b>ROOSTERS<br>AND NFL</b>
      <div class="rail-team-logos" aria-hidden="true">
        <img src="https://img.logokit.com/roosters.com.au" alt="">
        <img src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYG" alt="">
        <img src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/SEA" alt="">
        <img src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/GB" alt="">
      </div>
      <span>Sport</span><em>Teams + upcoming games</em>
    </a>
    <a href="racing.html" class="front-photo-card"><img src="Punt.png" alt="Saturday on the Punt horse racing"><span>The Punt</span><em>Tips + last week</em></a>
    <a href="radio.html" class="front-photo-card"><img src="Icom.png" alt="Icom IC-705 shortwave radio"><span>Shortwave</span><em>Sydney listening</em></a>
    <a href="markets.html" class="front-photo-card rail-graphic rail-markets"><b>▲ ASX&nbsp;&nbsp;▲ S&amp;P<br>▼ FX&nbsp;&nbsp;▲ GOLD</b><span>Markets</span><em>Global dashboard</em></a>`;

  if(!document.getElementById('rail-team-logo-styles')){
    const style=document.createElement('style');
    style.id='rail-team-logo-styles';
    style.textContent=`
      .rail-sport-teams{min-height:150px;padding:14px 12px 12px!important}
      .rail-sport-teams b{font-size:.95rem!important;line-height:1.02!important;max-width:105px}
      .rail-team-logos{position:absolute;z-index:2;top:14px;right:10px;width:92px;display:grid;grid-template-columns:repeat(2,38px);gap:6px;justify-content:end}
      .rail-team-logos img{width:38px!important;height:38px!important;object-fit:contain!important;background:#fff;border:1px solid #ffffff33;border-radius:10px;padding:4px;filter:none!important;transform:none!important;box-shadow:0 4px 12px #0007}
      .rail-sport-teams span{bottom:28px!important}
      .rail-sport-teams em{bottom:9px!important}
      @media(max-width:700px){.rail-team-logos{width:96px;grid-template-columns:repeat(2,40px)}.rail-team-logos img{width:40px!important;height:40px!important}}
    `;
    document.head.appendChild(style);
  }
})();

(()=>{
  const directGames={
    roosters:'https://www.nrl.com/draw/nrl-premiership/2026/finals-week-2/roosters-v-sharks/',
    giants:'https://www.nfl.com/games/giants-at-rams-2026-reg-2',
    seahawks:'https://www.nfl.com/games/seahawks-at-cardinals-2026-reg-2',
    packers:'https://www.nfl.com/games/packers-at-jets-2026-reg-2'
  };
  Object.entries(directGames).forEach(([team,url])=>{
    const card=document.querySelector(`.team-photo-card.${team}`);
    if(card)card.href=url;
  });

  const rotatingLinks={
    'Sydney Roosters':directGames.roosters,
    'New York Giants':directGames.giants,
    'Seattle Seahawks':directGames.seahawks,
    'Green Bay Packers':directGames.packers
  };
  const fixtureLink=document.querySelector('[data-sport-link]');
  const teamEl=document.querySelector('[data-sport-team]');
  if(!fixtureLink||!teamEl)return;
  const syncLink=()=>{
    const team=teamEl.textContent.trim();
    if(rotatingLinks[team])fixtureLink.href=rotatingLinks[team];
  };
  syncLink();
  new MutationObserver(syncLink).observe(teamEl,{childList:true,subtree:true,characterData:true});
})();