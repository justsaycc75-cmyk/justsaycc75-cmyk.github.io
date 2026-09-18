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
      <div class="sport-card-copy">
        <small>SPORT</small>
        <b>ROOSTERS<br>&amp; NFL</b>
      </div>
      <div class="rail-team-logos" aria-label="Sydney Roosters, New York Giants, Seattle Seahawks and Green Bay Packers">
        <span class="team-logo-tile"><img src="https://cdn.freebiesupply.com/logos/large/2x/sydney-roosters-1-logo-png-transparent.png" alt="Sydney Roosters"></span>
        <span class="team-logo-tile"><img src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/NYG" alt="New York Giants"></span>
        <span class="team-logo-tile"><img src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/SEA" alt="Seattle Seahawks"></span>
        <span class="team-logo-tile"><img src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/GB" alt="Green Bay Packers"></span>
      </div>
      <em>Teams + upcoming games</em>
    </a>
    <a href="racing.html" class="front-photo-card image-only-card"><img src="Punt.png" alt="Saturday on the Punt horse racing"></a>
    <a href="radio.html" class="front-photo-card image-only-card"><img src="Icom.png" alt="Icom IC-705 shortwave radio"></a>
    <a href="markets.html" class="front-photo-card rail-graphic rail-markets"><b>▲ ASX&nbsp;&nbsp;▲ S&amp;P<br>▼ FX&nbsp;&nbsp;▲ GOLD</b><span>Markets</span><em>Global dashboard</em></a>`;

  if(!document.getElementById('rail-team-logo-styles')){
    const style=document.createElement('style');
    style.id='rail-team-logo-styles';
    style.textContent=`
      .rail-sport-teams{
        min-height:178px;
        padding:16px!important;
        background:
          radial-gradient(circle at 85% 15%,rgba(255,255,255,.08),transparent 28%),
          linear-gradient(145deg,#0d3920 0%,#102919 52%,#08150e 100%)!important;
        border-color:#31513a!important;
      }
      .rail-sport-teams:after{display:none!important}
      .sport-card-copy{position:relative;z-index:2}
      .sport-card-copy small{display:block;color:#9ee65b;font-size:.58rem;font-weight:900;letter-spacing:.2em;margin-bottom:5px}
      .rail-sport-teams b{display:block!important;font-size:1.12rem!important;line-height:.98!important;letter-spacing:.025em!important;max-width:none!important;color:#fff}
      .rail-team-logos{position:absolute;z-index:2;left:14px;right:14px;bottom:38px;display:grid;grid-template-columns:repeat(4,1fr);gap:7px}
      .team-logo-tile{position:static!important;display:flex!important;align-items:center;justify-content:center;height:46px;background:rgba(255,255,255,.95)!important;border:1px solid rgba(255,255,255,.35);border-radius:12px!important;box-shadow:0 5px 14px rgba(0,0,0,.32);overflow:hidden}
      .team-logo-tile img{width:38px!important;height:38px!important;object-fit:contain!important;padding:3px!important;background:transparent!important;border:0!important;border-radius:0!important;filter:none!important;transform:none!important;box-shadow:none!important}
      .rail-sport-teams em{left:16px!important;bottom:12px!important;color:#d7e2da!important;font-size:.69rem!important}
      .rail-sport-teams:hover{transform:translateY(-2px);border-color:var(--lime)!important;box-shadow:0 14px 28px rgba(0,0,0,.28)}
      .rail-sport-teams:hover .team-logo-tile{box-shadow:0 7px 18px rgba(0,0,0,.38)}

      .front-photo-card.image-only-card{height:170px;padding:0!important;background:#07100b}
      .front-photo-card.image-only-card:after{display:none!important}
      .front-photo-card.image-only-card img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;display:block}
      .front-photo-card.image-only-card[href="radio.html"] img{object-fit:contain!important;background:#07100b;padding:4px!important}
      .front-photo-card.image-only-card:hover img{transform:scale(1.025);filter:brightness(1.04)}
      @media(max-width:700px){
        .rail-team-logos{left:12px;right:12px;bottom:36px;grid-template-columns:repeat(4,1fr);gap:6px}
        .team-logo-tile{height:44px}
        .team-logo-tile img{width:36px!important;height:36px!important}
        .front-photo-card.image-only-card{height:150px}
      }
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