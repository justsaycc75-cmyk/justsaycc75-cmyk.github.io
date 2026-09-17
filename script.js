const regulars=[
  {artist:'Sunsick Daisy',tracks:['Breathe In... Breathe Out','Search the latest clip'],url:''},
  {artist:'The Buoys',tracks:['I Want You','Lie To Me Again'],url:'https://www.youtube.com/results?search_query=The+Buoys+I+Want+You+official'},
  {artist:'Old Mervs',tracks:['Parched'],url:'https://www.youtube.com/watch?v=myBg9F3EyRs',embed:'myBg9F3EyRs'},
  {artist:'Teen Jesus and the Jean Teasers',tracks:['AHHHH!','Girl Sports'],url:'https://www.youtube.com/watch?v=NhS46GfvUS8',embed:'NhS46GfvUS8'},
  {artist:'Deepend & Last Call',tracks:['Pocketful of Sunshine'],url:'https://www.youtube.com/results?search_query=Deepend+Last+Call+Pocketful+of+Sunshine'},
  {artist:'Parquet Courts',tracks:['Stoned And Starving','Dust','Walking At A Downtown Pace','Black And White','Human Performance'],url:'https://www.youtube.com/watch?v=a5CvZTIoir8',embed:'a5CvZTIoir8'},
  {artist:'The Brian Jonestown Massacre',tracks:['Anemone','Nailing Honey To The Bee','Hide and Seek','Panic in Babylon'],url:'https://www.youtube.com/results?search_query=Brian+Jonestown+Massacre+Anemone'},
  {artist:'Tony Joe White',tracks:['Polk Salad Annie'],url:'https://www.youtube.com/results?search_query=Tony+Joe+White+Polk+Salad+Annie'},
  {artist:'King Stingray',tracks:['Through The Trees','Get Me Out','Let\'s Go'],url:'https://www.youtube.com/results?search_query=King+Stingray+Through+The+Trees'},
  {artist:'V Spy V Spy',tracks:['Clarity of Mind','Overland','Hardtimes'],url:'https://www.youtube.com/results?search_query=Spy+v+Spy+Clarity+of+Mind'},
  {artist:'Machine Gun Fellatio',tracks:['Rollercoaster','Pussytown'],url:'https://www.youtube.com/results?search_query=Machine+Gun+Fellatio+Rollercoaster'},
  {artist:'Ed Kuepper',tracks:['When There’s This Party','Burned My Fingers','Told Myself','Also Sprach The King Of Euro Disco'],url:'https://www.youtube.com/results?search_query=Ed+Kuepper+When+There%27s+This+Party'},
  {artist:'Arcadia',tracks:['The Promise','The Flame','Goodbye Is Forever','El Diablo'],url:'https://www.youtube.com/results?search_query=Arcadia+The+Promise'},
  {artist:'Mental As Anything',tracks:['Mr Natural','Berserk Warriors'],url:'https://www.youtube.com/results?search_query=Mental+As+Anything+Mr+Natural'},
  {artist:'POND',tracks:["America’s Cup",'Hang a Cross On Me','Human Touch','Zond','Lights of Leeming'],url:'https://www.youtube.com/results?search_query=POND+America%27s+Cup'},
  {artist:'Models',tracks:['King of Kings','God Bless America'],url:'https://www.youtube.com/results?search_query=Models+King+of+Kings+Australian+band'},
  {artist:'Visage',tracks:['Fade To Grey'],url:'https://www.youtube.com/results?search_query=Visage+Fade+To+Grey+official'},
  {artist:'Talking Heads',tracks:['Life During Wartime','Burning Down the House'],url:'https://www.youtube.com/results?search_query=Talking+Heads+Life+During+Wartime+2002'},
  {artist:'Jack Green',tracks:['Murder'],url:'https://www.youtube.com/results?search_query=Jack+Green+Murder+1981'},
  {artist:'The Church',tracks:['The Unguarded Moment'],url:'https://www.youtube.com/results?search_query=The+Church+The+Unguarded+Moment'},
  {artist:'Simple Minds',tracks:['Love Song'],url:'https://www.youtube.com/results?search_query=Simple+Minds+Love+Song+official'},
  {artist:'RocKwiz',tracks:['Baby Blue — Isabella Manfredi & Stephen Cummings','Featured performance'],url:'https://www.youtube.com/results?search_query=RocKwiz+Baby+Blue+Isabella+Manfredi+Stephen+Cummings'}
];

const archive=[
  {title:'Mystery Island, Vanuatu',meta:'Carnival Splendor • Dec 2022–Jan 2023',img:'assets/img/mystery.webp',text:'Blue water, beach time and the kind of cruise day that needs very little explaining.',href:'journeys.html#mystery'},
  {title:'Christmas in New Zealand',meta:'2023',img:'assets/img/nz.webp',text:'Fiordland, Dunedin and a shipboard Christmas with scenery doing most of the talking.',href:'journeys.html#nz2023'},
  {title:'Darling Harbour long weekend',meta:'October 2024',img:'assets/img/darling.webp',text:'A Sydney weekend built around waterfront views, good food and one very good sunset.',href:'journeys.html#darling'},
  {title:'A Crown Princess Christmas',meta:'2024',img:'assets/img/crown_sunset.webp',text:'A back-to-back run to Eden and New Zealand, with Christmas dinner and the Sydney to Hobart fleet drama thrown in.',href:'journeys.html#crown2024'},
  {title:'First anniversary at sea',meta:'Carnival Splendor • April 2025',img:'assets/img/moreton.webp',text:'Moreton Island, shipboard life and our first wedding anniversary.',href:'journeys.html#moreton'},
  {title:'Hunter Valley regulars',meta:'Four trips a year',img:'assets/img/hunter2.webp',text:'Briar Ridge, Keith Tulloch, Mount Pleasant and the cellar doors we keep going back to.',href:'hunter.html'}
];

function sydDate(){
  return new Intl.DateTimeFormat('en-CA',{timeZone:'Australia/Sydney',year:'numeric',month:'2-digit',day:'2-digit'}).format(new Date());
}
function hash(s){let n=0;for(const c of s)n=(n*31+c.charCodeAt(0))>>>0;return n;}
const key=sydDate();
const artistPick=regulars[hash(key)%regulars.length];
const trackPick=artistPick.tracks[hash(key+'track')%artistPick.tracks.length];
const clipUrl=artistPick.url || ('https://www.youtube.com/results?search_query='+encodeURIComponent(artistPick.artist+' '+trackPick));

document.querySelectorAll('[data-daily-artist]').forEach(e=>e.textContent=artistPick.artist);
document.querySelectorAll('[data-daily-track]').forEach(e=>e.textContent=trackPick);
document.querySelectorAll('[data-youtube]').forEach(e=>{e.href=clipUrl;});

document.querySelectorAll('[data-video-frame]').forEach(frame=>{
  if(artistPick.embed){
    frame.innerHTML=`<iframe src="https://www.youtube.com/embed/${artistPick.embed}?rel=0" title="${artistPick.artist} — ${trackPick}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }else{
    frame.innerHTML=`<div class="video-fallback"><span>DAILY VIDEO PICK</span><b>${artistPick.artist}</b><em>${trackPick}</em><a class="btn" href="${clipUrl}" target="_blank" rel="noopener">Open clip on YouTube →</a></div>`;
  }
});

const archivePick=archive[hash(key+'archive')%archive.length];
document.querySelectorAll('[data-archive-img]').forEach(e=>{e.src=archivePick.img;e.alt=archivePick.title;});
document.querySelectorAll('[data-archive-title]').forEach(e=>e.textContent=archivePick.title);
document.querySelectorAll('[data-archive-meta]').forEach(e=>e.textContent=archivePick.meta);
document.querySelectorAll('[data-archive-text]').forEach(e=>e.textContent=archivePick.text);
document.querySelectorAll('[data-archive-link]').forEach(e=>e.href=archivePick.href);

function sydParts(){
  const f=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false});
  return f.formatToParts(new Date()).reduce((a,p)=>(a[p.type]=p.value,a),{});
}
const p=sydParts(); const day=p.weekday; const hr=parseInt(p.hour||'0',10);
const showPunt=day==='Fri'||day==='Sat'||(day==='Sun'&&hr<15);
document.querySelectorAll('[data-punt]').forEach(e=>e.style.display=showPunt?'block':'none');

document.querySelectorAll('[data-menu-button]').forEach(btn=>btn.addEventListener('click',()=>document.body.classList.toggle('menu-open')));

const sportsFixtures=[
  {team:'Sydney Roosters',match:'Roosters v Cronulla-Sutherland Sharks',when:'Saturday 19 September • 7:50pm Sydney',venue:'Allianz Stadium',start:'2026-09-19T19:50:00+10:00',url:'https://www.nrl.com/draw/nrl-premiership/2026/finals-week-2/roosters-v-sharks/'},
  {team:'Green Bay Packers',match:'Packers @ New York Jets',when:'Monday 21 September • 3:00am Sydney',venue:'MetLife Stadium',start:'2026-09-21T03:00:00+10:00',url:'https://www.packers.com/schedule/'},
  {team:'Seattle Seahawks',match:'Seahawks @ Arizona Cardinals',when:'Monday 21 September • 6:25am Sydney',venue:'State Farm Stadium',start:'2026-09-21T06:25:00+10:00',url:'https://www.seahawks.com/schedule/'},
  {team:'New York Giants',match:'Giants @ Los Angeles Rams',when:'Tuesday 22 September • 10:15am Sydney',venue:'SoFi Stadium',start:'2026-09-22T10:15:00+10:00',url:'https://www.giants.com/schedule/'}
];
const now=new Date();
let visibleSports=sportsFixtures.filter(f=>new Date(f.start)>now);
if(!visibleSports.length){
  visibleSports=[{team:'Fixture refresh due',match:'Next games will appear here after the weekly refresh.',when:'',venue:'',start:'',url:'sport.html'}];
}
let sportIndex=hash(key+'sport')%visibleSports.length;
function renderSport(){
  const f=visibleSports[sportIndex];
  document.querySelectorAll('[data-sport-team]').forEach(e=>e.textContent=f.team);
  document.querySelectorAll('[data-sport-match]').forEach(e=>e.textContent=f.match);
  document.querySelectorAll('[data-sport-when]').forEach(e=>e.textContent=f.when);
  document.querySelectorAll('[data-sport-venue]').forEach(e=>e.textContent=f.venue);
  document.querySelectorAll('[data-sport-count]').forEach(e=>e.textContent=`${sportIndex+1} / ${visibleSports.length}`);
  document.querySelectorAll('[data-sport-link]').forEach(e=>e.href=f.url);
}
document.querySelectorAll('[data-sport-prev]').forEach(b=>b.addEventListener('click',()=>{sportIndex=(sportIndex-1+visibleSports.length)%visibleSports.length;renderSport();}));
document.querySelectorAll('[data-sport-next]').forEach(b=>b.addEventListener('click',()=>{sportIndex=(sportIndex+1)%visibleSports.length;renderSport();}));
document.querySelectorAll('[data-live-updated]').forEach(e=>e.textContent='Fixtures refreshed 17 Sep 2026');
renderSport();

const oddities=[
  {title:'Police pursuit, but make it an emu',text:'A runaway emu caused traffic trouble near Orange, NSW — and a police officer ended up giving chase on foot. The footage promptly went viral.',source:'ABC News • 2 Sep 2026',url:'https://www.abc.net.au/news/2026-09-02/runaway-emu-police-pursuit-orange-nsw/107105798'},
  {title:'Thirty horses catch the train',text:'The Pichi Richi Railway in South Australia opened its heritage carriages to more than 30 horses and riders for a very unusual Flinders Ranges outing.',source:'ABC News • 11 Sep 2026',url:'https://www.abc.net.au/news/2026-09-11/horses-ride-pichi-richi-explorer-steam-train-quorn-sa/107137008'},
  {title:'Bluey gets another Dollarbuck',text:'The Royal Australian Mint has put the much-loved backyard cricket episode of Bluey on a new collectable $1 coin, with 200,000 being minted.',source:'ABC News • 17 Sep 2026',url:'https://www.abc.net.au/news/2026-09-17/mint-new-bluey-collector-cricket-coin/107162394'}
];
const oddityPick=oddities[hash(key+'oddity')%oddities.length];
document.querySelectorAll('[data-oddity-title]').forEach(e=>e.textContent=oddityPick.title);
document.querySelectorAll('[data-oddity-text]').forEach(e=>e.textContent=oddityPick.text);
document.querySelectorAll('[data-oddity-source]').forEach(e=>e.textContent=oddityPick.source);
document.querySelectorAll('[data-oddity-link]').forEach(e=>e.href=oddityPick.url);
