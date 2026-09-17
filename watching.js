(()=>{
  const pageMap={
    'Dept. Q':'Dept. Q (TV series)',
    'True Detective':'True Detective',
    'Landman':'Landman (TV series)',
    'The Hunting Wives':'The Hunting Wives',
    'Dalliance':'Dalliance',
    'The End':'The End (Australian TV series)',
    'The Twelve':'The Twelve (Australian TV series)',
    'Black Mirror':'Black Mirror',
    'After Life':'After Life (TV series)',
    'Adolescence':'Adolescence (TV series)',
    'Dark Winds':'Dark Winds',
    'The Night Of':'The Night Of',
    'The Fall':'The Fall (TV series)',
    'Mr. Robot':'Mr. Robot',
    'Big Little Lies':'Big Little Lies (TV series)',
    'Line of Duty':'Line of Duty',
    'Unforgotten':'Unforgotten',
    'Blue Lights':'Blue Lights (2023 TV series)',
    'The Missing':'The Missing (British TV series)',
    'Breaking Bad':'Breaking Bad',
    'Sicario':'Sicario (2015 film)'
  };

  const shorten=(text,max=155)=>{
    if(!text)return 'Open for a quick description, cast and background.';
    const clean=text.replace(/\s+/g,' ').trim();
    if(clean.length<=max)return clean;
    const cut=clean.slice(0,max);
    return cut.slice(0,cut.lastIndexOf(' '))+'…';
  };

  document.querySelectorAll('[data-watch]').forEach(card=>{
    const title=card.dataset.watch;
    const page=pageMap[title]||title;
    const summaryUrl=`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(page)}`;
    card.href=`https://en.wikipedia.org/wiki/${encodeURIComponent(page.replace(/ /g,'_'))}`;
    card.target='_blank';
    card.rel='noopener';
    fetch(summaryUrl)
      .then(r=>r.ok?r.json():Promise.reject())
      .then(data=>{
        if(data.content_urls?.desktop?.page)card.href=data.content_urls.desktop.page;
        const p=card.querySelector('.watch-copy p');
        if(p)p.textContent=shorten(data.extract);
        if(data.thumbnail?.source){
          const wrap=card.querySelector('.watch-thumb');
          if(wrap){
            const img=document.createElement('img');
            img.src=data.thumbnail.source;
            img.alt=title;
            img.loading='lazy';
            wrap.prepend(img);
          }
        }
      })
      .catch(()=>{
        const p=card.querySelector('.watch-copy p');
        if(p)p.textContent='Open for a quick description, cast and background.';
      });
  });
})();