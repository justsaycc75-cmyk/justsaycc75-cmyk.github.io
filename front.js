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
    {name:'Netflix',domain:'netflix.com'},
    {name:'Stan',domain:'stan.com.au'},
    {name:'HBO Max',domain:'max.com'},
    {name:'Prime Video',domain:'primevideo.com'},
    {name:'Apple TV+',domain:'tv.apple.com'},
    {name:'Foxtel',domain:'foxtel.com.au'}
  ];
  [...montage.querySelectorAll('span')].forEach((tile,i)=>{
    const brand=brands[i];
    if(!brand)return;
    tile.textContent='';
    const logo=document.createElement('img');
    logo.src=`https://logo.clearbit.com/${brand.domain}?size=240`;
    logo.alt=brand.name;
    logo.loading='lazy';
    logo.style.maxWidth='72%';
    logo.style.maxHeight='72px';
    logo.style.width='auto';
    logo.style.height='auto';
    logo.style.objectFit='contain';
    logo.style.display='block';
    logo.style.filter='drop-shadow(0 2px 4px rgba(0,0,0,.25))';
    const fallback=document.createElement('strong');
    fallback.textContent=brand.name;
    fallback.style.display='none';
    fallback.style.fontSize='1.05rem';
    fallback.style.letterSpacing='.05em';
    logo.addEventListener('error',()=>{logo.style.display='none';fallback.style.display='block';});
    tile.append(logo,fallback);
  });
})();