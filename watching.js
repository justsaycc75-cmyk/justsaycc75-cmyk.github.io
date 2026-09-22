(()=>{
  const shows={
    'The Newsroom':{
      url:'https://www.hbo.com/the-newsroom',
      wiki:'The Newsroom (American TV series)',
      summary:'Jeff Daniels leads a cable-news team trying to produce serious journalism while careers, relationships, corporate pressure and newsroom politics collide behind the scenes.',
      source:'HBO',
      direct:true
    },
    'Boardwalk Empire':{
      url:'https://www.hbo.com/boardwalk-empire',
      wiki:'Boardwalk Empire',
      summary:'Atlantic City treasurer Nucky Thompson sits at the centre of politics, corruption and organised crime as Prohibition creates fortunes and a new generation of gangsters.',
      source:'HBO',
      direct:true
    },
    'The Bay':{
      url:'https://www.youtube.com/results?search_query=The+Bay+ITV+official+trailer',
      wiki:'The Bay (TV series)',
      summary:'A police family-liaison officer in Morecambe becomes deeply involved in investigations where missing people, murder and complicated family secrets are tightly intertwined.',
      source:'ITV / official trailer'
    },
    'Time':{
      url:'https://www.youtube.com/results?search_query=Time+BBC+official+trailer+Sean+Bean',
      wiki:'Time (2021 TV series)',
      summary:'A hard-hitting prison drama about guilt, punishment and survival, following inmates and officers trapped inside a system where every decision can carry a heavy price.',
      source:'BBC / official trailer'
    },
    'Rillington Place':{
      url:'https://www.youtube.com/results?search_query=Rillington+Place+BBC+official+trailer',
      wiki:'Rillington Place',
      summary:'A bleak three-part true-crime drama about serial killer John Christie and the murders connected with 10 Rillington Place in post-war London.',
      source:'BBC / official trailer'
    },
    'Baptiste':{
      search:'Baptiste BBC One Tchéky Karyo official trailer',
      wiki:'Baptiste (TV series)',
      summary:'Detective Julien Baptiste, from The Missing, takes on new disappearance cases that pull him into trafficking, organised crime and dangerous secrets across Europe.',
      source:'BBC / official trailer'
    },
    'Dept. Q':{
      video:'72hK6FUmm8o',
      summary:'A brilliant but abrasive Edinburgh detective is put in charge of a new cold-case unit and an unlikely team of investigators.',
      source:'Netflix'
    },
    'True Detective':{
      url:'https://www.hbo.com/true-detective',
      video:'Q4uxGbhO4ag',
      summary:'An anthology crime drama in which each season follows a different investigation, cast and setting, usually with plenty of darkness around the edges.',
      source:'HBO',
      direct:true
    },
    'Landman':{
      video:'7zxh49-bsIk',
      summary:'Billy Bob Thornton leads a modern West Texas drama about roughnecks, oil companies, money, family and the people trying to survive the boom.',
      source:'Paramount+'
    },
    'The Hunting Wives':{
      video:'uZvZfqiAhdQ',
      summary:'A newcomer to East Texas is drawn into the orbit of a wealthy socialite and her dangerous circle of friends, where obsession and murder are never far away.',
      source:'Lionsgate TV / Netflix'
    },
    'Dalliance':{
      url:'https://www.intl.paramountplus.com/au/shows/dalliance/',
      video:'ig8FXSB4C4c',
      summary:'An Australian drama about a close circle of friends in their sixties whose marriages, loyalties and long-held secrets begin to unravel after a chance encounter changes everything.',
      source:'Paramount+ Australia',
      direct:true
    },
    'The End':{
      video:'P99OJwh8fIE',
      summary:'A dark Australian comedy-drama following three generations of one family wrestling with life, death, dignity and the mess in between.',
      source:'SHOWTIME / Foxtel'
    },
    'The Twelve':{
      video:'0WlCTT8DD0M',
      summary:'Twelve ordinary Australians are selected for jury duty in a murder trial while their own complicated lives begin to affect how they see the case.',
      source:'Foxtel'
    },
    'Black Mirror':{
      video:'1iqra1ojEvM',
      summary:'Charlie Brooker’s anthology of unsettling stand-alone stories about technology, society and the increasingly blurry line between the two.',
      source:'Netflix'
    },
    'After Life':{
      video:'eIGGKSHMQOM',
      summary:'Ricky Gervais plays a grieving widower who decides to stop filtering himself, only to discover that the people around him refuse to give up on him.',
      source:'Netflix'
    },
    'Adolescence':{
      video:'Wk5OxqtpBR4',
      summary:'A family, a detective and a therapist try to understand what happened after a 13-year-old boy is accused of murdering a classmate.',
      source:'Netflix'
    },
    'Dark Winds':{
      video:'TcmY-9eeBIM',
      summary:'Two Navajo police officers investigate violent crimes in the 1970s American Southwest while confronting secrets, culture and their own beliefs.',
      source:'AMC+'
    },
    'The Night Of':{
      video:'556N5vojtp0',
      summary:'A New York murder case follows a young accused man, his lawyer, the police investigation and the machinery of the criminal justice system.',
      source:'HBO'
    },
    'The Fall':{
      video:'ELmHY-aFe08',
      summary:'Gillian Anderson’s detective hunts Jamie Dornan’s serial killer in Belfast in a tense psychological cat-and-mouse crime drama.',
      source:'Netflix / BBC'
    },
    'Mr. Robot':{
      video:'LnCHNZdfA5s',
      summary:'A gifted but troubled cyber-security engineer is recruited by an underground hacker group determined to attack a powerful global corporation.',
      source:'USA Network'
    },
    'Big Little Lies':{
      video:'8XgMvMpvCFI',
      summary:'The apparently perfect lives of a group of wealthy Monterey mothers begin to unravel as secrets, rivalry and a murder investigation collide.',
      source:'HBO'
    },
    'Line of Duty':{
      video:'LbKIzP4bmFA',
      summary:'AC-12 investigates police corruption from the inside, where every interview can turn into an interrogation and almost nobody is entirely clean.',
      source:'BBC'
    },
    'Unforgotten':{
      video:'CQV81dqu57Y',
      summary:'Detectives reopen old murder cases after long-buried remains are discovered, slowly exposing secrets that people thought were safely forgotten.',
      source:'ITV'
    },
    'Blue Lights':{
      video:'C2fifCku6IU',
      summary:'Three new police recruits in Belfast learn how difficult front-line policing becomes when gangs, informants, communities and colleagues all overlap.',
      source:'BBC'
    },
    'The Missing':{
      video:'gNfombDw5xA',
      summary:'A child disappears during a family holiday in France, leaving his parents and investigators trapped in a case that continues to haunt them for years.',
      source:'STARZ'
    },
    'Breaking Bad':{
      video:'VaOt6tXyf2Y',
      summary:'A terminally ill chemistry teacher turns to making methamphetamine and gradually transforms from suburban family man into a major criminal figure.',
      source:'Breaking Bad official channel'
    },
    'Sicario':{
      video:'7XLQ1bkSLDo',
      summary:'An idealistic FBI agent joins a covert task force operating along the US–Mexico border and discovers that the rules are far murkier than she expected.',
      source:'Lionsgate'
    },
    'The X-Files':{
      url:'https://www.youtube.com/results?search_query=The+X-Files+official+trailer',
      wiki:'The X-Files',
      summary:'FBI agents Fox Mulder and Dana Scully investigate unexplained cases involving conspiracy, paranormal activity, monsters, government secrecy and the occasional deeply strange small town.',
      source:'Official trailer / overview'
    },
    'Broadchurch':{
      url:'https://www.youtube.com/results?search_query=Broadchurch+official+trailer+ITV',
      wiki:'Broadchurch',
      summary:'A child’s murder tears through a quiet Dorset town, forcing two detectives to dig into secrets, grief and suspicion as almost everyone becomes capable of hiding something.',
      source:'ITV / official trailer'
    },
    'The Bridge':{
      url:'https://www.youtube.com/results?search_query=The+Bridge+Bron+Broen+official+trailer',
      wiki:'The Bridge (2011 TV series)',
      summary:'A body found exactly on the Denmark–Sweden border forces two very different detectives to work together across jurisdictions in one of Scandinavian crime drama’s defining series.',
      source:'Bron/Broen / official trailer'
    },
    'Sons of Anarchy':{
      url:'https://www.fxnetworks.com/shows/sons-of-anarchy',
      wiki:'Sons of Anarchy',
      summary:'An outlaw motorcycle club tries to protect its town and its criminal empire while family loyalty, violence, betrayal and power struggles steadily tear everything apart.',
      source:'FX',
      direct:true
    },
    'Tulsa King':{
      url:'https://www.paramountplus.com/shows/tulsa-king/',
      video:'NXpzKI-sEac',
      wiki:'Tulsa King',
      summary:'Sylvester Stallone plays New York mobster Dwight Manfredi, exiled to Tulsa after 25 years in prison, where he starts building a new criminal crew from scratch.',
      source:'Paramount+',
      direct:true
    },
    'The Madison':{
      url:'https://www.paramountplus.com/sneak-peak/where-to-watch-the-madison/',
      video:'OSb-X_YkLg4',
      wiki:'The Madison (TV series)',
      summary:'Taylor Sheridan’s Montana drama follows the Clyburn family as they leave New York for the Madison River Valley and try to rebuild their lives after tragedy.',
      source:'Paramount+',
      direct:true
    },
    'Mr Inbetween':{
      url:'https://www.fxnetworks.com/shows/mr-inbetween',
      wiki:'Mr Inbetween',
      summary:'Ray Shoesmith is a Sydney hitman, father, brother and boyfriend trying to keep normal life and violent work in separate boxes. Dark, funny, brutal and very Australian.',
      source:'FX',
      direct:true
    },
    'Dexter':{
      url:'https://www.intl.paramountplus.com/au/shows/dexter/episodes/',
      wiki:'Dexter (TV series)',
      summary:'A Miami blood-spatter analyst leads a double life as a serial killer who targets other murderers, while trying to maintain the appearance of a normal family man.',
      source:'Showtime / Paramount+',
      direct:true
    }
,
    'Sharp Objects':{
      url:'https://www.hbo.com/sharp-objects',
      wiki:'Sharp Objects (miniseries)',
      summary:'A troubled journalist returns to her Missouri hometown to investigate the murders of two girls, forcing her to confront a poisonous family history and her own past.',
      source:'HBO',
      direct:true
    },
    'The Killing':{
      url:'https://www.youtube.com/results?search_query=The+Killing+official+trailer',
      wiki:'The Killing (American TV series)',
      summary:'Two Seattle detectives investigate a teenage girl’s murder in a brooding, long-form mystery where the case slowly exposes political, family and personal secrets.',
      source:'Official trailer / overview'
    },
    'Happy Valley':{
      url:'https://www.bbc.co.uk/programmes/b06zqjpj',
      wiki:'Happy Valley (TV series)',
      summary:'A tough Yorkshire police sergeant faces violent crime, family trauma and the return of a dangerous man from her past in one of Britain’s strongest modern crime dramas.',
      source:'BBC',
      direct:true
    },
    'The Night Manager':{
      url:'https://www.bbc.co.uk/programmes/p03g13rt',
      wiki:'The Night Manager (British TV series)',
      summary:'A former soldier working as a hotel night manager is recruited into an intelligence operation targeting a charismatic international arms dealer.',
      source:'BBC',
      direct:true
    },
    'Mayor of Kingstown':{
      url:'https://www.paramountplus.com/shows/mayor-of-kingstown/',
      wiki:'Mayor of Kingstown',
      summary:'In a Michigan town dominated by prisons, the McLusky family works between police, inmates, gangs and politicians in a brutal cycle of violence and uneasy deals.',
      source:'Paramount+',
      direct:true
    }
  };

  document.querySelectorAll('[data-watch]').forEach(card=>{
    const title=card.dataset.watch;
    const info=shows[title];
    if(!info)return;

    card.href=`https://www.youtube.com/results?search_query=${encodeURIComponent(info.search || (title+' official trailer'))}`;
    card.target='_blank';
    card.rel='noopener';
    card.setAttribute('aria-label',`${title} — trailer and show search`);

    const thumb=card.querySelector('.watch-thumb');
    if(thumb){
      const img=document.createElement('img');
      img.alt=`${title} thumbnail`;
      img.loading='lazy';
      img.decoding='async';
      img.referrerPolicy='no-referrer';
      if(info.video){
        img.src=`https://i.ytimg.com/vi/${info.video}/hqdefault.jpg`;
        img.onerror=()=>{ img.remove(); };
        thumb.prepend(img);
      }else if(info.wiki){
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(info.wiki)}`)
          .then(r=>r.ok?r.json():Promise.reject())
          .then(d=>{if(d.thumbnail&&d.thumbnail.source){img.src=d.thumbnail.source;thumb.prepend(img);}})
          .catch(()=>{});
      }
    }

    const p=card.querySelector('.watch-copy p');
    if(p)p.textContent=info.summary;

    const small=card.querySelector('.watch-copy small');
    if(small)small.textContent=`Trailer / show search — ${info.source} →`;
  });
})();