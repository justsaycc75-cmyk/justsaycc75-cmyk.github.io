const regulars=[
  {artist:'Sunsick Daisy',tracks:['Breathe In... Breathe Out','Search the latest clip'],url:''},
  {artist:'The Buoys',tracks:['I Want You','Lie To Me Again'],url:'https://www.youtube.com/results?search_query=The+Buoys+I+Want+You+official'},
  {artist:'Old Mervs',tracks:['Parched'],url:'https://www.youtube.com/watch?v=myBg9F3EyRs',embed:'myBg9F3EyRs'},
  {artist:'Teen Jesus and the Jean Teasers',tracks:['AHHHH!'],url:'https://www.youtube.com/watch?v=98V-utPJGv8',embed:'98V-utPJGv8'},
  {artist:'Deepend & Last Call',tracks:['Pocketful of Sunshine'],url:'https://www.youtube.com/results?search_query=Deepend+Last+Call+Pocketful+of+Sunshine'},
  {artist:'Parquet Courts',tracks:['Stoned And Starving','Dust','Walking At A Downtown Pace','Black And White','Human Performance'],url:'https://www.youtube.com/watch?v=a5CvZTIoir8',embed:'a5CvZTIoir8'},
  {artist:'The Brian Jonestown Massacre',tracks:['Anemone','Nailing Honey To The Bee','Hide and Seek','Panic in Babylon'],url:'https://www.youtube.com/results?search_query=Brian+Jonestown+Massacre+Anemone'},
  {artist:'Tony Joe White',tracks:['Polk Salad Annie'],url:'https://www.youtube.com/results?search_query=Tony+Joe+White+Polk+Salad+Annie'},
  {artist:'King Stingray',tracks:['Through The Trees','Get Me Out','Let\'s Go'],url:'https://www.youtube.com/results?search_query=King+Stingray+Through+The+Trees'},
  {artist:'V Spy V Spy',tracks:['Clarity of Mind','Overland','Hardtimes'],url:'https://www.youtube.com/results?search_query=Spy+v+Spy+Clarity+of+Mind'},
  {artist:'Machine Gun Fellatio',tracks:['Rollercoaster','Pussytown'],url:'https://www.youtube.com/results?search_query=Machine+Gun+Fellatio+Rollercoaster'},
  {artist:'Ed Kuepper',tracks:['When There’s This Party','Burned My Fingers','Told Myself','Also Sprach The King Of Euro Disco'],url:'https://www.youtube.com/results?search_query=Ed+Kuepper+When+There%27s+This+Party'},
  {artist:'Arcadia',tracks:['El Diablo'],url:'https://www.youtube.com/watch?v=hqRBqT0iZKo',embed:'hqRBqT0iZKo'},
  {artist:'Mental As Anything',tracks:['Mr Natural','Berserk Warriors'],url:'https://www.youtube.com/results?search_query=Mental+As+Anything+Mr+Natural'},
  {artist:'POND',tracks:["America’s Cup",'Hang a Cross On Me','Human Touch','Zond','Lights of Leeming'],url:'https://www.youtube.com/results?search_query=POND+America%27s+Cup'},
  {artist:'Models',tracks:['King of Kings','God Bless America'],url:'https://www.youtube.com/results?search_query=Models+King+of+Kings+Australian+band'},
  {artist:'Visage',tracks:['Fade To Grey'],url:'https://www.youtube.com/watch?v=UMPC8QJF6sI',embed:'UMPC8QJF6sI'},
  {artist:'Talking Heads',tracks:['Life During Wartime'],url:'https://www.youtube.com/watch?v=alEjtNx0fTg',embed:'alEjtNx0fTg'},
  {artist:'Jack Green',tracks:['Murder'],url:'https://www.youtube.com/results?search_query=Jack+Green+Murder+1981'},
  {artist:'The Church',tracks:['The Unguarded Moment'],url:'https://www.youtube.com/results?search_query=The+Church+The+Unguarded+Moment'},
  {artist:'Simple Minds',tracks:['Love Song'],url:'https://www.youtube.com/results?search_query=Simple+Minds+Love+Song+official'},
  {artist:'RocKwiz',tracks:['Baby Blue — Isabella Manfredi & Stephen Cummings','Featured performance'],url:'https://www.youtube.com/results?search_query=RocKwiz+Baby+Blue+Isabella+Manfredi+Stephen+Cummings'},
  {artist:'Hunters & Collectors',tracks:['Throw Your Arms Around Me','Holy Grail'],url:'https://www.youtube.com/results?search_query=Hunters+and+Collectors+official'},
  {artist:'Midnight Oil',tracks:['Beds Are Burning','The Dead Heart'],url:'https://www.youtube.com/results?search_query=Midnight+Oil+official'},
  {artist:'Cold Chisel',tracks:['Bow River','Khe Sanh'],url:'https://www.youtube.com/results?search_query=Cold+Chisel+official'},
  {artist:'Pink Floyd',tracks:['Comfortably Numb','Time'],url:'https://www.youtube.com/results?search_query=Pink+Floyd+official'},
  {artist:'Spiderbait',tracks:['Black Betty','Buy Me a Pony'],url:'https://www.youtube.com/results?search_query=Spiderbait+official'},
  {artist:'Tubeway Army',tracks:['Are Friends Electric?'],url:'https://www.youtube.com/results?search_query=Tubeway+Army+Are+Friends+Electric'},
  {artist:'Kasabian',tracks:['Club Foot','Fire'],url:'https://www.youtube.com/results?search_query=Kasabian+official'},
  {artist:'The B-52s',tracks:['Rock Lobster','Private Idaho'],url:'https://www.youtube.com/results?search_query=The+B-52s+official'},
  {artist:'Died Pretty',tracks:['D.C.','Sweetheart'],url:'https://www.youtube.com/results?search_query=Died+Pretty+official'},
  {artist:'Devo',tracks:['Whip It','Girl U Want'],url:'https://www.youtube.com/results?search_query=Devo+official'},
  {artist:'Duran Duran',tracks:['The Chauffeur','Planet Earth'],url:'https://www.youtube.com/results?search_query=Duran+Duran+official'},
  {artist:'Absent Friends',tracks:['I Don\'t Want to Be with Nobody but You'],url:'https://www.youtube.com/results?search_query=Absent+Friends+Australian+band'},
  {artist:'INXS',tracks:["Don't Change"],url:'https://www.youtube.com/watch?v=sLm3Khusq_8',embed:'sLm3Khusq_8'},
  {artist:'Tumbleweed',tracks:['Sundial'],url:'https://www.youtube.com/results?search_query=Tumbleweed+Australian+band+official'},
  {artist:'Foo Fighters',tracks:['Everlong','The Pretender'],url:'https://www.youtube.com/results?search_query=Foo+Fighters+official'},
  {artist:'Alex Lloyd',tracks:['Amazing','Lucky Star'],url:'https://www.youtube.com/results?search_query=Alex+Lloyd+official'},
  {artist:'Do-Ré-Mi',tracks:['Man Overboard'],url:'https://www.youtube.com/results?search_query=Do-Re-Mi+Man+Overboard+Australian+band'},
  {artist:'The The',tracks:['Uncertain Smile','This Is the Day'],url:'https://www.youtube.com/results?search_query=The+The+official'},
  {artist:'Mi-Sex',tracks:['Computer Games','People'],url:'https://www.youtube.com/results?search_query=Mi-Sex+official'},
  {artist:'Radio Free Alice',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Radio+Free+Alice+official'},
  {artist:'The Slims',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Slims+Australian+band+official'},
  {artist:'Dumbhead',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Dumbhead+Australian+band+official'},
  {artist:'The Belair Lip Bombs',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Belair+Lip+Bombs+official'},
  {artist:'Floodlights',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Floodlights+Australian+band+official'},
  {artist:'Eliza & The Delusionals',tracks:['Just Exist'],url:'https://www.youtube.com/watch?v=tSyixJf9Yt8',embed:'tSyixJf9Yt8'},
  {artist:'Body Type',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Body+Type+Australian+band+official'},
  {artist:'Polly',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Polly+Australian+band+official'},
  {artist:'EXEK',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=EXEK+band+official'},
  {artist:'Inanna Indigo',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Inanna+Indigo+official'},
  {artist:'Snake Mountain',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Snake+Mountain+Australian+band+official'},
  {artist:'MACËY',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=MACEY+Australian+artist+official'},
  {artist:'Lazy Haze',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Lazy+Haze+Australian+band+official'},
  {artist:'Pacific Avenue',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Pacific+Avenue+band+official'},
  {artist:'Newport',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Newport+Australian+band+official'},
  {artist:'Yes Boone',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Yes+Boone+band+official'},
  {artist:'Glycereens',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Glycereens+band+official'},
  {artist:'Forbit',tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Forbit+Australian+band+official'},
  {artist:'Spacey Jane',tracks:['Booster Seat'],url:'https://www.youtube.com/watch?v=XxKuwlnx58q',embed:'XxKuwlnx58q'}
  ,
  {artist:'Fleetwood Mac',tracks:['Dreams','The Chain'],url:'https://www.youtube.com/results?search_query=Fleetwood+Mac+official'},
  {artist:'The Killers',tracks:['Mr. Brightside','When You Were Young'],url:'https://www.youtube.com/results?search_query=The+Killers+official'},
  {artist:'Arctic Monkeys',tracks:['Do I Wanna Know?','R U Mine?'],url:'https://www.youtube.com/results?search_query=Arctic+Monkeys+official'},
  {artist:'Prince',tracks:['Purple Rain','When Doves Cry'],url:'https://www.youtube.com/results?search_query=Prince+official'},
  {artist:'AC/DC',tracks:['Back in Black','Thunderstruck'],url:'https://www.youtube.com/results?search_query=ACDC+official'},
  {artist:'Aerosmith',tracks:['Dream On','Sweet Emotion'],url:'https://www.youtube.com/results?search_query=Aerosmith+official'},
  {artist:'The Beatles',tracks:['Come Together','A Day in the Life'],url:'https://www.youtube.com/results?search_query=The+Beatles+official'},
  {artist:'Bob Dylan',tracks:['Like a Rolling Stone','Tangled Up in Blue'],url:'https://www.youtube.com/results?search_query=Bob+Dylan+official'},
  {artist:'The Rolling Stones',tracks:['Gimme Shelter','Paint It, Black'],url:'https://www.youtube.com/results?search_query=The+Rolling+Stones+official'},
  {artist:'David Bowie',tracks:['Heroes','Life on Mars?'],url:'https://www.youtube.com/watch?v=lXgkuM2NhYI',embed:'lXgkuM2NhYI'},
  {artist:'Led Zeppelin',tracks:['Kashmir','When the Levee Breaks'],url:'https://www.youtube.com/results?search_query=Led+Zeppelin+official'},
  {artist:'Bruce Springsteen',tracks:['Born to Run','The River'],url:'https://www.youtube.com/results?search_query=Bruce+Springsteen+official'},
  {artist:'Neil Young',tracks:['Heart of Gold','Rockin\' in the Free World'],url:'https://www.youtube.com/results?search_query=Neil+Young+official'},
  {artist:'The Velvet Underground',tracks:['Sunday Morning','I\'m Waiting for the Man'],url:'https://www.youtube.com/results?search_query=The+Velvet+Underground+official'}
  ,
  {artist:'Queen',tracks:['Don\'t Stop Me Now','Bohemian Rhapsody'],url:'https://www.youtube.com/results?search_query=Queen+official'},
  {artist:'Eagles',tracks:['Hotel California','Life in the Fast Lane'],url:'https://www.youtube.com/results?search_query=Eagles+official'}  ,
  {artist:"The Saints",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Saints+official'}  ,
  {artist:"The Cure",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Cure+official'}  ,
  {artist:"New Order",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=New+Order+official'}  ,
  {artist:"R.E.M.",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=R.E.M.+official'}  ,
  {artist:"The Clash",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Clash+official'}  ,
  {artist:"Echo & The Bunnymen",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Echo+%26+The+Bunnymen+official'}  ,
  {artist:"U2",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=U2+official'}  ,
  {artist:"The Go-Betweens",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Go-Betweens+official'}  ,
  {artist:"Nick Cave & The Bad Seeds",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Nick+Cave+%26+The+Bad+Seeds+official'}  ,
  {artist:"Hoodoo Gurus",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Hoodoo+Gurus+official'}  ,
  {artist:"Joy Division",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Joy+Division+official'}  ,
  {artist:"The Smiths",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Smiths+official'}  ,
  {artist:"Radio Birdman",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Radio+Birdman+official'}  ,
  {artist:"The Triffids",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Triffids+official'}  ,
  {artist:"The Psychedelic Furs",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Psychedelic+Furs+official'}  ,
  {artist:"The Jam",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Jam+official'}  ,
  {artist:"Elvis Costello & The Attractions",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Elvis+Costello+%26+The+Attractions+official'}  ,
  {artist:"The Stranglers",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Stranglers+official'}  ,
  {artist:"Lou Reed",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Lou+Reed+official'}  ,
  {artist:"Iggy Pop",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Iggy+Pop+official'}  ,
  {artist:"The Doors",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Doors+official'}  ,
  {artist:"The Replacements",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Replacements+official'}  ,
  {artist:"Pixies",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Pixies+official'}  ,
  {artist:"The Stone Roses",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Stone+Roses+official'}  ,
  {artist:"The Jesus and Mary Chain",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Jesus+and+Mary+Chain+official'}  ,
  {artist:"The Charlatans",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Charlatans+official'}  ,
  {artist:"Franz Ferdinand",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Franz+Ferdinand+official'}  ,
  {artist:"Vampire Weekend",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Vampire+Weekend+official'}  ,
  {artist:"The National",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+National+official'}  ,
  {artist:"Interpol",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Interpol+official'}  ,
  {artist:"The Strokes",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Strokes+official'}  ,
  {artist:"Arcade Fire",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Arcade+Fire+official'}  ,
  {artist:"Radiohead",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Radiohead+official'}  ,
  {artist:"Oasis",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Oasis+official'}  ,
  {artist:"Blur",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Blur+official'}  ,
  {artist:"Pulp",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Pulp+official'}  ,
  {artist:"Suede",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Suede+official'}  ,
  {artist:"The Verve",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Verve+official'}  ,
  {artist:"The Kinks",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Kinks+official'}  ,
  {artist:"The Who",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Who+official'}  ,
  {artist:"Dire Straits",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Dire+Straits+official'}  ,
  {artist:"The Police",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Police+official'}  ,
  {artist:"XTC",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=XTC+official'}  ,
  {artist:"Squeeze",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Squeeze+official'}  ,
  {artist:"Split Enz",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Split+Enz+official'}  ,
  {artist:"Crowded House",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Crowded+House+official'}  ,
  {artist:"Icehouse",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Icehouse+official'}  ,
  {artist:"Australian Crawl",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Australian+Crawl+official'}  ,
  {artist:"The Angels",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Angels+official'}  ,
  {artist:"Paul Kelly",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Paul+Kelly+official'}  ,
  {artist:"The Sunnyboys",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Sunnyboys+official'}  ,
  {artist:"The Cruel Sea",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Cruel+Sea+official'}  ,
  {artist:"You Am I",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=You+Am+I+official'}  ,
  {artist:"Powderfinger",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Powderfinger+official'}  ,
  {artist:"The Whitlams",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Whitlams+official'}  ,
  {artist:"Something for Kate",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Something+for+Kate+official'}  ,
  {artist:"The Black Keys",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Black+Keys+official'}  ,
  {artist:"The War on Drugs",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+War+on+Drugs+official'}  ,
  {artist:"Tame Impala",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Tame+Impala+official'}  ,
  {artist:"The White Stripes",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+White+Stripes+official'}  ,
  {artist:"Primal Scream",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Primal+Scream+official'}  ,
  {artist:"The Dandy Warhols",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Dandy+Warhols+official'}  ,
  {artist:"Spiritualized",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Spiritualized+official'}  ,
  {artist:"The Waterboys",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Waterboys+official'}  ,
  {artist:"Depeche Mode",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Depeche+Mode+official'}  ,
  {artist:"Tears for Fears",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Tears+for+Fears+official'}  ,
  {artist:"The Cars",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Cars+official'}  ,
  {artist:"Blondie",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Blondie+official'}  ,
  {artist:"Siouxsie and the Banshees",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Siouxsie+and+the+Banshees+official'}  ,
  {artist:"The Pretenders",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Pretenders+official'}  ,
  {artist:"Roxy Music",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Roxy+Music+official'}  ,
  {artist:"Bryan Ferry",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Bryan+Ferry+official'}  ,
  {artist:"Peter Gabriel",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Peter+Gabriel+official'}  ,
  {artist:"Magazine",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Magazine+official'}  ,
  {artist:"Gang of Four",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Gang+of+Four+official'}  ,
  {artist:"The Human League",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Human+League+official'}  ,
  {artist:"Orchestral Manoeuvres in the Dark",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Orchestral+Manoeuvres+in+the+Dark+official'}  ,
  {artist:"The Specials",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Specials+official'}  ,
  {artist:"Madness",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Madness+official'}  ,
  {artist:"The Beat",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Beat+official'}  ,
  {artist:"The Style Council",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Style+Council+official'}  ,
  {artist:"Joe Jackson",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Joe+Jackson+official'}  ,
  {artist:"Graham Parker",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Graham+Parker+official'}  ,
  {artist:"The Undertones",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Undertones+official'}  ,
  {artist:"Buzzcocks",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Buzzcocks+official'}  ,
  {artist:"Wire",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Wire+official'}  ,
  {artist:"Television",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Television+official'}  ,
  {artist:"Patti Smith",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Patti+Smith+official'}  ,
  {artist:"Richard Hell & The Voidoids",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Richard+Hell+%26+The+Voidoids+official'}  ,
  {artist:"Ramones",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Ramones+official'}  ,
  {artist:"The Damned",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Damned+official'}  ,
  {artist:"Public Image Ltd",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Public+Image+Ltd+official'}  ,
  {artist:"Killing Joke",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Killing+Joke+official'}  ,
  {artist:"Bauhaus",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Bauhaus+official'}  ,
  {artist:"The Sisters of Mercy",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Sisters+of+Mercy+official'}  ,
  {artist:"The Mission",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Mission+official'}  ,
  {artist:"The Cult",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Cult+official'}  ,
  {artist:"Love and Rockets",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Love+and+Rockets+official'}  ,
  {artist:"Cocteau Twins",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Cocteau+Twins+official'}  ,
  {artist:"The Chameleons",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Chameleons+official'}  ,
  {artist:"The Sound",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Sound+official'}  ,
  {artist:"The Fall",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Fall+official'}  ,
  {artist:"The Birthday Party",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Birthday+Party+official'}  ,
  {artist:"Crime & The City Solution",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Crime+%26+The+City+Solution+official'}  ,
  {artist:"Rowland S. Howard",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Rowland+S.+Howard+official'}  ,
  {artist:"Beasts of Bourbon",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Beasts+of+Bourbon+official'}  ,
  {artist:"The Scientists",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Scientists+official'}  ,
  {artist:"The Moodists",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Moodists+official'}  ,
  {artist:"Laughing Clowns",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Laughing+Clowns+official'}  ,
  {artist:"The Apartments",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Apartments+official'}  ,
  {artist:"Bluebottle Kiss",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Bluebottle+Kiss+official'}  ,
  {artist:"The Celibate Rifles",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Celibate+Rifles+official'}  ,
  {artist:"The Lime Spiders",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Lime+Spiders+official'}  ,
  {artist:"The Stems",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Stems+official'}  ,
  {artist:"The Moffs",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Moffs+official'}  ,
  {artist:"The Clouds",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Clouds+official'}  ,
  {artist:"Underground Lovers",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Underground+Lovers+official'}  ,
  {artist:"The Fauves",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Fauves+official'}  ,
  {artist:"Even",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Even+official'}  ,
  {artist:"The Drones",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Drones+official'}  ,
  {artist:"Dirty Three",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Dirty+Three+official'}  ,
  {artist:"The Sleepy Jackson",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Sleepy+Jackson+official'}  ,
  {artist:"Augie March",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Augie+March+official'}  ,
  {artist:"The Panics",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Panics+official'}  ,
  {artist:"Youth Group",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Youth+Group+official'}  ,
  {artist:"British India",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=British+India+official'}  ,
  {artist:"DMA’S",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=DMA%E2%80%99S+official'}  ,
  {artist:"Rolling Blackouts Coastal Fever",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Rolling+Blackouts+Coastal+Fever+official'}  ,
  {artist:"The Teskey Brothers",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Teskey+Brothers+official'}  ,
  {artist:"King Gizzard & The Lizard Wizard",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=King+Gizzard+%26+The+Lizard+Wizard+official'}  ,
  {artist:"The Vines",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Vines+official'}  ,
  {artist:"Jet",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Jet+official'}  ,
  {artist:"Silverchair",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Silverchair+official'}  ,
  {artist:"Regurgitator",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Regurgitator+official'}  ,
  {artist:"Grinspoon",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Grinspoon+official'}  ,
  {artist:'Jebediah',tracks:['Leaving Home'],url:'https://www.youtube.com/watch?v=vkkmpFLDyZg',embed:'vkkmpFLDyZg'}  ,
  {artist:"Magic Dirt",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Magic+Dirt+official'}  ,
  {artist:"Custard",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Custard+official'}  ,
  {artist:"The Living End",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Living+End+official'}  ,
  {artist:"The Superjesus",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Superjesus+official'}  ,
  {artist:"Baby Animals",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Baby+Animals+official'}  ,
  {artist:"Divinyls",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Divinyls+official'}  ,
  {artist:"Boom Crash Opera",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Boom+Crash+Opera+official'}  ,
  {artist:"Machinations",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Machinations+official'}  ,
  {artist:"Flowers",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Flowers+official'}  ,
  {artist:"The Reels",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Reels+official'}  ,
  {artist:"The Sports",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Sports+official'}  ,
  {artist:"Jo Jo Zep & The Falcons",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Jo+Jo+Zep+%26+The+Falcons+official'}  ,
  {artist:"Dragon",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Dragon+official'}  ,
  {artist:"Skyhooks",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Skyhooks+official'}  ,
  {artist:"Mondo Rock",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Mondo+Rock+official'}  ,
  {artist:"The Black Sorrows",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Black+Sorrows+official'}  ,
  {artist:"The Badloves",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Badloves+official'}  ,
  {artist:"Grant Lee Buffalo",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Grant+Lee+Buffalo+official'}  ,
  {artist:"Wilco",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Wilco+official'}  ,
  {artist:"The Decemberists",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Decemberists+official'}  ,
  {artist:"Spoon",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Spoon+official'}  ,
  {artist:"Modest Mouse",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Modest+Mouse+official'}  ,
  {artist:"Death Cab for Cutie",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Death+Cab+for+Cutie+official'}  ,
  {artist:"The Shins",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Shins+official'}  ,
  {artist:"Belle and Sebastian",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Belle+and+Sebastian+official'}  ,
  {artist:"Teenage Fanclub",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Teenage+Fanclub+official'}  ,
  {artist:"Ride",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Ride+official'}  ,
  {artist:"Slowdive",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Slowdive+official'}  ,
  {artist:"My Bloody Valentine",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=My+Bloody+Valentine+official'}  ,
  {artist:"Editors",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Editors+official'}  ,
  {artist:"Foals",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Foals+official'}  ,
  {artist:"The Last Shadow Puppets",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Last+Shadow+Puppets+official'}  ,
  {artist:"The Libertines",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=The+Libertines+official'}
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
function sydHour(){
  const parts=new Intl.DateTimeFormat('en-AU',{timeZone:'Australia/Sydney',hour:'2-digit',hour12:false}).formatToParts(new Date());
  return parseInt(parts.find(p=>p.type==='hour')?.value||'0',10)%24;
}
function hash(s){let n=0;for(const c of s)n=(n*31+c.charCodeAt(0))>>>0;return n;}

/*
  Fixed 200-song rotation:
  - changes every 3 hours in Sydney
  - all entries have a stored direct YouTube video ID
  - no search URLs, no external resolver, no placeholder tracks
  - every one of the 200 songs appears before the sequence repeats
*/
function seededShuffle(list,seed){
  const a=list.slice();
  let s=seed>>>0;
  const rnd=()=>{
    s=(s*1664525+1013904223)>>>0;
    return s/4294967296;
  };
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(rnd()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

const verifiedSongs=[
  {
    artist: "Fleetwood Mac",
    track: "Gypsy",
    videoId: "mwgg1Pu6cNg"
  },
  {
    artist: "Fleetwood Mac",
    track: "Everywhere",
    videoId: "YF1R0hc5Q2I"
  },
  {
    artist: "Fleetwood Mac",
    track: "Landslide (Live)",
    videoId: "WM7-PYtXtJM"
  },
  {
    artist: "Fleetwood Mac",
    track: "Seven Wonders",
    videoId: "9b4F_ppjnKU"
  },
  {
    artist: "Fleetwood Mac",
    track: "Little Lies",
    videoId: "uCGD9dT12C0"
  },
  {
    artist: "Fleetwood Mac",
    track: "Dreams",
    videoId: "Y3ywicffOj4"
  },
  {
    artist: "Fleetwood Mac",
    track: "Silver Springs (Live)",
    videoId: "eDwi-8n054s"
  },
  {
    artist: "Fleetwood Mac",
    track: "The Chain",
    videoId: "kBYHwH1Vb-c"
  },
  {
    artist: "The Killers",
    track: "Mr. Brightside",
    videoId: "gGdGFtwCNBE"
  },
  {
    artist: "The Killers",
    track: "Somebody Told Me",
    videoId: "Y5fBdpreJiU"
  },
  {
    artist: "The Killers",
    track: "Human",
    videoId: "RIZdjT1472Y"
  },
  {
    artist: "The Killers",
    track: "When You Were Young",
    videoId: "ff0oWESdmH0"
  },
  {
    artist: "The Killers",
    track: "Read My Mind",
    videoId: "zc8hbSM1zVo"
  },
  {
    artist: "The Killers",
    track: "Shot At The Night",
    videoId: "X4YK-DEkvcw"
  },
  {
    artist: "The Killers",
    track: "All These Things That I've Done",
    videoId: "sZTpLvsYYHw"
  },
  {
    artist: "The Killers",
    track: "Just Another Girl",
    videoId: "3BwzP1laWkQ"
  },
  {
    artist: "The Killers",
    track: "The Man",
    videoId: "w3xcybdis1k"
  },
  {
    artist: "Arctic Monkeys",
    track: "Do I Wanna Know?",
    videoId: "bpOSxM0rNPM"
  },
  {
    artist: "Arctic Monkeys",
    track: "R U Mine?",
    videoId: "VQH8ZTgna3Q"
  },
  {
    artist: "Arctic Monkeys",
    track: "Why'd You Only Call Me When You're High?",
    videoId: "6366dxFf-Os"
  },
  {
    artist: "Arctic Monkeys",
    track: "Fluorescent Adolescent",
    videoId: "ma9I9VBKPiw"
  },
  {
    artist: "Arctic Monkeys",
    track: "Arabella",
    videoId: "Nj8r3qmOoZ8"
  },
  {
    artist: "Arctic Monkeys",
    track: "Snap Out Of It",
    videoId: "H8tLS_NOWLs"
  },
  {
    artist: "Aerosmith",
    track: "I Don't Want to Miss a Thing",
    videoId: "JkK8g6FMEXE"
  },
  {
    artist: "Aerosmith",
    track: "Crazy",
    videoId: "NMNgbISmF4I"
  },
  {
    artist: "Aerosmith",
    track: "Cryin'",
    videoId: "qfNmyxV2Ncw"
  },
  {
    artist: "Aerosmith",
    track: "Amazing",
    videoId: "zSmOvYzSeaQ"
  },
  {
    artist: "Aerosmith",
    track: "Dream On",
    videoId: "89dGC8de0CA"
  },
  {
    artist: "Aerosmith",
    track: "Hole In My Soul",
    videoId: "HaC0s-FP-r4"
  },
  {
    artist: "Aerosmith",
    track: "Angel",
    videoId: "CBTOGVb_cQg"
  },
  {
    artist: "Aerosmith",
    track: "Walk This Way",
    videoId: "4B_UYYPb-Gk"
  },
  {
    artist: "The Beatles",
    track: "Don't Let Me Down",
    videoId: "NCtzkaL2t_Y"
  },
  {
    artist: "The Beatles",
    track: "Hey Jude",
    videoId: "A_MjCqQoLLA"
  },
  {
    artist: "The Beatles",
    track: "Here Comes The Sun",
    videoId: "KQetemT1sWc"
  },
  {
    artist: "The Beatles",
    track: "Hello, Goodbye",
    videoId: "rblYSKz_VnI"
  },
  {
    artist: "The Beatles",
    track: "Help!",
    videoId: "2Q_ZzBGPdqE"
  },
  {
    artist: "The Beatles",
    track: "A Day In The Life",
    videoId: "usNsCeOV4GM"
  },
  {
    artist: "The Beatles",
    track: "Come Together",
    videoId: "45cYwDMibGo"
  },
  {
    artist: "The Beatles",
    track: "Something",
    videoId: "UelDrZ1aFeY"
  },
  {
    artist: "The Beatles",
    track: "Penny Lane",
    videoId: "S-rB0pHI9fU"
  },
  {
    artist: "Foo Fighters",
    track: "The Pretender",
    videoId: "SBjQ9tuuTJQ"
  },
  {
    artist: "Foo Fighters",
    track: "Everlong",
    videoId: "eBG7P-K-r1Y"
  },
  {
    artist: "Foo Fighters",
    track: "Best Of You",
    videoId: "h_L4Rixya64"
  },
  {
    artist: "Foo Fighters",
    track: "Learn To Fly",
    videoId: "1VQ_3sBZEm0"
  },
  {
    artist: "Foo Fighters",
    track: "Walk",
    videoId: "4PkcfQtibmU"
  },
  {
    artist: "Foo Fighters",
    track: "All My Life",
    videoId: "xQ04WbgI9rg"
  },
  {
    artist: "Foo Fighters",
    track: "My Hero",
    videoId: "EqWRaAF6_WY"
  },
  {
    artist: "Foo Fighters",
    track: "Times Like These",
    videoId: "rhzmNRtIp8k"
  },
  {
    artist: "Foo Fighters",
    track: "The Sky Is A Neighborhood",
    videoId: "TRqiFPpw2fY"
  },
  {
    artist: "Bob Dylan",
    track: "Hurricane",
    videoId: "bpZvg_FjL3Q"
  },
  {
    artist: "Bob Dylan",
    track: "Like a Rolling Stone",
    videoId: "IwOfCgkyEj0"
  },
  {
    artist: "Bob Dylan",
    track: "Knockin' On Heaven's Door",
    videoId: "rm9coqlk8fY"
  },
  {
    artist: "Bob Dylan",
    track: "Blowin' in the Wind",
    videoId: "MMFj8uDubsE"
  },
  {
    artist: "Bob Dylan",
    track: "Tangled Up In Blue",
    videoId: "YwSZvHqf9qM"
  },
  {
    artist: "Bob Dylan",
    track: "Things Have Changed",
    videoId: "L9EKqQWPjyo"
  },
  {
    artist: "Bob Dylan",
    track: "The Times They Are A-Changin'",
    videoId: "90WD_ats6eE"
  },
  {
    artist: "Bob Dylan",
    track: "Don't Think Twice, It's All Right",
    videoId: "1iHhWh9FtsQ"
  },
  {
    artist: "Bob Dylan",
    track: "A Hard Rain's A-Gonna Fall",
    videoId: "T5al0HmR4to"
  },
  {
    artist: "Bob Dylan",
    track: "Thunder On The Mountain",
    videoId: "0RPkJeziNyI"
  },
  {
    artist: "The Rolling Stones",
    track: "Anybody Seen My Baby",
    videoId: "BinwuzZVjnE"
  },
  {
    artist: "The Rolling Stones",
    track: "Angie",
    videoId: "RcZn2-bGXqQ"
  },
  {
    artist: "The Rolling Stones",
    track: "Start Me Up",
    videoId: "SGyOaCXr8Lw"
  },
  {
    artist: "The Rolling Stones",
    track: "Waiting On A Friend",
    videoId: "MKLVmBOOqVU"
  },
  {
    artist: "The Rolling Stones",
    track: "Gimme Shelter (Live)",
    videoId: "8kl6q_9qZOs"
  },
  {
    artist: "The Rolling Stones",
    track: "Angry",
    videoId: "_mEC54eTuGw"
  },
  {
    artist: "The Rolling Stones",
    track: "Ride 'Em On Down",
    videoId: "qEuV82GqQnE"
  },
  {
    artist: "The Rolling Stones",
    track: "She's So Cold",
    videoId: "jo34VhfcetU"
  },
  {
    artist: "Led Zeppelin",
    track: "Whole Lotta Love",
    videoId: "HQmmM_qwG4k"
  },
  {
    artist: "Led Zeppelin",
    track: "Kashmir (Celebration Day)",
    videoId: "PD-MdiUm1_Y"
  },
  {
    artist: "Led Zeppelin",
    track: "Stairway To Heaven",
    videoId: "QkF3oxziUI4"
  },
  {
    artist: "Led Zeppelin",
    track: "Immigrant Song (Live)",
    videoId: "RlNhD0oS5pk"
  },
  {
    artist: "Led Zeppelin",
    track: "Black Dog (Live)",
    videoId: "6tlSx0jkuLM"
  },
  {
    artist: "Led Zeppelin",
    track: "Going To California",
    videoId: "nhVfuacsLDw"
  },
  {
    artist: "Led Zeppelin",
    track: "Ramble On",
    videoId: "LzGBQerkvWs"
  },
  {
    artist: "Bruce Springsteen",
    track: "Dancing In the Dark",
    videoId: "129kuDCQtHs"
  },
  {
    artist: "Bruce Springsteen",
    track: "Streets of Philadelphia",
    videoId: "4z2DtNW79sQ"
  },
  {
    artist: "Bruce Springsteen",
    track: "Tougher Than the Rest",
    videoId: "_91hNV6vuBY"
  },
  {
    artist: "Bruce Springsteen",
    track: "My Hometown (Live)",
    videoId: "KZ3BJYx43y0"
  },
  {
    artist: "Bruce Springsteen",
    track: "Born in the U.S.A.",
    videoId: "EPhWR4d3FJQ"
  },
  {
    artist: "Bruce Springsteen",
    track: "You Never Can Tell (Live)",
    videoId: "L-Ds-FXGGQg"
  },
  {
    artist: "Bruce Springsteen",
    track: "I'm On Fire",
    videoId: "lrpXArn3hII"
  },
  {
    artist: "Bruce Springsteen",
    track: "Born to Run",
    videoId: "IxuThNgl3YA"
  },
  {
    artist: "Bruce Springsteen",
    track: "Glory Days",
    videoId: "6vQpW9XRiyM"
  },
  {
    artist: "Bruce Springsteen",
    track: "Waitin' On A Sunny Day",
    videoId: "TiCxqhu9cio"
  },
  {
    artist: "Queen",
    track: "Bohemian Rhapsody",
    videoId: "fJ9rUzIMcZQ"
  },
  {
    artist: "Queen",
    track: "Don't Stop Me Now",
    videoId: "HgzGwKwLmgM"
  },
  {
    artist: "Queen",
    track: "Another One Bites the Dust",
    videoId: "rY0WxgSXdEE"
  },
  {
    artist: "Queen",
    track: "We Will Rock You",
    videoId: "-tJYN-eG1zk"
  },
  {
    artist: "Queen",
    track: "I Want To Break Free",
    videoId: "f4Mc-NYPHaQ"
  },
  {
    artist: "Queen",
    track: "Somebody To Love",
    videoId: "kijpcUv-b8M"
  },
  {
    artist: "Queen",
    track: "Radio Ga Ga",
    videoId: "azdwsXLmrHE"
  },
  {
    artist: "Queen",
    track: "Killer Queen",
    videoId: "2ZBtPf7FOoM"
  },
  {
    artist: "Queen",
    track: "We Are The Champions",
    videoId: "04854XqcfCY"
  },
  {
    artist: "Queen",
    track: "The Show Must Go On",
    videoId: "t99KH0TR-J4"
  },
  {
    artist: "Eagles",
    track: "Hotel California (Live)",
    videoId: "09839DpTctU"
  },
  {
    artist: "Eagles",
    track: "Lyin' Eyes",
    videoId: "PqccEpqvwPY"
  },
  {
    artist: "Eagles",
    track: "Tequila Sunrise",
    videoId: "bZxhQJC9hWk"
  },
  {
    artist: "Eagles",
    track: "I Can't Tell You Why",
    videoId: "Odcn6qk94bs"
  },
  {
    artist: "Eagles",
    track: "Take It Easy",
    videoId: "AaBw37-nWaY"
  },
  {
    artist: "Eagles",
    track: "Take It To The Limit",
    videoId: "MxQXKO194XM"
  },
  {
    artist: "Eagles",
    track: "Desperado",
    videoId: "FiPqUjLMuA8"
  },
  {
    artist: "Eagles",
    track: "In The City",
    videoId: "J39LK_wDzKw"
  },
  {
    artist: "Eagles",
    track: "New Kid In Town",
    videoId: "_fW2rw8SwoA"
  },
  {
    artist: "U2",
    track: "With Or Without You",
    videoId: "ujNeHIo7oTE"
  },
  {
    artist: "U2",
    track: "I Still Haven't Found What I'm Looking For",
    videoId: "e3-5YC_oHjE"
  },
  {
    artist: "U2",
    track: "Beautiful Day",
    videoId: "co6WMzDOh1o"
  },
  {
    artist: "U2",
    track: "One",
    videoId: "ftjEcrrf7r0"
  },
  {
    artist: "U2",
    track: "Pride (In The Name Of Love)",
    videoId: "LHcP4MWABGY"
  },
  {
    artist: "U2",
    track: "Ordinary Love (Live)",
    videoId: "Fum3g86zUPc"
  },
  {
    artist: "U2",
    track: "Vertigo",
    videoId: "98W9QuMq-2k"
  },
  {
    artist: "U2",
    track: "Where The Streets Have No Name",
    videoId: "GzZWSrr5wFI"
  },
  {
    artist: "U2",
    track: "Sweetest Thing",
    videoId: "5WybiA263bw"
  },
  {
    artist: "U2",
    track: "Sunday Bloody Sunday (Live)",
    videoId: "EM4vblG6BVQ"
  },
  {
    artist: "U2",
    track: "Magnificent",
    videoId: "Yi52HjJbwVQ"
  },
  {
    artist: "Radiohead",
    track: "Creep",
    videoId: "XFkzRNyygfk"
  },
  {
    artist: "Radiohead",
    track: "No Surprises",
    videoId: "u5CVsCnxyXg"
  },
  {
    artist: "Radiohead",
    track: "Karma Police",
    videoId: "1uYWYWPc9HU"
  },
  {
    artist: "Radiohead",
    track: "High and Dry",
    videoId: "7qFfFVSerQo"
  },
  {
    artist: "Radiohead",
    track: "Fake Plastic Trees",
    videoId: "n5h0qHwNrHk"
  },
  {
    artist: "Radiohead",
    track: "Lotus Flower",
    videoId: "cfOa1a8hYP8"
  },
  {
    artist: "Radiohead",
    track: "Daydreaming",
    videoId: "TTAU7lLDZYU"
  },
  {
    artist: "Radiohead",
    track: "Street Spirit (Fade Out)",
    videoId: "LCJblaUkkfc"
  },
  {
    artist: "Radiohead",
    track: "Jigsaw Falling Into Place",
    videoId: "GoLJJRIWCLU"
  },
  {
    artist: "Radiohead",
    track: "House of Cards",
    videoId: "8nTFjVm9sTQ"
  },
  {
    artist: "Radiohead",
    track: "Burn The Witch",
    videoId: "yI2oS2hoL0k"
  },
  {
    artist: "Oasis",
    track: "Wonderwall",
    videoId: "6hzrDeceEKc"
  },
  {
    artist: "Oasis",
    track: "Don't Look Back In Anger",
    videoId: "r8OipmKFDeM"
  },
  {
    artist: "Oasis",
    track: "Stop Crying Your Heart Out",
    videoId: "dhZUsNJ-LQU"
  },
  {
    artist: "Oasis",
    track: "Stand By Me",
    videoId: "maTP315XZCQ"
  },
  {
    artist: "Oasis",
    track: "Champagne Supernova",
    videoId: "tI-5uv4wryI"
  },
  {
    artist: "Oasis",
    track: "Whatever",
    videoId: "EHfx9LXzxpw"
  },
  {
    artist: "Oasis",
    track: "Supersonic",
    videoId: "BJKpUH2kJQg"
  },
  {
    artist: "Oasis",
    track: "Don't Go Away",
    videoId: "Ab1nJg4RKw0"
  },
  {
    artist: "Oasis",
    track: "Live Forever",
    videoId: "TDe1DqxwJoc"
  },
  {
    artist: "The Police",
    track: "Every Breath You Take",
    videoId: "OMOGaugKpzs"
  },
  {
    artist: "The Police",
    track: "Roxanne",
    videoId: "3T1c7GkzRQQ"
  },
  {
    artist: "The Police",
    track: "Message In A Bottle",
    videoId: "MbXWrmQW-OE"
  },
  {
    artist: "The Police",
    track: "Every Little Thing She Does Is Magic",
    videoId: "aENX1Sf3fgQ"
  },
  {
    artist: "The Police",
    track: "Walking On The Moon",
    videoId: "zPwMdZOlPo8"
  },
  {
    artist: "The Police",
    track: "Don't Stand So Close To Me",
    videoId: "KNIZofPB8ZM"
  },
  {
    artist: "The Police",
    track: "Wrapped Around Your Finger",
    videoId: "svWINSRhQU0"
  },
  {
    artist: "The Police",
    track: "De Do Do Do, De Da Da Da",
    videoId: "7v2GDbEmjGE"
  },
  {
    artist: "The Police",
    track: "So Lonely",
    videoId: "MX6MvV8cbh8"
  },
  {
    artist: "The Police",
    track: "Can't Stand Losing You",
    videoId: "nH0vjLwMyc4"
  },
  {
    artist: "The Police",
    track: "Spirits In The Material World",
    videoId: "BHOevX4DlGk"
  },
  {
    artist: "The Police",
    track: "Synchronicity II",
    videoId: "o5FPPoLqkCk"
  },
  {
    artist: "Tame Impala",
    track: "The Less I Know The Better",
    videoId: "2SUwOgmvzK4"
  },
  {
    artist: "Tame Impala",
    track: "Let It Happen",
    videoId: "pFptt7Cargc"
  },
  {
    artist: "Tame Impala",
    track: "Feels Like We Only Go Backwards",
    videoId: "wycjnCCgUes"
  },
  {
    artist: "Tame Impala",
    track: "Borderline",
    videoId: "2g5xkLqIElU"
  },
  {
    artist: "Tame Impala",
    track: "New Person, Same Old Mistakes",
    videoId: "_9bw_VtMUGA"
  },
  {
    artist: "Tame Impala",
    track: "Dracula",
    videoId: "xnP7qKxwzjg"
  },
  {
    artist: "Tame Impala",
    track: "Loser",
    videoId: "s3a4OQR-10M"
  },
  {
    artist: "Tame Impala",
    track: "Eventually",
    videoId: "GHe8kKO8uds"
  },
  {
    artist: "Tame Impala",
    track: "Mind Mischief",
    videoId: "BgK_Er7WZVg"
  },
  {
    artist: "Tame Impala",
    track: "Is It True",
    videoId: "KN8nJFLu1Rk"
  },
  {
    artist: "Tame Impala",
    track: "Lost in Yesterday",
    videoId: "utCjuKDXQsE"
  },
  {
    artist: "Tame Impala",
    track: "Half Full Glass of Wine",
    videoId: "zfcHq0hhFWg"
  },
  {
    artist: "Tame Impala",
    track: "One More Hour",
    videoId: "Y0U6u2D8cMU"
  },
  {
    artist: "Tame Impala",
    track: "'Cause I'm A Man",
    videoId: "hefh9dFnChY"
  },
  {
    artist: "Tame Impala",
    track: "Breathe Deeper",
    videoId: "gs-MtItyOFc"
  },
  {
    artist: "Tame Impala",
    track: "Elephant",
    videoId: "LnKUD_OztRE"
  },
  {
    artist: "Depeche Mode",
    track: "Enjoy the Silence",
    videoId: "aGSKrC7dGcY"
  },
  {
    artist: "Depeche Mode",
    track: "Personal Jesus",
    videoId: "u1xrNaTO1bI"
  },
  {
    artist: "Depeche Mode",
    track: "Never Let Me Down Again",
    videoId: "snILjFUkk_A"
  },
  {
    artist: "Depeche Mode",
    track: "Policy of Truth",
    videoId: "M2VBmHOYpV8"
  },
  {
    artist: "Depeche Mode",
    track: "Strangelove",
    videoId: "JIrm0dHbCDU"
  },
  {
    artist: "Depeche Mode",
    track: "Just Can't Get Enough",
    videoId: "_6FBfAQ-NDE"
  },
  {
    artist: "Depeche Mode",
    track: "Precious",
    videoId: "8yn3ViE6mhY"
  },
  {
    artist: "Depeche Mode",
    track: "Everything Counts",
    videoId: "1t-gK-9EIq4"
  },
  {
    artist: "Depeche Mode",
    track: "It's No Good",
    videoId: "stpaq27-V70"
  },
  {
    artist: "Depeche Mode",
    track: "Heaven",
    videoId: "Fy7FzXLin7o"
  },
  {
    artist: "David Bowie",
    track: "Heroes",
    videoId: "lXgkuM2NhYI"
  },
  {
    artist: "David Bowie",
    track: "Lazarus",
    videoId: "y-JqH1M4Ya8"
  },
  {
    artist: "David Bowie",
    track: "Blackstar",
    videoId: "kszLwBaC4Sw"
  },
  {
    artist: "David Bowie",
    track: "Ashes To Ashes",
    videoId: "HyMm4rJemtI"
  },
  {
    artist: "David Bowie",
    track: "Valentine's Day",
    videoId: "S4R8HTIgHUU"
  },
  {
    artist: "David Bowie",
    track: "The Stars (Are Out Tonight)",
    videoId: "gH7dMBcg-gE"
  },
  {
    artist: "David Bowie",
    track: "Where Are We Now?",
    videoId: "QWtsV50_-p4"
  },
  {
    artist: "David Bowie",
    track: "Rebel Rebel (Live)",
    videoId: "eF551z9KlA8"
  },
  {
    artist: "David Bowie",
    track: "Blue Jean",
    videoId: "LTYvjrM6djo"
  },
  {
    artist: "David Bowie",
    track: "Ziggy Stardust (Live)",
    videoId: "G8sdsW93ThQ"
  },
  {
    artist: "The Cure",
    track: "Just Like Heaven",
    videoId: "n3nPiBai66M"
  },
  {
    artist: "The Cure",
    track: "Friday I'm In Love",
    videoId: "mGgMZpGYiy8"
  },
  {
    artist: "The Cure",
    track: "Boys Don't Cry",
    videoId: "9GkVhgIeGJQ"
  },
  {
    artist: "The Cure",
    track: "Pictures Of You",
    videoId: "UmFFTkjs-O0"
  },
  {
    artist: "The Cure",
    track: "Lullaby",
    videoId: "ijxk-fgcg7c"
  },
  {
    artist: "The Cure",
    track: "Lovesong",
    videoId: "ks_qOI0lzho"
  },
  {
    artist: "The Cure",
    track: "In Between Days",
    videoId: "scif2vfg1ug"
  },
  {
    artist: "The Cure",
    track: "Close To Me",
    videoId: "BjvfIJstWeg"
  },
  {
    artist: "The Cure",
    track: "A Forest",
    videoId: "xik-y0xlpZ0"
  },
  {
    artist: "Midnight Oil",
    track: "Beds Are Burning",
    videoId: "ejorQVy3m8E"
  },
  {
    artist: "Midnight Oil",
    track: "The Dead Heart",
    videoId: "16bFBzx7I_0"
  },
  {
    artist: "Midnight Oil",
    track: "Blue Sky Mine",
    videoId: "Ofrqm6-LCqs"
  },
  {
    artist: "Midnight Oil",
    track: "Forgotten Years",
    videoId: "X9eap_cKLP4"
  },
  {
    artist: "Midnight Oil",
    track: "King Of The Mountain",
    videoId: "OuC_k51NUqU"
  },
  {
    artist: "Midnight Oil",
    track: "Dreamworld",
    videoId: "OcKcjpSWmm0"
  },
  {
    artist: "Midnight Oil",
    track: "Put Down That Weapon",
    videoId: "XzEwCc4WVKs"
  },
  {
    artist: "Midnight Oil",
    track: "Power and the Passion",
    videoId: "6pKPNnk-JhE"
  },
  {
    artist: "Midnight Oil",
    track: "Truganini",
    videoId: "LcxdbZ5chcc"
  }
];
const songRotation=seededShuffle(verifiedSongs,0x20050319);

function sydneySlotKey(){
  const parts=new Intl.DateTimeFormat('en-CA',{
    timeZone:'Australia/Sydney',
    year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hour12:false
  }).formatToParts(new Date()).reduce((o,p)=>(o[p.type]=p.value,o),{});
  const y=+parts.year,m=+parts.month,d=+parts.day,h=(+parts.hour)%24;
  return {
    key:`${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}-${Math.floor(h/3)}`,
    serial:Math.floor(Date.UTC(y,m-1,d,Math.floor(h/3)*3)/(3*60*60*1000))
  };
}

const currentSlot=sydneySlotKey();
const songIndex=((currentSlot.serial%songRotation.length)+songRotation.length)%songRotation.length;
const songPick=songRotation[songIndex];
const key=currentSlot.key;
const clipUrl='https://www.youtube.com/watch?v='+songPick.videoId;
const artworkUrl='https://i.ytimg.com/vi/'+songPick.videoId+'/maxresdefault.jpg';

setInterval(()=>{
  if(sydneySlotKey().key!==currentSlot.key)location.reload();
},60000);

document.querySelectorAll('[data-daily-artist]').forEach(e=>e.textContent=songPick.artist);
document.querySelectorAll('[data-daily-track]').forEach(e=>e.textContent=songPick.track);
document.querySelectorAll('[data-youtube]').forEach(e=>{
  e.href=clipUrl;
  e.target='_blank';
  e.rel='noopener';
  e.removeAttribute('aria-disabled');
  e.classList.remove('link-disabled');
  // Only the dedicated text link gets a label. Do not overwrite
  // artwork/video-link contents (which would remove their image).
  if(e.classList.contains('text-link')){
    e.textContent='Watch song on YouTube →';
  }
});

document.querySelectorAll('[data-artist-image]').forEach(e=>{
  e.src=artworkUrl;
  e.alt=songPick.artist+' — '+songPick.track;
  e.onerror=()=>{if(!e.dataset.fallback){e.dataset.fallback='1';e.src='https://i.ytimg.com/vi/'+songPick.videoId+'/hqdefault.jpg';}else{e.onerror=null;e.src='assets/img/cassette.webp';}};
});

document.querySelectorAll('[data-video-frame]').forEach(frame=>{
  frame.innerHTML=`
    <a class="daily-video-poster" href="${clipUrl}" target="_blank" rel="noopener" aria-label="Watch ${songPick.artist} — ${songPick.track} on YouTube">
      <img src="${artworkUrl}" alt="${songPick.artist} — ${songPick.track}" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='https://i.ytimg.com/vi/${songPick.videoId}/hqdefault.jpg';}else{this.onerror=null;this.src='assets/img/cassette.webp';}">
      <span class="daily-video-shade"></span>
      <span class="daily-video-play">▶</span>
      <span class="daily-video-copy">
        <small>WATCH ON YOUTUBE</small>
        <strong>${songPick.artist}</strong>
        <em>${songPick.track}</em>
      </span>
    </a>`;
});

const archivePick=archive[hash(key+'archive')%archive.length];
document.querySelectorAll('[data-archive-img]').forEach(e=>{e.src=archivePick.img;e.alt=archivePick.title;});
document.querySelectorAll('[data-archive-title]').forEach(e=>e.textContent=archivePick.title);
document.querySelectorAll('[data-archive-meta]').forEach(e=>e.textContent=archivePick.meta);
document.querySelectorAll('[data-archive-text]').forEach(e=>e.textContent=archivePick.text);
document.querySelectorAll('[data-archive-link]').forEach(e=>e.href='archive.html');

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
  {team:'Green Bay Packers',match:'Packers @ New York Jets',when:'Monday 21 September • 3:00am Sydney',venue:'MetLife Stadium',start:'2026-09-21T03:00:00+10:00',url:'https://www.nfl.com/games/packers-at-jets-2026-reg-2'},
  {team:'Seattle Seahawks',match:'Seahawks @ Arizona Cardinals',when:'Monday 21 September • 6:25am Sydney',venue:'State Farm Stadium',start:'2026-09-21T06:25:00+10:00',url:'https://www.nfl.com/games/seahawks-at-cardinals-2026-reg-2'},
  {team:'New York Giants',match:'Giants @ Los Angeles Rams',when:'Tuesday 22 September • 10:15am Sydney',venue:'SoFi Stadium',start:'2026-09-22T10:15:00+10:00',url:'https://www.nfl.com/games/giants-at-rams-2026-reg-2'}
];
const now=new Date();
let visibleSports=sportsFixtures.filter(f=>new Date(f.start)>now);
if(!visibleSports.length){
  visibleSports=[{team:'Fixture refresh due',match:'Next games will appear here after the weekly refresh.',when:'',venue:'',start:'',url:'#home-sports-title'}];
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
document.querySelectorAll('[data-live-updated]').forEach(e=>e.textContent='Fixtures refreshed 18 Sep 2026');
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
