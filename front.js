(()=>{
  const img=document.querySelector('[data-artist-image]');
  if(!img)return;
  const artist=(document.querySelector('[data-daily-artist]')?.textContent||'').trim();
  const track=(document.querySelector('[data-daily-track]')?.textContent||'').trim();
  img.alt=track?`${artist} — ${track}`:artist;

  const frame=document.querySelector('[data-video-frame] iframe');
  if(frame){
    const m=frame.src.match(/embed\/([^?]+)/);
    if(m){img.src=`https://img.youtube.com/vi/${m[1]}/hqdefault.jpg`;return;}
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