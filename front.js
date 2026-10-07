(()=>{
  const css=document.createElement('link');
  css.rel='stylesheet';
  css.href='hero-polish.css?v=20260924-audit';
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
  // The shared rotation script owns the current song and its image fallback.
  const visual=document.querySelector('.artist-visual');
  if(visual)visual.style.display='none';
})();

(()=>{
  const montage=document.querySelector('.stream-montage');
  if(!montage)return;
  const brands=[
    {name:'Netflix',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Netflix_2015_logo.svg'},
    {name:'Stan',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Stan_logo.svg'},
    {name:'HBO Max',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Max_logo.svg'},
    {name:'Prime Video',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Amazon_Prime_Video_logo.svg'},
    {name:'Apple TV+',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Apple_TV_Plus_Logo.svg'},
    {name:'Foxtel',logo:'https://commons.wikimedia.org/wiki/Special:FilePath/Foxtel_logo_2020.svg'}
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

    <a href="https://news.google.com/home?hl=en-AU&gl=AU&ceid=AU:en" class="front-photo-card image-only-card news-rail-card" aria-label="Open latest world news" target="_blank" rel="noopener">
      <img src="News.png?v=20260921" alt="World news and latest headlines">
    </a>

    <a href="markets.html" class="front-photo-card rail-markets-pro" aria-label="Open Global Markets dashboard">
      <div class="market-mini-head"><small>MARKETS</small><b>Global pulse</b></div>
      <div class="market-mini-gauges">
        <i><u></u><span>ASX</span></i>
        <i><u></u><span>S&amp;P</span></i>
        <i><u></u><span>FX</span></i>
        <i><u></u><span>GOLD</span></i>
      </div>
      <em>Open live dashboard →</em>
    </a>

    <a href="radio.html" class="front-photo-card image-only-card"><img src="Icom.png" alt="Icom IC-705 shortwave radio"></a>

    <a href="https://osirisai.live/" class="front-photo-card osiris-rail-card" aria-label="Open OSIRIS Global Intelligence Platform" target="_blank" rel="noopener">
      <div class="osiris-grid" aria-hidden="true"></div>
      <div class="osiris-scan" aria-hidden="true"></div>
      <div class="osiris-card-copy">
        <small>LIVE OSINT</small>
        <b>OSIRIS</b>
        <strong>GLOBAL INTELLIGENCE</strong>
        <span>Flights · ships · satellites · CCTV · hazards</span>
        <em>Open live platform →</em>
      </div>
    </a>

    <a href="sport-current.html" class="front-photo-card image-only-card sport-image-card" aria-label="Sport Central — NRL, NFL and EPL">
      <img src="Sport.png" alt="Sport Central — NRL, NFL and EPL">
    </a>

    <a href="journeys.html" class="front-photo-card"><img src="assets/img/crown_sunset.webp" alt="Journeys and cruises"><span>Journeys</span><em>Cruises + side trips</em></a>

    <a href="hunter.html" class="front-photo-card"><img src="assets/img/hunter1.webp" alt="Hunter Valley"><span>Hunter Valley</span><em>Cellar doors + favourites</em></a>

`;

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

      .front-photo-card.image-only-card{height:170px;padding:0!important;background:#07100b}.front-photo-card.sport-image-card{height:195px!important;background:#07100b!important;border-color:#31513a!important}.front-photo-card.sport-image-card img{object-fit:contain!important;background:#07100b!important;padding:0!important}
      .front-photo-card.image-only-card:after{display:none!important}
      .front-photo-card.image-only-card img{width:100%!important;height:100%!important;object-fit:cover!important;object-position:center!important;display:block}
      .front-photo-card.image-only-card[href="radio.html"] img{object-fit:contain!important;background:#07100b;padding:4px!important}
      .front-photo-card.news-rail-card{height:170px!important;padding:0!important;overflow:hidden;background:#07101c!important;border-color:#234666!important}
      .front-photo-card.news-rail-card:after{display:none!important}
      .front-photo-card.news-rail-card img{width:100%!important;height:100%!important;object-fit:contain!important;object-position:center!important;display:block;background:#07101c}
      .front-photo-card.news-rail-card:hover{border-color:#6cbfff!important;transform:translateY(-2px);box-shadow:0 14px 28px rgba(0,0,0,.28)}
      .front-photo-card.osiris-rail-card{
        height:170px!important;
        padding:0!important;
        overflow:hidden;
        position:relative;
        display:block;
        text-decoration:none;
        background:
          radial-gradient(circle at 72% 40%,rgba(44,255,174,.18),transparent 34%),
          radial-gradient(circle at 28% 64%,rgba(0,159,255,.15),transparent 30%),
          linear-gradient(145deg,#020909 0%,#061313 52%,#020707 100%)!important;
        border-color:#244a43!important;
      }
      .front-photo-card.osiris-rail-card:after{display:none!important}
      .osiris-grid{
        position:absolute;inset:0;
        background-image:
          linear-gradient(rgba(84,255,203,.055) 1px,transparent 1px),
          linear-gradient(90deg,rgba(84,255,203,.055) 1px,transparent 1px);
        background-size:18px 18px;
        mask-image:linear-gradient(to bottom,rgba(0,0,0,.95),transparent);
      }
      .osiris-grid:before,.osiris-grid:after{
        content:"";position:absolute;left:73%;top:43%;border:1px solid rgba(72,255,188,.38);border-radius:50%;transform:translate(-50%,-50%)
      }
      .osiris-grid:before{width:88px;height:88px}
      .osiris-grid:after{width:48px;height:48px}
      .osiris-scan{
        position:absolute;left:73%;top:43%;width:76px;height:1px;
        transform-origin:left center;transform:rotate(-18deg);
        background:linear-gradient(90deg,#72ffd0,transparent);
        box-shadow:0 0 9px rgba(114,255,208,.75)
      }
      .osiris-card-copy{position:absolute;inset:0;padding:15px;z-index:2;display:flex;flex-direction:column;align-items:flex-start}
      .osiris-card-copy small{color:#72ffd0;font-size:.55rem;font-weight:900;letter-spacing:.2em}
      .osiris-card-copy b{display:block;margin-top:7px;color:#fff;font-size:1.48rem;line-height:.95;letter-spacing:.18em;text-shadow:0 0 16px rgba(114,255,208,.25)}
      .osiris-card-copy strong{display:block;margin-top:5px;color:#b8c9c5;font-size:.60rem;letter-spacing:.11em}
      .osiris-card-copy span{position:static!important;margin-top:14px!important;background:none!important;border:0!important;padding:0!important;color:#d6e5e1!important;font-size:.62rem!important;font-weight:700!important;max-width:145px}
      .osiris-card-copy em{position:absolute!important;left:15px!important;bottom:12px!important;color:#72ffd0!important;font-size:.67rem!important;font-weight:900!important}
      .front-photo-card.osiris-rail-card:hover{border-color:#72ffd0!important;transform:translateY(-2px);box-shadow:0 14px 28px rgba(0,0,0,.32),0 0 22px rgba(65,255,191,.08)}
      .front-photo-card.osiris-rail-card:hover .osiris-scan{box-shadow:0 0 15px rgba(114,255,208,.95)}

      .front-photo-card.image-only-card:hover img{transform:scale(1.025);filter:brightness(1.04)}
      .rail-markets-pro{
        height:178px!important;
        padding:14px!important;
        display:block;
        position:relative;
        overflow:hidden;
        text-decoration:none;
        background:
          radial-gradient(circle at 82% 22%,rgba(170,255,34,.16),transparent 28%),
          linear-gradient(145deg,#07150d,#0b2414 62%,#06100a)!important;
        border-color:#294334!important;
      }
      .rail-markets-pro:before{
        content:"";
        position:absolute;inset:0;
        background:linear-gradient(90deg,transparent 0 46%,rgba(170,255,34,.035) 46% 47%,transparent 47% 100%);
        pointer-events:none
      }
      .market-mini-head{position:relative;z-index:2}
      .market-mini-head small{display:block;color:#aaff22;font-size:.56rem;font-weight:900;letter-spacing:.18em}
      .market-mini-head b{display:block;margin-top:2px;color:#fff;font-size:1rem;letter-spacing:.02em}
      .market-mini-gauges{position:relative;z-index:2;display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin-top:13px}
      .market-mini-gauges i{display:flex;flex-direction:column;align-items:center;gap:4px;font-style:normal}
      .market-mini-gauges u{
        width:38px;height:20px;
        display:block;
        border:4px solid #23352a;
        border-bottom:0;
        border-radius:38px 38px 0 0;
        position:relative;
        text-decoration:none;
        box-shadow:inset 0 0 0 1px rgba(255,255,255,.02)
      }
      .market-mini-gauges u:before{
        content:"";
        position:absolute;
        left:-4px;top:-4px;
        width:24px;height:20px;
        border:4px solid #aaff22;
        border-right-color:transparent;
        border-bottom:0;
        border-radius:38px 38px 0 0;
        transform:rotate(-3deg);
        filter:drop-shadow(0 0 5px rgba(170,255,34,.28))
      }
      .market-mini-gauges i:nth-child(3) u:before{width:15px;border-color:#ff8a24 transparent transparent #ff8a24}
      .market-mini-gauges span{position:static!important;background:none!important;border:0!important;padding:0!important;color:#dbe5dd!important;font-size:.55rem!important;font-weight:900!important}
      .rail-markets-pro em{position:absolute!important;z-index:2;left:14px!important;bottom:11px!important;color:#b9c6bd!important;font-size:.66rem!important}
      .rail-markets-pro:hover{transform:translateY(-2px);border-color:#aaff22!important;box-shadow:0 14px 28px rgba(0,0,0,.28)}
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


(()=> {
  const picks={syd:null,nz:null};
  document.querySelectorAll('[data-nrl-pick]').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const group=btn.dataset.nrlPick;
      picks[group]=btn.dataset.team;
      document.querySelectorAll(`[data-nrl-pick="${group}"]`).forEach(b=>b.classList.toggle('active',b===btn));
      const out=document.querySelector(`[data-nrl-output="${group}"]`);
      if(out)out.textContent=btn.dataset.team;
    });
  });
})();

/* Front-page travel photo, webcam, and random site picker */
(()=>{
  const frame=document.querySelector('.hero-photo-feature');
  if(frame){
    const slides=[
      {src:"assets/img/crown_sunset.webp",alt:"Sunset from the ship",title:"Sunset at sea",href:"journeys.html",link:"Explore our journeys →",position:"center 48%"},
      {src:"assets/img/sea-days-03.webp",alt:"A live band performing on board",title:"An evening show at sea",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-01.webp",alt:"Waterfall on a Fiordland cliff",title:"Waterfalls in Fiordland",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/hunter1.webp",alt:"Hunter Valley scenery",title:"Hunter Valley afternoons",href:"hunter.html",link:"Explore the Hunter →",position:"center 48%"},
      {src:"assets/img/sea-days-05.webp",alt:"Sunset seen from a cruise balcony",title:"Sunset from the balcony",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-02.webp",alt:"Cloudy mountains across Milford Sound",title:"Into the sound",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/milford-sound-03.webp",alt:"Mountain peak from the cruise ship",title:"Mountains from the deck",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/moreton.webp",alt:"Moreton Island cruise memory",title:"Moreton Island memories",href:"journeys.html#moreton",link:"Explore our journeys →",position:"center 50%"},
      {src:"assets/img/sea-days-01.webp",alt:"Chocolate dessert served at dinner",title:"Dessert after dinner",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-04.webp",alt:"Clouds low over the water",title:"Weather over the fjord",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/milford-sound-05.webp",alt:"Cruise ship pool deck with mountains beyond",title:"A view from the pool deck",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/dunedin.webp",alt:"Dunedin harbour landscape",title:"A day in Dunedin",href:"journeys.html",link:"Explore our journeys →",position:"center 48%"},
      {src:"assets/img/sea-days-06.webp",alt:"Orange sun setting over the water",title:"Sun on the horizon",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-06.webp",alt:"Green islands in Milford Sound",title:"Islands in the sound",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/milford-sound-07.webp",alt:"Waterfalls beyond the ship",title:"Waterfalls from the ship",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/hunter2.webp",alt:"Hunter Valley travel photo",title:"Another Hunter Valley stop",href:"hunter.html",link:"Explore the Hunter →",position:"center 50%"},
      {src:"assets/img/sea-days-08.webp",alt:"Cruise ship seen from the coast",title:"A ship off the coast",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-08.webp",alt:"Misty Fiordland mountains and snow",title:"Clouds and snow",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/milford-sound-09.webp",alt:"Walking along the cruise ship side deck",title:"Walking the side deck",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/mystery_ship.webp",alt:"Cruise ship near Mystery Island",title:"A ship on the horizon",href:"journeys.html#mystery",link:"Explore our journeys →",position:"center 50%"},
      {src:"assets/img/sea-days-02.webp",alt:"Plated dinner at sea",title:"Dinner on board",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-10.webp",alt:"Steep hillside and landslide scar",title:"The steep hillsides",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/milford-sound-11.webp",alt:"Watching the fjord from the ship railing",title:"Watching from the rail",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/darling.webp",alt:"Darling Harbour travel memory",title:"A Sydney long weekend",href:"journeys.html#darling",link:"Explore our journeys →",position:"center 50%"},
      {src:"assets/img/sea-days-07.webp",alt:"Last light across open water",title:"Last light on the water",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-12.webp",alt:"Cruise ship upper deck in Milford Sound",title:"The upper deck view",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/nz.webp",alt:"Cliffs viewed from a New Zealand cruise ship",title:"Across the Tasman",href:"journeys.html#nz2023",link:"Explore our journeys →",position:"center 50%"},
      {src:"assets/img/sea-days-10.webp",alt:"Seafood buffet on board",title:"The seafood spread",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"},
      {src:"assets/img/milford-sound-13.webp",alt:"Distant waterfall in a green valley",title:"A waterfall in the distance",href:"journeys.html#milford-sound",link:"See the Milford Sound gallery →",position:"center 50%"},
      {src:"assets/img/sea-days-12.webp",alt:"Dessert buffet with fruit and cakes",title:"Desserts and fruit",href:"journeys.html#shipboard-moments",link:"See more sea-day photos →",position:"center 50%"}
    ];
    const img=frame.querySelector('[data-hero-photo]');
    const title=frame.querySelector('[data-hero-title]');
    const link=frame.querySelector('[data-hero-link]');
    let current=0,timer;
    const storageKey='retirement-hero-photo-index';
    const remember=()=>{try{sessionStorage.setItem(storageKey,String(current));}catch(_){/* Storage may be unavailable. */}};
    let initial=Math.floor(Date.now()/600000)%slides.length;
    try{const last=sessionStorage.getItem(storageKey);if(last!==null&&Number.isInteger(Number(last)))initial=(Number(last)+1)%slides.length;}catch(_){/* Use the time-based starting photo. */}
    const show=index=>{
      current=(index+slides.length)%slides.length;
      const slide=slides[current];
      img.src=slide.src;img.alt=slide.alt;img.style.objectPosition=slide.position;
      title.textContent=slide.title;link.href=slide.href;link.textContent=slide.link;
      remember();
      const upcoming=new Image();upcoming.src=slides[(current+1)%slides.length].src;
    };
    const start=()=>{
      if(timer||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
      timer=window.setInterval(()=>show(current+1),8000);
    };
    const stop=()=>{if(timer){window.clearInterval(timer);timer=undefined;}};
    frame.querySelector('[data-hero-prev]')?.addEventListener('click',()=>show(current-1));
    frame.querySelector('[data-hero-next]')?.addEventListener('click',()=>show(current+1));
    frame.addEventListener('focusin',stop);
    frame.addEventListener('focusout',event=>{if(!frame.contains(event.relatedTarget))start();});
    document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start();});
    show(initial);
    start();
  }
  const webcam=document.querySelector('[data-webcam]');
  const launch=webcam?.querySelector('.webcam-launch');
  launch?.addEventListener('click',()=>{
    const iframe=document.createElement('iframe');
    iframe.src='https://www.youtube.com/embed/5uZa3-RMFos?autoplay=1&mute=1&playsinline=1&rel=0';
    iframe.title='Live Sydney Harbour Web Cam';
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen=true;
    webcam.replaceChildren(iframe);
  });
  const surprise=document.querySelector('[data-surprise]');
  if(surprise){
    const links=[...document.querySelectorAll('.explore-section .explore-card[href]')]
      .filter(a=>/^https?:/.test(a.href));
    let previous='';
    surprise.addEventListener('click',()=>{
      if(!links.length)return;
      let candidates=links.filter(a=>a.href!==previous);
      if(!candidates.length)candidates=links;
      const pick=candidates[Math.floor(Math.random()*candidates.length)];
      previous=pick.href;
      surprise.href=pick.href;
      surprise.setAttribute('aria-label',`Surprise me: open ${pick.querySelector('strong')?.textContent||'a website'} in a new tab`);
    });
  }
})();
