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
  {artist:'David Bowie',tracks:['Heroes','Life on Mars?'],url:'https://www.youtube.com/results?search_query=David+Bowie+official'},
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
  {artist:"Jebediah",tracks:['Featured track'],url:'https://www.youtube.com/results?search_query=Jebediah+official'}  ,
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
  Song rotation:
  - changes every 8 hours in Sydney
  - uses the wider named-song library, not just the small embed-only subset
  - avoids repeating the same song until the full rotation has cycled
  - avoids the same artist in back-to-back slots where possible
*/
const rotationSongs=[];
regulars.forEach(r=>{
  (r.tracks||[]).forEach((track,trackIndex)=>{
    if(!track || /^(Featured track|Featured performance|Search the latest clip)$/i.test(track))return;
    rotationSongs.push({
      artist:r.artist,
      track,
      url:r.url||'',
      embed:trackIndex===0 ? (r.embed||'') : ''
    });
  });
});

rotationSongs.sort((a,b)=>{
  const ah=hash('rotation-v2|'+a.artist+'|'+a.track);
  const bh=hash('rotation-v2|'+b.artist+'|'+b.track);
  return ah-bh || (a.artist+a.track).localeCompare(b.artist+b.track);
});

function sydneySlotNumber(){
  const now=new Date();
  const parts=new Intl.DateTimeFormat('en-CA',{
    timeZone:'Australia/Sydney',
    year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',hour12:false
  }).formatToParts(now).reduce((o,p)=>(o[p.type]=p.value,o),{});
  const utcLike=Date.UTC(+parts.year,+parts.month-1,+parts.day,Math.floor((+parts.hour%24)/8)*8);
  return Math.floor(utcLike/(8*60*60*1000));
}

const slotNumber=sydneySlotNumber();
let songIndex=((slotNumber%rotationSongs.length)+rotationSongs.length)%rotationSongs.length;
const previousIndex=((songIndex-1)+rotationSongs.length)%rotationSongs.length;
if(rotationSongs.length>1 && rotationSongs[songIndex].artist===rotationSongs[previousIndex].artist){
  songIndex=(songIndex+1)%rotationSongs.length;
}
const songPick=rotationSongs[songIndex];
const artistPick=regulars.find(r=>r.artist===songPick.artist) || {artist:songPick.artist,tracks:[songPick.track]};
const trackPick=songPick.track;
const key=sydDate()+'-slot-'+Math.floor(sydHour()/8);
const exactSearch='https://www.youtube.com/results?search_query='+encodeURIComponent(songPick.artist+' '+trackPick+' official');
const clipUrl=songPick.embed
  ? 'https://www.youtube.com/watch?v='+songPick.embed
  : ((songPick.url||'').includes('watch?v=') && (artistPick.tracks||[]).length===1 ? songPick.url : exactSearch);
artistPick.embed=songPick.embed;

document.querySelectorAll('[data-daily-artist]').forEach(e=>e.textContent=artistPick.artist);
document.querySelectorAll('[data-daily-track]').forEach(e=>e.textContent=trackPick);
document.querySelectorAll('[data-youtube]').forEach(e=>{e.href=clipUrl;});

document.querySelectorAll('[data-video-frame]').forEach(frame=>{
  if(artistPick.embed){
    frame.innerHTML=`<iframe src="https://www.youtube.com/embed/${artistPick.embed}?rel=0" title="${artistPick.artist} — ${trackPick}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }else{
    frame.innerHTML=`<div class="video-fallback"><span>DAILY VIDEO PICK</span><b>${artistPick.artist}</b><em>${trackPick}</em><a class="btn" href="${clipUrl}" target="_blank" rel="noopener">Find today’s song on YouTube →</a></div>`;
  }
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
