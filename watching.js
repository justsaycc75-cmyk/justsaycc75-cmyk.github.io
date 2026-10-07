(()=>{
  const shows={
    'Wind River':{
      video:'W7V9Fsll5qM',
      link:'https://www.youtube.com/watch?v=W7V9Fsll5qM',
      poster:'https://resizing.flixster.com/MJKyzlmQwD2_ONEzzBX1K2KdiTU%3D/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEwZjNjZGYzLTYwMjItNDAzNC1hMjg4LTM3NWUxZGY5ZTgwMy53ZWJw',
      summary:'A tracker discovers a young woman’s body on a snowy Wyoming reservation and helps a rookie FBI agent investigate. Taylor Sheridan’s crime thriller follows the case through brutal weather and a tight-knit community.',
      source:'Voltage Pictures'
    },
    'Fleabag':{
      video:'I5Uv6cb9YRs',
      link:'https://www.youtube.com/watch?v=I5Uv6cb9YRs',
      poster:'https://image.tmdb.org/t/p/original/aYerWmuhrulEW2mYWgE9OxhWD8c.jpg',
      summary:'Phoebe Waller-Bridge’s London café owner uses sharp jokes, bad decisions and frank asides to the camera while dealing with grief, family and relationships. Funny, painfully honest and often surprising.',
      source:'Prime Video'
    },
    'Pulling':{
      link:'https://www.comedy.co.uk/tv/pulling/videos/40/a_quiet_night/',
      poster:'https://m.media-amazon.com/images/M/MV5BNTViMzgyOWEtMGY0My00OTU3LWIwZGMtODZiMDA3OTk1ODE2XkEyXkFqcGc%40._V1_.jpg',
      summary:'After calling off her wedding, Donna moves in with two single friends. Sharon Horgan’s BBC comedy follows the trio through messy dating, disastrous nights out and friendship that survives both.',
      source:'British Comedy Guide clip'
    },
    'Blackadder':{
      video:'nPk43lZPkTI',
      link:'https://www.youtube.com/watch?v=nPk43lZPkTI',
      poster:'https://image.tmdb.org/t/p/original/p7LiSTuvSHmevRSs9S7kEzEBhBX.jpg',
      summary:'Rowan Atkinson plays generations of Edmund Blackadder across four periods of British history, with Baldrick usually close behind. Schemes, insults and hopeless superiors make this a sharp comedy classic.',
      source:'BBC Studios'
    },
    'Top of the Lake':{
      video:'TujPm45jhLw',
      link:'https://www.youtube.com/watch?v=TujPm45jhLw',
      poster:'https://www.transmissionfilms.com.au/uploads/_images/57490f8c75acb5491901321715bf4d040a1a0742.jpg',
      summary:'In a remote New Zealand town, Detective Robin Griffin investigates the disappearance of 12-year-old Tui. Jane Campion’s mystery layers the search with family secrets, power and a haunting alpine landscape.',
      source:'Transmission Films'
    },
    'No Country for Old Men':{
      video:'A0oNrgumrlE',
      link:'https://www.youtube.com/watch?v=A0oNrgumrlE',
      poster:'https://www.miramax.com/assets/no_country_for_old_men_scrubbed_150406.jpg',
      summary:'A hunter pockets cash from a drug deal gone wrong in West Texas, drawing a relentless killer into pursuit while an ageing sheriff tries to understand the violence left behind.',
      source:'Miramax'
    },
    'The Bourne Supremacy':{
      video:'Y-HqyyfBbSo',
      link:'https://www.youtube.com/watch?v=Y-HqyyfBbSo',
      poster:'assets/img/watching/bourne-supremacy.png',
      summary:'After being framed for a botched CIA operation, Jason Bourne is forced out of hiding. Matt Damon returns for a fast, tense chase through Europe as he pursues the truth about his past.',
      source:'Rotten Tomatoes Classic Trailers'
    },
    'Sicario: Day of the Soldado':{
      video:'sIMChzE_aCo',
      link:'https://www.youtube.com/watch?v=sIMChzE_aCo',
      poster:'assets/img/watching/sicario.png',
      summary:'Federal agent Matt Graver and operative Alejandro Gillick are drawn back to the US–Mexico border when a covert operation against the cartels spirals beyond their control.',
      source:'Sony Pictures'
    },
    'Nurse Jackie':{
      video:'DwtsxI8CXlQ',
      link:'https://www.youtube.com/watch?v=DwtsxI8CXlQ',
      poster:'assets/img/watching/nurse-jackie.png',
      summary:'Edie Falco plays a sharp, rule-bending emergency nurse who can handle almost any crisis at work while concealing an addiction and a dangerously complicated private life.',
      source:'Showtime'
    },
    'The Pacific':{
      video:'Q1fXW-dU1Cc',
      link:'https://www.youtube.com/watch?v=Q1fXW-dU1Cc',
      poster:'assets/img/watching/the-pacific.png',
      summary:'This ten-part World War II drama follows three US Marines through the Pacific campaign, from Guadalcanal to Okinawa, and the difficult return home.',
      source:'Warner Bros. Entertainment'
    },
    'Playing Gracie Darling':{
      video:'5dZeguYLgIU',
      link:'https://www.youtube.com/watch?v=5dZeguYLgIU',
      poster:'assets/img/watching/gracie-darling.png',
      summary:'Twenty-seven years after her best friend vanished during a séance, Joni returns to a small town when another girl disappears in eerily similar circumstances.',
      source:'Paramount+ Australia'
    },
    'Californication':{
      video:'gQ7yaQhXJAI',
      link:'https://www.youtube.com/watch?v=gQ7yaQhXJAI',
      poster:'assets/img/watching/californication.png',
      summary:'David Duchovny plays Hank Moody, a novelist struggling with work, fatherhood and his feelings for his former partner while repeatedly giving in to temptation in Los Angeles.',
      source:'Showtime'
    },
    'The Newsroom':{
      search:"The Newsroom HBO Jeff Daniels official trailer",
      wiki:'The Newsroom (American TV series)',
      summary:'Jeff Daniels leads a cable-news team trying to produce serious journalism while careers, relationships, corporate pressure and newsroom politics collide behind the scenes.',
      source:'HBO',
      direct:true
    },
    'Boardwalk Empire':{
      search:"Boardwalk Empire HBO Steve Buscemi official trailer",
      wiki:'Boardwalk Empire',
      summary:'Atlantic City treasurer Nucky Thompson sits at the centre of politics, corruption and organised crime as Prohibition creates fortunes and a new generation of gangsters.',
      source:'HBO',
      direct:true
    },
    'The Bay':{
      search:"The Bay ITV Morecambe official trailer",
      wiki:'The Bay (TV series)',
      summary:'A police family-liaison officer in Morecambe becomes deeply involved in investigations where missing people, murder and complicated family secrets are tightly intertwined.',
      source:'ITV / official trailer'
    },
    'Time':{
      search:"Time BBC Sean Bean Stephen Graham official trailer",
      video:'_YQ7_yIVtbU',
      link:'https://www.youtube.com/watch?v=_YQ7_yIVtbU',
      wiki:'Time (2021 TV series)',
      summary:'A hard-hitting prison drama about guilt, punishment and survival, following inmates and officers trapped inside a system where every decision can carry a heavy price.',
      source:'BBC / official trailer'
    },
    'Rillington Place':{
      search:"Rillington Place BBC Tim Roth official trailer",
      wiki:'Rillington Place',
      summary:'A bleak three-part true-crime drama about serial killer John Christie and the murders connected with 10 Rillington Place in post-war London.',
      source:'BBC / official trailer'
    },
    'Baptiste':{
      search:"Baptiste BBC One Tchéky Karyo official trailer",
      video:'zoy5vz0yN_Y',
      link:'https://www.youtube.com/watch?v=zoy5vz0yN_Y',
      wiki:'Baptiste (TV series)',
      summary:'Detective Julien Baptiste, from The Missing, takes on new disappearance cases that pull him into trafficking, organised crime and dangerous secrets across Europe.',
      source:'BBC / official trailer'
    },
    'Dept. Q':{
      search:"Dept Q Netflix Matthew Goode official trailer",
      video:'72hK6FUmm8o',
      summary:'A brilliant but abrasive Edinburgh detective is put in charge of a new cold-case unit and an unlikely team of investigators.',
      source:'Netflix'
    },
    'True Detective':{
      search:"True Detective HBO official trailer",
      video:'Q4uxGbhO4ag',
      summary:'An anthology crime drama in which each season follows a different investigation, cast and setting, usually with plenty of darkness around the edges.',
      source:'HBO',
      direct:true
    },
    'Landman':{
      search:"Landman Paramount Plus Billy Bob Thornton official trailer",
      video:'7zxh49-bsIk',
      summary:'Billy Bob Thornton leads a modern West Texas drama about roughnecks, oil companies, money, family and the people trying to survive the boom.',
      source:'Paramount+'
    },
    'The Hunting Wives':{
      search:"The Hunting Wives Netflix Brittany Snow official trailer",
      video:'uZvZfqiAhdQ',
      summary:'A newcomer to East Texas is drawn into the orbit of a wealthy socialite and her dangerous circle of friends, where obsession and murder are never far away.',
      source:'Lionsgate TV / Netflix'
    },
    'Dalliance':{
      search:"Dalliance Paramount Plus Australia official trailer",
      video:'ig8FXSB4C4c',
      summary:'An Australian drama about a close circle of friends in their sixties whose marriages, loyalties and long-held secrets begin to unravel after a chance encounter changes everything.',
      source:'Paramount+ Australia',
      direct:true
    },
    'The End':{
      search:"The End Foxtel Frances OConnor Harriet Walter official trailer",
      video:'P99OJwh8fIE',
      summary:'A dark Australian comedy-drama following three generations of one family wrestling with life, death, dignity and the mess in between.',
      source:'SHOWTIME / Foxtel'
    },
    'The Twelve':{
      search:"The Twelve Foxtel Australia Sam Neill official trailer",
      video:'0WlCTT8DD0M',
      summary:'Twelve ordinary Australians are selected for jury duty in a murder trial while their own complicated lives begin to affect how they see the case.',
      source:'Foxtel'
    },
    'Black Mirror':{
      search:"Black Mirror Netflix official trailer",
      video:'1iqra1ojEvM',
      summary:'Charlie Brooker’s anthology of unsettling stand-alone stories about technology, society and the increasingly blurry line between the two.',
      source:'Netflix'
    },
    'After Life':{
      search:"After Life Netflix Ricky Gervais official trailer",
      video:'eIGGKSHMQOM',
      summary:'Ricky Gervais plays a grieving widower who decides to stop filtering himself, only to discover that the people around him refuse to give up on him.',
      source:'Netflix'
    },
    'Adolescence':{
      search:"Adolescence Netflix Stephen Graham official trailer",
      video:'Wk5OxqtpBR4',
      summary:'A family, a detective and a therapist try to understand what happened after a 13-year-old boy is accused of murdering a classmate.',
      source:'Netflix'
    },
    'Dark Winds':{
      search:"Dark Winds AMC Zahn McClarnon official trailer",
      video:'TcmY-9eeBIM',
      summary:'Two Navajo police officers investigate violent crimes in the 1970s American Southwest while confronting secrets, culture and their own beliefs.',
      source:'AMC+'
    },
    'The Night Of':{
      search:"The Night Of HBO Riz Ahmed John Turturro official trailer",
      video:'556N5vojtp0',
      summary:'A New York murder case follows a young accused man, his lawyer, the police investigation and the machinery of the criminal justice system.',
      source:'HBO'
    },
    'The Fall':{
      search:"The Fall BBC Gillian Anderson Jamie Dornan official trailer",
      video:'ELmHY-aFe08',
      summary:'Gillian Anderson’s detective hunts Jamie Dornan’s serial killer in Belfast in a tense psychological cat-and-mouse crime drama.',
      source:'Netflix / BBC'
    },
    'Mr. Robot':{
      search:"Mr Robot USA Network Rami Malek official trailer",
      video:'LnCHNZdfA5s',
      summary:'A gifted but troubled cyber-security engineer is recruited by an underground hacker group determined to attack a powerful global corporation.',
      source:'USA Network'
    },
    'Big Little Lies':{
      search:"Big Little Lies HBO Nicole Kidman official trailer",
      video:'8XgMvMpvCFI',
      summary:'The apparently perfect lives of a group of wealthy Monterey mothers begin to unravel as secrets, rivalry and a murder investigation collide.',
      source:'HBO'
    },
    'Line of Duty':{
      search:"Line of Duty BBC official trailer",
      video:'LbKIzP4bmFA',
      summary:'AC-12 investigates police corruption from the inside, where every interview can turn into an interrogation and almost nobody is entirely clean.',
      source:'BBC'
    },
    'Unforgotten':{
      search:"Unforgotten ITV Nicola Walker official trailer",
      video:'CQV81dqu57Y',
      summary:'Detectives reopen old murder cases after long-buried remains are discovered, slowly exposing secrets that people thought were safely forgotten.',
      source:'ITV'
    },
    'Blue Lights':{
      search:"Blue Lights BBC Belfast official trailer",
      video:'C2fifCku6IU',
      summary:'Three new police recruits in Belfast learn how difficult front-line policing becomes when gangs, informants, communities and colleagues all overlap.',
      source:'BBC'
    },
    'The Missing':{
      search:"The Missing BBC James Nesbitt official trailer",
      video:'gNfombDw5xA',
      summary:'A child disappears during a family holiday in France, leaving his parents and investigators trapped in a case that continues to haunt them for years.',
      source:'STARZ'
    },
    'Breaking Bad':{
      search:"Breaking Bad AMC Bryan Cranston official trailer",
      video:'VaOt6tXyf2Y',
      summary:'A terminally ill chemistry teacher turns to making methamphetamine and gradually transforms from suburban family man into a major criminal figure.',
      source:'Breaking Bad official channel'
    },
    'Sicario':{
      search:"Sicario Lionsgate Emily Blunt official trailer",
      video:'7XLQ1bkSLDo',
      summary:'An idealistic FBI agent joins a covert task force operating along the US–Mexico border and discovers that the rules are far murkier than she expected.',
      source:'Lionsgate'
    },
    'The X-Files':{
      search:"The X Files Fox Mulder Scully official trailer",
      wiki:'The X-Files',
      summary:'FBI agents Fox Mulder and Dana Scully investigate unexplained cases involving conspiracy, paranormal activity, monsters, government secrecy and the occasional deeply strange small town.',
      source:'Official trailer / overview'
    },
    'Broadchurch':{
      search:"Broadchurch ITV David Tennant Olivia Colman official trailer",
      wiki:'Broadchurch',
      summary:'A child’s murder tears through a quiet Dorset town, forcing two detectives to dig into secrets, grief and suspicion as almost everyone becomes capable of hiding something.',
      source:'ITV / official trailer'
    },
    'The Bridge':{
      search:"The Bridge Bron Broen Nordic official trailer Sofia Helin",
      wiki:'The Bridge (2011 TV series)',
      summary:'A body found exactly on the Denmark–Sweden border forces two very different detectives to work together across jurisdictions in one of Scandinavian crime drama’s defining series.',
      source:'Bron/Broen / official trailer'
    },
    'Sons of Anarchy':{
      search:"Sons of Anarchy FX Charlie Hunnam official trailer",
      wiki:'Sons of Anarchy',
      summary:'An outlaw motorcycle club tries to protect its town and its criminal empire while family loyalty, violence, betrayal and power struggles steadily tear everything apart.',
      source:'FX',
      direct:true
    },
    'Tulsa King':{
      search:"Tulsa King Paramount Plus Sylvester Stallone official trailer",
      video:'NXpzKI-sEac',
      wiki:'Tulsa King',
      summary:'Sylvester Stallone plays New York mobster Dwight Manfredi, exiled to Tulsa after 25 years in prison, where he starts building a new criminal crew from scratch.',
      source:'Paramount+',
      direct:true
    },
    'The Madison':{
      search:"The Madison Paramount Plus Michelle Pfeiffer official trailer",
      video:'OSb-X_YkLg4',
      wiki:'The Madison (TV series)',
      summary:'Taylor Sheridan’s Montana drama follows the Clyburn family as they leave New York for the Madison River Valley and try to rebuild their lives after tragedy.',
      source:'Paramount+',
      direct:true
    },
    'Mr Inbetween':{
      search:"Mr Inbetween FX Scott Ryan official trailer",
      wiki:'Mr Inbetween',
      summary:'Ray Shoesmith is a Sydney hitman, father, brother and boyfriend trying to keep normal life and violent work in separate boxes. Dark, funny, brutal and very Australian.',
      source:'FX',
      direct:true
    },
    'Dexter':{
      search:"Dexter Showtime Michael C Hall official trailer",
      wiki:'Dexter (TV series)',
      summary:'A Miami blood-spatter analyst leads a double life as a serial killer who targets other murderers, while trying to maintain the appearance of a normal family man.',
      source:'Showtime / Paramount+',
      direct:true
    },
    'Sharp Objects':{
      search:"Sharp Objects HBO Amy Adams official trailer",
      wiki:'Sharp Objects (miniseries)',
      summary:'A troubled journalist returns to her Missouri hometown to investigate the murders of two girls, forcing her to confront a poisonous family history and her own past.',
      source:'HBO',
      direct:true
    },
    'The Killing':{
      search:"The Killing AMC Mireille Enos Joel Kinnaman official trailer",
      wiki:'The Killing (American TV series)',
      summary:'Two Seattle detectives investigate a teenage girl’s murder in a brooding, long-form mystery where the case slowly exposes political, family and personal secrets.',
      source:'AMC / official trailer'
    },
    'Happy Valley':{
      search:"Happy Valley BBC Sarah Lancashire official trailer",
      wiki:'Happy Valley (TV series)',
      summary:'A tough Yorkshire police sergeant faces violent crime, family trauma and the return of a dangerous man from her past in one of Britain’s strongest modern crime dramas.',
      source:'BBC',
      direct:true
    },
    'The Night Manager':{
      search:"The Night Manager BBC Tom Hiddleston Hugh Laurie official trailer",
      wiki:'The Night Manager (British TV series)',
      summary:'A former soldier working as a hotel night manager is recruited into an intelligence operation targeting a charismatic international arms dealer.',
      source:'BBC',
      direct:true
    },
    'Mayor of Kingstown':{
      search:"Mayor of Kingstown Paramount Plus Jeremy Renner official trailer",
      wiki:'Mayor of Kingstown',
      summary:'In a Michigan town dominated by prisons, the McLusky family works between police, inmates, gangs and politicians in a brutal cycle of violence and uneasy deals.',
      source:'Paramount+',
      direct:true
    }
  };

  const normalise=s=>String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();

  document.querySelectorAll('[data-watch]').forEach(card=>{
    const title=card.dataset.watch;
    const info=shows[title];
    if(!info)return;

    const configuredSearch=info.search||'';
    const safeSearch=normalise(configuredSearch).includes(normalise(title))
      ? configuredSearch
      : `${title} ${info.source||''} official trailer`;

    card.href=info.link||`https://www.youtube.com/results?search_query=${encodeURIComponent(safeSearch)}`;
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
      const fallback=thumb.querySelector('span');
      img.onload=()=>{ if(fallback)fallback.hidden=true; };
      img.onerror=()=>{
        if(fallback)fallback.hidden=false;
        img.remove();
      };
      if(info.poster){
        img.classList.add('promo-image');
        img.src=info.poster;
        thumb.prepend(img);
      }else if(info.video){
        img.src=`https://i.ytimg.com/vi/${info.video}/hqdefault.jpg`;
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
    if(small)small.textContent=`Find trailer / show — ${info.source} →`;
  });
})();