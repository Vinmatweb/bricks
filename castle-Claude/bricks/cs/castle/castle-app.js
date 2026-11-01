const LIVE={};
// src: off = oficiální materiál LEGO (sety, katalogy, krabice, návody), fan = fanouškovská interpretace, unc = nejisté/rozporné
const ERAS = {
  c:"Klasická éra (1978–1999)", s:"Příběhová éra (2000–2006)", f:"Fantasy a Kingdoms (2007–2014)", n:"Návrat nostalgie (2016–dnes)"
};
const F = [
 {id:"klasicky-hrad", en:"Classic Castle", cz:"Klasický (žlutý) hrad", years:"1978–1983", from:1978, to:1983, era:"c",
  sh:{f:["#c4282d","#f2f2f2"],p:"pale",b:null,c:null},
  intro:"Začátek hradní řady. V roce 1978 zavedl majitel firmy Kjeld Kirk Kristiansen nový obchodní model a s ním poprvé herní témata, jak je známe dnes; jedním z prvních bylo LEGOLAND Castle (později LEGO Castle). Na začátku ho tvořil jediný set – žlutý hrad 375. O rok později přibyly 383 Knight's Tournament a 677 Knight's Procession. Název „Classic Castle“ používají fanoušci.",
  heraldry:"Rytíři mají pohyblivá hledí se štěrbinou a erb na tunice nebo na kyrysu; nosí několik různých erbů, např. dělený červeno-bíle. Koně jsou celí postavení z kostek, protože speciální díly pro koně ještě neexistovaly.",
  chars:["Bez pojmenovaných postav a bez příběhu."],
  rel:[["Žádné frakční vztahy – rytíři na sebe narážejí jen v turnajích (383 Knight's Joust).","unc"]],
  hist:["1978: Castle je jedno z prvních herních témat LEGO; jediný set 375 (podle LEGO History).", "1978: moderní minifigurka debutuje v řadách Castle, Space a Town; autor Jens Nygaard Knudsen.", "1979: 383 Knight's Tournament a 677 Knight's Procession.", "1981: v USA vychází žlutý hrad jako 6075.", "2022: figurka rytíře žlutého hradu v sérii 23 a miniatura hradu 375 v setu 10305."],
  sets:[["375-2","Castle",1978],["383-2","Knight's Joust",1979],["677","Knight's Procession",1979],["0016","Castle Minifigures",1979],["6075-2","Castle (US verze 375)",1981],["6077","Knight's Procession",1981],["6083","Knight's Joust",1981],["6002-2","Castle Figures",1983],["15","Castle Minifigures",1984]],
  tributes:[["71034-11","Minifigurky série 23 – Knight of the Yellow Castle",2022,"cmf"],["10305","Lion Knights' Castle (odkazy na žlutý hrad)",2022,"icons"]]
 },
 {id:"crusaders", en:"Crusaders / Lion Knights", cz:"Lví rytíři (Křižáci)", years:"1984–1992", from:1984, to:1992, era:"c",
  sh:{f:["#e2b31f"],p:"plain",b:"#b3282d",c:"#1f4f9a"},
  intro:"Lví rytíři, podle LEGO.com pojmenovaní podle svého ikonického erbu. Oficiálně přišli v roce 1984 a jejich říše zahrnovala kovárny, zbrojnice i královské doprovody; tehdy měli největší hrad (6080), který šel rozšířit třeba hostincem 6067 Guarded Inn. Podle LEGO History byli spolu s Black Falcons největší frakcí nové hradní generace. V katalogu pro USA a Kanadu 1992 se jmenovali Crusaders, dnes LEGO používá název Lion Knights.",
  heraldry:"Modro-červeno-žlutý štít se vztyčeným lvem na kontrastním poli (LEGO.com). Červené trupy s modrými rukávy, šedé přilby; některé trupy nesou zkřížené sekery.",
  chars:["V klasické éře bez jmen – jen „Král“ v názvech setů.","Král Leo a Cedric the Bull nepatří sem, ale do Knights' Kingdom (2000)."],
  rel:[["Úhlavní nepřátelé Black Falcons – LEGO.com je popisuje jako „připravené zaútočit na Black Falcons“.", "off"], ["Podle fanouškovské legendy, kterou převypráví LEGO.com, po porážce Black Falcons uprchl Černý rytíř a založil Black Knights.", "fan"], ["Podle legendy (LEGO.com) král Lví srdce v roce 1995 frakci přejmenoval na Royal Knights a změnil erb.", "fan"], ["Konflikt s Forestmen – výklad scén v setech (např. 6042).", "fan"], ["Smíření s Black Falcons: text krabice 10305 (2022) říká, že dlouhá rivalita „zdá se končí“.", "off"]],
  hist:["1984: nová generace hradů s jednodílnými koňmi, sedly, přilbami s pevným hledím, chocholy, vlajkami a luky (LEGO History); 6080 King's Castle.", "1986: 6067 Guarded Inn a 6041 Armor Shop s civilisty; v roce 2001 vyšel Guarded Inn znovu jako 10000.", "1990: 6081 King's Mountain Fortress s vyvýšenou základní deskou.", "2022: 10305 Lion Knights' Castle k 90. výročí LEGO.", "2024–2025: Lví rytíř hlídá vesnici v 10332 a frakce se objevuje v sadách BrickLink Designer Programu."],
  sets:[["6010","Supply Wagon",1984],["6021","Jousting Knights",1984],["6022","Horse Cart",1984],["6040","Blacksmith Shop",1984],["6061","Siege Tower",1984],["6080","King's Castle",1984],["6055","Prisoner Convoy",1985],["6012","Siege Cart",1986],["6023","Maiden's Cart",1986],["6041","Armor Shop",1986],["6067","Guarded Inn",1986],["6016","Knights' Arsenal",1987],["6017","King's Oarsmen",1987],["6049","Viking Voyager",1987],["1584","Knight's Challenge",1988],["6039","Twin-Arm Launcher",1988],["6060","Knight's Challenge",1989],["6042","Dungeon Hunters",1990],["6081","King's Mountain Fortress",1990],["1480","King's Catapult",1991],["1463","Treasure Cart",1992],["1695","Treasure Chest",1992]],
  tributes:[["10000","Guarded Inn (reedice)",2001,"re"],["10305","Lion Knights' Castle",2022,"icons"],["10332","Medieval Town Square",2024,"icons"],["910045","Siege Encampment (Lion Knights vs. Black Falcons)",2025,"bdp"],["910047","Medieval Seaside Market",2025,"bdp"],["910057","Outlaw Forest Den (s Wolfpack)",2025,"bdp"]]
 },
 {id:"black-falcons", en:"Black Falcons", cz:"Černí sokoli", years:"1984–1990", from:1984, to:1990, era:"c",
  sh:{f:["#16181b","#f2f2f2"],p:"pale",b:null,c:null},
  intro:"Druhá velká frakce roku 1984. LEGO.com ji představuje jako frakci, kterou fanoušci považovali za temnější, a dodává, že ji vedl mocný Černý rytíř a byla ideálním soupeřem pro nekonečné šarvátky s Lion Knights. Po útoku Lion Knights v setu 6062 Battering Ram (1987) podle fanoušků na čas zmizela; vrátila se v LEGO Ideas 21325 Medieval Blacksmith a od té doby se objevuje v dalších sadách. Regionální názvy: Eagle Crest (Austrálie, Kanada); v návodu k 10305 „House of Black Falcon“.",
  heraldry:"Sokol v letu s roztaženými křídly na poli děleném černě a bíle, později stříbrně (LEGO.com). Modrý trup s černými rukávy, černé přilby a nohy.",
  chars:["Černý rytíř – vůdce frakce podle LEGO.com.", "Jinak bezejmenní rytíři a vojáci."],
  rel:[["Soupeři Lion Knights – LEGO.com mluví o neustálých šarvátkách.", "off"], ["Podle fanouškovské legendy (LEGO.com) jejich vůdce po porážce uprchl do domoviny předků a založil Black Knights.", "fan"], ["Obléhají Black Knights v 6059; Black Knights proti nim plují v 6057.", "off"], ["2022: krabice 10305 – rivalita s Lion Knights končí, sokolové přijíždějí jako přátelé.", "off"]],
  hist:["1984: 6073 Knight's Castle.", "1986: 6074 Black Falcon's Fortress s potištěnými panely v tudorovském stylu hrázděných stěn (LEGO.com); v roce 2002 znovu jako 10039.", "1987: útok Lion Knights v 6062 Battering Ram.", "2021–2025: návrat v 21325, 31120, 10305 a čtyřech sadách BrickLink Designer Programu.", "2023: minifigurka Falconer v sérii 24."],
  sets:[["6030","Catapult",1984],["6073","Knight's Castle",1984],["6011","Black Knight's Treasure",1985],["6102","Castle Knights (figurky)",1985],["6074","Black Falcon's Fortress",1986],["6035","Castle Guard",1987],["6062","Battering Ram",1987],["6103","Castle Mini Figures",1988],["6018","Battle Dragon",1990]],
  tributes:[["10039","Black Falcon's Fortress (reedice)",2002,"re"],["21325","Medieval Blacksmith",2021,"ideas"],["31120","Medieval Castle",2021,"creator"],["910001","Castle in the Forest",2021,"bdp"],["10305","Lion Knights' Castle",2022,"icons"],["71037-5","Minifigurky série 24 – Falconer",2023,"cmf"],["910029","Mountain Fortress",2024,"bdp"],["910043","Forest Stronghold",2025,"bdp"],["910045","Siege Encampment",2025,"bdp"]]
 },
 {id:"forestmen", en:"Forestmen", cz:"Lesní lidé (lesní zbojníci)", years:"1987–1990", from:1987, to:1990, era:"c",
  sh:{f:["#2f6b3a"],p:"plain",b:"#e2b31f",c:"#f2f2f2"},
  intro:"Lesní lidé, inspirovaní podle LEGO.com legendou o Robinu Hoodovi, přibyli v roce 1987 jako první skupina, která nežila za hradbami. LEGO History je popisuje jako psance s úkryty v dutých stromech a skalách – veselou družinu zkušených lučištníků, kteří mají rádi dobré jídlo a dobrou zábavu. V roce 1996 se podobná skupina vrátila jako Dark Forest; v setu 10305 se jim říká Forest Guardians.",
  heraldry:"Zelené kalhoty, zelené klobouky a tuniky různých barev, aby splynuli s lesem; v ruce kuše (LEGO.com). Od roku 1988 znak jelena.",
  chars:["Robin Hood – vůdce, jmenován v katalozích LEGO a v reklamě (via Brickipedia)."],
  rel:[["Jejich protivníky jsou Wolfpack – lupiči, kteří přišli v roce 1992 (LEGO History).", "off"], ["Black Knight zajímá Robina Hooda v reklamě LEGO; v katalozích obléhají hrady Black Knights.", "off"], ["Antagonisté Lion Knights – výklad scén v setech.", "fan"], ["Krabice 10305: „Forest Guardians“ žijí v úkrytu pod hradem; v sadě je padací dveře pošlou do hladomorny.", "off"], ["Pokračovatel: Dark Forest (1996).", "unc"]],
  hist:["1987: 6066 Camouflaged Outpost.", "1988: 6054 Forestmen's Hideout.", "2010: Forestman v 1. sérii sběratelských figurek.", "2022: dárek 40567 Forest Hideout a tři lesní lidé v 10305.", "2025: devět Forestmen v BDP 910043 Forest Stronghold."],
  sets:[["6066","Camouflaged Outpost",1987],["6054","Forestmen's Hideout",1988],["1974-3","Smuggler's Hayride",1989],["6077-2","Forestmen's River Fortress",1989],["1877","Crusader's Cart",1990],["6071","Forestmen's Crossing",1990]],
  tributes:[["8683-14","Minifigurky série 1 – Forestman",2010,"cmf"],["910001","Castle in the Forest",2021,"bdp"],["40567","Forest Hideout",2022,"gwp"],["10305","Lion Knights' Castle",2022,"icons"],["910043","Forest Stronghold",2025,"bdp"]]
 },
 {id:"black-knights", en:"Black Knights", cz:"Černí rytíři", years:"1988–1994", from:1988, to:1994, era:"c",
  sh:{f:["#b3282d"],p:"plain",b:null,c:"#1f4f9a"},
  intro:"Podle fanouškovské legendy, kterou vypráví LEGO.com, uprchl po porážce Black Falcons Černý rytíř do domoviny svých předků a založil Black Knights. Poprvé se objevili v 6085 Black Monarch's Castle (1988) a pokračovali v sadách jako 6057 Sea Serpent a 6086 Black Knight's Castle.",
  heraldry:"Zbroj bez označení; frakci prozrazuje jen modrý drak na štítech a na čabrakách koní (LEGO.com). Černé hrady.",
  chars:["Bez jmen; „Black Monarch“ se objevuje jen v názvech setů."],
  rel:[["Nástupci Black Falcons podle legendy na LEGO.com.", "fan"], ["Pronásledují Wolfpack – zajatec v 6086, útok v 6057.", "off"], ["Od roku 1993 se bojí draků Dragon Masters (LEGO.com: řev draků zahnal na útěk i nejstatečnější rytíře).", "off"], ["Zajetí Robina Hooda (Forestmen) v reklamě LEGO.", "off"], ["Boj s Lion Knights v britských reklamách 1992.", "off"]],
  hist:["1988: 6085 Black Monarch's Castle.", "1992: 6086 Black Knight's Castle a 6057 Sea Serpent.", "2026: dárek 40912 Sea Serpent, nová verze 6057 podle vítězného návrhu soutěže LEGO Ideas „A Twist of Nostalgia“."],
  sets:[["6085","Black Monarch's Castle",1988],["6034","Black Monarch's Ghost",1990],["6059","Knight's Stronghold",1990],["1491","Dual Defender",1992],["1888","Black Knights Guardshack",1992],["6009","Black Knight",1992],["6057","Sea Serpent",1992],["6086","Black Knight's Castle",1992],["1547","Black Knights Boat",1993],["1624","King's Archer",1993],["1917","King's Catapult",1993],["1971","Battering Ram",1993],["2890","Stone Bomber",1997]],
  tributes:[["40912","Sea Serpent",2026,"gwp"]]
 },
 {id:"wolfpack", en:"Wolfpack Renegades", cz:"Vlčí smečka", years:"1992–1994", from:1992, to:1994, era:"c",
  sh:{f:["#16181b"],p:"plain",b:null,c:"#c9ced4"},
  intro:"Vlčí smečka „přivyla“ v roce 1992. LEGO.com ji popisuje jako bezcitné rváče, kteří kradou, sabotují a obchodují s informacemi ve stínu, kam se ostatní bojí; LEGO History je řadí mezi lupiče a padouchy. Jejich základnou byla 6075 Wolfpack Tower. Byly to první frakční figurky, které měly víc než standardní úsměv – pásky přes oko, kníry i strniště.",
  heraldry:"Štíty se stříbrnou vlčí hlavou na černém (LEGO.com).",
  chars:["Bez jmen."],
  rel:[["Protivníci Forestmen (LEGO History).", "off"], ["Podle legendy se plíží po 6086 Black Knight's Castle a 6082 Fire Breathing Fortress (LEGO.com).", "off"], ["Nepřátelé Black Knights (zajatec v 6086, útok v 6057).", "off"]],
  hist:["1992: 6038 Wolfpack Renegades a 6075 Wolfpack Tower; v témže roce dostávají hradní figurky poprvé potištěné obličeje.", "2024: vlčí lapka v 10332 Medieval Town Square.", "2025: Wolfpack Beastmaster (série 27) a BDP 910057 Outlaw Forest Den."],
  sets:[["6038","Wolfpack Renegades",1992],["6075","Wolfpack Tower",1992],["1596","Ghostly Hideout",1993],["6105","Medieval Knights (figurky)",1994]],
  tributes:[["10332","Medieval Town Square",2024,"icons"],["71048-2","Minifigurky série 27 – Wolfpack Beastmaster",2025,"cmf"],["910057","Outlaw Forest Den",2025,"bdp"]]
 },
 {id:"dragon-masters", en:"Dragon Masters", cz:"Páni draků", years:"1993–1995", from:1993, to:1995, era:"c",
  sh:{f:["#e2b31f"],p:"plain",b:"#b3282d",c:"#2f6b3a"},
  intro:"V roce 1993 se podle LEGO.com všechno změnilo: přišli Dragon Knights (u nás známí jako Dragon Masters) vedení lstivým čarodějem Majistem a pánem draků Burnabusem – a měli to, o čem ostatní mohli jen snít, skutečné draky. LEGO History říká, že tím hradní řada vstoupila do říše fantasy; armáda byla malý regiment rytířů a strážných.",
  heraldry:"Zelení a červení draci na žlutém poli; na trupech drak v letu nebo dračí hlava; draci zdobí i stavbu 1906 Majisto's Tower (LEGO.com).",
  chars:["Majisto – čaroděj se špičatým kloboukem, svítící hůlkou a dlouhým bílým vousem; první hradní minifigurka s vlastním jménem a jedna z prvních pojmenovaných figurek vůbec (LEGO History).", "Burnabus – pán draků (LEGO.com)."],
  rel:[["Jejich draci podle fanoušků zahnali na útěk i Black Knights (LEGO.com).", "off"], ["Wolfpack se podle legendy plíží po jejich pevnosti 6082.", "off"], ["V roce 1995 dostali nového nepřítele – Royal Knights (LEGO.com).", "off"]],
  hist:["1993: 6082 Fire Breathing Fortress, 6048 Majisto's Magical Workshop, 6076 Dark Dragon's Den.", "1994: 1906 Majisto's Tower.", "2022: Majisto v 10305 Lion Knights' Castle.", "2023: dárek 40601 Majisto's Magical Workshop, 30 let po původní 6048."],
  sets:[["6020","Magic Shop",1993],["6043","Dragon Defender",1993],["6048","Majisto's Magical Workshop",1993],["6056","Dragon Wagon",1993],["6076","Dark Dragon's Den",1993],["6082","Fire Breathing Fortress",1993],["1732","Crossbow Cart",1994],["1794","Dragon Master Chariot",1994],["1906","Majisto's Tower",1994],["1736","Wizard's Cart",1995],["1746","Wiz the Wizard",1995],["2891","Wizard Trader",1998]],
  tributes:[["10305","Lion Knights' Castle (Majisto)",2022,"icons"],["40601","Majisto's Magical Workshop",2023,"gwp"]]
 },
 {id:"royal-knights", en:"Royal Knights", cz:"Královští rytíři", years:"1995–1996", from:1995, to:1996, era:"c",
  sh:{f:["#b3282d","#f2f2f2"],p:"pale",b:null,c:"#e2b31f"},
  intro:"Royal Knights přišli v roce 1995 jako nový nepřítel Dragon Masters. Podle legendy na LEGO.com král Lví srdce přejmenoval svou lví frakci a obnovil erb. Sídlili v 6090 Royal Knight's Castle, který přinesl první lesklou chromovanou korunu a meče; LEGO History uvádí, že první královská minifigurka s korunou vyšla právě v roce 1995. V jejich sadách také poprvé vystupují kostlivci.",
  heraldry:"Zlatá lví hlava s korunou na svisle děleném bílo-červeném poli (LEGO.com).",
  chars:["Král Lví srdce (King Lionheart) – podle legendy na LEGO.com; jeho chromovaný meč „Lví srdce“ prý porazí draka jediným úderem.", "Royal King – minifigurka v 6008."],
  rel:[["Nástupci Lion Knights – přejmenování frakce podle legendy (LEGO.com).", "fan"], ["Nepřátelé Dragon Masters (LEGO.com, katalog 1995).", "off"], ["Útok Dark Forest (katalog 1996).", "off"], ["Od roku 1997 nepřátelé Fright Knights; čarodějnice Willa zajímá krále (komiks LEGO Mania).", "off"]],
  hist:["1995: 6090 Royal Knight's Castle s první chromovanou korunou a meči.", "2006: 10176 King's Castle – rekreace 6090 a 6091."],
  sets:[["6008","Royal King",1995],["6036","Skeleton Surprise",1995],["6044","King's Carriage",1995],["6078","Royal Drawbridge",1995],["6090","Royal Knight's Castle",1995],["1752","Boat with Armor",1996],["1804","Crossbow Boat",1996],["1843-3","Catapult",1996],["2892","Thunder Arrow Boat",1998]],
  tributes:[["10176","King's Castle",2006,"re"]]
 },
 {id:"dark-forest", en:"Dark Forest", cz:"Temný les", years:"1996", from:1996, to:1996, era:"c",
  sh:{f:["#1f4a2a"],p:"plain",b:"#16181b",c:"#f2f2f2"},
  intro:"Krátký návrat lesních psanců, vydaný jen v Severní Americe. Wikipedia je popisuje jako „amorální bandu lesních psanců“. Tři sety.",
  heraldry:"Opakuje erb Forestmen, zelené tuniky.",
  chars:["„Rob N. Hood“ – jméno jen v tabulce Brickipedie, nejisté."],
  rel:[["Útočí na Royal Knights (katalog 1996).","off"],["Navazují na Forestmen.","unc"]],
  hist:["1996: 6079 Dark Forest Fortress jako hlavní set."],
  sets:[["6024","Bandit Ambush",1996],["6046","Hemlock Stronghold",1996],["6079","Dark Forest Fortress",1996]],
  tributes:[]
 },
 {id:"fright-knights", en:"Fright Knights", cz:"Rytíři netopýra", years:"1997–1998", from:1997, to:1998, era:"c",
  sh:{f:["#16181b"],p:"plain",b:"#b3282d",c:"#7b4aa0"},
  intro:"Klasická éra hradů podle LEGO.com skončila v roce 1997 rytíři Fright Knights v šedo-černo-červené zbroji. Nevládl jim král, ale Basil the Bat Lord, a sídlili v pastmi prošpikovaném hradu 6097 Night Lord's Castle. Podle pověstí byla skutečnou mocí za frakcí čarodějnice Willa se svými létajícími stroji a křišťálovými koulemi.",
  heraldry:"Černý netopýr s roztaženými křídly na štítu; šedá, černá a červená zbroj (LEGO.com).",
  chars:["Basil the Bat Lord – vládce frakce.", "Willa the Witch – temná čarodějnice; podle pověstí skutečná moc za Fright Knights (LEGO.com)."],
  rel:[["Nepřátelé Royal Knights; Willa zajímá krále.", "off"], ["Regionální rozpor: v USA jsou Basil a Willa spojenci, v evropských materiálech stojí proti sobě.", "unc"]],
  hist:["1997: 6097 Night Lord's Castle a 6087 Witch's Magic Manor.", "2019: Fright Knight v sérii 19.", "2024: Vampire Knight v sérii 25."],
  sets:[["2872","Witch and Fireplace",1997],["6007","Bat Lord",1997],["6027","Bat Lord's Catapult",1997],["6037","Witch's Windship",1997],["6047","Traitor Transport",1997],["6087","Witch's Magic Manor",1997],["6097","Night Lord's Castle",1997],["2538","Fire-Cart",1998],["2539","Flying Machine",1998],["2540","Catapult Cart",1998],["6028","Treasure Chest",1998],["6029","Treasure Guard",1998],["6031","Fright Force",1998]],
  tributes:[["71025-3","Minifigurky série 19 – Fright Knight",2019,"cmf"],["71045-3","Minifigurky série 25 – Vampire Knight",2024,"cmf"]]
 },
 {id:"ninja", en:"Ninja", cz:"Ninja", years:"1998–2000", from:1998, to:2000, era:"c",
  sh:{f:["#f2f2f2"],p:"plain",b:"#16181b",c:"#b3282d"},
  intro:"Feudální Japonsko v oranžových krabicích řady Castle. Oficiálně nebyl Ninja prodáván jako součást Castle, Brickset jej tam ale řadí. Nesouvisí s pozdějším Ninjago.",
  heraldry:"Japonské motivy, císařský znak na 3052.",
  chars:["Shogun Gi-Dan a samurajové","Šedý ninja Ito","Náčelník banditů Kendo","Temný ninja Bonsai","Ninja princezna, Mistr ninja, císař"],
  rel:[["Šógun a šedí ninjové proti banditům (Kendo, Bonsai) – příběh z klubových časopisů.","off"],["Role červených ninjů se liší: v USA vzdorují císaři, v setech a britské reklamě 1999 mu slouží.","unc"]],
  hist:["1998: 6083 Samurai Stronghold, 6093 Flying Ninja Fortress.","1999: 3053 Emperor's Stronghold."],
  sets:[["6013","Samurai Swordsman",1998],["6033","Treasure Transport",1998],["6045","Ninja Surprise",1998],["6083-2","Samurai Stronghold",1998],["6088","Robber's Retreat",1998],["6089","Stone Tower Bridge",1998],["6093","Flying Ninja Fortress",1998],["1269","White Ninja",1999],["3050","Shanghai Surprise",1999],["3051","Blaze Attack",1999],["3052","Ninja Fire Fortress",1999],["3053","Emperor's Stronghold",1999],["3074","Red Ninja's Dragon Glider",1999],["3075","Ninja Master's Boat",1999],["4805","Ninja Knights",1999]],
  tributes:[]
 },
 {id:"knights-kingdom", en:"Knights' Kingdom", cz:"Království rytířů (Lvi vs. Býci)", years:"2000", from:2000, to:2001, era:"s",
  sh:{f:["#b3282d"],p:"plain",b:"#e2b31f",c:"#e2b31f"},
  intro:"Podle LEGO History vede v roce 2000 král Leo rytíře proti armádě banditů pod velením Cedrica the Bull. Královi věrní žijí na hradě, Býci v Temném lese. Byla to první hradní řada s celou královskou rodinou: král Leo, královna Leonora, princ Edward a princezna Storm. Vyšla i PC hra LEGO Creator: Knights' Kingdom.",
  heraldry:"Lvi: lví hlava (podobná Royal Knights). Býci: býčí hlava.",
  chars:["Král Leo, královna Leonora, princ Edward, princezna Storm (LEGO History)", "Richard the Strong, John of Mayne (Lvi)", "Cedric the Bull, Gilbert the Bad, Weezil (Býci)"],
  rel:[["Lvi krále Lea proti Býkům Cedrica.","off"]],
  hist:["2000: všechny sety podle Brickset; hlavní hrad 6091 King Leo's Castle (529 dílků), též jako 6098."],
  sets:[["1286","King Leo's Spear Cart",2000],["1287","Richard's Arrowseat",2000],["1288","Bull's Fire Attacker",2000],["1289","Weezil's Stone Bomber",2000],["4806","Axe Cart",2000],["4807","Fire Attack",2000],["4816","Knights' Catapult",2000],["4817","Dungeon",2000],["4818","Dragon Rider",2000],["4819","Bulls' Attack Wagon",2000],["6026","King Leo",2000],["6032","Catapult Crusher",2000],["6091","King Leo's Castle",2000],["6094","Guarded Treasure",2000],["6095","Royal Joust",2000],["6096","Bull's Attack",2000]],
  tributes:[["10176","King's Castle",2006,"re"]]
 },
 {id:"knights-kingdom-2", en:"Knights' Kingdom II", cz:"Království rytířů II (Morcia)", years:"2004–2006", from:2004, to:2006, era:"s",
  sh:{f:["#d7a521","#1f4f9a"],p:"pale",b:null,c:null},
  intro:"Restart s barevnými rytíři království Morcia, z nichž každý má jméno a vlastní povahu; bojují proti zlému rytíři Vladekovi. LEGO History ho označuje za radikální odklon od dřívějších hradních řad – více akce a téměř superhrdinské schopnosti. Stavebnicové akční figurky i minifigurky, sběratelská karetní hra, knihy a hra pro Game Boy Advance.",
  heraldry:"Každý rytíř má barvu a zvíře: Jayko – světle modrá, jestřáb; Santis – červená, medvěd; Rascus – zelená, opice; Danju – fialová, vlk; král Mathias – zlatá, lev. Vladek – černá, štír.",
  chars:["Král Mathias, později král Jayko","Rytíři Jayko, Santis, Rascus, Danju; od 2006 Sir Kentis a Sir Adric","Vladek (Lord Vladek) a Shadow Knights; 2006 Rogue Knights Dracus a Karzon"],
  rel:[["Rytíři Morcie proti Vladekovi a jeho Shadow / Rogue Knights.","off"]],
  hist:["2004: Vladek, rádce krále Mathiase, uvězní krále a pomocí Knihy Morcie mění rytíře ve Stínové rytíře. Čtyři hrdinové krále osvobodí.","2005: Vladek prchá do ztraceného království Ankoria a staví Vladmask; Jayko ji zničí.","2006: král Jayko, Adric a Kentis závodí s Rogue Knights k Mistlands Tower; Vladek je uzavřen do krystalu.","(Příběh převyprávěný Brickipedií podle oficiálních komiksů a webu.)"],
  sets:[["8777","Vladek Encounter",2004],["8778","Border Ambush",2004],["8779","The Grand Tournament",2004],["8780","Citadel of Orlan",2004],["8781","Castle of Morcia",2004],["8799","Knights' Castle Wall",2004],["8800","Vladek's Siege Engine",2004],["8801","Knights' Attack Barge",2005],["8802","Dark Fortress Landing",2005],["8873","Fireball Catapult",2005],["8874","Battle Wagon",2005],["8875","King's Siege Tower",2005],["8876","Scorpion Prison Cave",2005],["8877","Vladek's Dark Fortress",2005],["8813","Battle at the Pass",2006],["8821","Rogue Knight Battleship",2006],["8822","Gargoyle Bridge",2006],["8823","Mistlands Tower",2006],["8701–8706","Akční figurky 2006 (Jayko, Vladek, Kentis, Adric, Dracus, Karzon)",2006],["8770–8796","Akční figurky 2004–2005",2004]],
  tributes:[]
 },
 {id:"vikingove", en:"Vikings", cz:"Vikingové", years:"2005–2006", from:2005, to:2006, era:"s",
  sh:{f:["#8a4b2a","#e2b31f"],p:"pale",b:null,c:null},
  intro:"Samostatné téma blízké hradní řadě: vikingští válečníci bojují s netvory severské mytologie. Plánováno na rok, dostalo druhý. Bez pojmenovaných postav.",
  heraldry:"Nové vikingské přilby, zdobené štíty, dračí přídě lodí.",
  chars:["Vikingští válečníci (bez jmen)","Netvoři: vlk Fenrir, wyverna, Nidhogg, Midgardský had, Fafnir, Ofnir"],
  rel:[["Vikingové proti netvorům – bez vazby na ostatní frakce.","off"]],
  hist:["2005: 7019 Viking Fortress against the Fafnir Dragon.","2022: 31132 Viking Ship and the Midgard Serpent (Creator 3 v 1).","2023: 21343 Viking Village (LEGO Ideas)."],
  sets:[["7015","Viking Warrior challenges the Fenris Wolf",2005],["7016","Viking Boat against the Wyvern Dragon",2005],["7017","Viking Catapult versus the Nidhogg Dragon",2005],["7018","Viking Ship challenges the Midgard Serpent",2005],["7019","Viking Fortress against the Fafnir Dragon",2005],["7020","Army of Vikings with Heavy Artillery Wagon",2006],["7021","Viking Double Catapult vs. the Armored Ofnir Dragon",2006]],
  tributes:[["31132","Viking Ship and the Midgard Serpent",2022,"creator"],["21343","Viking Village",2023,"ideas"]]
 },
 {id:"fantasy-era", en:"Castle: Fantasy Era", cz:"Korunní rytíři, kostlivci, trollové a trpaslíci", years:"2007–2009", from:2007, to:2009, era:"f",
  sh:{f:["#1d3a6e"],p:"plain",b:"#d7a521",c:"#d7a521"},
  intro:"Návrat značky Castle v roce 2007. Podle LEGO History se vrací k tradičnímu středověku, opakuje fantasy prvky jako draky a čaroděje a přidává nové: kostlivé válečníky, trolly a trpaslíky. Jedno lidské království bojuje proti nelidským protivníkům – v roce 2007 kostlivcům zlého čaroděje, od roku 2008 trollům.",
  heraldry:"Korunní rytíři: koruna; tmavě modrá, světle modrá, zlatá. Kostlivci: lebka; tmavě červená a černá. Trpaslíci: král se zlatou okřídlenou přilbou.",
  chars:["Král, královna, princezna, zlatý rytíř Champion, dvorní čaroděj, šašek","Zlý čaroděj / nekromant, kostlivci, žnec","Trollí král, trollí čarodějka, obří trollové","Trpasličí král"],
  rel:[["Korunní rytíři proti kostlivcům (2007).","off"],["Korunní rytíři a trpaslíci proti trollům (2008–2009).","off"],["Spojenectví trpaslíků s korunními rytíři – někteří trpaslíci nesou korunu.","fan"]],
  hist:["2007: 7094 King's Castle Siege.","2009: 7097 Trolls' Mountain Fortress a 10193 Medieval Market Village (1 601 dílků) – předloha pro 10332 z roku 2024."],
  sets:[["7009","The Final Joust",2007],["7029","Skeleton Ship Attack",2007],["7036","Dwarves' Mine",2007],["7090","Crossbow Attack",2007],["7091","Knight's Catapult Defense",2007],["7092","Skeletons' Prison Carriage",2007],["7093","Skeleton Tower",2007],["7094","King's Castle Siege",2007],["5614","The Good Wizard",2008],["7037","Tower Raid",2008],["7038","Troll Assault Wagon",2008],["7040","Dwarves' Mine Defender",2008],["7041","Troll Battle Wheel",2008],["7048","Troll Warship",2008],["7979","Castle Advent Calendar",2008],["7078","King's Battle Chariot",2009],["7079","Drawbridge Defense",2009],["7097","Trolls' Mountain Fortress",2009],["10193","Medieval Market Village",2009]],
  tributes:[["10332","Medieval Town Square (remake 10193)",2024,"icons"]]
 },
 {id:"kingdoms", en:"Kingdoms", cz:"Království (Lev vs. Drak)", years:"2010–2012", from:2010, to:2012, era:"f",
  sh:{f:["#b3282d","#2f6b3a"],p:"pale",b:null,c:null},
  intro:"Realistický evropský středověk s vesničany a měšťany. Podle LEGO History jde o dvě lidská království ve válce: Lví království vedené Lvím králem a Dračí království, jehož vůdce je neznámý, i když se občas naznačuje, že jde o čaroděje. Novinky: potisk zad minifigurek, díl padací mříže, kozy.",
  heraldry:"Lví rytíři: vztyčený lev, červená. Dračí rytíři: drak, zelená.",
  chars:["Král, královna, princezna Verda, lví princ","Dračí rytíři – vůdce neznámý, občas naznačen dračí čaroděj"],
  rel:[["Válka dvou lidských království.","off"],["10223 obsahuje rytíře se sokolem – odkaz na Black Falcons, LEGO nepotvrdilo.","fan"]],
  hist:["2010: 7946 King's Castle.","2012: 10223 Kingdoms Joust (1 575 dílků) jako závěr řady; poté nástup The Lord of the Rings."],
  sets:[["7946","King's Castle",2010],["7947","Prison Tower Rescue",2010],["7948","Outpost Attack",2010],["7949","Prison Carriage Rescue",2010],["7950","Knight's Showdown",2010],["7952","Kingdoms Advent Calendar",2010],["7953","Court Jester",2010],["7955","Wizard",2010],["6918","Blacksmith Attack",2011],["7187","Escape from the Dragon's Prison",2011],["7188","King's Carriage Ambush",2011],["7189","Mill Village Raid",2011],["10223","Kingdoms Joust",2012]],
  tributes:[]
 },
 {id:"castle-2013", en:"Castle (2013)", cz:"Královi rytíři vs. Dračí rytíři", years:"2013–2014", from:2013, to:2014, era:"f",
  sh:{f:["#1f4f9a"],p:"plain",b:"#d7a521",c:"#d7a521"},
  intro:"Zatím poslední samostatná hradní řada: podle LEGO History kombinuje historické a fantasy prvky svých předchůdců. Pět setů a dva battle packy – králova lví armáda proti vojákům Dračího čaroděje, kteří ovládají velkého draka.",
  heraldry:"Královi rytíři: modrá a zlatá, koruna na trupu, lev na štítech. Dračí rytíři: červená a černá.",
  chars:["Král, princezna, Dračí čaroděj"],
  rel:[["Královi rytíři proti Dračím rytířům.","off"]],
  hist:["2013: 70404 King's Castle (996 dílků).", "2014: dva battle packy (850888, 850889).", "2016: NEXO Knights – podle LEGO History hradní řada s větším důrazem na příběh a digitální svět; na tomto webu ji nesledujeme."],
  sets:[["70400","Forest Ambush",2013],["70401","Gold Getaway",2013],["70402","The Gatehouse Raid",2013],["70403","Dragon Mountain",2013],["70404","King's Castle",2013],["850888","Castle Knights Accessory Set",2014],["850889","Castle Dragons Accessory Set",2014]],
  tributes:[]
 },
 {id:"horse-knights", en:"Horse Knights", cz:"Koňští rytíři", years:"2025–", from:2025, to:2026, era:"n",
  sh:{f:["#f2f2f2"],p:"plain",b:"#1f4f9a",c:"#d7a521"},
  intro:"Nejnovější královská frakce, představená v roce 2025 v setu Creator 3 v 1 31168 Medieval Horse Knight Castle. Rytíři v bílých pláštích s modro-zlatým erbem s koněm mají vlastního krále, šampiona, kopiníka a lučištníka. Podle německého webu Promobricks přináší vlna Creator 2025 hrad „hned se dvěma novými frakcemi“. Název Horse Knights používá katalog BrickLink; jestli ho používá i LEGO, není ověřené.",
  heraldry:"Bílý plášť s modrým a zlatým štítem s koněm, stříbrná kroužková zbroj, opasek s motivem podkov. Král nosí modrý plášť a zlatou korunu.",
  chars:["Horse Knight King – král s korunou a modrým pláštěm","Horse Knight Champion – šampion se špičatým hledím a červeným chocholem","Kopiník a lučištník (s modrou kápí)"],
  rel:[["V setu 31168 se potkávají s jediným rytířem Serpent Knights; set má turnajové kolbiště a tribunu, takže jde spíš o soupeře v turnaji než o válku. Výklad, ne oficiální příběh.","unc"],["Objevují se spolu s Griffin Knights a Kraken Warriors v BDP 910062 Alchemist's Shop a 910070 Sleepy Dragon Inn.","off"]],
  hist:["2025: debut v 31168 Středověký hrad a rytíři na koních (designér Jonathan Robson) – král, šampionka, rytíř a lučištník.", "2026: dva koňští rytíři v BDP 910062 Alchemist's Shop a Bílý král s rytířem v 910064 Dustmark Keep.", "2027: oznámeni v BDP 910070 Sleepy Dragon Inn."],
  sets:[],
  tributes:[]
 },
 {id:"serpent-knights", en:"Serpent Knights", cz:"Hadí rytíři", years:"2025–", from:2025, to:2026, era:"n",
  sh:{f:["#16181b"],p:"plain",b:"#5b2a6e",c:"#c9ced4"},
  intro:"Rytíři v černé zbroji se žlutými chocholy. Poprvé se objevil jediný z nich v setu 31168, kde podle recenzentů vystupuje jako „host“ mezi koňskými rytíři. Plnou armádu dostali v roce 2026 v BrickLink Designer Programu: pevnost 910064 Dustmark Keep obsahuje podle inventáře Rebrickable dvanáct hadích bojovníků (v katalogu „Snake“) – lučištníky, válečníky s katanou i velitele. Jméno Serpent Knights používá katalog BrickLink, oficiální název LEGO zatím doložený není.",
  heraldry:"Černá zbroj se stříbrnými nákrčníky, žluté chocholy na černých přilbách, černé pláště; u figurky z 31168 tmavě fialové pruhy a stříbrné kosočtverce.",
  chars:["Serpent Knight – soupeř na turnaji v 31168", "Dvanáct hadích bojovníků v 910064 Dustmark Keep (lučištníci, válečníci, velitelé s chocholem)"],
  rel:[["V 31168 soupeř Horse Knights na turnaji – výklad podle obsahu setu.", "unc"], ["V 910064 Dustmark Keep stojí dvanáct hadích bojovníků proti dvěma Horse Knights, dvěma Griffin Knights a jednomu Kraken Warriorovi (inventář Rebrickable); příběh setu zatím neznáme.", "unc"]],
  hist:["2025: první figurka v 31168 Středověký hrad a rytíři na koních.", "2026: armáda dvanácti hadích bojovníků v BDP 910064 Dustmark Keep."],
  sets:[],
  tributes:[]
 },
 {id:"griffin-knights", en:"Griffin Knights", cz:"Gryfí rytíři", years:"2025–", from:2025, to:2026, era:"n",
  sh:{f:["#7a1f24"],p:"plain",b:"#d7a521",c:"#e8e8e8"},
  intro:"Rytíři ve stříbrné zbroji přes tmavě červené roucho se štítem s gryfem. Poprvé se objevili v LEGO Ideas 21358 Minifigure Vending Machine (2025). Podle recenze na Brickset vybrali tuto frakci i Kraken Warriors fanoušci v anketě LEGO Ideas. Dále se vracejí v sadách BrickLink Designer Programu.",
  heraldry:"Bílo-stříbrný gryf na tmavě červeném poli se zlatým lemem; stříbrná zbroj, tmavě červené rukávy, zlaté rukavice.",
  chars:["Griffin Knight – muž a žena (21358)","Griffin Knight s ramenním plátem (910062)"],
  rel:[["Vznikli spolu s Kraken Warriors (21358); oficiální vztah obou frakcí zatím nebyl popsán.","unc"],["Společně s Horse Knights a Kraken Warriors v 910062 a 910070.","off"]],
  hist:["2025: debut v 21358 Automat na minifigurky (LEGO Ideas č. 66).", "2026: BDP 910062 Alchemist's Shop, dva gryfí rytíři v 910064 Dustmark Keep a dva v tmavě modré variantě na lodi 40912 Mořský had.", "2027: oznámeni v BDP 910070 Sleepy Dragon Inn."],
  sets:[],
  tributes:[]
 },
 {id:"kraken-warriors", en:"Kraken Warriors", cz:"Válečníci krakena", years:"2025–", from:2025, to:2026, era:"n",
  sh:{f:["#1f4a2a"],p:"plain",b:"#1d6f73",c:"#c5d34a"},
  intro:"Námořní nájezdníci v tmavě zelené a tyrkysové s krakenem na hrudi a na kulatých štítech. Debutovali v 21358 Automat na minifigurky (2025) a od té doby se objevují v sadách BrickLink Designer Programu, vždy jen po jednom bojovníkovi. Nájezdnický charakter naznačují páska přes oko a šátky.",
  heraldry:"Žlutozelený kraken na tmavě zeleném hrudním plátu a v tmavě tyrkysovém kruhu na štítu; hnědá přilba s lícnicemi, tmavě zelený šátek.",
  chars:["Kraken Warrior – muž s páskou přes oko a žena (21358)","Kraken Bandit (910062)"],
  rel:[["Vznikli spolu s Griffin Knights (21358); oficiální vztah zatím nebyl popsán.","unc"],["Nájezdnický charakter (Kraken Bandit, páska přes oko) – výklad podle figurek.","fan"]],
  hist:["2025: debut v 21358 Automat na minifigurky.", "2026: po jednom bojovníkovi v BDP 910062 Alchemist's Shop a 910064 Dustmark Keep.", "2027: oznámeni v BDP 910070 Sleepy Dragon Inn."],
  sets:[],
  tributes:[]
 },
];

// Novodobé a pamětní sety. y = rok uvedení, to = poslední rok prodeje (null = stále v prodeji)
// st: on = v prodeji na LEGO.com, off = vyřazeno, lim = jen jiný kanál, soon = oznámeno
const M = [
 {n:"31168",url:"https://www.lego.com/cs-cz/product/medieval-horse-knight-castle-31168",price:2949,name:"Medieval Horse Knight Castle",y:2025,to:null,pcs:1371,mf:6,line:"Creator 3 v 1",f:["horse-knights","serpent-knights"],st:"on",note:"119,99 € (Brickset)"},
 {n:"21358",url:"https://www.lego.com/cs-cz/product/minifigure-vending-machine-21358",price:4149,name:"Minifigure Vending Machine",y:2025,to:null,pcs:1343,mf:16,line:"Ideas",f:["griffin-knights","kraken-warriors"],st:"on",note:"16 figurek napříč historií LEGO"},
 {n:"31161",url:"https://www.lego.com/cs-cz/product/medieval-dragon-31161",price:1449,name:"Medieval Dragon",y:2025,to:null,pcs:715,line:"Creator 3 v 1",f:[],st:"on",note:"Středověký drak, bez frakce"},
 {n:"910070",name:"Sleepy Dragon Inn",y:2027,to:2027,pcs:3121,line:"BrickLink DP – série 9",f:["griffin-knights","horse-knights","kraken-warriors"],st:"soon",note:"Předobjednávky 6.–12. 10. 2026, dodání od března 2027"},
 {n:"910064",name:"Dustmark Keep",y:2026,to:2026,pcs:3960,mf:18,line:"BrickLink DP – série 8",f:["serpent-knights","horse-knights","griffin-knights","kraken-warriors"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"910062",name:"Alchemist's Shop",y:2026,to:2026,pcs:2319,mf:9,line:"BrickLink DP – série 7",f:["kraken-warriors","griffin-knights","horse-knights"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"40912",name:"Sea Serpent",y:2026,to:2026,pcs:241,mf:2,line:"Dárek k nákupu (Ideas)",f:["black-knights","griffin-knights"],st:"off",note:"Insiders Days 7/2026; remake 6057"},
 {n:"40952",name:"LEGOLAND Castle",y:2026,to:null,pcs:613,line:"Jen v parcích LEGOLAND",f:[],st:"lim",note:"Prodej pouze v LEGOLANDu"},
 {n:"910057",name:"Outlaw Forest Den",y:2025,to:2025,pcs:2618,mf:10,line:"BrickLink DP – série 6",f:["wolfpack","crusaders"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"910045",name:"Siege Encampment",y:2025,to:2025,pcs:2598,mf:18,line:"BrickLink DP – série 4",f:["crusaders","black-falcons"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"910047",name:"Medieval Seaside Market",y:2025,to:2025,pcs:2560,mf:9,line:"BrickLink DP – série 4",f:["crusaders"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"910048",name:"Riverside Scholars",y:2025,to:2025,pcs:2769,line:"BrickLink DP – série 4",f:[],st:"off",note:"Středověk bez frakce"},
 {n:"910043",name:"Forest Stronghold",y:2025,to:2025,pcs:3395,mf:13,line:"BrickLink DP – série 3",f:["forestmen","black-falcons"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"71048-2",name:"Minifigurky série 27 – Wolfpack Beastmaster",y:2025,to:2025,pcs:null,line:"Sběratelské minifigurky",f:["wolfpack"],st:"off",note:""},
 {n:"10332",name:"Medieval Town Square",y:2024,to:2025,pcs:3304,mf:8,line:"Icons",f:["crusaders","wolfpack","fantasy-era"],st:"off",note:"Vyřazeno 31. 12. 2025"},
 {n:"910029",name:"Mountain Fortress",y:2024,to:2024,pcs:3995,mf:9,line:"BrickLink DP – série 1",f:["black-falcons"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"71045-3",name:"Minifigurky série 25 – Vampire Knight",y:2024,to:2024,pcs:null,line:"Sběratelské minifigurky",f:["fright-knights"],st:"off",note:""},
 {n:"21343",name:"Viking Village",y:2023,to:2025,pcs:2103,line:"Ideas",f:["vikingove"],st:"off",note:"Vyřazeno 31. 12. 2025"},
 {n:"40601",name:"Majisto's Magical Workshop",y:2023,to:2024,pcs:367,mf:2,line:"Dárek k nákupu",f:["dragon-masters"],st:"off",note:"Remake 6048; 11/2023 a 9/2024"},
 {n:"71037-5",name:"Minifigurky série 24 – Falconer",y:2023,to:2023,pcs:null,line:"Sběratelské minifigurky",f:["black-falcons"],st:"off",note:""},
 {n:"10305",name:"Lion Knights' Castle",y:2022,to:2025,pcs:4514,mf:22,line:"Icons",f:["crusaders","black-falcons","forestmen","dragon-masters","klasicky-hrad"],st:"off",note:"Vyřazeno 31. 12. 2025; 90. výročí LEGO"},
 {n:"40567",name:"Forest Hideout",y:2022,to:2022,pcs:258,mf:2,line:"Dárek k nákupu",f:["forestmen"],st:"off",note:"Remake 6054; 90. výročí"},
 {n:"31132",name:"Viking Ship and the Midgard Serpent",y:2022,to:2023,pcs:1192,line:"Creator 3 v 1",f:["vikingove"],st:"off",note:"Vyřazeno 31. 12. 2023"},
 {n:"71034-11",name:"Minifigurky série 23 – Knight of the Yellow Castle",y:2022,to:2022,pcs:null,line:"Sběratelské minifigurky",f:["klasicky-hrad"],st:"off",note:""},
 {n:"21325",name:"Medieval Blacksmith",y:2021,to:2023,pcs:2164,mf:4,line:"Ideas",f:["black-falcons"],st:"off",note:"Vyřazeno 31. 12. 2023"},
 {n:"31120",name:"Medieval Castle",y:2021,to:2024,pcs:1426,mf:3,line:"Creator 3 v 1",f:["black-falcons"],st:"off",note:"Vyřazeno 31. 12. 2024"},
 {n:"910001",name:"Castle in the Forest",y:2021,to:2022,pcs:1957,mf:6,line:"BrickLink Designer Program",f:["black-falcons","forestmen"],st:"off",note:"Limitovaná edice, vyprodáno"},
 {n:"71025-3",name:"Minifigurky série 19 – Fright Knight",y:2019,to:2019,pcs:null,line:"Sběratelské minifigurky",f:["fright-knights"],st:"off",note:""},
 {n:"BL19001",name:"Löwenstein Castle",y:2019,to:2019,pcs:2015,line:"BrickLink AFOL pilot",f:[],st:"off",note:"Autor Raziel_Regulus; limitovaná edice"}
];
// Starší reedice a pocty (před rokem 2016) – období prodeje pro časovou osu
const REISSUE = {"10000":[2001,2001],"10039":[2002,2003],"10176":[2006,2007],"8683-14":[2010,2010]};
// Původní minifigurky s erbem frakce (ID BrickLink/Brickset, ověřeno na brickset.com/minifigs)
const MF = {
 "klasicky-hrad":[["cas002","Rytíř se štítem červeno-šedým"],["cas088s","Rytíř žlutého hradu (s nálepkami)"]],
 "crusaders":[["cas112","Crusader Lion – lví erb"],["cas105","Crusader Axe – zkřížené sekery"]],
 "black-falcons":[["cas101a","Black Falcon se štítem (vintage)"],["cas253","Black Falcon, špičatý štít"]],
 "forestmen":[["cas137","Forestman, zelený klobouk"],["cas126","Forestman s vakem"]],
 "black-knights":[["cas141","Black Knights – šupinová zbroj, modrá"],["cas149","Black Knights – šupinová zbroj, červená"]],
 "wolfpack":[["cas251","Wolfpack, páska přes oko"],["cas252","Wolfpack, knír"]],
 "dragon-masters":[["cas001","Dragon Master se žlutými chocholy"],["cas013","Dragon Knight"]],
 "royal-knights":[["cas061","Royal Knights – rytíř"],["cas060","Royal Knights – král"]],
 "dark-forest":[["cas004","Dark Forest – lesní muž 1"],["cas006","Dark Forest – lesní muž 2"]],
 "fright-knights":[["cas026","Fright Knights – rytíř"],["cas022","Basil the Bat Lord"]],
 "ninja":[["cas056","Šógun v brnění"],["cas055","Samuraj"]],
 "knights-kingdom":[["cas035","Král Leo"],["cas046","Cedric the Bull"]],
 "knights-kingdom-2":[["cas265","Jayko"],["cas256","Stínový rytíř Vladek"]],
 "vikingove":[["https://images.brickset.com/minifigs/large/vik015.jpg","Vikingský válečník 1a"],["https://images.brickset.com/minifigs/large/vik001.jpg","Vikingský válečník 1d"]],
 "fantasy-era":[["cas366","Korunní rytíř"],["cas330","Kostlivec válečník"]],
 "kingdoms":[["cas445","Lví rytíř"],["cas455","Dračí rytíř"]],
 "castle-2013":[["cas516","Králův rytíř s korunou"],["cas522","Dračí rytíř s dračím štítem"]],
 "horse-knights":[["cas592","Horse Knight – král"],["cas590","Horse Knight – šampion"],["cas591","Horse Knight – kopiník"],["bdp355","Horse Knight (910062)"]],
 "serpent-knights":[["cas593","Serpent Knight"]],
 "griffin-knights":[["idea232","Griffin Knight – muž"],["idea236","Griffin Knight – žena"],["bdp353","Griffin Knight (910062)"]],
 "kraken-warriors":[["idea229","Kraken Warrior – muž"],["idea234","Kraken Warrior – žena"],["bdp351","Kraken Bandit (910062)"]]
};
const mfUrl = id => id.startsWith("http")?id:`https://img.bricklink.com/ItemImage/MN/0/${id}.png`;
const sid = n => /-\d+$/.test(n)?n:n.split("–")[0]+"-1";           // Brickset ID
const disp = n => n.replace(/-\d+$/,"");                             // zobrazované číslo
const setImg = n => `https://images.brickset.com/sets/images/${sid(n)}.jpg`;
// Vlastní popisy důležitých setů (fakta: Brickset, recenze Brickset, Wikipedia, Brickipedia, TheBrickFan)
const SETDESC = {
 "31132":{cs:"Creator 3 v 1 se třemi modely na vikingské motivy: loď s mořským hadem, dům s drakem a vlk se stromem. Navazuje na řadu Vikings z let 2005–2006, kde vikingové bojovali s Midgardským hadem.",
          en:"A Creator 3in1 with three Viking-themed models: a ship with a sea serpent, a house with a dragon, and a wolf with a tree. It echoes the 2005–2006 Vikings line, where Vikings fought the Midgard Serpent."},
 "21343":{cs:"Vikingská vesnice (LEGO Ideas, 2 103 dílků). Tři propojitelné stavby: kovárna, náčelníkův dlouhý dům a strážní věž. Kovárna a dlouhý dům mají odnímatelnou střechu, věž odnímatelnou stěnu, takže je vidět dovnitř.",
          en:"LEGO Ideas, 2,103 pieces. Three connectable buildings: a blacksmith's forge, the chieftain's longhouse and a watchtower. The forge and longhouse have removable roofs and the tower a removable wall, so you can look inside."},
 "31161":{cs:"Malý Creator 3 v 1 bez frakce: drak, kterého jde přestavět na mořského hada nebo fénixe. Do hradní řady patří jen volně, jako doplněk ke středověkým stavbám.",
          en:"A small Creator 3in1 set without a faction: a dragon that rebuilds into a sea serpent or a phoenix. It belongs to the castle line only loosely, as an addition to medieval builds."},
 "31168":{cs:"Hrad Creatoru 3 v 1 od designéra Jonathana Robsona, se kterým přišla nová frakce Horse Knights. Pohyblivý padací most, padací mříž, kamenná strážní věž, obytná část v tudorovském stylu s modrou střechou, velký sál s trůnem a lustrem, královská ložnice, krb, který slouží i jako kovárna, stáj a skrýš s pokladem pod schody. Šest minifigurek – koňští rytíři včetně krále a šampiona a jeden Serpent Knight jako soupeř – a dva koně. Podle LEGO jde hrad přestavět na rytířský turnaj nebo na středověké město s větrným mlýnem.",
          en:"A Creator 3in1 castle by designer Jonathan Robson that introduced the new Horse Knights faction. A working drawbridge, a portcullis, a stone watchtower, Tudor-style living quarters with a blue roof, a great hall with a throne and chandelier, the king's bedroom, a fireplace that doubles as a forge, a stable and a hidden treasure spot under the stairs. Six minifigures – Horse Knights including the king and a champion, plus one Serpent Knight as a rival – and two horses. According to LEGO the castle rebuilds into a jousting tournament or a medieval town with a windmill."},
 "21358":{cs:"66 podle fanouškovského návrhu. Plně funkční automat: vhodíte minci, otočíte rukojetí a vypadne kapsle s figurkou. Šestnáct sběratelských figurek vzdává podle LEGO hold klasickým tématům jako Castle, Paradisa a Fabuland; čtyři z nich vybrali fanoušci LEGO Ideas – právě mezi nimi jsou nové hradní frakce Griffin Knights a Kraken Warriors.",
          en:"LEGO Ideas No. 66, based on a fan design. A fully working vending machine: insert a coin, turn the handle and a capsule with a figure drops out. According to LEGO, the sixteen collectible figures pay tribute to classic themes such as Castle, Paradisa and Fabuland; four of them were chosen by LEGO Ideas fans – among them the new castle factions Griffin Knights and Kraken Warriors."},
 "910070":{cs:"Hostinec z 9. série BrickLink Designer Programu od autora MarinBD. Otočením polena na boku se v krbu opéká kuře, zatímco hosté tančí a na pódiu hraje bard. Set je navržený tak, aby stál vedle 21325 Medieval Blacksmith a 910062 Alchemist's Shop. Hostům dělají společnost Griffin Knights, Horse Knights a Kraken Warriors.",
           en:"A tavern from BrickLink Designer Program Series 9 by MarinBD. Turning a log on the side roasts a chicken over the hearth while patrons dance and a bard performs on stage. It is designed to stand next to 21325 Medieval Blacksmith and 910062 Alchemist's Shop. Griffin Knights, Horse Knights and Kraken Warriors keep the guests company."},
 "910064":{cs:"Velká pevnost z 8. série BrickLink Designer Programu (3 960 dílků) s pozorovací věží, vozem a koněm. Podle inventáře Rebrickable je to domov armády Serpent Knights: dvanáct hadích bojovníků proti Bílému králi a rytíři Horse Knights, dvěma Griffin Knights a jednomu Kraken Warriorovi. Předobjednávky se otevřely v červnu 2026.",
           en:"A large keep from BrickLink Designer Program Series 8 (3,960 pieces) with an observation tower, a cart and a horse. According to the Rebrickable inventory it is the home of the Serpent Knights' army: twelve serpent warriors against the White King and a knight of the Horse Knights, two Griffin Knights and one Kraken Warrior. Pre-orders opened in June 2026."},
 "910062":{cs:"Alchymistova dílna od autora Shram ze 7. série BrickLink Designer Programu, plně zafinancovaná za dva dny. Laboratoř, kašna, zahrada a váhy. Mezi devíti figurkami jsou Kraken Bandit, Griffin Knight a dva Horse Knights.",
           en:"An alchemist's shop by Shram from BrickLink Designer Program Series 7, fully funded within two days. A laboratory, a fountain, a garden and scales. The nine figures include a Kraken Bandit, a Griffin Knight and two Horse Knights."},
 "40912":{cs:"Nová verze lodi 6057 z roku 1992, která zvítězila v designérské soutěži LEGO Ideas „A Twist of Nostalgia“ (návrh HallowedBrick02, set dotáhla Mel Caddick). Látková plachta, modulární záď, pohyblivá kormidla, vlajky a nákladový prostor. Posádku tvoří dva rytíři, které katalog Rebrickable vede jako Griffin Knights v tmavě modré variantě. 241 dílků, loď měří asi 20 cm. Dárek k nákupu během Insiders Days v červenci 2026, na lego.cz uvedený s hodnotou 599 Kč.",
          en:"A new version of the 1992 ship 6057 that won the LEGO Ideas design contest “A Twist of Nostalgia” (design by HallowedBrick02, finished by Mel Caddick). A fabric sail, a modular stern, movable rudders, flags and a cargo hold. The crew are two knights that the Rebrickable catalogue lists as Griffin Knights in a dark blue variant. 241 pieces, about 20 cm long. A gift with purchase during Insiders Days in July 2026."},
 "910057":{cs:"Doupě psanců od autora BrickHammer (6. série BrickLink Designer Programu, 2025): jeskyně, padací dveře, padací mříž, pozorovatelna a vlk. Wolfpack tu po letech znovu dostal vlastní úkryt, Lion Knights hlídkují.",
           en:"An outlaw den by BrickHammer (BrickLink Designer Program Series 6, 2025): a cave, a trapdoor, a portcullis, a lookout and a wolf. The Wolfpack get their own hideout again after decades, with Lion Knights on patrol."},
 "910045":{cs:"Obléhací tábor od autora SleeplessNight k 25. výročí BrickLinku: obléhací věž, katapult, stany, kovář a pozorovací věž. S 18 minifigurkami jde o největší armádu v jednom setu této doby – Lion Knights proti Black Falcons.",
           en:"A siege camp by SleeplessNight for BrickLink's 25th anniversary: a siege tower, a catapult, tents, a blacksmith and an observation tower. With 18 minifigures it is the biggest army in a single set of the era – Lion Knights against Black Falcons."},
 "910047":{cs:"Přímořský trh od autora Bricks_fan_uy (4. série BrickLink Designer Programu): koncové věže, tržiště, přístav s jeřábem, hradní část s úřadem výběrčího daní, vinárna s vozíkem a loď. Hlídají ho Lion Knights.",
           en:"A seaside market by Bricks_fan_uy (BrickLink Designer Program Series 4): end towers, a market, a harbour with a crane, a castle section with the tax collector's office, a winery with a cart and a boat. Guarded by Lion Knights."},
 "910043":{cs:"Lesní pevnost (3. série BrickLink Designer Programu) ze dvou polovin spojených mostem a lanovkou mezi věžemi. Sklep s přístupem k potoku, plánovací stůl, pokladnice, spíž a ložnice. Třináct figurek: devět Forestmen, tři Black Falcons a kostlivec.",
           en:"A forest stronghold (BrickLink Designer Program Series 3) in two halves joined by a bridge and a zip line between the towers. A cellar with access to the stream, a planning table, a treasure room, a pantry and a bedroom. Thirteen figures: nine Forestmen, three Black Falcons and a skeleton."},
 "910029":{cs:"Horská pevnost od autora SleeplessNight, první série BrickLink Designer Programu (2024), vyprodaná krátce po otevření předobjednávek. Padací most, padací mříž, žalář, stáj a mikromodel; devět figurek s Black Falcons.",
           en:"A mountain fortress by SleeplessNight from BrickLink Designer Program Series 1 (2024), sold out shortly after pre-orders opened. A drawbridge, a portcullis, a dungeon, a stable and a microscale model; nine figures with Black Falcons."},
 "10332":{cs:"Podle LEGO jde o vesničku Felsa, inspirovanou setem 10193 Středověká vesnice a trh z roku 2009, a doplněk k hradu 10305 (designéři Henrik Rubin Saaby a Rok Žgalin Kobe). Náměstí se starým stromem, kde si vesničané směňují zboží, dům výběrčího daní s tajnou přihrádkou na peníze, plakáty s odměnou za dopadení zločinců, dílna malíře štítů s rozpracovaným štítem Lion Knights, hospoda U Zlomené sekyry, statek s ochočenou kozou, stánek se sýry, preclíky a pečivem a strážní věž, odkud hlídá Lví rytíř. Osm figurek včetně návratu frakce Wolfpack.",
          en:"According to LEGO, the village of Felsa, inspired by the 2009 set 10193 Medieval Market Village and a companion to castle 10305 (designers Henrik Rubin Saaby and Rok Žgalin Kobe). A square with an old tree where villagers trade goods, the tax collector's house with a secret money compartment, wanted posters, a shield painter's workshop finishing a Lion Knights shield, the Broken Axe tavern, a farmhouse with a tame goat, a stall with cheese, pretzels and pastries, and a watchtower where a Lion Knight keeps guard. Eight figures, including the return of the Wolfpack."},
 "10305":{cs:"Vlajková loď návratu klasiky. Vznikl k 90. výročí LEGO na přání fanoušků: o tématu rozhodla anketa na platformě LEGO Ideas, které se podle LEGO zúčastnilo 55 000 lidí. Je to nová verze hradu 6080 z roku 1984 (designéři Milan Madge, Mike Psiaki a Carl Merriam), prodávaná jen na LEGO.com a v obchodech LEGO Store; doporučená cena byla 10 099 Kč. Zavřený hrad má 38 × 44 × 33 cm, dvě poloviny se otevírají na téměř 70 cm. Uvnitř stáj, zbrojnice, hladomorna, kuchyně s mlýnem a funkčním vodním kolem, hodovní síň a královnina komnata s miniaturou hradu 375. Padací most a mříž jdou zvedat a spouštět, za pohyblivými stěnami jsou tajné chodby a pod hradem skrýš lesních lidí – když zaútočí, propadnou se padacími dveřmi rovnou do hladomorny a pak mohou utéct tajnou chodbou. 22 minifigurek: královna a Lion Knights, Black Falcons, Forestmen a čaroděj Majisto. Krabice kopíruje styl LEGOLAND Castle z 80. let.",
          en:"The flagship of the classics' return. It was made for LEGO's 90th anniversary at fans' request: the theme was chosen in a LEGO Ideas poll in which, according to LEGO, 55,000 people took part. It is a new version of the 1984 castle 6080 (designers Milan Madge, Mike Psiaki and Carl Merriam), sold only at LEGO.com and LEGO Stores. Closed, it measures 38 × 44 × 33 cm; its two halves open to almost 70 cm. Inside: a stable, an armoury, a dungeon, a kitchen with a mill and a working water wheel, a dining hall and the queen's chamber with a miniature 375 castle. The drawbridge and portcullis can be raised and lowered, moving walls hide secret passages, and beneath the castle is the forest folk's hideout – when they attack, a trapdoor drops them straight into the dungeon, from which they can escape through a secret tunnel. 22 minifigures: the queen and Lion Knights, Black Falcons, Forestmen and the wizard Majisto. The box copies the 1980s LEGOLAND Castle style."},
 "40567":{cs:"Dárek k nákupu k 90. výročí LEGO (2022), malá nová verze stromového úkrytu 6054 se zachovanou černou věží a modrou střechou. Otevírá se na pantech, po žebříku se leze k sudu se zlatem a nechybí terč na střelbu. Dva lesní lidé.",
          en:"A gift with purchase for LEGO's 90th anniversary (2022), a small new version of the 6054 tree hideout that keeps its black tower and blue roof. It hinges open, a ladder leads to a barrel of gold, and there is an archery target. Two Forest People."},
 "40601":{cs:"Moderní verze setu 6048 vydaná 30 let po originálu: zachycuje mnoho původních detailů a doplňků, otevírá se, aby byl vidět interiér, a obsahuje Majista s hůlkou a rytíře. Zhruba 19 × 17 × 13 cm. Dárek k nákupu v listopadu 2023 a znovu v září 2024.",
          en:"A modern version of set 6048 released 30 years after the original: it keeps many original details and accessories, opens to show the interior and includes Majisto with his wand and a knight. About 19 × 17 × 13 cm. A gift with purchase in November 2023 and again in September 2024."},
 "21325":{cs:"Tři patra, která jdou sundat: dole plně vybavená kovárna s výhní, která se po stisku měchu rozsvítí, nad ní kuchyně, v podkroví ložnice. Venku jabloň se studnou, terč, dýně a kůň s vozem. Dva nově potištění rytíři Black Falcons.",
          en:"An exclusive LEGO Ideas set based on a design by Clemens Fiedler who, according to LEGO, learned blacksmithing as a child in Germany and brought it into the details of the model. Three floors that lift apart: a fully equipped forge whose fire lights up when you press the bellows, a kitchen above and a bedroom in the attic. Outside: an apple tree with a well, an archery target, pumpkins and a horse and cart. Two newly printed Black Falcon knights."},
 "31120":{cs:"Creator 3 v 1 (Jonathan Robson, Morten Rauff): brána, kovárna, vodní mlýn, vězení a královská komnata, zadní strana se otevírá. Figurky kováře a dvou středověkých strážných se zbraněmi v barvách Black Falcons, ohnivý drak z kostek, sokol a slepice. Podle LEGO se hrad přestaví na zámeckou věž nebo tržiště; tři kusy jdou spojit do velkého hradu.",
          en:"A Creator 3in1 castle (Jonathan Robson, Morten Rauff): a gate, a smithy, a water mill, a prison and the king's room, with an opening back. A blacksmith and two armed medieval guards in Black Falcons colours, a brick-built fire-breathing dragon, a falcon and chickens. According to LEGO it rebuilds into a castle tower or a marketplace; three copies combine into one big castle."},
 "910001":{cs:"Hrad v lese z prvního kola BrickLink Designer Programu (2021): jeskyně, vor, padací dveře, padací mříž, střelnice, kuchyně a ložnice. Šest figurek – Forestmen a Black Falcons.",
           en:"A castle in the forest from the first BrickLink Designer Program round (2021): a cave, a raft, a trapdoor, a portcullis, target practice, a kitchen and a bedroom. Six figures – Forestmen and Black Falcons."},
 "10223":{cs:"Závěr řady Kingdoms: hradní zeď s bránou a šesti místnostmi, hrázděný dům, královská lóže, dva stany a turnajová bariéra, celkem asi 51 cm. Devět figurek včetně krále, královny, princezny a rytíře se sokolem na štítu. Dva kusy se dají spojit.",
          en:"The finale of the Kingdoms line: a castle wall with a gate and six rooms, a half-timbered house, a royal box, two tents and a jousting barrier, about 51 cm wide. Nine figures including the king, queen, princess and a knight with a falcon on his shield. Two copies can be combined."},
 "10193":{cs:"Středověká tržní vesnice: dvě patrové budovy na pantech – hostinec a kovárna, kde vodní kolo pohání kladivo. Tržní stánek, strom a vůz se senem tažený koněm, dvě krávy. Osm figurek s Korunními rytíři. Předloha pro 10332 z roku 2024.",
          en:"A medieval market village: two hinged two-storey buildings – a tavern and a smithy where a water wheel drives a hammer. A market stall, a tree, a horse-drawn hay cart and two cows. Eight figures with Crown Knights. The basis for 10332 in 2024."},
 "10176":{cs:"Hrad pro dospělé fanoušky od Henrika Rubina Saabyho (2006), pocta hradům 6090 Royal Knights a 6091 Knights' Kingdom. Žalář, katapult, kovárna, trůn a vyvýšená základní deska; dvanáct figurek včetně kostlivců.",
          en:"A castle for adult fans by Henrik Rubin Saaby (2006), a tribute to castles 6090 (Royal Knights) and 6091 (Knights' Kingdom). A dungeon, a catapult, a blacksmith, a throne and a raised baseplate; twelve figures including skeletons."},
 "10039":{cs:"Reedice hradu 6074 v řadě LEGO Legends (2002–2003): 426 dílků, šest figurek a padací most, prakticky shodná s originálem z roku 1986.",
          en:"A reissue of castle 6074 in the LEGO Legends line (2002–2003): 426 pieces, six figures and a drawbridge, practically identical to the 1986 original."},
 "6097":{cs:"Hlavní hrad Fright Knights s Basilem the Bat Lord a čarodějnicí Willou: padací dveře, vězení, trůn a drak. 601 dílků, osm figurek.",
         en:"The Fright Knights' headquarters with Basil the Bat Lord and Willa the Witch: a trapdoor, a jail, a throne and a dragon. 601 pieces, eight figures."},
 "6090":{cs:"Největší set Royal Knights: katapult, padací dveře, trůn a kostlivci v podzemí. 764 dílků, jedenáct figurek. Autor Niels Milan Pedersen.",
         en:"The largest Royal Knights set: a catapult, a trapdoor, a throne and skeletons underground. 764 pieces, eleven figures. Designed by Niels Milan Pedersen."},
 "6082":{cs:"Pevnost Dragon Masters s čarodějem Majistem a drakem: padací dveře a žalář. 397 dílků, šest figurek. Autor Daniel August Krentz.",
         en:"The Dragon Masters' fortress with the wizard Majisto and a dragon: a trapdoor and a dungeon. 397 pieces, six figures. Designed by Daniel August Krentz."},
 "6086":{cs:"Černý hrad Black Knights na vyvýšené základní desce: padací most, padací mříž, žalář se zajatcem z Wolfpack a studna. 588 dílků, dvanáct figurek. Autor Niels Milan Pedersen.",
         en:"The Black Knights' black castle on a raised baseplate: a drawbridge, a portcullis, a dungeon with a Wolfpack prisoner and a well. 588 pieces, twelve figures. Designed by Niels Milan Pedersen."},
 "6054":{cs:"Stromový úkryt Forestmen s terčem na střelbu, černou věží a modrou střechou. 201 dílků, dvě figurky. V roce 2022 se vrátil jako dárek 40567.",
         en:"The Forestmen's tree hideout with an archery target, a black tower and a blue roof. 201 pieces, two figures. It returned in 2022 as gift 40567."},
 "6074":{cs:"Pevnost Black Falcons, nástupce hradu 6073: sklopné hradby a padací most. 435 dílků, šest figurek. Autor Daniel August Krentz. V roce 2002 vyšla znovu jako 10039.",
         en:"The Black Falcons' fortress, successor to castle 6073: hinged walls and a drawbridge. 435 pieces, six figures. Designed by Daniel August Krentz. Reissued in 2002 as 10039."},
 "6073":{cs:"První hrad Black Falcons (1984): sklopné hradby, padací most a žalář. 408 dílků, šest figurek. Autor Daniel August Krentz.",
         en:"The first Black Falcons castle (1984): hinged walls, a drawbridge and a dungeon. 408 pieces, six figures. Designed by Daniel August Krentz."},
 "6080":{cs:"Královský hrad Lion Knights z roku 1984 s padacím mostem, padací mříží a žalářem na velké základní desce. 664 dílků, dvanáct figurek. Autor Niels Milan Pedersen. Předloha pro 10305 Lion Knights' Castle.",
         en:"The Lion Knights' King's Castle from 1984 with a drawbridge, a portcullis and a dungeon on a large baseplate. 664 pieces, twelve figures. Designed by Niels Milan Pedersen. The model for 10305 Lion Knights' Castle."},
 "375-2":{cs:"Slavný žlutý hrad, první velký set řady (1978). Sklopné hradby a padací most, 767 dílků a 14 minifigurek. Autor Daniel August Krentz. Jeho miniatura je v královnině komnatě setu 10305.",
          en:"The famous yellow castle, the line's first large set (1978). Hinged walls and a drawbridge, 767 pieces and 14 minifigures. Designed by Daniel August Krentz. A miniature of it sits in the queen's chamber of set 10305."}
};

// Oficiální české názvy setů z lego.cz
const CZNAME = {"10305":"Hrad Lvího rytíře","10332":"Středověké náměstí","21325":"Středověká kovárna","31120":"Středověký hrad","21343":"Vikingská vesnice",
 "31132":"Vikingská loď a mořský had","40912":"Mořský had","40601":"Majisto a jeho kouzelná dílna","40567":"Úkryt lesních zbojníků",
 "31168":"Středověký hrad a rytíři na koních","21358":"Automat na minifigurky","31161":"Středověký drak"};
// Katalog setů a minifigurek – veřejná data Rebrickable (snímek 29. 10. 2026), převzato z verze GPT v2
// CAT_SETS[id] = [název, rok, dílky, druh, [frakce], [[figurka, počet]], má lokální foto]
// CAT_FIGS[id] = [název, frakce, podskupina, [sety], má lokální foto]
const CAT_SUB = {"lion":["Lví rytíři","Crusaders / Lion Knights"],"falcon":["Černí sokoli","Black Falcons"],"forest":["Lesní zbojníci","Forestmen / Forest People"],"black":["Černí rytíři","Black Knights"],"wolf":["Vlčí smečka","Wolfpack"],"dragon":["Dračí mistři","Dragon Masters / Dragon Knights"],"royal":["Královští rytíři","Royal Knights"],"dark":["Temný les","Dark Forest"],"fright":["Netopýří rytíři","Fright Knights"],"classic":["Rytíři žlutého hradu","Classic Castle"],"leo":["Království krále Lea","King Leo’s Kingdom"],"bull":["Býčí rytíři","Bull Knights"],"morcia":["Hrdinové Morcie","Morcia / Hero Knights"],"shadow":["Stínoví rytíři","Shadow Knights / Vladek"],"rogue":["Odpadlí rytíři","Rogue Knights"],"crown":["Korunní rytíři","Crown Knights"],"dwarf":["Trpaslíci","Dwarves"],"troll":["Trollové a orkové","Troll Warriors / Orcs"],"skeleton":["Armáda kostlivců","Skeleton Army"],"kingdom-lion":["Červení lvi","Lion Kingdom · Kingdoms"],"kingdom-dragon":["Zelení draci","Dragon Kingdom · Kingdoms"],"blue-lion":["Modří lvi","King’s Knights · Castle 2013"],"red-dragon":["Červení draci","Dragon Soldiers · Castle 2013"],"horse":["Koňští rytíři","Horse Knights"],"griffin":["Gryfí rytíři","Griffin Knights"],"kraken":["Krakení válečníci","Kraken Warriors"],"serpent":["Hadí rytíři","Serpent / Snake Knights"],"independent":["Samostatné postavy CMF","Independent medieval CMF"],"civil":["Obyvatelé středověku","Civilians & unassigned"],"ninja":["Ninja · původní řada","Ninja · 1998–2000"],"viking":["Vikingové","Vikings"],"elf":["Elfové","Elves / Elflands · CMF"]};
const CAT_SETS = {"910070-1":["Sleepy Dragon Inn",2027,0,"BDP",[],[],1],"910064-1":["Dustmark Keep",2026,3959,"BDP",["griffin-knights","horse-knights","kraken-warriors","serpent-knights"],[["fig-016358",1],["fig-018225",1],["fig-018226",1],["fig-018227",1],["fig-018228",1],["fig-018229",1],["fig-018230",1],["fig-018231",1],["fig-018232",1],["fig-018233",1],["fig-018234",1],["fig-018235",1],["fig-018236",1],["fig-018237",1],["fig-018238",1],["fig-018239",1],["fig-018240",1],["fig-018241",1],["fig-018242",1],["fig-018243",1]],1],"910062-1":["Alchemist's Shop",2026,2319,"BDP",["griffin-knights","horse-knights","kraken-warriors"],[["fig-016676",1],["fig-017912",1],["fig-017913",1],["fig-017914",1],["fig-017915",1],["fig-017916",1],["fig-017917",1],["fig-017918",1],["fig-017919",1]],1],"910057-1":["Outlaw Forest Den",2026,2623,"BDP",["crusaders","wolfpack"],[["fig-017428",1],["fig-017429",1],["fig-017430",1],["fig-017431",1],["fig-017432",1],["fig-017433",1],["fig-017434",1],["fig-017435",1],["fig-017436",1],["fig-017437",1]],1],"40912-1":["Sea Serpent",2026,241,"GWP",["griffin-knights"],[["fig-017958",1],["fig-017959",1]],1],"EG00165-1":["5 x Magenta Knights Bundle",2025,45,"Pick a Brick",[],[],1],"EG00164-1":["5 x Wolfpack Outlaws Bundle",2025,27,"Pick a Brick",[],[],1],"EG00162-1":["5 x Viking Villagers Bundle",2025,30,"Pick a Brick",[],[],1],"EG00161-1":["5 x Crusader Horses Bundle",2025,10,"Pick a Brick",[],[],1],"EG00160-1":["5 x Crusader Archers Bundle",2025,35,"Pick a Brick",[],[],1],"910049-1":["Adventure in Transylvania",2025,4060,"BDP",[],[["fig-013194",1],["fig-013952",1],["fig-016977",1],["fig-016978",1],["fig-016979",1],["fig-016980",1],["fig-016981",1],["fig-016982",1],["fig-016983",1],["fig-016984",1],["fig-016985",1],["fig-016986",1],["fig-016987",1],["fig-016988",1],["fig-016989",1]],1],"910048-1":["Riverside Scholars",2025,2785,"BDP",[],[["fig-016564",1],["fig-016565",1],["fig-016566",1],["fig-016567",1],["fig-016568",1]],1],"910047-1":["Medieval Seaside Market",2025,2560,"BDP",[],[["fig-016555",1],["fig-016556",1],["fig-016557",1],["fig-016558",1],["fig-016559",1],["fig-016560",1],["fig-016561",1],["fig-016562",1],["fig-016563",1]],1],"910045-1":["Siege Encampment",2025,2601,"BDP",["black-falcons","crusaders"],[["fig-012999",1],["fig-015253",1],["fig-016538",1],["fig-016539",1],["fig-016540",1],["fig-016541",1],["fig-016542",1],["fig-016543",1],["fig-016544",1],["fig-016545",1],["fig-016546",1],["fig-016547",1],["fig-016548",1],["fig-016549",1],["fig-016550",1],["fig-016551",1],["fig-016552",1],["fig-016553",1]],1],"910043-1":["Forest Stronghold",2025,3396,"BDP",["black-falcons","forestmen"],[["fig-012989",1],["fig-016152",1],["fig-016153",1],["fig-016154",1],["fig-016155",1],["fig-016156",1],["fig-016157",1],["fig-016158",1],["fig-016159",1],["fig-016160",1],["fig-016161",1],["fig-016163",1],["fig-016164",1]],1],"71048-2":["Wolfpack Beastmaster",2025,9,"CMF",["wolfpack"],[["fig-015703",1]],1],"31168-1":["Medieval Horse Knight Castle",2025,1371,"Moderní set",["horse-knights","serpent-knights"],[["fig-016595",1],["fig-016596",1],["fig-016597",1],["fig-016598",1],["fig-016599",1],["fig-016600",1]],1],"21358-1":["Minifigure Vending Machine",2025,1343,"Moderní set",["griffin-knights","kraken-warriors"],[["fig-016348",2],["fig-016349",2],["fig-016350",1],["fig-016351",1],["fig-016352",1],["fig-016353",1],["fig-016354",1],["fig-016355",1],["fig-016356",1],["fig-016357",1],["fig-016358",1],["fig-016359",1],["fig-016360",1],["fig-016361",1]],1],"910029-1":["Mountain Fortress",2024,3997,"BDP",["black-falcons","crusaders"],[["fig-015248",1],["fig-015249",1],["fig-015250",1],["fig-015251",1],["fig-015252",1],["fig-015253",1],["fig-015254",1],["fig-015255",1],["fig-015256",1]],1],"71045-3":["Vampire Knight",2024,11,"CMF",["fright-knights"],[["fig-014653",1]],1],"10332-1":["Medieval Town Square",2024,3308,"Moderní set",["crusaders","wolfpack"],[["fig-014807",1],["fig-014809",1],["fig-014810",1],["fig-014811",1],["fig-014812",1],["fig-014813",1],["fig-014814",1],["fig-014815",1]],1],"71037-5":["Falconer",2023,8,"CMF",["black-falcons"],[["fig-013453",1]],1],"40601-1":["Majisto’s Magical Workshop",2023,365,"GWP",["dragon-masters"],[["fig-014420",1],["fig-014421",1]],1],"21343-1":["Viking Village",2023,2104,"Moderní set",[],[["fig-014393",1],["fig-014394",1],["fig-014395",1],["fig-014396",1]],1],"71034-11":["Knight of the Yellow Castle",2022,12,"CMF",["klasicky-hrad"],[["fig-013089",1]],1],"40567-1":["Forest Hideout",2022,258,"GWP",["forestmen"],[["fig-012855",1],["fig-012856",1]],1],"31132-1":["Viking Ship and the Midgard Serpent",2022,1191,"Moderní set",[],[["fig-012754",1],["fig-012755",1],["fig-012756",1],["fig-012757",1]],1],"10305-1":["Lion Knights' Castle",2022,4515,"Moderní set",["black-falcons","crusaders","dragon-masters","forestmen"],[["fig-012977",1],["fig-012978",1],["fig-012979",1],["fig-012980",1],["fig-012981",1],["fig-012982",1],["fig-012983",1],["fig-012984",1],["fig-012985",1],["fig-012986",1],["fig-012988",1],["fig-012989",1],["fig-012991",1],["fig-012992",1],["fig-012993",1],["fig-012994",1],["fig-012995",1],["fig-012996",1],["fig-012997",1],["fig-012998",1],["fig-012999",1],["fig-013000",1]],1],"910001-1":["Castle in the Forest",2021,1954,"BDP",[],[["fig-012368",1],["fig-012369",1],["fig-012370",1],["fig-012371",1],["fig-012372",1],["fig-012373",1]],1],"31120-1":["Medieval Castle",2021,1426,"Moderní set",["black-falcons"],[["fig-002892",1],["fig-011278",1],["fig-011279",1],["fig-011280",1]],1],"21325-1":["Medieval Blacksmith",2021,2164,"Moderní set",["black-falcons"],[["fig-010920",1],["fig-010921",1],["fig-010922",1],["fig-010923",1]],1],"71027-4":["Tournament Knight",2020,8,"CMF",[],[["fig-008798",1]],1],"71025-3":["Fright Knight",2019,9,"CMF",[],[["fig-002072",1]],1],"19001-1":["Löwenstein Castle",2019,2017,"BDP",[],[["fig-011963",1],["fig-011964",1],["fig-011965",1]],1],"71018-15":["Elf Maiden",2017,7,"CMF",[],[["fig-008790",1]],1],"71013-11":["Rogue",2016,7,"CMF",[],[["fig-001264",1]],1],"71011-3":["Frightening Knight",2016,10,"CMF",[],[["fig-001465",1]],1],"71011-16":["Queen",2016,8,"CMF",[],[["fig-001052",1]],1],"5004419-1":["Classic Knights Minifigure",2016,41,"Historický set",["crusaders"],[["fig-001218",1]],1],"71008-5":["Goblin",2015,7,"CMF",[],[["fig-001319",1]],1],"71008-10":["Evil Wizard",2015,10,"CMF",[],[["fig-008779",1]],1],"71008-1":["Classic King",2015,9,"CMF",[],[["fig-001314",1]],1],"850889-1":["Castle Dragons Accessory Set",2014,42,"Historický set",["castle-2013"],[["fig-010062",1],["fig-010063",1],["fig-010064",1],["fig-010120",1]],1],"850888-1":["Castle Knights Accessory Set",2014,36,"Historický set",["castle-2013"],[["fig-010058",1],["fig-010059",1],["fig-010060",1],["fig-010110",1]],1],"71007-1":["Wizard",2014,11,"CMF",[],[["fig-008777",1]],1],"LILLE-1":["LEGO Store Grand Opening Exclusive Set, Euralille, Lille, France",2013,16,"Historický set",["kingdoms"],[["fig-010067",1],["fig-010153",1],["fig-010154",1]],1],"71000-4":["Heroic Knight",2013,10,"CMF",[],[["fig-000491",1]],1],"70404-1":["King's Castle",2013,1003,"Historický set",["castle-2013"],[["fig-010062",1],["fig-010064",1],["fig-010108",1],["fig-010109",1],["fig-010110",1],["fig-010111",1],["fig-010112",1]],1],"70403-1":["Dragon Mountain",2013,381,"Historický set",["castle-2013"],[["fig-006764",1],["fig-006911",1],["fig-010058",1],["fig-010113",1],["fig-010114",1]],1],"70402-1":["The Gatehouse Raid",2013,248,"Historický set",["castle-2013"],[["fig-010062",1],["fig-010115",1],["fig-010116",1],["fig-017956",1]],1],"70401-1":["Gold Getaway",2013,199,"Historický set",["castle-2013"],[["fig-010059",1],["fig-010117",1],["fig-010118",1]],1],"70400-1":["Forest Ambush",2013,90,"Historický set",["castle-2013"],[["fig-010060",1],["fig-010064",1],["fig-010119",1],["fig-010120",1]],1],"8831-14":["Evil Knight",2012,8,"CMF",[],[["fig-001489",1]],1],"853373-1":["Kingdoms Chess",2012,329,"Historický set",["kingdoms"],[["fig-006945",1],["fig-009885",1],["fig-009886",2],["fig-009887",8],["fig-009888",2],["fig-009889",2],["fig-009890",1],["fig-009891",1],["fig-009892",2],["fig-009893",8]],1],"850458-1":["VIP Top 5 Boxed Minifigures",2012,37,"CMF",[],[["fig-000900",1],["fig-000902",1],["fig-000907",1],["fig-010622",1],["fig-010623",1]],1],"10223-1":["Kingdoms Joust",2012,1575,"Historický set",["black-falcons","kingdoms"],[["fig-006767",1],["fig-010066",1],["fig-010067",1],["fig-010068",1],["fig-010069",1],["fig-010070",1],["fig-010071",1],["fig-010072",1],["fig-010073",1]],1],"8805-12":["Evil Dwarf",2011,10,"CMF",[],[["fig-000926",1]],1],"8803-9":["Elf",2011,8,"CMF",[],[["fig-000907",1]],1],"7189-1":["Mill Village Raid",2011,666,"Historický set",["kingdoms"],[["fig-000454",1],["fig-006741",1],["fig-006786",1],["fig-006787",1],["fig-010084",1],["fig-010100",1]],1],"7188-1":["King's Carriage Ambush",2011,285,"Historický set",["kingdoms"],[["fig-010066",1],["fig-010101",1],["fig-010102",1],["fig-010103",1]],1],"7187-1":["Escape from Dragon's Prison",2011,185,"Historický set",["kingdoms"],[["fig-010104",1],["fig-010105",1],["fig-010106",1],["fig-010107",1]],1],"6918-1":["Blacksmith Attack",2011,110,"Historický set",["kingdoms"],[["fig-004532",1],["fig-009888",1]],1],"8683-14":["Forestman",2010,8,"CMF",["forestmen"],[["fig-001187",1]],1],"852922-1":["Battle Pack Dragon Knights",2010,37,"Historický set",["kingdoms"],[["fig-010074",1],["fig-010075",1],["fig-010076",1],["fig-010077",1],["fig-010078",1]],1],"852921-1":["Battle Pack Lion Knights",2010,36,"Historický set",["kingdoms"],[["fig-007930",1],["fig-010079",1],["fig-010080",1],["fig-010081",1],["fig-010082",1]],1],"7955-1":["Wizard",2010,19,"Historický set",["kingdoms"],[["fig-000835",1]],1],"7953-1":["Court Jester",2010,22,"Historický set",[],[["fig-001053",1]],1],"7952-1":["Castle Advent Calendar 2010 (Kingdoms)",2010,167,"Historický set",["kingdoms"],[["fig-002229",1],["fig-006920",1],["fig-007738",1],["fig-007926",1],["fig-007927",1],["fig-007928",1],["fig-007929",1],["fig-007930",1],["fig-007931",1]],1],"7950-1":["Knight's Showdown",2010,61,"Historický set",["kingdoms"],[["fig-010081",1],["fig-014714",1]],1],"7949-1":["Prison Carriage Rescue",2010,50,"Historický set",["kingdoms"],[["fig-010084",1],["fig-010085",1],["fig-010086",1]],1],"7948-1":["Outpost Attack",2010,194,"Historický set",["kingdoms"],[["fig-010087",1],["fig-010088",1],["fig-014713",1]],1],"7947-1":["Prison Tower Rescue",2010,365,"Historický set",["kingdoms"],[["fig-006769",1],["fig-010091",1],["fig-010093",1],["fig-014710",1],["fig-014711",1]],1],"7946-1":["King's Castle",2010,933,"Historický set",["kingdoms"],[["fig-007930",1],["fig-010079",1],["fig-010097",1],["fig-010098",1],["fig-010099",1],["fig-014707",1],["fig-014708",1],["fig-014709",1]],1],"30062-1":["Target Practice",2010,31,"Historický set",["kingdoms"],[["fig-000453",1]],1],"30061-1":["Attack Wagon",2010,36,"Historický set",["kingdoms"],[["fig-014125",1]],1],"9780756672812-1":["Castle: Brickmaster",2009,141,"Historický set",["fantasy-era"],[["fig-002325",1],["fig-002326",1]],1],"852702-1":["Battle Pack Dwarfs",2009,45,"Historický set",["fantasy-era"],[["fig-009913",1],["fig-009914",1],["fig-009915",1],["fig-009916",1],["fig-009917",1]],1],"852701-1":["Battle Pack Troll Warriors",2009,36,"Historický set",["fantasy-era"],[["fig-000191",2],["fig-009963",1],["fig-009964",2]],1],"7097-1":["Trolls' Mountain Fortress",2009,845,"Historický set",["fantasy-era"],[["fig-000191",1],["fig-000408",1],["fig-009918",1],["fig-009919",1],["fig-009920",1],["fig-009921",1],["fig-009922",1],["fig-009923",1],["fig-009925",1],["fig-009926",1]],1],"7079-1":["Drawbridge Defense",2009,339,"Historický set",["fantasy-era"],[["fig-002325",1],["fig-007737",1],["fig-009937",1],["fig-009938",1],["fig-009939",1],["fig-009940",1],["fig-009941",1]],1],"7078-1":["King's Battle Chariot",2009,103,"Historický set",["fantasy-era"],[["fig-009911",1],["fig-009926",1],["fig-009942",1],["fig-009943",1]],1],"10193-1":["Medieval Market Village",2009,1619,"Historický set",["fantasy-era"],[["fig-004533",1],["fig-006756",1],["fig-006760",1],["fig-006783",1],["fig-006784",1],["fig-006785",1],["fig-009947",1],["fig-009962",1]],1],"852293-1":["Fantasy Era Castle Giant Chess Set",2008,2455,"Historický set",["fantasy-era"],[["fig-000191",1],["fig-002325",3],["fig-002482",1],["fig-006740",1],["fig-006914",1],["fig-006915",2],["fig-007734",1],["fig-009527",1],["fig-009528",1],["fig-009894",1],["fig-009895",1],["fig-009897",1],["fig-009898",1],["fig-009899",1],["fig-009900",1],["fig-009901",1],["fig-009902",1],["fig-009903",1],["fig-009904",1],["fig-009905",1],["fig-009906",1],["fig-009907",1],["fig-009908",2],["fig-009909",1],["fig-009910",2],["fig-009911",1],["fig-009912",1],["fig-010621",1]],1],"852272-1":["Battle Pack Skeletons",2008,43,"Historický set",["fantasy-era"],[["fig-002325",1],["fig-007737",1],["fig-009528",1],["fig-009907",1],["fig-009937",1]],1],"852271-1":["Battle Pack Knights",2008,35,"Historický set",["fantasy-era"],[["fig-009896",1],["fig-009965",1],["fig-009966",1],["fig-009967",1],["fig-009968",1]],1],"7979-1":["Castle Advent Calendar 2008",2008,176,"Historický set",["fantasy-era"],[["fig-000173",1],["fig-000191",1],["fig-002325",1],["fig-006760",1],["fig-007733",1],["fig-007734",1],["fig-007735",1],["fig-007736",1],["fig-007737",1]],1],"7048-1":["Troll Warship",2008,494,"Historický set",["fantasy-era"],[["fig-000191",3],["fig-009527",1],["fig-009894",1],["fig-009926",2],["fig-009944",1],["fig-009945",1]],1],"7041-1":["Troll Battle Wheel",2008,508,"Historický set",["fantasy-era"],[["fig-000191",2],["fig-009922",1],["fig-009946",1],["fig-009947",1],["fig-009948",1]],1],"7040-1":["Dwarves' Mine Defender",2008,86,"Historický set",["fantasy-era"],[["fig-000191",2],["fig-009949",1]],1],"7038-1":["Troll Assault Wagon",2008,161,"Historický set",["fantasy-era"],[["fig-009926",1],["fig-009950",1],["fig-009951",1],["fig-009952",1]],1],"7037-1":["Tower Raid",2008,364,"Historický set",["fantasy-era"],[["fig-000191",2],["fig-009934",1],["fig-009944",1],["fig-009953",1]],1],"5618-1":["Troll Warrior",2008,19,"Historický set",["fantasy-era"],[["fig-000191",1]],1],"5615-1":["The Knight",2008,21,"Historický set",["fantasy-era"],[["fig-009922",1]],1],"5614-1":["The Good Wizard",2008,16,"Historický set",["fantasy-era"],[["fig-000621",1]],1],"5373-1":["Knight & Catapult",2008,23,"Historický set",["fantasy-era"],[["fig-000173",1]],1],"5372-1":["Skeleton Chariot",2008,25,"Historický set",["fantasy-era"],[["fig-002325",1]],1],"4527617-1":["Castle Photo Frame",2008,68,"Historický set",["fantasy-era"],[["fig-002325",1],["fig-009538",1]],0],"K7094-1":["Castle Collection US version",2007,0,"Historický set",[],[],1],"K7029-1":["Complete Castle Collection",2007,0,"Historický set",[],[],1],"852132-1":["Castle Tic Tac Toe",2007,86,"Historický set",["fantasy-era"],[["fig-009527",5],["fig-009528",5]],1],"852009-1":["Castle Minifigure Magnet Set",2007,21,"Historický set",["fantasy-era"],[["fig-009527",1],["fig-009895",1],["fig-011209",1]],1],"852001-1":["Castle Chess Set",2007,286,"Historický set",["fantasy-era"],[["fig-000173",8],["fig-006740",1],["fig-006914",1],["fig-007737",8],["fig-009529",2],["fig-009530",1],["fig-009531",2],["fig-009532",1]],1],"7094-1":["King's Castle Siege",2007,974,"Historický set",["fantasy-era"],[["fig-002325",2],["fig-007737",1],["fig-009527",1],["fig-009530",1],["fig-009907",1],["fig-009927",1],["fig-009928",1],["fig-009929",1],["fig-009930",1]],1],"7093-1":["Skeleton Tower",2007,400,"Historický set",["fantasy-era"],[["fig-002325",2],["fig-006740",1],["fig-006914",1],["fig-009931",1]],1],"7092-1":["Skeletons' Prison Carriage",2007,193,"Historický set",["fantasy-era"],[["fig-002326",1],["fig-007737",1],["fig-009932",2],["fig-009933",1]],1],"7091-1":["Knights' Catapult Defense",2007,123,"Historický set",["fantasy-era"],[["fig-000173",1],["fig-007737",1],["fig-009932",1],["fig-009934",1]],1],"7090-1":["Crossbow Attack",2007,54,"Historický set",["fantasy-era"],[["fig-002325",1],["fig-009935",1],["fig-009936",1]],1],"7036-1":["Dwarves' Mine",2007,574,"Historický set",["fantasy-era"],[["fig-002482",1],["fig-009900",1],["fig-009908",2],["fig-009955",1],["fig-009956",1],["fig-017935",1]],1],"7029-1":["Skeleton Ship Attack",2007,630,"Historický set",["fantasy-era"],[["fig-002325",3],["fig-009957",1],["fig-009958",1],["fig-009959",1],["fig-009960",1]],1],"7009-1":["The Final Joust",2007,62,"Historický set",["fantasy-era"],[["fig-009528",1],["fig-009961",1]],1],"K10176-1":["Classic Castle",2006,0,"Historický set",[],[],1],"8823-1":["Mistlands Tower",2006,438,"Historický set",["knights-kingdom-2"],[["fig-002229",1],["fig-004531",1],["fig-010045",1],["fig-010046",1],["fig-010047",1],["fig-010048",1]],1],"8822-1":["Gargoyle Bridge",2006,250,"Historický set",["knights-kingdom-2"],[["fig-010045",1],["fig-010048",1],["fig-010049",1]],1],"8821-1":["Rogue Knight Battleship",2006,153,"Historický set",["knights-kingdom-2"],[["fig-008780",1],["fig-010050",1],["fig-010051",1]],1],"8813-1":["Battle at the Pass",2006,380,"Historický set",["knights-kingdom-2"],[["fig-002229",1],["fig-008781",1],["fig-008782",1],["fig-008783",1],["fig-008784",1],["fig-008785",1],["fig-010051",1],["fig-010052",1],["fig-010053",1],["fig-010054",1],["fig-010055",1]],1],"8706-1":["Karzon",2006,44,"Historický set",[],[],1],"8705-1":["Dracus",2006,38,"Historický set",[],[],1],"8704-1":["Sir Adric",2006,40,"Historický set",[],[],1],"8703-1":["Sir Kentis",2006,43,"Historický set",[],[],1],"8702-1":["Lord Vladek",2006,112,"Historický set",[],[],1],"8701-1":["King Jayko",2006,130,"Historický set",[],[],1],"851861-1":["Vikings Chess Set",2006,206,"Historický set",["vikingove"],[["fig-006841",8],["fig-006842",1],["fig-006843",2],["fig-006844",8],["fig-006845",2],["fig-006846",1]],1],"7021-1":["Viking Double Catapult versus the Armored Ofnir Dragon",2006,505,"Historický set",["vikingove"],[["fig-004382",1],["fig-004383",1],["fig-004384",1]],1],"7020-1":["Army of Vikings with Heavy Artillery Wagon",2006,312,"Historický set",["vikingove"],[["fig-004681",1],["fig-004682",1],["fig-004683",1],["fig-004684",1],["fig-004685",1],["fig-004686",1],["fig-004687",1]],1],"218158-1":["Knights' Kingdom The Game",2006,40,"Historický set",["knights-kingdom-2"],[["fig-005775",1],["fig-005776",1],["fig-005777",1],["fig-005778",1],["fig-005779",1]],1],"10176-1":["Royal King's Castle",2006,877,"Historický set",["knights-kingdom"],[["fig-002250",2],["fig-006556",1],["fig-006947",1],["fig-007355",1],["fig-007356",1],["fig-007629",1],["fig-007630",1],["fig-007631",1],["fig-007632",2],["fig-007633",1]],1],"8877-1":["Vladek's Dark Fortress",2005,970,"Historický set",["knights-kingdom-2"],[["fig-002250",1],["fig-005775",1],["fig-005776",1],["fig-005777",1],["fig-005778",1],["fig-005779",1],["fig-009387",3]],1],"8876-1":["Scorpion Prison Cave",2005,279,"Historický set",["knights-kingdom-2"],[["fig-002229",1],["fig-005775",1],["fig-005776",1],["fig-005779",1],["fig-009258",1]],1],"8875-1":["King's Siege Tower",2005,131,"Historický set",["knights-kingdom-2"],[["fig-005776",1],["fig-009257",1],["fig-009258",2]],1],"8874-1":["Battle Wagon",2005,130,"Historický set",["knights-kingdom-2"],[["fig-005777",1],["fig-009258",2]],1],"8873-1":["Fireball Catapult",2005,45,"Historický set",["knights-kingdom-2"],[["fig-005778",1],["fig-009258",1]],1],"8802-1":["Dark Fortress Landing",2005,145,"Historický set",["knights-kingdom-2"],[["fig-005779",1],["fig-009390",1]],1],"8801-1":["Knights' Attack Barge",2005,167,"Historický set",["knights-kingdom-2"],[["fig-005777",1],["fig-005778",1]],1],"8796-1":["King Mathias (Series 2)",2005,44,"Historický set",[],[],1],"8795-1":["Lord Vladek",2005,45,"Historický set",[],[],1],"8794-1":["Sir Santis",2005,45,"Historický set",[],[],1],"8793-1":["Sir Rascus",2005,45,"Historický set",[],[],1],"8792-1":["Sir Jayko",2005,43,"Historický set",[],[],1],"8791-1":["Sir Danju",2005,43,"Historický set",[],[],1],"851499-1":["Knights' Kingdom Chess",2005,191,"Historický set",["knights-kingdom-2"],[["fig-000639",8],["fig-001907",2],["fig-009249",2],["fig-009250",1],["fig-009251",1],["fig-009252",1],["fig-009253",1],["fig-009254",8]],1],"7019-1":["Viking Fortress against the Fafnir Dragon",2005,1036,"Historický set",["vikingove"],[["fig-004674",1],["fig-004676",1],["fig-004677",1],["fig-004678",1],["fig-004679",1],["fig-004680",1]],1],"7018-1":["Viking Ship challenges the Midgard Serpent",2005,582,"Historický set",["vikingove"],[["fig-004669",1],["fig-004670",1],["fig-004671",1],["fig-004672",1],["fig-004673",1],["fig-004674",1]],1],"7017-1":["Viking Catapult versus the Nidhogg Dragon",2005,225,"Historický set",["vikingove"],[["fig-004379",1],["fig-004381",1]],1],"7016-1":["Viking Boat against the Wyvern Dragon",2005,112,"Historický set",["vikingove"],[["fig-004379",1],["fig-004380",1]],1],"7015-1":["Viking Warrior challenges the Fenris Wolf",2005,76,"Historický set",["vikingove"],[["fig-004675",1]],1],"65851-1":["Knights Kingdom II Co-Pack",2005,0,"Historický set",[],[],1],"65825-1":["Knights Kingdom II Value Pack",2005,0,"Historický set",[],[],1],"65824-1":["Knights Kingdom II Value Pack",2005,0,"Historický set",[],[],1],"65769-1":["Vladek Value Pack",2005,0,"Historický set",[],[],1],"65768-1":["Jayko Value Pack",2005,1,"Historický set",[],[],1],"65767-1":["Attack from the Sea",2005,0,"Historický set",[],[],1],"5999-1":["Jayko",2005,6,"Historický set",["knights-kingdom-2"],[["fig-000639",1]],1],"5998-1":["Vladek",2005,6,"Historický set",["knights-kingdom-2"],[["fig-000638",1]],1],"5996-1":["Rascus",2005,6,"Historický set",["knights-kingdom-2"],[["fig-010620",1]],0],"5994-1":["Catapult",2005,27,"Historický set",[],[],1],"50799-1":["Knights' Kingdom Adventure Box",2005,1,"Historický set",[],[],1],"4946-1":["Sir Danju",2005,4,"Historický set",[],[],1],"4945-1":["Sir Santis",2005,4,"Historický set",[],[],1],"4944-1":["Sir Jayko",2005,4,"Historický set",[],[],1],"4943-1":["Lord Vladek",2005,4,"Historický set",[],[],1],"4942-1":["Shadow Knight",2005,4,"Historický set",[],[],1],"4941-1":["Sir Rascus",2005,4,"Historický set",[],[],1],"4270057-1":["Photo Frame Knights Kingdom II",2005,1,"Historický set",["knights-kingdom-2"],[["fig-001907",1]],0],"4250348-1":["Knights' Kingdom Alarm Clock with Building Toy",2005,22,"Historický set",["knights-kingdom-2"],[["fig-001907",1]],1],"KK2VP3-1":["Rascus / Santis Bonus Pack",2004,1,"Historický set",[],[],1],"KK2VP2-1":["Jayko / Vladek Bonus Pack",2004,1,"Historický set",[],[],1],"KK2VP1-1":["Danju / Vladek Bonus Pack",2004,1,"Historický set",[],[],1],"8809-1":["King Mathias (Series 1) Limited Edition with Map and Cape, US",2004,44,"Historický set",[],[],1],"8800-1":["Vladek's Siege Engine",2004,193,"Historický set",["knights-kingdom-2"],[["fig-009249",1],["fig-009258",1]],1],"8799-1":["Knights' Castle Wall",2004,178,"Historický set",["knights-kingdom-2"],[["fig-001907",1],["fig-009255",1],["fig-009256",1]],1],"8790-1":["King Mathias (Series 1) Limited Edition with Map and Cape, European",2004,45,"Historický set",[],[],1],"8786-2":["Vladek (USA version with 6 Cards, Target Promo)",2004,54,"Historický set",[],[],1],"8786-1":["Vladek (USA version with 3 Cards)",2004,51,"Historický set",[],[],1],"8785-2":["Santis (USA version with 6 Cards, Target Promo)",2004,52,"Historický set",[],[],1],"8785-1":["Santis (USA version with 3 Cards)",2004,49,"Historický set",[],[],1],"8784-2":["Rascus (USA version with 6 Cards, Target Promo)",2004,52,"Historický set",[],[],1],"8784-1":["Rascus (USA version with 3 Cards)",2004,49,"Historický set",[],[],1],"8783-2":["Jayko (USA version with 6 Cards, Target Promo)",2004,51,"Historický set",[],[],1],"8783-1":["Jayko (USA version with 3 Cards)",2004,48,"Historický set",[],[],1],"8782-2":["Danju (USA version with 6 Cards, Target Promo)",2004,48,"Historický set",[],[],1],"8782-1":["Danju (USA version with 3 Cards)",2004,45,"Historický set",[],[],1],"8781-1":["Castle of Morcia",2004,661,"Historický set",["knights-kingdom-2"],[["fig-001907",1],["fig-002229",1],["fig-008778",1],["fig-009249",1],["fig-009255",1],["fig-009256",1],["fig-009257",1],["fig-009258",1]],1],"8780-1":["Citadel of Orlan",2004,483,"Historický set",["knights-kingdom-2"],[["fig-009255",1],["fig-009258",1],["fig-010056",1],["fig-010057",1]],1],"8779-1":["The Grand Tournament",2004,318,"Historický set",["knights-kingdom-2"],[["fig-001907",1],["fig-009249",1],["fig-009257",1]],1],"8778-1":["Border Ambush",2004,180,"Historický set",["knights-kingdom-2"],[["fig-009255",1],["fig-009258",1]],1],"8777-1":["Vladek Encounter",2004,45,"Historický set",["knights-kingdom-2"],[["fig-008778",1],["fig-009249",1]],1],"8774-1":["Vladek (European version without Cards)",2004,48,"Historický set",[],[],1],"8773-1":["Santis (European version without Cards)",2004,46,"Historický set",[],[],1],"8772-1":["Rascus (European version without Cards)",2004,46,"Historický set",[],[],1],"8771-1":["Jayko (European version without Cards)",2004,45,"Historický set",[],[],1],"8770-1":["Danju (European version without Cards)",2004,42,"Historický set",[],[],1],"65642-1":["The Grand Tournament Limited Edition Bonus Pack",2004,2,"Historický set",[],[],1],"65580-1":["Knights' Kingdom Value Pack",2004,1,"Historický set",[],[],1],"65579-1":["Knights' Kingdom Value Pack",2004,1,"Historický set",[],[],1],"65527-1":["Vladek's Attack",2004,0,"Historický set",[],[],1],"31317-1":["Knights' Kingdom: Save the Kingdom Game",2004,48,"Historický set",["knights-kingdom-2"],[["fig-001907",1],["fig-008778",1],["fig-009249",1],["fig-009255",1],["fig-009256",1]],1],"K10039-1":["Legend Castle Collection",2003,0,"Historický set",[],[],1],"4212662-1":["Photo Frame Kingdom Knight I",2003,18,"Historický set",["knights-kingdom"],[["fig-001002",1]],1],"3739-1":["Blacksmith Shop",2002,629,"Historický set",[],[["fig-004534",1],["fig-006743",1]],1],"10039-1":["Black Falcon's Fortress",2002,430,"Historický set",["black-falcons"],[["fig-002476",2],["fig-002477",2],["fig-002478",1],["fig-002479",1]],1],"10000-1":["Guarded Inn",2001,256,"Historický set",["crusaders"],[["fig-004540",1],["fig-004541",1],["fig-006580",1],["fig-006745",1]],1],"kkchrome-1":["Knight's Kingdom Chrome Series (complete set)",2000,0,"Historický set",[],[],1],"cnminifigs-1":["Ninja Minifig Packs 3-Pack",2000,0,"Historický set",[],[],1],"KABKK-1":["Knight's Kingdom 4-Pack",2000,0,"Historický set",[],[],1],"6098-1":["King Leo's Castle",2000,538,"Historický set",["knights-kingdom"],[["fig-001002",1],["fig-002229",1],["fig-006742",1],["fig-007634",1],["fig-007670",1],["fig-007675",1],["fig-007676",1],["fig-007678",1]],1],"6096-1":["Bull's Attack",2000,314,"Historický set",["knights-kingdom"],[["fig-000307",1],["fig-000760",1],["fig-007634",1],["fig-007674",1]],1],"6095-1":["Royal Joust",2000,104,"Historický set",["knights-kingdom"],[["fig-001002",1],["fig-007634",1],["fig-007677",1]],1],"6094-1":["Guarded Treasury",2000,103,"Historický set",["knights-kingdom"],[["fig-007678",1],["fig-007739",1]],1],"6091-1":["King Leo's Castle",2000,539,"Historický set",["knights-kingdom"],[["fig-001002",1],["fig-002229",1],["fig-006742",1],["fig-007634",1],["fig-007670",1],["fig-007675",1],["fig-007676",1],["fig-007678",1]],1],"6032-1":["Catapult Crusher",2000,56,"Historický set",["knights-kingdom"],[["fig-000760",1]],1],"6026-1":["King Leo",2000,21,"Historický set",["knights-kingdom"],[["fig-001002",1],["fig-007678",1]],1],"4819-1":["Rebel Chariot",2000,49,"Historický set",["knights-kingdom"],[["fig-000307",1],["fig-007671",1]],1],"4818-1":["Dragon Rider",2000,15,"Historický set",["knights-kingdom"],[["fig-000097",1]],1],"4817-1":["Dungeon",2000,39,"Historický set",["knights-kingdom"],[["fig-007672",1],["fig-007673",1]],1],"4816-1":["Knight's Catapult",2000,50,"Historický set",["knights-kingdom"],[["fig-000333",1],["fig-007676",1]],1],"4811-1":["Defense Archer",2000,15,"Historický set",["knights-kingdom"],[["fig-000333",1]],1],"4807-1":["Fire Attack",2000,24,"Historický set",["knights-kingdom"],[["fig-001129",1]],1],"4806-1":["Axe Cart",2000,28,"Historický set",["knights-kingdom"],[["fig-001116",1]],1],"4801-1":["Defense Archer",2000,15,"Historický set",["knights-kingdom"],[["fig-000333",1]],1],"3346-1":["Mini Heroes Collection: Ninja #3",2000,26,"Historický set",["ninja"],[["fig-006599",1],["fig-006600",1],["fig-006601",1]],1],"3345-1":["Mini Heroes Collection: Ninja #2",2000,24,"Historický set",["ninja"],[["fig-000292",1],["fig-006602",1],["fig-006603",1]],1],"3344-1":["Mini Heroes Collection: Ninja #1",2000,10,"Historický set",["ninja"],[["fig-000329",1]],1],"1289-1":["Catapult",2000,23,"Historický set",["knights-kingdom"],[["fig-000307",1]],1],"1288-1":["Fire Cart",2000,24,"Historický set",["knights-kingdom"],[["fig-001129",1]],1],"1287-1":["Crossbows",2000,16,"Historický set",["knights-kingdom"],[["fig-000333",1]],1],"1286-1":["King Leo's Cart",2000,22,"Historický set",["knights-kingdom"],[["fig-001002",1]],1],"KABNINJA-1":["Kabaya Ninja 4-Pack",1999,0,"Historický set",[],[],1],"4805-1":["Ninja Knights",1999,31,"Historický set",["ninja"],[["fig-000290",1],["fig-000292",1],["fig-000362",1],["fig-001011",1],["fig-006596",1]],1],"3077-2":["Ninja Shogun's Small Fort",1999,21,"Historický set",["ninja"],[["fig-000475",1]],0],"3077-1":["Ninja Shogun's Small Fort",1999,21,"Historický set",["ninja"],[["fig-000475",1]],1],"3076-2":["White Ninja's Attack Cart",1999,23,"Historický set",["ninja"],[["fig-000069",1]],1],"3076-1":["White Ninja's Attack Cart",1999,23,"Historický set",["ninja"],[["fig-000069",1]],1],"3075-2":["Ninja Master's Boat",1999,22,"Historický set",["ninja"],[["fig-000474",1]],1],"3075-1":["Ninja Master's Boat",1999,22,"Historický set",["ninja"],[["fig-000474",1]],1],"3074-2":["Red Ninja's Dragon Glider",1999,20,"Historický set",["ninja"],[["fig-000156",1]],1],"3074-1":["Red Ninja's Dragon Glider",1999,20,"Historický set",["ninja"],[["fig-000156",1]],1],"3053-1":["Emperor's Stronghold",1999,335,"Historický set",["ninja"],[["fig-000069",1],["fig-000156",2],["fig-000475",1]],1],"3052-1":["Ninja Fire Fortress",1999,173,"Historický set",["ninja"],[["fig-000156",2],["fig-000474",1]],1],"3051-1":["Blaze Attack",1999,145,"Historický set",["ninja"],[["fig-000156",2]],1],"3050-1":["Shanghai Surprise",1999,108,"Historický set",["ninja"],[["fig-000156",2],["fig-000475",1]],1],"1269-1":["White Ninja",1999,23,"Historický set",["ninja"],[["fig-000069",1]],1],"1187-1":["Glider",1999,23,"Historický set",["ninja"],[["fig-000362",1]],1],"1186-1":["Cart",1999,25,"Historický set",["ninja"],[["fig-001011",1]],1],"1185-1":["Raft",1999,25,"Historický set",["ninja"],[["fig-000292",1]],1],"1184-1":["Cart",1999,24,"Historický set",["ninja"],[["fig-000290",1]],1],"1099-1":["Ninja Blaster",1999,24,"Historický set",["ninja"],[["fig-000290",1]],1],"CASBON-1":["Castle Bonus Pack",1998,0,"Historický set",[],[],1],"6093-1":["Flying Ninja Fortress",1998,698,"Historický set",["ninja"],[["fig-000292",1],["fig-000362",2],["fig-001011",1],["fig-005288",1],["fig-006596",2],["fig-006597",1],["fig-006598",1]],1],"6089-1":["Stone Tower Bridge",1998,410,"Historický set",["ninja"],[["fig-000290",1],["fig-000292",1],["fig-000362",1],["fig-001011",1],["fig-006596",1]],1],"6088-1":["Robber's Retreat",1998,281,"Historický set",["ninja"],[["fig-000290",1],["fig-000292",2],["fig-006596",1]],1],"6083-2":["Samurai Stronghold",1998,198,"Historický set",["ninja"],[["fig-000292",1],["fig-001011",1],["fig-006596",1]],1],"6045-1":["Ninja Surprise",1998,112,"Historický set",["ninja"],[["fig-000290",1],["fig-000292",1],["fig-006598",1]],1],"6033-1":["Treasure Transport",1998,60,"Historický set",["ninja"],[["fig-000290",1],["fig-000362",1],["fig-006598",1]],1],"6031-1":["Fright Force",1998,28,"Historický set",["fright-knights"],[["fig-000339",1],["fig-006551",1],["fig-007112",1],["fig-007114",1]],1],"6029-1":["Treasure Guard",1998,23,"Historický set",["fright-knights"],[["fig-000646",1]],1],"6028-1":["Treasure Cart",1998,23,"Historický set",["fright-knights"],[["fig-000646",1]],1],"6013-1":["Samurai Swordsman",1998,13,"Historický set",["ninja"],[["fig-001011",1]],1],"3019-2":["Big Bat",1998,23,"Historický set",["ninja"],[["fig-000362",1]],1],"3019-1":["Big Bat",1998,19,"Historický set",["ninja"],[["fig-000362",1]],1],"3018-1":["Go! LEGO Shogun",1998,25,"Historický set",["ninja"],[["fig-001011",1]],1],"3017-2":["Water Spider",1998,26,"Historický set",["ninja"],[["fig-000292",1]],1],"3017-1":["Water Spider",1998,25,"Historický set",["ninja"],[["fig-000292",1]],1],"3016-1":["Boss with Cannon",1998,24,"Historický set",["ninja"],[["fig-000290",1]],1],"2892-1":["Thunder Arrow Boat",1998,21,"Historický set",["royal-knights"],[["fig-000349",1]],1],"2891-1":["Wizard Trader",1998,18,"Historický set",["dragon-masters"],[["fig-000505",1]],1],"2890-1":["Stone Bomber",1998,22,"Historický set",["black-knights"],[["fig-000407",1]],1],"2889-1":["Treasure Cart",1998,24,"Historický set",["crusaders"],[["fig-000441",1]],1],"2586-1":["Chess King",1998,26,"Historický set",[],[["fig-000882",1]],1],"2540-1":["Fright Knights Catapult Cart",1998,27,"Historický set",["fright-knights"],[["fig-000339",1]],1],"2539-1":["Fright Knights Flying Machine",1998,22,"Historický set",["fright-knights"],[["fig-000339",1]],1],"2538-1":["Fright Knights Fire Cart",1998,21,"Historický set",["fright-knights"],[["fig-000430",1]],1],"9376-1":["Castle Set",1997,347,"Historický set",["fright-knights","royal-knights"],[["fig-000339",2],["fig-000645",2],["fig-000646",2],["fig-002229",2],["fig-005145",2],["fig-006551",2],["fig-018056",2]],1],"6099-1":["Traitor Transport (with Cave)",1997,146,"Historický set",["fright-knights"],[["fig-000648",1],["fig-006720",1],["fig-007115",1]],1],"6097-1":["Night Lord's Castle",1997,607,"Historický set",["fright-knights","royal-knights"],[["fig-000057",1],["fig-000216",1],["fig-000430",1],["fig-000648",1],["fig-002229",1],["fig-007112",1],["fig-007114",1],["fig-007117",1]],1],"6087-1":["Witch's Magic Manor",1997,255,"Historický set",["dark-forest","fright-knights"],[["fig-000057",1],["fig-002229",1],["fig-006879",1],["fig-007113",1],["fig-007116",1],["fig-007117",1]],1],"6047-1":["Traitor Transport",1997,145,"Historický set",["fright-knights"],[["fig-000648",1],["fig-006720",1],["fig-007115",1]],1],"6037-1":["Witch's Windship",1997,60,"Historický set",["fright-knights"],[["fig-007117",1]],1],"6027-1":["Bat Lord's Catapult",1997,54,"Historický set",["fright-knights"],[["fig-000430",1],["fig-007113",1]],1],"6007-1":["Bat Lord",1997,16,"Historický set",["fright-knights"],[["fig-000648",1]],1],"6004-1":["Crossbow Cart",1997,21,"Historický set",["fright-knights"],[["fig-000057",1]],1],"2872-1":["Witch and Fireplace",1997,19,"Historický set",["fright-knights"],[["fig-006551",1]],1],"2848-1":["Fright Knights Flying Machine",1997,19,"Historický set",["fright-knights"],[["fig-000339",1]],1],"6079-1":["Dark Forest Fortress",1996,469,"Historický set",["dark-forest","dragon-masters"],[["fig-002229",1],["fig-006875",1],["fig-006876",1],["fig-006877",1],["fig-006878",1],["fig-006906",1],["fig-006909",1]],1],"6046-1":["Hemlock Stronghold",1996,220,"Historický set",["dark-forest","royal-knights"],[["fig-000349",1],["fig-002229",1],["fig-006880",1],["fig-006881",1],["fig-007109",1]],1],"6024-1":["Bandit Ambush",1996,60,"Historický set",["dark-forest"],[["fig-006877",1],["fig-006878",1]],1],"1843-3":["Royal Knight's Catapult",1996,47,"Historický set",["royal-knights"],[["fig-000216",1]],1],"1804-1":["Crossbow Boat",1996,21,"Historický set",["royal-knights"],[["fig-000349",1]],1],"1752-1":["Boat with Armour",1996,21,"Historický set",["royal-knights"],[["fig-000349",1]],1],"6090-1":["Royal Knight's Castle",1995,763,"Historický set",["royal-knights"],[["fig-000349",2],["fig-002229",1],["fig-002483",1],["fig-006720",1],["fig-006725",2],["fig-007107",1],["fig-007108",1],["fig-007110",2]],1],"6078-1":["Royal Drawbridge",1995,259,"Historický set",["dragon-masters","royal-knights"],[["fig-002229",1],["fig-006726",1],["fig-006727",1],["fig-006903",1],["fig-007110",1]],1],"6044-1":["King's Carriage",1995,127,"Historický set",["royal-knights"],[["fig-006729",3],["fig-007106",1]],1],"6036-1":["Skeleton Surprise",1995,74,"Historický set",["royal-knights"],[["fig-002229",1],["fig-007111",1]],1],"6008-1":["Royal King",1995,12,"Historický set",["royal-knights"],[["fig-000645",1]],1],"1746-1":["Wiz the Wizard",1995,18,"Historický set",["dragon-masters"],[["fig-000505",1]],1],"1736-1":["Wizard's Cart",1995,18,"Historický set",["dragon-masters"],[["fig-000505",1]],1],"1906-1":["Majisto's Tower",1994,196,"Historický set",["dragon-masters"],[["fig-000573",1],["fig-006901",1],["fig-006907",1]],1],"1794-1":["Dragon Master Chariot",1994,36,"Historický set",["dragon-masters"],[["fig-001032",1]],1],"1732-1":["Crossbow Cart",1994,23,"Historický set",["dragon-masters"],[["fig-000233",1]],1],"1712-1":["Crossbow Cart",1994,23,"Historický set",["dragon-masters"],[["fig-000233",1]],1],"6105-1":["Medieval Knights",1993,37,"Historický set",["dragon-masters","wolfpack"],[["fig-000233",1],["fig-002334",1],["fig-006882",1],["fig-006898",1]],1],"6082-1":["Fire Breathing Fortress",1993,406,"Historický set",["dragon-masters","wolfpack"],[["fig-000233",2],["fig-000573",1],["fig-006884",1],["fig-006900",1],["fig-006909",1]],1],"6076-1":["Dark Dragon's Den",1993,219,"Historický set",["dragon-masters"],[["fig-000233",1],["fig-000573",1],["fig-006899",1],["fig-006903",1]],1],"6056-1":["Dragon Wagon",1993,109,"Historický set",["dragon-masters"],[["fig-000233",1],["fig-006904",1]],1],"6048-1":["Majisto's Magical Workshop",1993,188,"Historický set",["dragon-masters"],[["fig-000573",1],["fig-006902",1]],1],"6043-1":["Dragon Defender",1993,156,"Historický set",["dragon-masters"],[["fig-000233",1],["fig-006904",1]],1],"6020-1":["Magic Shop",1993,47,"Historický set",["dragon-masters"],[["fig-000573",1]],1],"1971-1":["Black Knight's Battering Ram",1993,36,"Historický set",["black-knights"],[["fig-000251",1]],1],"1917-1":["King's Catapult",1993,22,"Historický set",["black-knights"],[["fig-000407",1]],1],"1624-1":["King's Archer",1993,22,"Historický set",["black-knights"],[["fig-000217",1]],1],"1597-1":["Castle 3-Pack",1993,0,"Historický set",[],[],1],"1596-1":["Ghostly Hideout",1993,37,"Historický set",["wolfpack"],[["fig-002483",1],["fig-006885",1]],1],"1547-1":["Black Knights Boat",1993,58,"Historický set",["black-knights"],[["fig-006595",1],["fig-006721",1]],1],"6086-1":["Black Knight's Castle",1992,590,"Historický set",["black-knights","wolfpack"],[["fig-000407",1],["fig-002483",1],["fig-002484",1],["fig-006567",1],["fig-006574",1],["fig-006586",1],["fig-006590",1],["fig-006734",1],["fig-006735",2],["fig-006736",1],["fig-006882",1]],1],"6075-1":["Wolfpack Tower",1992,239,"Historický set",["wolfpack"],[["fig-002483",1],["fig-006882",2],["fig-006883",1]],1],"6057-1":["Sea Serpent",1992,128,"Historický set",["black-falcons","black-knights"],[["fig-006593",1],["fig-006722",1],["fig-006724",1],["fig-006889",1],["fig-006890",1]],1],"6038-1":["Wolfpack Renegades",1992,98,"Historický set",["wolfpack"],[["fig-006882",1],["fig-006883",1]],1],"6009-1":["Black Knight",1992,24,"Historický set",["black-knights"],[["fig-000072",1]],1],"1888-1":["Black Knights Guardshack",1992,49,"Historický set",["black-knights"],[["fig-002483",1],["fig-006728",1]],1],"1695-1":["Treasure Chest",1992,24,"Historický set",["crusaders"],[["fig-000441",1]],1],"1491-1":["Dual Defender",1992,48,"Historický set",["black-knights"],[["fig-000390",2]],1],"1463-1":["Treasure Cart",1992,24,"Historický set",["crusaders"],[["fig-000441",1]],1],"1480-1":["King's Catapult",1991,33,"Historický set",[],[["fig-000388",1]],1],"6081-1":["King's Mountain Fortress",1990,438,"Historický set",["crusaders"],[["fig-004576",2],["fig-006557",1],["fig-006558",1],["fig-006589",1],["fig-006723",2],["fig-006751",1]],1],"6071-1":["Forestmen's Crossing",1990,212,"Historický set",["forestmen"],[["fig-006853",1],["fig-006862",1],["fig-006864",1],["fig-006867",1],["fig-006874",1]],1],"6059-1":["Knight's Stronghold",1990,228,"Historický set",["black-knights"],[["fig-006578",1],["fig-006587",1],["fig-006732",1],["fig-006733",2]],1],"6042-1":["Dungeon Hunters",1990,111,"Historický set",["crusaders","forestmen"],[["fig-006555",1],["fig-006573",1],["fig-006870",1]],1],"6034-1":["Black Monarch's Ghost",1990,48,"Historický set",["black-knights"],[["fig-002483",1],["fig-010802",1]],1],"6018-1":["Battle Dragon",1990,54,"Historický set",["black-knights"],[["fig-006731",1],["fig-006739",1]],1],"1877-1":["Crusader's Cart",1990,60,"Historický set",["forestmen"],[["fig-006855",1],["fig-006856",1]],1],"1680-1":["Hay Cart with Smugglers",1990,67,"Historický set",["forestmen"],[["fig-006855",1],["fig-006856",1],["fig-006873",1]],1],"6077-2":["Forestmen's River Fortress",1989,359,"Historický set",["crusaders","forestmen"],[["fig-006554",1],["fig-006854",1],["fig-006857",1],["fig-006861",1],["fig-006866",1],["fig-006871",1]],1],"6060-1":["Knight's Challenge",1989,168,"Historický set",["black-knights","crusaders"],[["fig-004572",1],["fig-004573",1],["fig-006559",1],["fig-006581",1],["fig-006592",1],["fig-006738",1],["fig-006746",1],["fig-006790",1]],1],"1974-3":["Smuggler's Hayride",1989,50,"Historický set",["forestmen"],[["fig-006789",1],["fig-006868",1]],1],"6103-1":["Castle Mini Figures",1988,38,"Historický set",["black-falcons","crusaders","forestmen"],[["fig-004568",1],["fig-006788",1],["fig-006860",1],["fig-006869",1],["fig-006887",1],["fig-006893",1]],1],"6085-1":["Black Monarch's Castle",1988,688,"Historický set",["black-knights"],[["fig-006565",1],["fig-006583",1],["fig-006584",1],["fig-006592",1],["fig-006730",4],["fig-006737",4]],1],"6054-1":["Forestmen's Hideout",1988,202,"Historický set",["forestmen"],[["fig-006858",1],["fig-006871",1]],1],"6039-1":["Twin-Arm Launcher",1988,77,"Historický set",["crusaders"],[["fig-006555",1],["fig-006566",1]],1],"1584-1":["Knights Challenge",1988,168,"Historický set",["black-knights","crusaders"],[["fig-004572",1],["fig-004573",1],["fig-006559",1],["fig-006581",1],["fig-006592",1],["fig-006738",1],["fig-006746",1],["fig-006790",1]],1],"6066-1":["Camouflaged Outpost",1987,228,"Historický set",["forestmen"],[["fig-006852",1],["fig-006865",2],["fig-006869",1],["fig-006870",1],["fig-006872",1]],1],"6062-1":["Battering Ram",1987,240,"Historický set",["black-falcons","crusaders"],[["fig-004551",1],["fig-004565",1],["fig-004566",1],["fig-006886",1],["fig-006887",1],["fig-006893",1]],1],"6049-1":["Viking Voyager",1987,101,"Historický set",["crusaders"],[["fig-004543",3],["fig-006555",1],["fig-006560",1]],1],"6035-1":["Castle Guard",1987,52,"Historický set",["black-falcons"],[["fig-006594",1],["fig-006887",1]],1],"6017-1":["King's Oarsmen",1987,45,"Historický set",["crusaders"],[["fig-006553",1],["fig-006568",1]],1],"6016-1":["Knights' Arsenal",1987,37,"Historický set",[],[["fig-000300",1]],1],"0011-3":["Castle 2 for 1 Bonus Offer",1987,0,"Historický set",[],[],1],"6074-1":["Black Falcon's Fortress",1986,430,"Historický set",["black-falcons"],[["fig-000642",2],["fig-006576",1],["fig-006591",1],["fig-006897",2]],1],"6067-1":["Guarded Inn",1986,256,"Historický set",["crusaders"],[["fig-004538",1],["fig-004539",1],["fig-006579",1],["fig-006744",1]],1],"6041-1":["Armor Shop",1986,114,"Historický set",[],[["fig-006570",1],["fig-006582",1]],1],"6023-1":["Maiden's Cart",1986,45,"Historický set",["crusaders"],[["fig-004571",1],["fig-006747",1]],1],"6012-1":["Siege Cart",1986,54,"Historický set",["crusaders"],[["fig-004577",1],["fig-004578",1]],1],"6102-1":["Castle Mini Figures",1985,36,"Historický set",["black-falcons","crusaders"],[["fig-000642",1],["fig-004547",1],["fig-004551",1],["fig-004567",1],["fig-006886",1],["fig-006893",1]],1],"6055-1":["Prisoner Convoy",1985,116,"Historický set",["crusaders"],[["fig-004570",1],["fig-004575",1],["fig-006562",1],["fig-006791",1]],1],"6011-1":["Black Knight's Treasure",1985,27,"Historický set",["black-falcons"],[["fig-000642",1]],1],"6103-2":["Knights",1984,25,"Historický set",["black-falcons","crusaders"],[["fig-000642",1],["fig-004551",1],["fig-006566",1],["fig-006577",1]],1],"6080-1":["King's Castle",1984,679,"Historický set",["crusaders"],[["fig-004551",4],["fig-004570",4],["fig-006563",1],["fig-006564",1],["fig-006571",1],["fig-006572",1]],1],"6073-1":["Knight's Castle",1984,416,"Historický set",["black-falcons","black-knights"],[["fig-000642",2],["fig-006575",1],["fig-006592",1],["fig-006897",2]],1],"6061-1":["Siege Tower",1984,216,"Historický set",["crusaders"],[["fig-004551",2],["fig-004569",1],["fig-006561",1]],1],"6040-1":["Blacksmith Shop",1984,93,"Historický set",["crusaders"],[["fig-004524",1],["fig-004551",1]],1],"6030-1":["Catapult",1984,83,"Historický set",["black-falcons"],[["fig-000642",2]],1],"6022-1":["Horse Cart",1984,43,"Historický set",["crusaders"],[["fig-004565",1],["fig-004574",1]],1],"6021-1":["Jousting Knights",1984,37,"Historický set",[],[["fig-006569",1],["fig-006585",1]],1],"6010-1":["Supply Wagon",1984,36,"Historický set",[],[["fig-000644",1]],1],"6002-2":["Castle Figures",1983,22,"Historický set",["klasicky-hrad"],[["fig-004486",2],["fig-004488",2]],1],"6083-1":["Knight's Tournament",1981,211,"Historický set",["klasicky-hrad"],[["fig-004494",2],["fig-004513",1],["fig-004514",1],["fig-004515",1],["fig-004516",1]],1],"6077-1":["Knight's Procession",1981,48,"Historický set",["klasicky-hrad"],[["fig-002480",4],["fig-002481",2]],1],"6075-2":["Castle",1981,775,"Historický set",["klasicky-hrad"],[["fig-004420",1],["fig-004423",1],["fig-004424",7],["fig-004427",1],["fig-004433",1],["fig-004436",1],["fig-004438",1],["fig-004441",1]],1],"677-1":["Knight's Procession",1979,48,"Historický set",["klasicky-hrad"],[["fig-002480",4],["fig-002481",2]],1],"383-2":["Knight's Tournament",1979,210,"Historický set",["klasicky-hrad"],[["fig-004494",2],["fig-004513",1],["fig-004514",1],["fig-004515",1],["fig-004516",1]],1],"0016-1":["Castle Mini Figures",1979,15,"Historický set",["klasicky-hrad"],[["fig-004486",1],["fig-004494",1],["fig-004497",1]],1],"375-2":["Castle",1978,775,"Historický set",["klasicky-hrad"],[["fig-004420",1],["fig-004423",1],["fig-004424",7],["fig-004427",1],["fig-004433",1],["fig-004436",1],["fig-004438",1],["fig-004441",1]],1]};
const CAT_FIGS = {"fig-000057":["Archer (Fright Knights)","fright-knights","fright",["6004-1","6087-1","6097-1"],1],"fig-000069":["Ninja, White","ninja","ninja",["1269-1","3053-1","3076-1","3076-2"],1],"fig-000072":["Knight (Breastplate on Black) - Black Legs, Armor, Red Dragon Plume","black-knights","black",["6009-1"],1],"fig-000097":["Knight (Knights Kingdom I) - Cedric the Bull, Chrome Helmet, Horn","knights-kingdom","bull",["4818-1"],1],"fig-000156":["Ninja, Red","ninja","ninja",["3050-1","3051-1","3052-1","3053-1","3074-1","3074-2"],1],"fig-000173":["Chess Piece - Crown - Pawn","fantasy-era","crown",["5373-1","7091-1","7979-1","852001-1"],1],"fig-000191":["Troll Warrior 3 (Orc)","fantasy-era","troll",["5618-1","7037-1","7040-1","7041-1","7048-1","7097-1","7979-1","852293-1","852701-1"],1],"fig-000216":["Knight (Royal Knights) - Blue Legs, Dark Gray Neck-Protector","royal-knights","royal",["1843-3","6097-1"],1],"fig-000217":["Archer (Scale Mail on Red) - Black Arms, Light Gray Legs","black-knights","black",["1624-1"],1],"fig-000233":["Knight (Dragon Knights) - Light Gray Legs, Black Hips","dragon-masters","dragon",["1712-1","1732-1","6043-1","6056-1","6076-1","6082-1","6105-1"],1],"fig-000251":["Knight (Scale Mail on Red) - Black Arms, Blue Legs, Black Chin-Guard","black-knights","black",["1971-1"],1],"fig-000290":["Robber with Tattered Green Vest","ninja","ninja",["1099-1","1184-1","3016-1","4805-1","6033-1","6045-1","6088-1","6089-1"],1],"fig-000292":["Ninja, Black","ninja","ninja",["1185-1","3017-1","3017-2","3345-1","4805-1","6045-1","6083-2","6088-1","6089-1","6093-1"],1],"fig-000300":["Knight (Breastplate on Red) - Blue Legs, Dark Gray Neck-Protector, Plastic Cape","","civil",["6016-1"],1],"fig-000307":["Knight (Knights Kingdom I) - Bull Robber, Black Chin-Guard","knights-kingdom","bull",["1289-1","4819-1","6096-1"],1],"fig-000329":["Shogun, Armor and Helmet with Horn","ninja","ninja",["3344-1"],0],"fig-000333":["Archer (Knights Kingdom I) - Plate on Legs","knights-kingdom","leo",["1287-1","4801-1","4811-1","4816-1"],1],"fig-000339":["Bat Lord (Fright Knights) - No Cape","fright-knights","fright",["2539-1","2540-1","2848-1","6031-1","9376-1"],1],"fig-000349":["Knight (Royal Knights) - Black Legs, Dark Gray Neck-Protector","royal-knights","royal",["1752-1","1804-1","2892-1","6046-1","6090-1"],1],"fig-000362":["Ninja, Dark Gray","ninja","ninja",["1187-1","3019-1","3019-2","4805-1","6033-1","6089-1","6093-1"],1],"fig-000388":["Knight (Scale Mail on Red) - Red Arms, Black Legs, Dark Gray Neck-Protector","","civil",["1480-1"],1],"fig-000390":["Knight (Scale Mail on Blue) - Black Arms, Blue Legs, Dark Gray Neck-Protector","black-knights","black",["1491-1"],1],"fig-000407":["Knight (Scale Mail on Red) - Black Arms, Black Legs, Black Neck-Protector","black-knights","black",["1917-1","2890-1","6086-1"],1],"fig-000408":["Troll King, Metallic Copper Crown","fantasy-era","troll",["7097-1"],1],"fig-000430":["Knight (Fright Knights) - Red Legs, Black Hips","fright-knights","fright",["2538-1","6027-1","6097-1"],1],"fig-000441":["Knight (Crusader Lion) - Blue Legs and Hips, Chin-Guard","crusaders","lion",["1463-1","1695-1","2889-1"],1],"fig-000453":["Lion Knight, Archer, Wide Brim Helmet, Quiver","kingdoms","kingdom-lion",["30062-1"],1],"fig-000454":["Dragon Knight, Dark Green, Pearl Titanium Helmet, Stubble","kingdoms","kingdom-dragon",["7189-1"],1],"fig-000474":["Ninja, Master","ninja","ninja",["3052-1","3075-1","3075-2"],1],"fig-000475":["Shogun, Armor and Helmet with Horn, White Robe","ninja","ninja",["3050-1","3053-1","3077-1","3077-2"],1],"fig-000491":["Heroic Knight","","independent",["71000-4"],1],"fig-000505":["Wizard (Dragon Knights) - Majisto/Wiz, No Cape","dragon-masters","dragon",["1736-1","1746-1","2891-1"],1],"fig-000573":["Wizard (Dragon Knights) - Majisto/Wiz, Plastic Cape","dragon-masters","dragon",["1906-1","6020-1","6048-1","6076-1","6082-1"],1],"fig-000621":["Wizard (Fantasy Era) - Good, No Cape","fantasy-era","crown",["5614-1"],1],"fig-000638":["Shadow Knight Vladek","knights-kingdom-2","shadow",["5998-1"],1],"fig-000639":["Jayko","knights-kingdom-2","morcia",["5999-1","851499-1"],1],"fig-000642":["Knight (Black Falcon) - Black Legs, Black Hips, Rounded Shield, Neck-Protector, 3626a","black-falcons","falcon",["6011-1","6030-1","6073-1","6074-1","6102-1","6103-2"],1],"fig-000644":["Peasant - Light Gray Legs, Brown Hood","","civil",["6010-1"],1],"fig-000645":["King (Royal Knights) - Blue Legs, Blue Hips, No Cape","royal-knights","royal",["6008-1","9376-1"],1],"fig-000646":["Knight (Fright Knights) - Black Helmet, No Plume","fright-knights","fright",["6028-1","6029-1","9376-1"],1],"fig-000648":["Bat Lord (Fright Knights) - Cape","fright-knights","fright",["6007-1","6047-1","6097-1","6099-1"],1],"fig-000760":["Knight (Knights Kingdom I) - Gilbert the Bad, Black Helmet, Horn","knights-kingdom","bull",["6032-1","6096-1"],1],"fig-000835":["Wizard (Kingdoms) - Dark Green, No Cape","kingdoms","kingdom-dragon",["7955-1"],1],"fig-000882":["King with Red Plastic Cape","","civil",["2586-1"],1],"fig-000900":["Mummy","","civil",["850458-1"],1],"fig-000902":["Gorilla Suit Guy","","civil",["850458-1"],1],"fig-000907":["Elf","","elf",["850458-1","8803-9"],1],"fig-000926":["Evil Dwarf","","independent",["8805-12"],1],"fig-001002":["King Leo (Knights Kingdom I) - Lion Shield, Crown","knights-kingdom","leo",["1286-1","4212662-1","6026-1","6091-1","6095-1","6098-1"],1],"fig-001011":["Shogun, Armor and Helmet with Horn, Blue and Black Robe","ninja","ninja",["1186-1","3018-1","4805-1","6013-1","6083-2","6089-1","6093-1"],1],"fig-001032":["Dragon Master (Dragon Knights) - Red Plumes","dragon-masters","dragon",["1794-1"],1],"fig-001052":["Queen","","independent",["71011-16"],1],"fig-001053":["Jester, Red and White","","civil",["7953-1"],1],"fig-001116":["Knight (Knights Kingdom I) - Bull Robber, Black Helmet","knights-kingdom","bull",["4806-1"],1],"fig-001129":["Knight (Knights Kingdom I) - Cedric the Bull, Black Helmet","knights-kingdom","bull",["1288-1","4807-1"],1],"fig-001187":["Forestman (CMF)","forestmen","forest",["8683-14"],1],"fig-001218":["Knight (Crusader Lion) - Light Bluish Gray Legs, Neck-Protector","crusaders","lion",["5004419-1"],1],"fig-001264":["Rogue","","independent",["71013-11"],1],"fig-001314":["Classic King","","independent",["71008-1"],1],"fig-001319":["Goblin","","independent",["71008-5"],1],"fig-001465":["Frightening Knight","","independent",["71011-3"],1],"fig-001489":["Evil Knight","","independent",["8831-14"],1],"fig-001907":["Jayko Geometric Pattern (Knights Kingdom II)","knights-kingdom-2","morcia",["31317-1","4250348-1","4270057-1","851499-1","8779-1","8781-1","8799-1"],1],"fig-002072":["Fright Knight","","independent",["71025-3"],1],"fig-002229":["Skeleton, Standard Face, Ball Joint Arms (3626b Head)","","civil",["6036-1","6046-1","6078-1","6079-1","6087-1","6090-1","6091-1","6097-1","6098-1","7952-1","8781-1","8813-1","8823-1","8876-1","9376-1"],1],"fig-002250":["Skeleton, Evil Face, Ball Joint Arms","","civil",["10176-1","8877-1"],1],"fig-002325":["Skeleton, Red Eyes","fantasy-era","skeleton",["4527617-1","5372-1","7029-1","7079-1","7090-1","7093-1","7094-1","7979-1","852272-1","852293-1","9780756672812-1"],1],"fig-002326":["Knight with Scale Mail with Crown, and Helmet","fantasy-era","crown",["7092-1","9780756672812-1"],1],"fig-002334":["Knight (Dragon Knights) - Black Legs, Yellow Plumes, Plastic Cape","dragon-masters","dragon",["6105-1"],1],"fig-002476":["Archer (Black Falcon) - Black Legs, Black Hips, Pointed Shield, Chin-Guard","black-falcons","falcon",["10039-1"],1],"fig-002477":["Knight (Black Falcon) - Black Legs, Black Hips, Pointed Shield, Neck-Protector","black-falcons","falcon",["10039-1"],0],"fig-002478":["Knight (Breastplate on Black) - Black Legs, Dark Gray Helmet, Blue Plume","","civil",["10039-1"],1],"fig-002479":["Knight (Breastplate on Blue) - Black Legs, Black Helmet, Red Plume, Plastic Cape","","civil",["10039-1"],1],"fig-002480":["Knight (Halved Shield) - Black Legs, Neck-Protector","klasicky-hrad","classic",["6077-1","677-1"],1],"fig-002481":["Knight (Halved Shield) - Light Gray Legs, Chin-Guard","klasicky-hrad","classic",["6077-1","677-1"],1],"fig-002482":["Troll (Big Fig)","fantasy-era","troll",["7036-1","852293-1"],1],"fig-002483":["Ghost - Glow in the Dark, Brick Built Legs, 3626b","","civil",["1596-1","1888-1","6034-1","6075-1","6086-1","6090-1"],1],"fig-002484":["Knight (Scale Mail on Red) - Black Arms, Black Legs, Black Neck-Protector, Plastic Cape","black-knights","black",["6086-1"],1],"fig-002892":["Skeleton, Standard Face, Bent Arms, Vertical Hand Clips, 60115 Torso","","civil",["31120-1"],1],"fig-004379":["Viking Warrior - Chain Mail, Red Band","vikingove","viking",["7016-1","7017-1"],1],"fig-004380":["Viking Warrior - Chain Mail, Sand Green Arms","vikingove","viking",["7016-1"],1],"fig-004381":["Viking Warrior - Armour, Sand Blue Arms","vikingove","viking",["7017-1"],1],"fig-004382":["Viking Warrior - Armour, Sand Blue Arms, Reddish Brown Legs","vikingove","viking",["7021-1"],1],"fig-004383":["Viking Warrior - Armour, Dark Red Arms","vikingove","viking",["7021-1"],1],"fig-004384":["Viking Warrior - Armour, Bare Arms","vikingove","viking",["7021-1"],1],"fig-004420":["Knight (Yellow Castle) - Black","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004423":["Knight (Yellow Castle) - Black with Visor","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004424":["Knight (Yellow Castle) - Blue","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004427":["Knight (Yellow Castle) - Blue with Visor","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004433":["Knight (Yellow Castle) - Red","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004436":["Knight (Yellow Castle) - Red with Visor","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004438":["Knight (Yellow Castle) - White","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004441":["Knight (Yellow Castle) - White with Visor","klasicky-hrad","classic",["375-2","6075-2"],1],"fig-004486":["Knight (Halved Shield) - Light Gray Legs, Neck-Protector","klasicky-hrad","classic",["0016-1","6002-2"],1],"fig-004488":["Knight (Quartered Shield) - Black Legs, Black Visor","klasicky-hrad","classic",["6002-2"],0],"fig-004494":["Knight (Thirded Shield) - Black Legs","klasicky-hrad","classic",["0016-1","383-2","6083-1"],1],"fig-004497":["Knight (Quartered Shield) - Red Legs, Neck-Protector","klasicky-hrad","classic",["0016-1"],1],"fig-004513":["Prince (Knights Tournament)","klasicky-hrad","classic",["383-2","6083-1"],1],"fig-004514":["Princess (Knights Tournament)","klasicky-hrad","classic",["383-2","6083-1"],1],"fig-004515":["Knight (Quartered Shield) - White Legs, Red Visor","klasicky-hrad","classic",["383-2","6083-1"],1],"fig-004516":["Knight (Quartered Shield) - Red Legs, Black Visor","klasicky-hrad","classic",["383-2","6083-1"],1],"fig-004524":["Blacksmith - Plastic Apron","","civil",["6040-1"],1],"fig-004531":["Blacksmith - Long Beard","","civil",["8823-1"],1],"fig-004532":["Blacksmith - Brown Apron","","civil",["6918-1"],1],"fig-004533":["Blacksmith - Printed Gray Beard","","civil",["10193-1"],1],"fig-004534":["Blacksmith - Black Hair","","civil",["3739-1"],1],"fig-004538":["Knight (Crusader Axe) - Black Legs","crusaders","lion",["6067-1"],1],"fig-004539":["Archer (Crusader Axe) - Black Legs","crusaders","lion",["6067-1"],1],"fig-004540":["Knight (Crusader Axe) - Black Legs (reissue)","crusaders","lion",["10000-1"],1],"fig-004541":["Archer (Crusader Axe) - Black Legs (reissue)","crusaders","lion",["10000-1"],1],"fig-004543":["Knight (Crusader Axe) - Blue Legs, Chin-Guard","crusaders","lion",["6049-1"],1],"fig-004547":["Archer (Crusader Lion) - Blue Legs","crusaders","lion",["6102-1"],1],"fig-004551":["Knight (Crusader Axe) - Blue Legs, Neck-Protector","crusaders","lion",["6040-1","6061-1","6062-1","6080-1","6102-1","6103-2"],1],"fig-004565":["Knight (Crusader Axe) - Red Legs, Neck-Protector","crusaders","lion",["6022-1","6062-1"],1],"fig-004566":["Archer (Crusader Lion) - Red Legs, Dark Gray Chin-Guard","crusaders","lion",["6062-1"],1],"fig-004567":["Knight (Crusader Lion) - Blue Legs, Chin-Guard","crusaders","lion",["6102-1"],1],"fig-004568":["Knight (Crusader Lion) - Red Legs, Chin-Guard","crusaders","lion",["6103-1"],1],"fig-004569":["Archer (Crusader Axe) - Blue Legs","crusaders","lion",["6061-1"],1],"fig-004570":["Archer (Crusader Lion) - Red Legs, Black Chin-Guard","crusaders","lion",["6055-1","6080-1"],1],"fig-004571":["Knight (Crusader Axe) - Light Gray Legs","crusaders","lion",["6023-1"],1],"fig-004572":["Knight (Crusader Axe) - Red Legs, Chin-Guard","crusaders","lion",["1584-1","6060-1"],1],"fig-004573":["Knight (Crusader Lion) - Red Legs, Black Neck-Protector","crusaders","lion",["1584-1","6060-1"],1],"fig-004574":["Archer (Crusader Axe) - Red Legs","crusaders","lion",["6022-1"],1],"fig-004575":["Knight (Crusader Axe) - Red Legs, Plastic Cape","crusaders","lion",["6055-1"],1],"fig-004576":["Knight (Crusader Lion) - Black Legs","crusaders","lion",["6081-1"],1],"fig-004577":["Knight (Crusader Lion) - Light Gray Legs, Plastic Cape","crusaders","lion",["6012-1"],1],"fig-004578":["Archer (Crusader Lion) - Light Gray Legs","crusaders","lion",["6012-1"],1],"fig-004669":["Viking Warrior - Armour, Sand Blue Arms, Blue Legs","vikingove","viking",["7018-1"],1],"fig-004670":["Viking Warrior - Armour, Battle Axe on Torso, Sand Green Arms, Dark Green Legs","vikingove","viking",["7018-1"],1],"fig-004671":["Viking Warrior - Breast Plate, Dark Green Legs","vikingove","viking",["7018-1"],1],"fig-004672":["Viking Warrior - Armour, Light Bluish Grey Arms","vikingove","viking",["7018-1"],1],"fig-004673":["Viking King - Armour, Red Legs, Black Cape","vikingove","viking",["7018-1"],1],"fig-004674":["Viking Warrior - Armour, Bare Arms, Black Legs","vikingove","viking",["7018-1","7019-1"],1],"fig-004675":["Viking Warrior - Black Breast Plate, Dark Blue Legs","vikingove","viking",["7015-1"],1],"fig-004676":["Viking King - Armour, Black Legs, Red Cape","vikingove","viking",["7019-1"],1],"fig-004677":["Viking Warrior - Breast Plate, Black Legs","vikingove","viking",["7019-1"],1],"fig-004678":["Viking Warrior - Armour, Battle Axe on Torso, Sand Green Arms, Dark Green Legs, Gray Hair","vikingove","viking",["7019-1"],1],"fig-004679":["Viking Warrior - Armour, Sand Blue Arms. Blue Legs","vikingove","viking",["7019-1"],1],"fig-004680":["Viking Warrior - Breast Plate, Dark Blue Legs","vikingove","viking",["7019-1"],1],"fig-004681":["Viking Warrior - Armour, Belts, Dark Blue Arms, Black Legs","vikingove","viking",["7020-1"],1],"fig-004682":["Viking Warrior - Armour, Belts, Dark Blue Arms, Dark Gray Legs","vikingove","viking",["7020-1"],1],"fig-004683":["Viking Warrior - Armour, Sand Blue Arms, Black Legs","vikingove","viking",["7020-1"],1],"fig-004684":["Viking Warrior - Armour, Battle Axe on Torso, Sand Green Arms, Dark Green Legs, Light Gray Hair","vikingove","viking",["7020-1"],1],"fig-004685":["Viking King - Armour, Reddish Brown Legs","vikingove","viking",["7020-1"],1],"fig-004686":["Viking Warrior - Armour, Dark Red Arms, Reddish Brown Legs","vikingove","viking",["7020-1"],0],"fig-004687":["Viking Warrior - Armour, Bare Arms, Dark Green Legs","vikingove","viking",["7020-1"],1],"fig-005145":["Ghost - White Legs","","civil",["9376-1"],1],"fig-005288":["Skeleton, Standard Face, Red Bandana Hat, Ball Joint Arms","ninja","ninja",["6093-1"],1],"fig-005775":["Danju, Wolf Pattern (Knights Kingdom II)","knights-kingdom-2","morcia",["218158-1","8876-1","8877-1"],1],"fig-005776":["Jayko with Plain Medium Blue Torso, Gold Pattern Armor, and Dark Blue Hips","knights-kingdom-2","morcia",["218158-1","8875-1","8876-1","8877-1"],1],"fig-005777":["Rascus with Plain Green Torso, Gold Pattern Armor, and Dark Green Hips and Helmet","knights-kingdom-2","morcia",["218158-1","8801-1","8874-1","8877-1"],1],"fig-005778":["Santis with Gold Pattern Armor, and Dark Tan Hands and Helmet","knights-kingdom-2","morcia",["218158-1","8801-1","8873-1","8877-1"],1],"fig-005779":["Shadow Knight Vladek, Dark Red Armor with Scorpion","knights-kingdom-2","shadow",["218158-1","8802-1","8876-1","8877-1"],1],"fig-006551":["Witch (Fright Knights) - Willa, No Cape","fright-knights","fright",["2872-1","6031-1","9376-1"],1],"fig-006553":["Knight (Crusader Lion) - Red Legs, Plastic Cape","crusaders","lion",["6017-1"],1],"fig-006554":["Knight (Crusader Lion) - Red Legs, Dark Gray Neck-Protector","crusaders","lion",["6077-2"],1],"fig-006555":["Knight (Crusader Lion) - Blue Legs, Neck Protector","crusaders","lion",["6039-1","6042-1","6049-1"],1],"fig-006556":["Blacksmith - Short Legs","","civil",["10176-1"],1],"fig-006557":["Knight (Breastplate on Red) - Black Legs, Red Plume","","civil",["6081-1"],1],"fig-006558":["Knight (Breastplate on Red) - Blue Legs, Red Feather","","civil",["6081-1"],1],"fig-006559":["Knight (Breastplate on Red) - Black Legs, Yellow Plume","","civil",["1584-1","6060-1"],1],"fig-006560":["Knight (Breastplate on Red) - Blue Legs, Black Neck-Protector","","civil",["6049-1"],1],"fig-006561":["Knight (Breastplate on Red) - Blue Legs, Red Plume","","civil",["6061-1"],1],"fig-006562":["Knight (Breastplate on Red) - Blue Legs, Red Plume, Plastic Cape","","civil",["6055-1"],1],"fig-006563":["Knight (Breastplate on Red) - Blue Legs, White Plume","","civil",["6080-1"],1],"fig-006564":["Knight (Breastplate on Red) - Blue Legs, Yellow Plume, Plastic Cape","","civil",["6080-1"],1],"fig-006565":["Knight (Breastplate on Red) - Blue Legs, Yellow Plume","black-knights","black",["6085-1"],1],"fig-006566":["Knight (Breastplate on Red) - Blue Legs, Dark Gray Neck-Protector","","civil",["6039-1","6103-2"],1],"fig-006567":["Knight (Breastplate on Red) - Red Legs, Blue Dragon Plume","black-knights","black",["6086-1"],1],"fig-006568":["Knight (Breastplate on Red) - Red Legs, Neck-Protector","","civil",["6017-1"],1],"fig-006569":["Knight (Breastplate on Red) - Black Legs, Blue Plume","","civil",["6021-1"],1],"fig-006570":["Knight (Breastplate on Red) - Blue Legs, Brown Hair","","civil",["6041-1"],1],"fig-006571":["Knight (Breastplate on Red) - Red Legs, Blue Plume","","civil",["6080-1"],1],"fig-006572":["Knight (Breastplate on Red) - Red Legs, Red Plume","","civil",["6080-1"],1],"fig-006573":["Knight (Breastplate on Blue) - Blue Legs, Armor, Red Plume","","civil",["6042-1"],1],"fig-006574":["Knight (Breastplate on Blue) - White Legs, White Dragon Plume","black-knights","black",["6086-1"],1],"fig-006575":["Knight (Breastplate on Blue) - Black Legs, Black Plume","","civil",["6073-1"],1],"fig-006576":["Knight (Breastplate on Blue) - Black Legs, Dark Gray Helmet, Red Plume, Plastic Cape","","civil",["6074-1"],1],"fig-006577":["Knight (Breastplate on Blue) - Black Legs, Black Helmet, Red Plume","","civil",["6103-2"],1],"fig-006578":["Knight (Breastplate on Blue) - Blue Legs, Chin-Guard","black-knights","black",["6059-1"],1],"fig-006579":["Knight (Breastplate on Blue) - Blue Legs, Yellow Plume, 3626a","","civil",["6067-1"],1],"fig-006580":["Knight (Breastplate on Blue) - Blue Legs, Yellow Plume, 3626b","","civil",["10000-1"],1],"fig-006581":["Knight (Breastplate on Blue) - Blue Legs, Neck-Protector","","civil",["1584-1","6060-1"],1],"fig-006582":["Knight (Breastplate on Blue) - Red Legs, Blue Plume","","civil",["6041-1"],1],"fig-006583":["Knight (Breastplate on Blue) - Red Legs, Red Plume","black-knights","black",["6085-1"],1],"fig-006584":["Knight (Breastplate on Blue) - Blue Legs, Dark Gray Helmet, Yellow Plume","black-knights","black",["6085-1"],1],"fig-006585":["Knight (Breastplate on Blue) - Black Legs, Red Plume","","civil",["6021-1"],1],"fig-006586":["Knight (Breastplate on Blue) - Black Legs, Red Dragon Plume","black-knights","black",["6086-1"],1],"fig-006587":["Knight (Breastplate on Black) - Black Legs, Armor, Blue Plume","black-knights","black",["6059-1"],1],"fig-006589":["Ghost - Glow in the Dark, Brick Built Legs, 3626a","","civil",["6081-1"],1],"fig-006590":["Knight (Breastplate on Black) - Black Legs, Armor, Yellow Dragon Plume","black-knights","black",["6086-1"],1],"fig-006591":["Knight (Breastplate on Black) - Black Legs, Black Helmet, Blue Plume","","civil",["6074-1"],1],"fig-006592":["Knight (Breastplate on Black) - Black Legs, Black Helmet, Red Plume","black-knights","black",["1584-1","6060-1","6073-1","6085-1"],1],"fig-006593":["Knight (Breastplate on Black) - Black Legs, Neck-Protector","black-knights","black",["6057-1"],1],"fig-006594":["Knight (Breastplate on Black) - Black Legs, Black Helmet, Black Plume","","civil",["6035-1"],1],"fig-006595":["Knight (Breastplate on Black) - Light Gray Legs","black-knights","black",["1547-1"],1],"fig-006596":["Samurai, Blue","ninja","ninja",["4805-1","6083-2","6088-1","6089-1","6093-1"],1],"fig-006597":["Samurai, Blue with Green Headband","ninja","ninja",["6093-1"],1],"fig-006598":["Robber, Printed Brown Armor","ninja","ninja",["6033-1","6045-1","6093-1"],1],"fig-006599":["Shogun, Helmet with Horn, White Robe","ninja","ninja",["3346-1"],1],"fig-006600":["Ninja, Green","ninja","ninja",["3346-1"],0],"fig-006601":["Ninja, Green, Female","ninja","ninja",["3346-1"],0],"fig-006602":["Samurai, Red with Moustache","ninja","ninja",["3345-1"],0],"fig-006603":["Samurai, Red","ninja","ninja",["3345-1"],0],"fig-006720":["Knight (Scale Mail on Red) - Black Arms, Blue Legs, White Plume","","civil",["6047-1","6090-1","6099-1"],1],"fig-006721":["Knight (Scale Mail on Red) - Black Arms, Light Gray Legs, Dark Gray Chin-Guard","black-knights","black",["1547-1"],1],"fig-006722":["Knight (Scale Mail on Red) - Black Arms, Light Gray Legs, Dark Gray Neck-Protector","black-knights","black",["6057-1"],1],"fig-006723":["Knight (Scale Mail on Red) - Blue Arms, Black Legs, Black Chin-Guard","","civil",["6081-1"],1],"fig-006724":["Knight (Scale Mail on Red) - Blue Arms, Black Legs, Dark Gray Neck-Protector","black-knights","black",["6057-1"],1],"fig-006725":["Knight (Scale Mail on Red) - Blue Arms, Blue Legs, Black Neck-Protector","","civil",["6090-1"],1],"fig-006726":["Knight (Scale Mail on Red) - Blue Arms, Light Gray Legs, Dark Gray Chin-Guard","","civil",["6078-1"],1],"fig-006727":["Knight (Scale Mail on Red) - Blue Arms, Light Gray Legs, Dark Gray Neck-Protector","","civil",["6078-1"],1],"fig-006728":["Knight (Scale Mail on Red) - Blue Arms, Red Legs, Black Neck-Protector","black-knights","black",["1888-1"],1],"fig-006729":["Knight (Scale Mail on Red) - Black Arms, White Legs","","civil",["6044-1"],1],"fig-006730":["Knight (Scale Mail on Red) - Red Arms, Blue Legs, Black Neck-Protector","black-knights","black",["6085-1"],1],"fig-006731":["Knight (Scale Mail on Red) - Red Arms, Blue Legs, Dark Gray Neck-Protector","black-knights","black",["6018-1"],1],"fig-006732":["Knight (Scale Mail on Red) - Red Arms, Red Legs, Black Chin-Guard","black-knights","black",["6059-1"],1],"fig-006733":["Knight (Scale Mail on Red) - Red Arms, Red Legs, Black Neck-Protector","black-knights","black",["6059-1"],1],"fig-006734":["Archer (Scale Mail on Red) - Black Arms, Red Legs","black-knights","black",["6086-1"],1],"fig-006735":["Archer (Scale Mail on Red) - Blue Arms, Blue Legs","black-knights","black",["6086-1"],1],"fig-006736":["Archer (Scale Mail on Red) - Blue Arms, Red Legs","black-knights","black",["6086-1"],1],"fig-006737":["Archer (Scale Mail on Blue) - Black Arms, Red Legs","black-knights","black",["6085-1"],1],"fig-006738":["Knight (Scale Mail on Blue) - Black Arms, Blue Legs, Black Chin-Guard","","civil",["1584-1","6060-1"],1],"fig-006739":["Knight (Scale Mail on Blue) - Black Arms, Red Legs","black-knights","black",["6018-1"],1],"fig-006740":["Princess Alyssa (Fantasy Era) - Reddish Brown Hair","","civil",["7093-1","852001-1","852293-1"],1],"fig-006741":["Maiden (Kingdoms) - Dark Orange Hair","","civil",["7189-1"],1],"fig-006742":["Maiden (Knights Kingdom I) - Black Cone Hat","knights-kingdom","leo",["6091-1","6098-1"],1],"fig-006743":["Maiden - Brown Hair","","civil",["3739-1"],1],"fig-006744":["Maiden - Blue Legs, Red Cone Hat, 3626a","","civil",["6067-1"],1],"fig-006745":["Maiden - Blue Legs, Red Cone Hat, 3626b","","civil",["10000-1"],1],"fig-006746":["Maiden - White Legs, Red Cone Hat","","civil",["1584-1","6060-1"],1],"fig-006747":["Maiden - Blue Legs, White Cone Hat","","civil",["6023-1"],1],"fig-006751":["Maiden - Blue Skirt, Red Cone Hat","","civil",["6081-1"],1],"fig-006756":["Maiden (Fantasy Era) - Dark Brown Hair","","civil",["10193-1"],1],"fig-006760":["Maiden (Fantasy Era) - Brown Skirt, Reddish Brown Hair","","civil",["10193-1","7979-1"],1],"fig-006764":["Maiden (Blue Lion) - Dark Red Hair","","civil",["70403-1"],1],"fig-006767":["Maiden (Kingdoms) - Reddish Brown Hair","","civil",["10223-1"],1],"fig-006769":["Maiden (Kingdoms) - Dark Orange Hair","","civil",["7947-1"],1],"fig-006783":["Peasant (Fantasy Era) - Tan Hair","","civil",["10193-1"],1],"fig-006784":["Peasant (Fantasy Era) - Dark Brown Hood","","civil",["10193-1"],1],"fig-006785":["Peasant (Fantasy Era) - Dark Tan Hair","","civil",["10193-1"],1],"fig-006786":["Peasant (Kingdoms) - Dark Tan Hair","","civil",["7189-1"],1],"fig-006787":["Peasant (Kingdoms) - Dark Brown Hood","","civil",["7189-1"],1],"fig-006788":["Peasant - Blue Legs","","civil",["6103-1"],1],"fig-006789":["Peasant - Light Gray Legs, Black Hood","","civil",["1974-3"],1],"fig-006790":["Peasant - Red Legs, Brown Hair","","civil",["1584-1","6060-1"],1],"fig-006791":["Peasant - Red Legs, Black Hood","","civil",["6055-1"],1],"fig-006841":["Viking Red Chess Pawn","vikingove","viking",["851861-1"],1],"fig-006842":["Viking Red Chess King","vikingove","viking",["851861-1"],1],"fig-006843":["Viking Red Chess Bishop","vikingove","viking",["851861-1"],1],"fig-006844":["Viking Blue Chess Pawn","vikingove","viking",["851861-1"],1],"fig-006845":["Viking Blue Chess Bishop","vikingove","viking",["851861-1"],1],"fig-006846":["Viking Blue Chess King","vikingove","viking",["851861-1"],1],"fig-006852":["Forestman (Forestmen) - Black","forestmen","forest",["6066-1"],1],"fig-006853":["Forestman (Forestmen) - Blue, Yellow Triple-Plume","forestmen","forest",["6071-1"],1],"fig-006854":["Forestman (Forestmen) - Blue, Yellow Plume","forestmen","forest",["6077-2"],1],"fig-006855":["Forestman (Forestmen) - Blue, Red Triple-Plume","forestmen","forest",["1680-1","1877-1"],1],"fig-006856":["Forestman (Forestmen) - Yellow, Brown Hat, Red Plume","forestmen","forest",["1680-1","1877-1"],1],"fig-006857":["Forestman (Forestmen) - Yellow, Green Hat, Red Plume","forestmen","forest",["6077-2"],1],"fig-006858":["Forestman (Forestmen) - Yellow, White Plume","forestmen","forest",["6054-1"],1],"fig-006860":["Forestman (Forestmen) - Red, Brown Hat, Red Plume","forestmen","forest",["6103-1"],1],"fig-006861":["Forestman (Forestmen) - Red, Green Hat, Red Plume","forestmen","forest",["6077-2"],1],"fig-006862":["Forestman (Forestmen) - Red, Yellow Plume","forestmen","forest",["6071-1"],1],"fig-006864":["Forestman Archer (Forestmen) - Black, Red Plume","forestmen","forest",["6071-1"],1],"fig-006865":["Forestman Archer (Forestmen) - Blue, Brown Hat, Blue Plume","forestmen","forest",["6066-1"],1],"fig-006866":["Forestman Archer (Forestmen) - Blue, Green Hat, Blue Plume","forestmen","forest",["6077-2"],1],"fig-006867":["Forestman Archer (Forestmen) - Yellow, Red Plume","forestmen","forest",["6071-1"],1],"fig-006868":["Forestman Archer (Forestmen) - Yellow, Black Plume","forestmen","forest",["1974-3"],1],"fig-006869":["Forestman Archer (Forestmen) - Yellow, Yellow Plume","forestmen","forest",["6066-1","6103-1"],1],"fig-006870":["Forestman Archer (Forestmen) - Red, Brown Hat, Red Plume","forestmen","forest",["6042-1","6066-1"],1],"fig-006871":["Forestman Archer (Forestmen) - Red, Brown Hat, Yellow Plume","forestmen","forest",["6054-1","6077-2"],1],"fig-006872":["Forestman Archer (Forestmen) - Red, Green Hat, Small Red Plume","forestmen","forest",["6066-1"],1],"fig-006873":["Forestman Archer (Forestmen) - Red, Green Hat, Red Plume","forestmen","forest",["1680-1"],1],"fig-006874":["Forestwoman Archer (Forestmen)","forestmen","forest",["6071-1"],1],"fig-006875":["Forestman (Dark Forest) - Green Hat","dark-forest","dark",["6079-1"],1],"fig-006876":["Forestman (Dark Forest) - Brown Hat","dark-forest","dark",["6079-1"],1],"fig-006877":["Forestman (Dark Forest) - Brown Legs, Brown Hood","dark-forest","dark",["6024-1","6079-1"],1],"fig-006878":["Forestman Archer (Dark Forest) - Black Hood","dark-forest","dark",["6024-1","6079-1"],1],"fig-006879":["Forestman (Dark Forest) - Light Gray Legs, Brown Hood","dark-forest","dark",["6087-1"],1],"fig-006880":["Forestman Archer (Dark Forest) - Green Hat","dark-forest","dark",["6046-1"],1],"fig-006881":["Forestman Archer (Dark Forest) - Brown Hat","dark-forest","dark",["6046-1"],1],"fig-006882":["Fighter (Wolfpack) - Brown Hood","wolfpack","wolf",["6038-1","6075-1","6086-1","6105-1"],1],"fig-006883":["Fighter (Wolfpack) - Black Hood, Black Plastic Cape","wolfpack","wolf",["6038-1","6075-1"],1],"fig-006884":["Fighter (Wolfpack) - Black Hood","wolfpack","wolf",["6082-1"],1],"fig-006885":["Fighter (Wolfpack) - Black Hood, Red Plastic Cape","wolfpack","wolf",["1596-1"],1],"fig-006886":["Knight (Black Falcons) - Black Legs, Chin-Protector","black-falcons","falcon",["6062-1","6102-1"],1],"fig-006887":["Knight (Black Falcon) - Black Legs, Red Hips, Rounded Shield, Neck-Protector","black-falcons","falcon",["6035-1","6062-1","6103-1"],1],"fig-006889":["Knight (Black Falcon) - Light Gray Legs, Neck-Protector","black-falcons","falcon",["6057-1"],1],"fig-006890":["Archer (Black Falcon) - Light Gray Legs, Chin-Guard","black-falcons","falcon",["6057-1"],1],"fig-006893":["Archer (Black Falcon) - Black Legs, Red Hips, Chin-Guard","black-falcons","falcon",["6062-1","6102-1","6103-1"],1],"fig-006897":["Archer (Black Falcon) - Black Legs, Black Hips, Rounded Shield, Chin-Guard","black-falcons","falcon",["6073-1","6074-1"],1],"fig-006898":["Dragon Master (Dragon Knights) - Blue Plumes, Cape","dragon-masters","dragon",["6105-1"],1],"fig-006899":["Dragon Master (Dragon Knights) - Red Plumes, Cape","dragon-masters","dragon",["6076-1"],1],"fig-006900":["Dragon Master (Dragon Knights) - Yellow Plumes, Cape","dragon-masters","dragon",["6082-1"],1],"fig-006901":["Knight (Dragon Knights) - Light Gray Legs, Light Gray Hips","dragon-masters","dragon",["1906-1"],1],"fig-006902":["Knight (Dragon Knights) - Black Legs, Red Hips, Blue Plumes","dragon-masters","dragon",["6048-1"],1],"fig-006903":["Knight (Dragon Knights) - Black Legs, Red Hips, Red Plumes","dragon-masters","dragon",["6076-1","6078-1"],1],"fig-006904":["Knight (Dragon Knights) - Black Legs, Yellow Plumes","dragon-masters","dragon",["6043-1","6056-1"],1],"fig-006906":["Knight (Dragon Knights) - Black Legs, Neck-Protector","dragon-masters","dragon",["6079-1"],1],"fig-006907":["Knight (Dragon Knights) - Black Legs, Black Hips, Red Plumes","dragon-masters","dragon",["1906-1"],1],"fig-006909":["Archer (Dragon Knights)","dragon-masters","dragon",["6079-1","6082-1"],1],"fig-006911":["Wizard (Red Dragon)","castle-2013","red-dragon",["70403-1"],1],"fig-006914":["Wizard Morax (Fantasy Era) - Evil, Cape","fantasy-era","skeleton",["7093-1","852001-1","852293-1"],1],"fig-006915":["Wizard (Fantasy Era) - Good, Cape","fantasy-era","crown",["852293-1"],1],"fig-006920":["Wizard (Kingdoms) - Blue, 3626b","","civil",["7952-1"],1],"fig-006945":["Wizard (Kingdoms) - Dark Green, Cape","kingdoms","kingdom-dragon",["853373-1"],1],"fig-006947":["Wizard (Knights Kingdom) - Blue","","civil",["10176-1"],1],"fig-007106":["King (Royal Knights) - White Legs, Black Hips","royal-knights","royal",["6044-1"],1],"fig-007107":["King (Royal Knights) - Blue Legs, Blue Hips, Cape","royal-knights","royal",["6090-1"],1],"fig-007108":["Knight (Royal Knights) - Black Legs, Red Helmet, Red Plume","royal-knights","royal",["6090-1"],1],"fig-007109":["Knight (Royal Knights) - Red Legs","royal-knights","royal",["6046-1"],1],"fig-007110":["Archer (Royal Knights) - Red Legs","royal-knights","royal",["6078-1","6090-1"],1],"fig-007111":["Knight (Royal Knights) - Blue Legs, Black Neck-Protector","royal-knights","royal",["6036-1"],1],"fig-007112":["Knight (Fright Knights) - Black Helmet, Red Triple-Plume","fright-knights","fright",["6031-1","6097-1"],1],"fig-007113":["Knight (Fright Knights) - Black Helmet, Red Plume","fright-knights","fright",["6027-1","6087-1"],1],"fig-007114":["Knight (Fright Knights) - Dark Gray Legs, Black Chin-Guard","fright-knights","fright",["6031-1","6097-1"],1],"fig-007115":["Knight (Fright Knights) - Dark Gray Legs, Black Neck-Protector","fright-knights","fright",["6047-1","6099-1"],1],"fig-007116":["Knight (Fright Knights) - Red Legs, Red Hips","fright-knights","fright",["6087-1"],1],"fig-007117":["Witch (Fright Knights) - Willa, Cape","fright-knights","fright",["6037-1","6087-1","6097-1"],1],"fig-007355":["Ghost - Glow in the Dark, White Legs, Yellow Hands","","civil",["10176-1"],1],"fig-007356":["King Leo (Knights Kingdom I) - Armor","knights-kingdom","leo",["10176-1"],1],"fig-007629":["Knight (Knights Kingdom I) - Dark Bluish Gray Legs, Armor","knights-kingdom","leo",["10176-1"],1],"fig-007630":["Knight (Knights Kingdom I) - Black Legs, Armor","knights-kingdom","leo",["10176-1"],1],"fig-007631":["Knight (Knights Kingdom I) - Light Bluish Gray Legs, Armor, Black Moustache","knights-kingdom","leo",["10176-1"],1],"fig-007632":["Knight (Knights Kingdom I) - Light Bluish Gray Legs, Armor, Brown Moustache","knights-kingdom","leo",["10176-1"],1],"fig-007633":["Knight (Knights Kingdom I) - Red Legs, Armor","knights-kingdom","leo",["10176-1"],1],"fig-007634":["Knight (Knights Kingdom I) - Cedric the Bull, Black Helmet, Horn","knights-kingdom","bull",["6091-1","6095-1","6096-1","6098-1"],1],"fig-007670":["Knight (Knights Kingdom I) - Gilbert the Bad, Black Helmet","knights-kingdom","bull",["6091-1","6098-1"],1],"fig-007671":["Archer (Knights Kingdom I) - Gilbert the Bad, Black Helmet, Horn","knights-kingdom","bull",["4819-1"],1],"fig-007672":["Skeleton, Standard Face, Helmet with Neck-Protector","","civil",["4817-1"],1],"fig-007673":["Knight (Knights Kingdom I) - Leather on Legs, Armor","knights-kingdom","leo",["4817-1"],1],"fig-007674":["Knight (Knights Kingdom I) - Leather on Legs","knights-kingdom","leo",["6096-1"],1],"fig-007675":["Archer (Knights Kingdom I) - Leather on Legs","knights-kingdom","leo",["6091-1","6098-1"],1],"fig-007676":["Knight (Knights Kingdom I) - Princess Storm","knights-kingdom","leo",["4816-1","6091-1","6098-1"],1],"fig-007677":["Knight (Knights Kingdom I) - Plate on Legs, Red Plume","knights-kingdom","leo",["6095-1"],1],"fig-007678":["Knight (Knights Kingdom I) - Plate on Legs","knights-kingdom","leo",["6026-1","6091-1","6094-1","6098-1"],1],"fig-007733":["Jester, Red and Blue","","civil",["7979-1"],1],"fig-007734":["Witch, Dark Green Dress with Spider Necklace and Bottles, Black Hat","fantasy-era","skeleton",["7979-1","852293-1"],1],"fig-007735":["Dwarf, Armor with Shoulder Strap, Short Reddish Brown Legs, Beard, Winged Helmet","","civil",["7979-1"],1],"fig-007736":["Knight, Armor with Shoulder Strap, Light Bluish Gray Legs, Wide Brimmed Helmet","","civil",["7979-1"],1],"fig-007737":["Skeleton, Red Eyes, Black","fantasy-era","skeleton",["7079-1","7091-1","7092-1","7094-1","7979-1","852001-1","852272-1"],1],"fig-007738":["Blacksmith, Dark Brown Hood, Brown Beard","","civil",["7952-1"],1],"fig-007739":["Knight (Knights Kingdom I) - Bull Robber, Black Neck-Protector","knights-kingdom","bull",["6094-1"],1],"fig-007926":["Knight - Black Torso, Black Legs","","civil",["7952-1"],1],"fig-007927":["Queen - Red Torso, Red Slope for Legs, Black Hair","","civil",["7952-1"],1],"fig-007928":["Prince - Dark Red Torso, Dark Red Legs, Black Hair","","civil",["7952-1"],1],"fig-007929":["Barmaid - Dark Green Torso, Dark Bluish Grey Slope for Legs, Dark Brown Hair","","civil",["7952-1"],1],"fig-007930":["Lion Knight, Wide Brim Helmet","kingdoms","kingdom-lion",["7946-1","7952-1","852921-1"],1],"fig-007931":["Knight - Dark Bluish Gray Torso, Light Bluish Grey Legs, Quiver","","civil",["7952-1"],1],"fig-008777":["Wizard","","independent",["71007-1"],1],"fig-008778":["Danju, Geometric Pattern (Knights Kingdom II)","knights-kingdom-2","morcia",["31317-1","8777-1","8781-1"],1],"fig-008779":["Evil Wizard","","independent",["71008-10"],1],"fig-008780":["Dracus, Angry (Knights Kingdom II)","knights-kingdom-2","rogue",["8821-1"],1],"fig-008781":["Dracus, Sad (Knights Kingdom II)","knights-kingdom-2","rogue",["8813-1"],1],"fig-008782":["Knight (Knights Kingdom II) - Hero, Black Beard","knights-kingdom-2","morcia",["8813-1"],1],"fig-008783":["Knight (Knights Kingdom II) - Hero, Smile","knights-kingdom-2","morcia",["8813-1"],1],"fig-008784":["Knight (Knights Kingdom II) - Hero, Dark Gray Beard","knights-kingdom-2","morcia",["8813-1"],0],"fig-008785":["Knight (Knights Kingdom II) - Hero, Light Gray Beard","knights-kingdom-2","morcia",["8813-1"],1],"fig-008790":["Elf Maiden","","elf",["71018-15"],1],"fig-008798":["Tournament Knight (CMF)","","independent",["71027-4"],1],"fig-009249":["Shadow Knight Vladek","knights-kingdom-2","shadow",["31317-1","851499-1","8777-1","8779-1","8781-1","8800-1"],1],"fig-009250":["King Mathias, Gold Armor, Light Bluish Gray Cape, Gold Crown","knights-kingdom-2","morcia",["851499-1"],1],"fig-009251":["King, Dark Red Armor, Black Cape, Gold Crown","","civil",["851499-1"],1],"fig-009252":["Queen, Skull Head, Black Dress, Black Cape, Black Hair","","civil",["851499-1"],1],"fig-009253":["Queen, Medium Blue Armor, Light Bluish Gray Dress, Light Bluish Gray Cape, Light Bluish Gray Hair","","civil",["851499-1"],1],"fig-009254":["Shadow Knight","knights-kingdom-2","shadow",["851499-1"],1],"fig-009255":["Santis","knights-kingdom-2","morcia",["31317-1","8778-1","8780-1","8781-1","8799-1"],1],"fig-009256":["Rascus","knights-kingdom-2","morcia",["31317-1","8781-1","8799-1"],1],"fig-009257":["King Mathias, Gold Armor, Gold Crown","knights-kingdom-2","morcia",["8779-1","8781-1","8875-1"],1],"fig-009258":["Shadow Knight","knights-kingdom-2","shadow",["8778-1","8780-1","8781-1","8800-1","8873-1","8874-1","8875-1","8876-1"],1],"fig-009387":["Shadow Knight, Speckle Black-Silver Helmet and Armor","knights-kingdom-2","shadow",["8877-1"],1],"fig-009390":["Shadow Knight, Speckle Black-Silver Helmet","knights-kingdom-2","shadow",["8802-1"],1],"fig-009527":["Knight - Light Bluish Grey Armour with Crown","fantasy-era","crown",["7048-1","7094-1","852009-1","852132-1","852293-1"],1],"fig-009528":["Skeleton Warrior General Bone","fantasy-era","skeleton",["7009-1","852132-1","852272-1","852293-1"],1],"fig-009529":["Chess Piece - Crown - Bishop","fantasy-era","crown",["852001-1"],1],"fig-009530":["Chess Piece - Crown - King","fantasy-era","crown",["7094-1","852001-1"],1],"fig-009531":["Chess Piece - Evil - Bishop","fantasy-era","skeleton",["852001-1"],1],"fig-009532":["Chess Piece - Evil - Queen","fantasy-era","skeleton",["852001-1"],1],"fig-009538":["Knight - Crown Symbol, Pearl Grey Breastplate, Dark Bluish Grey Legs","","civil",["4527617-1"],1],"fig-009885":["Chess Queen, Dark Green","kingdoms","kingdom-dragon",["853373-1"],1],"fig-009886":["Knight, Armour with Chain, Helmet","kingdoms","kingdom-lion",["853373-1"],1],"fig-009887":["Knight, Dark Green, Wide Brim Helmet","kingdoms","kingdom-dragon",["853373-1"],1],"fig-009888":["Dragon Knight, Black, Helmet with Dark Green Plume","kingdoms","kingdom-dragon",["6918-1","853373-1"],1],"fig-009889":["Jester, Red and White, Quiver","","civil",["853373-1"],1],"fig-009890":["Chess King, Red, Cape, Gold Crown with Red Plume","kingdoms","kingdom-lion",["853373-1"],1],"fig-009891":["Chess Queen, Red Dress, Gold Crown","kingdoms","kingdom-lion",["853373-1"],1],"fig-009892":["Knight, Red, Silver Armor, Helmet with Red Plume","kingdoms","kingdom-lion",["853373-1"],1],"fig-009893":["Knight, Red, Wide Brim Helmet","kingdoms","kingdom-lion",["853373-1"],1],"fig-009894":["Troll, Sand Green (Big Fig)","fantasy-era","troll",["7048-1","852293-1"],1],"fig-009895":["King, Gold Armor and Crown","fantasy-era","crown",["852009-1","852293-1"],1],"fig-009896":["Knight, Archer with Metallic Silver Helmet, Light Bluish Grey Legs, and Quiver","fantasy-era","crown",["852271-1"],1],"fig-009897":["Knight, Archer with Metallic Silver Helmet, and Quiver, Cheek Lines","fantasy-era","crown",["852293-1"],1],"fig-009898":["Knight, Armor, Wide Brim Helmet","fantasy-era","crown",["852293-1"],1],"fig-009899":["Dwarf, Black Beard, Copper Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009900":["Dwarf, Black Beard, Metallic Silver Helmet","fantasy-era","dwarf",["7036-1","852293-1"],1],"fig-009901":["Dwarf, Dark Brown Beard, Copper Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009902":["Dwarf, Dark Brown Beard, Metallic Gold Winged Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009903":["Dwarf, Dark Brown Beard, Metallic Silver Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009904":["Dwarf, Dark Orange Beard, Copper Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009905":["Dwarf, Dark Orange Beard, Metallic Gold Winged Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009906":["Dwarf, Dark Orange Beard, Metallic Silver Helmet","fantasy-era","dwarf",["852293-1"],1],"fig-009907":["Skeleton Warrior Grimhelma, Speckle Black-Silver Armor and Helmet","fantasy-era","skeleton",["7094-1","852272-1","852293-1"],1],"fig-009908":["Troll Warrior 1 (Orc)","fantasy-era","troll",["7036-1","852293-1"],1],"fig-009909":["Troll Warrior 3 with Shoulder Armor (Orc)","fantasy-era","troll",["852293-1"],0],"fig-009910":["Troll Warrior 7 (Orc)","fantasy-era","troll",["852293-1"],0],"fig-009911":["Troll Warrior 8 (Orc)","fantasy-era","troll",["7078-1","852293-1"],1],"fig-009912":["Troll Warrior 9 (Orc)","fantasy-era","troll",["852293-1"],0],"fig-009913":["Dwarf, Dark Orange Beard, Metallic Silver Helmet","fantasy-era","dwarf",["852702-1"],1],"fig-009914":["Dwarf, Dark Orange Beard, Copper Helmet","fantasy-era","dwarf",["852702-1"],1],"fig-009915":["Dwarf, Dark Brown Beard, Metallic Silver Winged Helmet","fantasy-era","dwarf",["852702-1"],1],"fig-009916":["Dwarf, Dark Brown Beard, Metallic Gold Winged Helmet","fantasy-era","dwarf",["852702-1"],1],"fig-009917":["Dwarf, Black Beard, Copper Helmet","fantasy-era","dwarf",["852702-1"],1],"fig-009918":["Troll, Dark Tan with Tattoos (Big Fig)","fantasy-era","troll",["7097-1"],1],"fig-009919":["Troll, Sand Green with Tattoos (Big Fig)","fantasy-era","troll",["7097-1"],1],"fig-009920":["King Brutus, Dark Blue, Gold Armor and Crown","fantasy-era","crown",["7097-1"],1],"fig-009921":["Knight, Dark Blue, Wide Brim Helmet","fantasy-era","crown",["7097-1"],1],"fig-009922":["Knight, Dark Blue, Helmet","fantasy-era","crown",["5615-1","7041-1","7097-1"],1],"fig-009923":["Knight, Dark Blue, Armor, Helmet with Grille","fantasy-era","crown",["7097-1"],1],"fig-009925":["Troll Queen","fantasy-era","troll",["7097-1"],1],"fig-009926":["Troll Warrior 2 (Orc)","fantasy-era","troll",["7038-1","7048-1","7078-1","7097-1"],1],"fig-009927":["Knight, Archer with Wide Brim Helmet, Quiver, Beard","fantasy-era","crown",["7094-1"],1],"fig-009928":["Knight, Archer with Wide Brim Helmet, Quiver","fantasy-era","crown",["7094-1"],1],"fig-009929":["Knight, Dark Blue, Helmet, Stubble","fantasy-era","crown",["7094-1"],1],"fig-009930":["Knight, Dark Blue, Helmet, Beard","fantasy-era","crown",["7094-1"],1],"fig-009931":["Knight, Black, Armor, Helmet with Grille","fantasy-era","crown",["7093-1"],1],"fig-009932":["Skeleton, Red Eyes, Speckle Black-Silver Helmet","fantasy-era","skeleton",["7091-1","7092-1"],1],"fig-009933":["Knight, Black, Armor, Helmet with Grille, Cheek Lines","fantasy-era","crown",["7092-1"],1],"fig-009934":["Knight, Dark Blue, Helmet, Angry","fantasy-era","crown",["7037-1","7091-1"],1],"fig-009935":["Knight, Dark Blue, Wide Brim Helmet, Stubble","fantasy-era","crown",["7090-1"],1],"fig-009936":["Knight, Dark Blue, Helmet","fantasy-era","crown",["7090-1"],1],"fig-009937":["Skeleton, Red Eyes, Black Hood and Cape","fantasy-era","skeleton",["7079-1","852272-1"],1],"fig-009938":["Jester, Red and Blue","","civil",["7079-1"],1],"fig-009939":["Knight, Gold, Armor, Helmet with Visor and Dark Blue Plume","fantasy-era","crown",["7079-1"],1],"fig-009940":["Queen, Blue Dress, Crown","fantasy-era","crown",["7079-1"],1],"fig-009941":["Knight, Dark Blue, Helmet, Smile","fantasy-era","crown",["7079-1"],1],"fig-009942":["Knight, Dark Blue, Wide Brim Helmet, Cheek Lines","fantasy-era","crown",["7078-1"],1],"fig-009943":["King, Dark Blue, Gold Armor and Crown with Dark Blue Plume","fantasy-era","crown",["7078-1"],1],"fig-009944":["Troll Warrior 7 with Shoulder Armor (Orc)","fantasy-era","troll",["7037-1","7048-1"],1],"fig-009945":["Dwarf, Dark Orange Beard, Metallic Silver Helmet, Printed Beard","fantasy-era","dwarf",["7048-1"],1],"fig-009946":["Troll Warrior 7 with Armor (Orc)","fantasy-era","troll",["7041-1"],1],"fig-009947":["Knight, Dark Blue, Helmet, Happy / Scared","fantasy-era","crown",["10193-1","7041-1"],1],"fig-009948":["Knight, Dark Blue, Wide Brim Helmet, Goatee Beard","fantasy-era","crown",["7041-1"],1],"fig-009949":["Dwarf, Dark Orange Beard, Metallic Silver Helmet","fantasy-era","dwarf",["7040-1"],1],"fig-009950":["Troll, Sand Green with 5 White Horns (Big Fig)","fantasy-era","troll",["7038-1"],1],"fig-009951":["Knight, Dark Blue, Helmet, Goatee Beard","fantasy-era","crown",["7038-1"],1],"fig-009952":["Knight, Dark Blue, Helmet, Stubble and Printed Hair","fantasy-era","crown",["7038-1"],1],"fig-009953":["Knight, Archer with Wide Brim Helmet, Quiver, Smile","fantasy-era","crown",["7037-1"],1],"fig-009955":["Dwarf, Dark Brown Beard, Metallic Gold Winged Helmet","fantasy-era","dwarf",["7036-1"],1],"fig-009956":["Dwarf, Dark Orange Beard, Metallic Silver Winged Helmet, Printed Beard","fantasy-era","dwarf",["7036-1"],1],"fig-009957":["Skeleton, Red Eyes, Bicorne Hat, Light Bluish Gray Beard","fantasy-era","skeleton",["7029-1"],1],"fig-009958":["Knight, Dark Blue, Helmet, White Beard","fantasy-era","crown",["7029-1"],1],"fig-009959":["Knight, Archer with Wide Brim Helmet, Quiver, Cheek Lines","fantasy-era","crown",["7029-1"],1],"fig-009960":["Knight, Dark Blue, Helmet, Goatee Beard and Printed Hair","fantasy-era","crown",["7029-1"],1],"fig-009961":["Knight, Gray, Armor, Helmet with Visor","fantasy-era","crown",["7009-1"],1],"fig-009962":["Knight, Dark Blue, Helmet, Cheek Lines","fantasy-era","crown",["10193-1"],1],"fig-009963":["Troll Warrior 10 (Orc)","fantasy-era","troll",["852701-1"],1],"fig-009964":["Troll Warrior 7 with Cape (Orc)","fantasy-era","troll",["852701-1"],1],"fig-009965":["Knight, Dark Blue, Helmet, Smile with Brown Eyebrows","fantasy-era","crown",["852271-1"],1],"fig-009966":["Knight, Dark Blue, Wide Brim Helmet, Beard","fantasy-era","crown",["852271-1"],1],"fig-009967":["Knight, Gray, Armor, Helmet with Visor, Cheek Lines","fantasy-era","crown",["852271-1"],1],"fig-009968":["Knight, Gray, Armor, Helmet with Grille, Goatee Beard","fantasy-era","crown",["852271-1"],1],"fig-010045":["Karzon","knights-kingdom-2","rogue",["8822-1","8823-1"],1],"fig-010046":["King Jayko","knights-kingdom-2","morcia",["8823-1"],1],"fig-010047":["Lord Vladek","knights-kingdom-2","shadow",["8823-1"],1],"fig-010048":["Sir Adric","knights-kingdom-2","morcia",["8822-1","8823-1"],1],"fig-010049":["Rouge Knight, Sand Blue","knights-kingdom-2","rogue",["8822-1"],1],"fig-010050":["Rogue Knight, Yellow and Black","knights-kingdom-2","rogue",["8821-1"],1],"fig-010051":["Sir Kentis","knights-kingdom-2","morcia",["8813-1","8821-1"],1],"fig-010052":["Rogue Knight, Black and Yellow","knights-kingdom-2","rogue",["8813-1"],1],"fig-010053":["Rouge Knight, Black and Yellow, Black Helmet","knights-kingdom-2","rogue",["8813-1"],1],"fig-010054":["Rogue Knight, Yellow and Black, Speckle Black-Silver Helmet","knights-kingdom-2","rogue",["8813-1"],0],"fig-010055":["Rouge Knight, Yellow and Black, Black Helmet","knights-kingdom-2","rogue",["8813-1"],0],"fig-010056":["Rascus, Printed Torso","knights-kingdom-2","morcia",["8780-1"],1],"fig-010057":["The Guardian","knights-kingdom-2","morcia",["8780-1"],1],"fig-010058":["Knight, Blue, Armor, Helmet with Visor and Blue Plume","castle-2013","blue-lion",["70403-1","850888-1"],1],"fig-010059":["Knight, Blue, Helmet","castle-2013","blue-lion",["70401-1","850888-1"],1],"fig-010060":["Knight, Blue, Printed Breastplate, Helmet","castle-2013","blue-lion",["70400-1","850888-1"],1],"fig-010062":["Dragon Knight, Red, Armor, Helmet with Red Plume","castle-2013","red-dragon",["70402-1","70404-1","850889-1"],1],"fig-010063":["Dragon Knight, Red, Helmet, Beard, Brown Belt","castle-2013","red-dragon",["850889-1"],1],"fig-010064":["Dragon Knight, Red, Helmet, Stubble","castle-2013","red-dragon",["70400-1","70404-1","850889-1"],1],"fig-010066":["King, Lion King","kingdoms","kingdom-lion",["10223-1","7188-1"],1],"fig-010067":["Lion Knight, Helmet, Soul-patch","kingdoms","kingdom-lion",["10223-1","LILLE-1"],1],"fig-010068":["Lion Knight, Helmet","kingdoms","kingdom-lion",["10223-1"],1],"fig-010069":["Nobleman","","civil",["10223-1"],1],"fig-010070":["Queen, Lion Queen","kingdoms","kingdom-lion",["10223-1"],1],"fig-010071":["Young Squire","","civil",["10223-1"],1],"fig-010072":["Lion Knight, Armour, Helmet with Grille and Red Plume","kingdoms","kingdom-lion",["10223-1"],1],"fig-010073":["Falcon Knight, Armor, Helmet with Dark Green Plume","black-falcons","falcon",["10223-1"],1],"fig-010074":["Dragon Knight, Dark Green, Helmet","kingdoms","kingdom-dragon",["852922-1"],1],"fig-010075":["Dragon Knight, Archer, Dark Green, Wide Brim Helmet, Quiver","kingdoms","kingdom-dragon",["852922-1"],1],"fig-010076":["Dragon Knight, Dark Green, Wide Brim Helmet","kingdoms","kingdom-dragon",["852922-1"],1],"fig-010077":["Dragon Knight, Dark Green, Helmet with Dark Green Plume, Cape","kingdoms","kingdom-dragon",["852922-1"],1],"fig-010078":["Dragon Knight, Dark Green, Armor, Helmet with Dark Green Plume","kingdoms","kingdom-dragon",["852922-1"],1],"fig-010079":["Lion Knight, Archer, Helmet, Quiver","kingdoms","kingdom-lion",["7946-1","852921-1"],1],"fig-010080":["Lion Knight, Helmet","kingdoms","kingdom-lion",["852921-1"],1],"fig-010081":["Lion Knight, Helmet with Grille and Red Plume","kingdoms","kingdom-lion",["7950-1","852921-1"],1],"fig-010082":["Lion Knight, Helmet with Grille and Red Plume, Cape","kingdoms","kingdom-lion",["852921-1"],1],"fig-010084":["Dragon Knight, Dark Green, Pearl Titanium Helmet, Angry","kingdoms","kingdom-dragon",["7189-1","7949-1"],1],"fig-010085":["Lion Knight, Helmet with Red Plume","kingdoms","kingdom-lion",["7949-1"],1],"fig-010086":["Lion Knight, Helmet, Scared / Smile","kingdoms","kingdom-lion",["7949-1"],1],"fig-010087":["Lion Knight, Wide Brim Helmet, Cheek Lines","kingdoms","kingdom-lion",["7948-1"],1],"fig-010088":["Lion Knight, Archer, Helmet, Quiver","kingdoms","kingdom-lion",["7948-1"],1],"fig-010091":["Lion Knight, Helmet, Beard","kingdoms","kingdom-lion",["7947-1"],1],"fig-010093":["Lion Knight, Armour, Helmet with Red Plume (Flat Silver)","kingdoms","kingdom-lion",["7947-1"],1],"fig-010097":["King, Lion King, Red Plume","kingdoms","kingdom-lion",["7946-1"],1],"fig-010098":["Lion Knight, Wide Brim Helmet, Beard","kingdoms","kingdom-lion",["7946-1"],1],"fig-010099":["Lion Knight, Archer, Helmet, Quiver, Stubble","kingdoms","kingdom-lion",["7946-1"],1],"fig-010100":["Dragon Knight, Archer, Dark Green, Wide Brim Helmet, Quiver, Goatee Beard","kingdoms","kingdom-dragon",["7189-1"],1],"fig-010101":["Dragon Knight, Dark Green, Wide Brim Helmet, Gold Tooth","kingdoms","kingdom-dragon",["7188-1"],1],"fig-010102":["Dragon Knight, Dark Green, Helmet, Angry","kingdoms","kingdom-dragon",["7188-1"],1],"fig-010103":["Lion Knight, Wide Brim Helmet, Cheek Lines / Scared","kingdoms","kingdom-lion",["7188-1"],1],"fig-010104":["Dragon Knight, Archer, Dark Green, Wide Brim Helmet, Missing Tooth","kingdoms","kingdom-dragon",["7187-1"],1],"fig-010105":["Lion Knight, Helmet, Stubble and Scar","kingdoms","kingdom-lion",["7187-1"],1],"fig-010106":["Lion Knight, Wide Brim Helmet, Soul-patch","kingdoms","kingdom-lion",["7187-1"],1],"fig-010107":["Dragon Knight, Black, Armor, Helmet with Dark Green Plume, Goatee Beard","kingdoms","kingdom-dragon",["7187-1"],1],"fig-010108":["Dragon Knight, Red, Helmet, Red Beard","castle-2013","red-dragon",["70404-1"],1],"fig-010109":["Knight, Blue, Helmet","castle-2013","blue-lion",["70404-1"],1],"fig-010110":["Knight, Archer, Blue, Wide Brim Helmet, Quiver","castle-2013","blue-lion",["70404-1","850888-1"],1],"fig-010111":["King, Dark Blue, Crown, Cape","castle-2013","blue-lion",["70404-1"],1],"fig-010112":["Knight, Blue, Armor, Helmet with Visor and Blue Plume, Beard","castle-2013","blue-lion",["70404-1"],1],"fig-010113":["Knight, Blue, Helmet","castle-2013","blue-lion",["70403-1"],1],"fig-010114":["Dragon Knight, Red, Helmet, Soul-patch","castle-2013","red-dragon",["70403-1"],1],"fig-010115":["Knight, Blue, Wide Brim Helmet","castle-2013","blue-lion",["70402-1"],1],"fig-010116":["Knight, Blue, Armor, Helmet with Grille and Blue Plume","castle-2013","blue-lion",["70402-1"],1],"fig-010117":["Dragon Knight, Red, Helmet, Black Beard","castle-2013","red-dragon",["70401-1"],1],"fig-010118":["Knight, Blue, Wide Brim Helmet, Cheek Lines","castle-2013","blue-lion",["70401-1"],1],"fig-010119":["Knight, Blue, Wide Brim Helmet","castle-2013","blue-lion",["70400-1"],1],"fig-010120":["Dragon Knight, Red, Helmet, Red Beard","castle-2013","red-dragon",["70400-1","850889-1"],1],"fig-010153":["Sand Green Torso, Sand Green Slope For Dress, Reddish Brown Hair","","civil",["LILLE-1"],0],"fig-010154":["Kid - Dark Tan Torso, Reddish Brown Legs, Dark Brown Hood","","civil",["LILLE-1"],0],"fig-010620":["Rascus - No Armour, Green Helmet","knights-kingdom-2","morcia",["5996-1"],0],"fig-010621":["Knight, Archer with Metallic Silver Helmet, Dark Bluish Grey Legs, and Quiver","fantasy-era","crown",["852293-1"],1],"fig-010622":["Fisherman - Black Cap","","civil",["850458-1"],1],"fig-010623":["Space Villain - Flat Silver Peg Leg","","civil",["850458-1"],1],"fig-010802":["Knight (Breastplate on Black) - Black Legs, Armor, Red Plume, Hollow Stud Head","black-knights","black",["6034-1"],1],"fig-010920":["Blacksmith - Dark Tan Torso, Sand Blue Legs, Dark Orange Hair and Beard","","civil",["21325-1"],1],"fig-010921":["Woman - Green Tunic, Dark Tan/Reddish Brown Legs, Dark Brown Hair, Quiver","","civil",["21325-1"],1],"fig-010922":["Black Falcon Knight, Female - Blue Torso, Pearl Dark Gray Legs, Dark Brown Hair, Flat Silver Shoulderguard","black-falcons","falcon",["21325-1"],1],"fig-010923":["Black Falcon Knight - Blue Torso, Pearl Dark Grey Legs, Light Bluish Grey Hair, Flat Silver Shoulderguard","black-falcons","falcon",["21325-1"],1],"fig-011209":["Skeleton Warrior with Black Hips","","civil",["852009-1"],0],"fig-011278":["Black Falcon Castle Guard - Blue Torso, Pearl Dark Grey Legs, Light Bluish Grey Mustache","black-falcons","falcon",["31120-1"],1],"fig-011279":["Black Falcon Castle Guard, Female - Blue Torso, Pearl Dark Grey Legs, Flat Silver Helmet","black-falcons","falcon",["31120-1"],1],"fig-011280":["Blacksmith - White Torso, Black Legs, Dark Orange Hair","","civil",["31120-1"],1],"fig-011963":["Löwenstein Archer","","civil",["19001-1"],1],"fig-011964":["Löwenstein Knight","","civil",["19001-1"],1],"fig-011965":["Löwenstein Queen","","civil",["19001-1"],1],"fig-012368":["Castle in the Forest Knight","","civil",["910001-1"],1],"fig-012369":["Castle in the Forest Guard","","civil",["910001-1"],1],"fig-012370":["Castle in the Forest Archer - Male","","civil",["910001-1"],1],"fig-012371":["Castle in the Forest Archer - Female","","civil",["910001-1"],1],"fig-012372":["Castle in the Forest Farmer","","civil",["910001-1"],1],"fig-012373":["Castle in the Forest Pirate","","civil",["910001-1"],1],"fig-012754":["Viking, Dark Orange Beard","","civil",["31132-1"],1],"fig-012755":["Viking Queen","","civil",["31132-1"],1],"fig-012756":["Viking, Tan Fur Collar","","civil",["31132-1"],1],"fig-012757":["Viking, Dark Red Legs","","civil",["31132-1"],1],"fig-012855":["Forestman, Quiver, Sideburns","forestmen","forest",["40567-1"],1],"fig-012856":["Forestwoman, Reddish Brown Hair (2022)","forestmen","forest",["40567-1"],1],"fig-012977":["Farmer","","civil",["10305-1"],1],"fig-012978":["Castle Man, Reddish Brown Apron, Dark Brown Hair","","civil",["10305-1"],1],"fig-012979":["Forestman, Quiver, Thin Moustache","forestmen","forest",["10305-1"],1],"fig-012980":["Castle Woman, Dark Green Dress, White Headdress","","civil",["10305-1"],1],"fig-012981":["Knight, Woman, Helmet with Fixed Grille","crusaders","lion",["10305-1"],1],"fig-012982":["Knight, Woman, Wide Brim Helmet, Eyes Closed","crusaders","lion",["10305-1"],1],"fig-012983":["Forestgirl, Short Green Legs","forestmen","forest",["10305-1"],1],"fig-012984":["Troubadour Boy, Dark Blue Short Legs","","civil",["10305-1"],1],"fig-012985":["Knight, Dark Tan Hair","crusaders","lion",["10305-1"],1],"fig-012986":["Knight, Archer, Woman, Quiver","crusaders","lion",["10305-1"],1],"fig-012988":["Wizard, Majisto, Blue Robes","dragon-masters","dragon",["10305-1"],1],"fig-012989":["Forestwoman, Quiver","forestmen","forest",["10305-1","910043-1"],1],"fig-012991":["Skeleton, Standard Face, Bent Arms (78132 Torso)","","civil",["10305-1"],1],"fig-012992":["Knight, Chestplate, Black Hair","crusaders","lion",["10305-1"],1],"fig-012993":["Knight, Wide Brim Helmet","crusaders","lion",["10305-1"],1],"fig-012994":["Knight, Woman, Chestplate, Helmet with Grille and Red Plume","crusaders","lion",["10305-1"],1],"fig-012995":["Queen, Chestplate, Cape, Helmet with Gold Grille and White Plume","crusaders","lion",["10305-1"],1],"fig-012996":["Knight, Woman, Quiver","crusaders","lion",["10305-1"],1],"fig-012997":["Knight, Trumpeter","crusaders","lion",["10305-1"],1],"fig-012998":["Knight, Black Falcon, Woman","black-falcons","falcon",["10305-1"],1],"fig-012999":["Knight, Black Falcon, Neck Bracket","black-falcons","falcon",["10305-1","910045-1"],1],"fig-013000":["Knight, Black Falcon","black-falcons","falcon",["10305-1"],1],"fig-013089":["Knight of the Yellow Castle","klasicky-hrad","classic",["71034-11"],1],"fig-013194":["Skeleton, Standard Face, Bent Arms, Vertical Hand Clips, 78132 Torso, 3626c Head","","civil",["910049-1"],1],"fig-013453":["Falconer - Minifigure","black-falcons","falcon",["71037-5"],1],"fig-013952":["Woman, Tan Trenchcoat","","civil",["910049-1"],1],"fig-014125":["Dragon Knight, Dark Green, Pearl Dark Gray Helmet, Stubble","kingdoms","kingdom-dragon",["30061-1"],1],"fig-014393":["Viking, Dark Red Overalls, Dark Orange Hair","","civil",["21343-1"],1],"fig-014394":["Viking, Olive Green Shirt, Helmet with Horns, Quiver","","civil",["21343-1"],1],"fig-014395":["Viking, Armor, Dark Blue Legs, Tan Hair","","civil",["21343-1"],1],"fig-014396":["Viking, Reddish Brown Shirt, Shoulder Guards, Helmet with Horns, White Beard","","civil",["21343-1"],1],"fig-014420":["Wizard (Dragon Knights) - Majisto/Wizard, Robe","dragon-masters","dragon",["40601-1"],1],"fig-014421":["Knight (Dragon Knights) - Reissue, Black Legs, Shoulder Gaurds","dragon-masters","dragon",["40601-1"],1],"fig-014653":["Vampire Knight","fright-knights","fright",["71045-3"],1],"fig-014707":["Dragon Knight, Archer, Dark Green, Helmet, Quiver (Pearl Titanium)","kingdoms","kingdom-dragon",["7946-1"],1],"fig-014708":["Dragon Knight, Black, Armor, Helmet with Dark Green Plume (Pearl Titanium)","kingdoms","kingdom-dragon",["7946-1"],1],"fig-014709":["Dragon Knight, Dark Green, Wide Brim Helmet, Moustache and Stubble (Pearl Titanium)","kingdoms","kingdom-dragon",["7946-1"],1],"fig-014710":["Dragon Knight, Dark Green, Helmet with Dark Green Plume, Moustache and Stubble (Pearl Titanium)","kingdoms","kingdom-dragon",["7947-1"],1],"fig-014711":["Dragon Knight, Dark Green, Helmet, Stern (Pearl Titanium)","kingdoms","kingdom-dragon",["7947-1"],1],"fig-014713":["Dragon Knight, Dark Green, Wide Brim Helmet, Angry (Pearl Titanium)","kingdoms","kingdom-dragon",["7948-1"],1],"fig-014714":["Dragon Knight, Dark Green, Pearl Titanium Helmet with Dark Green Plume","kingdoms","kingdom-dragon",["7950-1"],1],"fig-014807":["Innkeeper, Dark Red Dress, White Hood","","civil",["10332-1"],1],"fig-014809":["Shieldsmith, Sand Green Torso, Dark Tan Legs","","civil",["10332-1"],1],"fig-014810":["Tax Collector, Dark Purple Torso, Sand Blue Legs","","civil",["10332-1"],1],"fig-014811":["Knight, Black Moustache","crusaders","lion",["10332-1"],1],"fig-014812":["Carpenter, Olive Green Torso, Dark Brown Legs","","civil",["10332-1"],1],"fig-014813":["Weaver, Sand Blue Torso, Dark Blue Legs","","civil",["10332-1"],1],"fig-014814":["Kid, Tan Torso, Dark Brown Legs, Sand Green Hat","","civil",["10332-1"],1],"fig-014815":["Wolfpack, Reddish Brown Torso, Dark Bluish Grey Legs, Hood","wolfpack","wolf",["10332-1"],1],"fig-015248":["Mountain Fortress Lion Knights King","crusaders","lion",["910029-1"],1],"fig-015249":["Mountain Fortress Child","","civil",["910029-1"],1],"fig-015250":["Mountain Fortress Black Falcon Archer - Male","black-falcons","falcon",["910029-1"],1],"fig-015251":["Mountain Fortress Woman","","civil",["910029-1"],1],"fig-015252":["Mountain Fortress Black Falcon Archer - Female","black-falcons","falcon",["910029-1"],1],"fig-015253":["Mountain Fortress Black Falcon Soldier - Helmet with Pointed Visor, Armor","black-falcons","falcon",["910029-1","910045-1"],1],"fig-015254":["Mountain Fortress Black Falcon Soldier - Helmet with Broad Brim, Shoulder Armor","black-falcons","falcon",["910029-1"],1],"fig-015255":["Mountain Fortress Black Falcon Soldier - Helmet with Neck Protector, Beard","black-falcons","falcon",["910029-1"],1],"fig-015256":["Mountain Fortress Black Falcon Woman","black-falcons","falcon",["910029-1"],1],"fig-015703":["Wolfpack Beastmaster","wolfpack","wolf",["71048-2"],1],"fig-016152":["Black Falcon Knight, Tan Sack","black-falcons","falcon",["910043-1"],0],"fig-016153":["Black Falcon Knight","black-falcons","falcon",["910043-1"],0],"fig-016154":["Forest Girl","","civil",["910043-1"],0],"fig-016155":["Forestman, Quiver, Smile","forestmen","forest",["910043-1"],0],"fig-016156":["Forestman, Quiver, Stubbles","forestmen","forest",["910043-1"],0],"fig-016157":["Forestwoman","forestmen","forest",["910043-1"],0],"fig-016158":["Forestwoman, Nougat Lips","forestmen","forest",["910043-1"],0],"fig-016159":["Writer, Sand Green Outfit","","civil",["910043-1"],0],"fig-016160":["Woman, Sand Green Dress, Reddish Brown Hair","","civil",["910043-1"],0],"fig-016161":["Forestman, Quiver, Beard","forestmen","forest",["910043-1"],0],"fig-016163":["Skeleton, Standard Face, Bent Arms, Vertical Hand Clips, 78132 Torso, Missing Right Leg","","civil",["910043-1"],1],"fig-016164":["Black Falcon Knight, Black Helmet","black-falcons","falcon",["910043-1"],1],"fig-016348":["Classic Spaceman, Dark Turquoise with Airtanks","","civil",["21358-1"],1],"fig-016349":["Classic Spaceman, Pearl Gold with Airtanks","","civil",["21358-1"],1],"fig-016350":["Rob the Fan Designer","","civil",["21358-1"],1],"fig-016351":["LEGO Ideas Designer","","civil",["21358-1"],1],"fig-016352":["Pirate Camilla","","civil",["21358-1"],1],"fig-016353":["Pirate Bo'Sun Will","","civil",["21358-1"],1],"fig-016354":["Male Kraken Warrior","kraken-warriors","kraken",["21358-1"],1],"fig-016355":["Paradisa Beach Bro","","civil",["21358-1"],1],"fig-016356":["Paradisa Beach Bae","","civil",["21358-1"],1],"fig-016357":["Male Griffin Knight","griffin-knights","griffin",["21358-1"],1],"fig-016358":["Griffin Knight, Female, Dark Red Arms","griffin-knights","griffin",["21358-1","910064-1"],1],"fig-016359":["Bernard Bear Minifigure","","civil",["21358-1"],1],"fig-016360":["Elton Elephant Minifigure","","civil",["21358-1"],1],"fig-016361":["Female Kraken Warrior","kraken-warriors","kraken",["21358-1"],1],"fig-016538":["Black Falcon Archer, Female","black-falcons","falcon",["910045-1"],0],"fig-016539":["Blacksmith, Black Torso, Dark Red Legs, Black Hair","","civil",["910045-1"],0],"fig-016540":["Warrior, Dark Bluish Grey Torso, Legs, Pearl Titanium Helmet, Dark Orange Beard","","civil",["910045-1"],0],"fig-016541":["Healer, Olive Green Torso, Dark Orange Legs, Bright Light Yellow Hair, Backpack","","civil",["910045-1"],0],"fig-016542":["Cart Driver, Olive Green Torso, Dark Tan Legs, Black Hair","","civil",["910045-1"],0],"fig-016543":["Cook, Dark Green Torso, Dress, White Hood","","civil",["910045-1"],0],"fig-016544":["Animal Handler, Tan Torso, Black Legs, Reddish Brown Hood, Backpack","","civil",["910045-1"],0],"fig-016545":["Black Falcon Archer, White Beard","black-falcons","falcon",["910045-1"],0],"fig-016546":["Black Falcon Knight, Black Moustache","black-falcons","falcon",["910045-1"],0],"fig-016547":["Black Falcon Knight, Reddish Brown Shoulder Guard","black-falcons","falcon",["910045-1"],0],"fig-016548":["Black Falcon Knight, Dark Blue Shoulder Guard","black-falcons","falcon",["910045-1"],0],"fig-016549":["Queen, Full Armor","crusaders","lion",["910045-1"],0],"fig-016550":["Queen, Black Dress, Dark Orange Hair, Sand Blue Collar","","civil",["910045-1"],0],"fig-016551":["Bard, Blue Torso, Dark Blue Legs, Blue Hat, Pearl Gold Shoulder Guard","","civil",["910045-1"],0],"fig-016552":["Knight, Dark Bluish Grey Armor, Neck Bracket","crusaders","lion",["910045-1"],0],"fig-016553":["Lion Knight","crusaders","lion",["910045-1"],0],"fig-016555":["Knight, Wide Brim, Stubbles","","civil",["910047-1"],0],"fig-016556":["Merchant, Dark Red Dress","","civil",["910047-1"],0],"fig-016557":["Blacksmith, Black Torso, Dark Red Legs, Orange Beard","","civil",["910047-1"],0],"fig-016558":["Snake Charmer, Olive Green Torso, Dark Brown Legs, Black Hair","","civil",["910047-1"],1],"fig-016559":["Knight, Archer, Quiver","","civil",["910047-1"],0],"fig-016560":["Cart Driver, Sand Blue Torso, Dark Orange Legs, Black Hair","","civil",["910047-1"],1],"fig-016561":["Tax Collector, Dark Purple Torso, Sand Blue Legs, Dark Orange Hair","","civil",["910047-1"],0],"fig-016562":["Knight, Wide Brim, Female","","civil",["910047-1"],0],"fig-016563":["Fish Merchant, Dark Tan Torso, Dark Blue Legs, Dark Blue Hat","","civil",["910047-1"],0],"fig-016564":["Kid, Reddish Brown Overall, Dark Orange Hair, Backpack","","civil",["910048-1"],0],"fig-016565":["Woman, Dark Green Torso, Dark Tan Legs, Light Bluish Grey Hair","","civil",["910048-1"],0],"fig-016566":["Man, Reddish Brown Torso, Legs, Tan Hat, Light Bluish Grey Beard","","civil",["910048-1"],0],"fig-016567":["Man, Sand Green Torso, Sand Blue Legs, Dark Brown Hat, White Beard","","civil",["910048-1"],0],"fig-016568":["Woman, Olive Green Torso, Dark Tan Legs, Dark Brown Hair","","civil",["910048-1"],1],"fig-016595":["Knight, Female, White Tunic, Helmet with Red Plume","horse-knights","horse",["31168-1"],1],"fig-016596":["Knight, White Tunic, Helmet","horse-knights","horse",["31168-1"],1],"fig-016597":["King, Armor with White Tunic, Crown","horse-knights","horse",["31168-1"],1],"fig-016598":["Black Knight, Black Cape, Helmet with Yellow Plume","serpent-knights","serpent",["31168-1"],1],"fig-016599":["Villager, Man, Dark Brown Vest, Blue Legs, Dark Tan Hair","","civil",["31168-1"],1],"fig-016600":["Archer, White Tunic, Blue Hood, Quiver","horse-knights","horse",["31168-1"],1],"fig-016676":["Ghost, Glow in the Dark, Pin Hole","","civil",["910062-1"],1],"fig-016977":["Girl, Red Torso, Black Medium Legs, Reddish Brown Hair","","civil",["910049-1"],1],"fig-016978":["Kid, Dark Tan Torso, Reddish Brown Apron, Medium Nougat Hair","","civil",["910049-1"],1],"fig-016979":["Pirate, Blue Torso, Dark Brown Legs, Dark Brown Hat","","civil",["910049-1"],1],"fig-016980":["Woman, Tan Torso, Dark Blue Dress, Dark Brown Hair, Dark Blue Scarf","","civil",["910049-1"],1],"fig-016981":["Skeleton, Black Suit, Red Scarf","","civil",["910049-1"],1],"fig-016982":["Woman, Black Torso, Dark Bluish Grey Legs, Reddish Brown Hair","","civil",["910049-1"],1],"fig-016983":["Man, Light Bluish Grey Torso, Pearl Titanium Legs, Yellowish Green Helmet","","civil",["910049-1"],1],"fig-016984":["Knight Statue","","civil",["910049-1"],1],"fig-016985":["Chef, Black Legs, Black Moustache","","civil",["910049-1"],1],"fig-016986":["Man, Black Suit, Top Hat, Dark Tan Scarf","","civil",["910049-1"],1],"fig-016987":["Man, Dark Green Torso, Dark Tan Legs, Medium Nougat Hair","","civil",["910049-1"],1],"fig-016988":["Woman, Black Dress, Ghost Legs","","civil",["910049-1"],1],"fig-016989":["Man, Blue Torso, Dark Blue Legs, Black Hair","","civil",["910049-1"],1],"fig-017428":["Knight, Gold Lion, Helmet","crusaders","lion",["910057-1"],0],"fig-017429":["Knight, Wolfpack, White Beard","wolfpack","wolf",["910057-1"],0],"fig-017430":["Knight, Wolfpack, Reddish Brown Hood","wolfpack","wolf",["910057-1"],0],"fig-017431":["Knight, Gold Lion, Helmet","crusaders","lion",["910057-1"],0],"fig-017432":["Knight, Wolfpack, Dark Brown Hair","wolfpack","wolf",["910057-1"],0],"fig-017433":["Knight, Wolfpack, Black Hood","wolfpack","wolf",["910057-1"],0],"fig-017434":["Knight, Wolfpack, Black Hair","wolfpack","wolf",["910057-1"],0],"fig-017435":["Knight, Wolfpack, Light Bluish Grey Hair, Fur Collar","wolfpack","wolf",["910057-1"],0],"fig-017436":["Knight, Wolfpack, Tan Hair, Mask","wolfpack","wolf",["910057-1"],0],"fig-017437":["Knight, Wolfpack, Black Hood, Quiver","wolfpack","wolf",["910057-1"],0],"fig-017912":["Gardener","","civil",["910062-1"],1],"fig-017913":["Wizard","","civil",["910062-1"],1],"fig-017914":["Kraken Warrior","kraken-warriors","kraken",["910062-1"],1],"fig-017915":["Lady, Dark Red Dress, Bright Pink Hair","","civil",["910062-1"],1],"fig-017916":["Griffin Knight","griffin-knights","griffin",["910062-1"],1],"fig-017917":["Dwarf","","civil",["910062-1"],1],"fig-017918":["Horse Knight, Dark Orange Hair","horse-knights","horse",["910062-1"],1],"fig-017919":["Horse Knight, Black Hair","horse-knights","horse",["910062-1"],1],"fig-017935":["Dwarf, Dark Brown Beard, Reddish Brown Helmet, Cheek Lines","fantasy-era","dwarf",["7036-1"],0],"fig-017956":["Dragon Knight, Red, Helmet, Beard, Silver Belt","castle-2013","red-dragon",["70402-1"],1],"fig-017958":["Griffin Knight, Female, Dark Blue Arms","griffin-knights","griffin",["40912-1"],1],"fig-017959":["Griffin Knight, Male, Dark Blue Arms","griffin-knights","griffin",["40912-1"],1],"fig-018056":["Knight (Royal Knights) - Black Legs, Red Helmet","royal-knights","royal",["9376-1"],0],"fig-018225":["Snake, Black Armor, Neck Armor, Helmet with Yellow Plume, Beard","serpent-knights","serpent",["910064-1"],0],"fig-018226":["Snake, Black Armor, Neck Armor, Black Hair, Bandana","serpent-knights","serpent",["910064-1"],0],"fig-018227":["White King, Crown","horse-knights","horse",["910064-1"],0],"fig-018228":["White Knight, Helmet","horse-knights","horse",["910064-1"],0],"fig-018229":["Cook","","civil",["910064-1"],0],"fig-018230":["The Madam of the Keep","","civil",["910064-1"],0],"fig-018231":["The Clerk","","civil",["910064-1"],0],"fig-018232":["Snake, Black Armor, Hood, Quiver","serpent-knights","serpent",["910064-1"],0],"fig-018233":["Snake, Black Armor, Neck Armor, Dark Orange Hair, Bandana","serpent-knights","serpent",["910064-1"],0],"fig-018234":["Kraken Warrior, Black Hair","kraken-warriors","kraken",["910064-1"],0],"fig-018235":["Snake, Black Armor, Neck Armor, Black Helmet with Plume, Woman","serpent-knights","serpent",["910064-1"],0],"fig-018236":["Snake, Black Armor, Silver Neck Armor, Helmet","serpent-knights","serpent",["910064-1"],0],"fig-018237":["Snake, Black Armor, Katana Holder, Black Hair","serpent-knights","serpent",["910064-1"],0],"fig-018238":["Snake, Black Armor, Neck Armor, Black Helmet with Plume, Moustache","serpent-knights","serpent",["910064-1"],0],"fig-018239":["Snake, Black Armor, Neck Armor, Dark Bluish Gray Hair","serpent-knights","serpent",["910064-1"],0],"fig-018240":["Snake, Black Armor, Black Helmet with Plume, Black Goatee","serpent-knights","serpent",["910064-1"],0],"fig-018241":["Snake, Black Armor, Quiver, Reddish Brown Hair","serpent-knights","serpent",["910064-1"],0],"fig-018242":["Griffin Knight, Reddish Brown Hair","griffin-knights","griffin",["910064-1"],0],"fig-018243":["Snake, Black Armor, Black Hair, Moustache","serpent-knights","serpent",["910064-1"],0]};

/* ---------- ENGLISH CONTENT (overlay over the Czech data above) ---------- */
const ERAS_EN = {c:"Classic era (1978–1999)", s:"Story era (2000–2006)", f:"Fantasy & Kingdoms (2007–2014)", n:"Nostalgia revival (2016–today)"};
const FEN = {
 "klasicky-hrad":{alt:"The yellow castle",
  intro:"The beginning of the castle line. In 1978 owner Kjeld Kirk Kristiansen introduced a new business model and, with it, play themes as we know them today; one of the first was LEGOLAND Castle (later LEGO Castle). At first it had a single set – the yellow castle 375. A year later came 383 Knight's Tournament and 677 Knight's Procession. The name “Classic Castle” comes from fans.",
  heraldry:"Knights have movable visors with eye slits and wear a coat of arms on a tunic or breastplate, with several different crests, e.g. split red and white. Horses are built entirely from bricks because horse elements did not exist yet.",
  chars:["No named characters and no story."],
  rel:["No faction relationships – knights only meet in tournaments (383 Knight's Joust)."],
  hist:["1978: Castle is one of LEGO's first play themes; its only set is 375 (LEGO History).", "1978: the modern minifigure debuts in Castle, Space and Town; designed by Jens Nygaard Knudsen.", "1979: 383 Knight's Tournament and 677 Knight's Procession.", "1981: the yellow castle is sold in the US as 6075.", "2022: the Yellow Castle knight in Series 23 and a miniature 375 castle inside set 10305."]},
 "crusaders":{alt:"Lion Knights",
  intro:"The Lion Knights, named, as LEGO.com puts it, after their iconic shield insignia. They arrived officially in 1984 and their empire stretched across blacksmiths, armouries and royal escorts; they owned the largest castle of the time (6080), which could be expanded with sets like 6067 Guarded Inn. According to LEGO History, they and the Black Falcons were the biggest factions of the new castle generation. The 1992 US and Canadian catalogue called them Crusaders; LEGO today uses Lion Knights.",
  heraldry:"A blue, red and yellow shield with a rampant lion on a contrasting field (LEGO.com). Red torsos with blue sleeves, grey helmets; some torsos show crossed axes.",
  chars:["No names in the classic era – only “the King” in set titles.","King Leo and Cedric the Bull belong to Knights' Kingdom (2000), not here."],
  rel:["Arch-enemies of the Black Falcons – LEGO.com describes them as “ready to attack the Black Falcons”.", "According to the fan legend retold on LEGO.com, after the Black Falcons' defeat the Black Knight fled and founded the Black Knights.", "According to the legend (LEGO.com), King Lionheart renamed the faction Royal Knights in 1995 and updated the crest.", "Conflict with the Forestmen – read from set scenes (e.g. 6042).", "Reconciled with the Black Falcons: the 10305 box (2022) says the long rivalry “seems to be ending”."],
  hist:["1984: a new castle generation with one-piece horses, saddles, fixed-visor helmets, plumes, flags and bows (LEGO History); 6080 King's Castle.", "1986: 6067 Guarded Inn and 6041 Armor Shop with civilians; Guarded Inn was re-released in 2001 as 10000.", "1990: 6081 King's Mountain Fortress with a raised baseplate.", "2022: 10305 Lion Knights' Castle for LEGO's 90th anniversary.", "2024–2025: a Lion Knight guards the village in 10332, and the faction appears in BrickLink Designer Program sets."]},
 "black-falcons":{alt:"House of Black Falcon",
  intro:"The second big faction of 1984. LEGO.com introduces it as what fans believed was a more sinister faction, led by the mighty Black Knight – the perfect rival for ongoing skirmishes with the Lion Knights. Fans think they disappeared for a while after the Lion Knights' attack in 6062 Battering Ram (1987); they returned in LEGO Ideas 21325 Medieval Blacksmith and have appeared in sets ever since. Regional names: Eagle Crest (Australia, Canada); the 10305 instructions say “House of Black Falcon”.",
  heraldry:"A falcon in flight with outstretched wings on a split black-and-white, later silver, field (LEGO.com). Blue torso with black sleeves, black helmets and legs.",
  chars:["The Black Knight – leader of the faction according to LEGO.com.", "Otherwise nameless knights and soldiers."],
  rel:["Rivals of the Lion Knights – LEGO.com speaks of ongoing skirmishes.", "According to fan legend (LEGO.com), their leader fled to his ancestral home after defeat and founded the Black Knights.", "Besiege the Black Knights in 6059; the Black Knights sail against them in 6057.", "2022: the 10305 box – the rivalry with the Lion Knights ends and the falcons arrive as friends."],
  hist:["1984: 6073 Knight's Castle.", "1986: 6074 Black Falcon's Fortress with printed Tudor-style wattle-and-daub panels (LEGO.com); reissued in 2002 as 10039.", "1987: the Lion Knights attack in 6062 Battering Ram.", "2021–2025: return in 21325, 31120, 10305 and four BrickLink Designer Program sets.", "2023: the Falconer minifigure in Series 24."]},
 "forestmen":{alt:"Forest People",
  intro:"The Forest People, believed by LEGO.com to be inspired by the legend of Robin Hood, arrived in 1987 as the first group living outside castle walls. LEGO History describes them as outlaws with hideouts built into hollow trees and rocks – a merry band of skilled archers who enjoy good food and good times. A similar group returned in 1996 as Dark Forest; set 10305 calls them Forest Guardians.",
  heraldry:"Green trousers, green hats and tunics in various colours to blend into the woods; crossbow in hand (LEGO.com). A stag emblem from 1988.",
  chars:["Robin Hood – the leader, named in LEGO catalogues and a commercial (via Brickipedia)."],
  rel:["Their opponents are the Wolfpack – robbers introduced in 1992 (LEGO History).", "A Black Knight captures Robin Hood in a LEGO commercial; catalogues show them besieging Black Knights castles.", "Antagonists of the Lion Knights – read from set scenes.", "The 10305 box: the “Forest Guardians” live in a hideout under the castle; in the set a trapdoor sends them to the dungeon.", "Successor: Dark Forest (1996)."],
  hist:["1987: 6066 Camouflaged Outpost.", "1988: 6054 Forestmen's Hideout.", "2010: the Forestman in Collectible Minifigures Series 1.", "2022: gift 40567 Forest Hideout and three Forest People in 10305.", "2025: nine Forestmen in BDP 910043 Forest Stronghold."]},
 "black-knights":{alt:"Dragon crest knights",
  intro:"According to the fan legend told on LEGO.com, after the Black Falcons' defeat the Black Knight escaped to his ancestral home and founded the Black Knights. They first appeared in 6085 Black Monarch's Castle (1988) and continued in sets like 6057 Sea Serpent and 6086 Black Knight's Castle.",
  heraldry:"Unmarked armour; only the blue dragon on their shields and horse barding identifies them (LEGO.com). Black castles.",
  chars:["No names; “Black Monarch” appears only in set titles."],
  rel:["Successors of the Black Falcons according to the legend on LEGO.com.", "Hunt the Wolfpack – a prisoner in 6086, an attack in 6057.", "From 1993 they fear the Dragon Masters' dragons (LEGO.com: their roars sent even the bravest knights running).", "Capture Robin Hood (Forestmen) in a LEGO commercial.", "Fight the Lion Knights in the 1992 UK adverts."],
  hist:["1988: 6085 Black Monarch's Castle.", "1992: 6086 Black Knight's Castle and 6057 Sea Serpent.", "2026: gift 40912 Sea Serpent, a new version of 6057 based on the winning entry of the LEGO Ideas contest “A Twist of Nostalgia”."]},
 "wolfpack":{alt:"The bandits",
  intro:"The Wolfpack came howling in 1992. LEGO.com describes them as cold-hearted ruffians who steal, sabotage and trade in information, thriving in the shadows where others fear to tread; LEGO History calls them robbers and bad guys. Their base was 6075 Wolfpack Tower. They were the first faction figures with more than the standard smiley face – eye patches, moustaches and even stubble.",
  heraldry:"Shields bearing a silver wolf's head on black (LEGO.com).",
  chars:["No names."],
  rel:["Opponents of the Forestmen (LEGO History).", "Legend has them sneaking around 6086 Black Knight's Castle and 6082 Fire Breathing Fortress (LEGO.com).", "Enemies of the Black Knights (a prisoner in 6086, an attack in 6057)."],
  hist:["1992: 6038 Wolfpack Renegades and 6075 Wolfpack Tower; the same year castle figures first get printed faces.", "2024: a Wolfpack outlaw in 10332 Medieval Town Square.", "2025: Wolfpack Beastmaster (Series 27) and BDP 910057 Outlaw Forest Den."]},
 "dragon-masters":{alt:"Dragon Knights (Europe)",
  intro:"Everything changed in 1993, says LEGO.com: the Dragon Knights arrived (also known as Dragon Masters), led by the cunning wizard Majisto and Dragon Master Burnabus – and they had what the other groups could only dream of, real dragons. LEGO History notes that this moved the castle line into the realms of fantasy; the army was a small regiment of knights and guards.",
  heraldry:"Green and red dragons on a yellow field; a flying dragon or a dragon's head on torsos; dragons even decorate the structure of 1906 Majisto's Tower (LEGO.com).",
  chars:["Majisto – wizard with a pointed hat, glow-in-the-dark wand and long white beard; the first Castle minifigure with a proper name and one of the first named minifigures at all (LEGO History).", "Burnabus – the Dragon Master (LEGO.com)."],
  rel:["Fans believe their dragons sent even the Black Knights running (LEGO.com).", "Legend has the Wolfpack sneaking around their fortress 6082.", "In 1995 they got a new foe – the Royal Knights (LEGO.com)."],
  hist:["1993: 6082 Fire Breathing Fortress, 6048 Majisto's Magical Workshop, 6076 Dark Dragon's Den.", "1994: 1906 Majisto's Tower.", "2022: Majisto in 10305 Lion Knights' Castle.", "2023: gift 40601 Majisto's Magical Workshop, 30 years after the original 6048."]},
 "royal-knights":{alt:"The crowned lion",
  intro:"The Royal Knights arrived in 1995 as a new foe of the Dragon Masters. According to the legend on LEGO.com, King Lionheart renamed his Lion faction and updated its coat of arms. They resided in 6090 Royal Knight's Castle, which brought the first shiny chrome crown and swords; LEGO History states that the first royal minifigure with a crown came out in 1995. Skeletons also first appear in their sets.",
  heraldry:"A golden lion's head wearing a crown on a vertically divided white-and-red field (LEGO.com).",
  chars:["King Lionheart – per the legend on LEGO.com; his chrome sword “Lion Heart” is said to defeat a dragon with a single strike.", "Royal King – minifigure in 6008."],
  rel:["Successors of the Lion Knights – the faction was renamed according to the legend (LEGO.com).", "Enemies of the Dragon Masters (LEGO.com, 1995 catalogue).", "Attacked by Dark Forest (1996 catalogue).", "From 1997 enemies of the Fright Knights; Willa the Witch captures the King (LEGO Mania comic)."],
  hist:["1995: 6090 Royal Knight's Castle with the first chrome crown and swords.", "2006: 10176 King's Castle – a recreation of 6090 and 6091."]},
 "dark-forest":{alt:"Forest outlaws",
  intro:"A short return of the forest outlaws, released only in North America. Wikipedia calls them “an amoral band of forest outlaws”. Three sets.",
  heraldry:"Reuses the Forestmen crest, green tunics.",
  chars:["“Rob N. Hood” – a name found only in a Brickipedia table, uncertain."],
  rel:["Attack the Royal Knights (1996 catalogue).","Follow on from the Forestmen."],
  hist:["1996: 6079 Dark Forest Fortress as the flagship set."]},
 "fright-knights":{alt:"The bat lord's army",
  intro:"According to LEGO.com, the classic castle era ended in 1997 with the Fright Knights in grey, black and red armour. They were ruled not by a king but by Basil the Bat Lord and worked from the trap-laden 6097 Night Lord's Castle. Rumour has it that Willa the Witch, with her flying machines and crystal balls, was the real power behind them.",
  heraldry:"A black bat with outstretched wings on the shield; grey, black and red armour (LEGO.com).",
  chars:["Basil the Bat Lord – ruler of the faction.", "Willa the Witch – the dark sorceress; rumoured to be the real power behind the Fright Knights (LEGO.com)."],
  rel:["Enemies of the Royal Knights; Willa captures the King.", "Regional contradiction: in the US Basil and Willa are allies, in European material they stand against each other."],
  hist:["1997: 6097 Night Lord's Castle and 6087 Witch's Magic Manor.", "2019: Fright Knight in Series 19.", "2024: Vampire Knight in Series 25."]},
 "ninja":{alt:"Feudal Japan",
  intro:"Feudal Japan in orange Castle-line boxes. LEGO never officially sold Ninja as part of Castle, but Brickset files it there. Unrelated to the later Ninjago.",
  heraldry:"Japanese motifs; the emperor's symbol on 3052.",
  chars:["Shogun Gi-Dan and the samurai","Grey Ninja Ito","Bandit chief Kendo","Dark Ninja Bonsai","Ninja Princess, Ninja Master, the Emperor"],
  rel:["The Shogun and the grey ninjas against the bandits (Kendo, Bonsai) – the club magazine story.","The red ninjas' role differs: in the US they defy the Emperor, in the sets and the 1999 UK advert they serve him."],
  hist:["1998: 6083 Samurai Stronghold, 6093 Flying Ninja Fortress.","1999: 3053 Emperor's Stronghold."]},
 "knights-kingdom":{alt:"Lions vs. Bulls",
  intro:"According to LEGO History, in 2000 King Leo leads the knights against an army of bandits under Cedric the Bull. The King's followers live in a castle, the Bulls in the Dark Forest. It was the first castle line with a complete royal family: King Leo, Queen Leonora, Prince Edward and Princess Storm. A PC game, LEGO Creator: Knights' Kingdom, also came out.",
  heraldry:"Lions: a lion's head (similar to the Royal Knights). Bulls: a bull's head.",
  chars:["King Leo, Queen Leonora, Prince Edward, Princess Storm (LEGO History)", "Richard the Strong, John of Mayne (Lions)", "Cedric the Bull, Gilbert the Bad, Weezil (Bulls)"],
  rel:["King Leo's Lions against Cedric's Bulls."],
  hist:["2000: all sets per Brickset; the castle 6091 King Leo's Castle (529 pieces), also sold as 6098."]},
 "knights-kingdom-2":{alt:"The knights of Morcia",
  intro:"A relaunch with colourful knights of the kingdom of Morcia, each with a name and personality, battling the evil knight Vladek. LEGO History calls it a radical departure from previous castle lines – more action-oriented, with near-superhero abilities. Buildable action figures and minifigures, a trading card game, books and a Game Boy Advance game.",
  heraldry:"Each knight has a colour and an animal: Jayko – light blue, hawk; Santis – red, bear; Rascus – green, monkey; Danju – purple, wolf; King Mathias – gold, lion. Vladek – black, scorpion.",
  chars:["King Mathias, later King Jayko","Knights Jayko, Santis, Rascus, Danju; from 2006 Sir Kentis and Sir Adric","Vladek (Lord Vladek) and the Shadow Knights; in 2006 the Rogue Knights Dracus and Karzon"],
  rel:["The knights of Morcia against Vladek and his Shadow / Rogue Knights."],
  hist:["2004: Vladek, King Mathias's adviser, imprisons the king and uses the Book of Morcia to turn knights into Shadow Knights. The four heroes free the king.","2005: Vladek flees to the lost kingdom of Ankoria and builds the Vladmask; Jayko destroys it.","2006: King Jayko, Adric and Kentis race the Rogue Knights to the Mistlands Tower; Vladek is sealed in a crystal.","(Story as retold by Brickipedia from the official comics and website.)"]},
 "vikingove":{alt:"Norse warriors",
  intro:"A separate theme close to the castle line: Viking warriors fight monsters from Norse mythology. Planned for one year, it got a second. No named characters.",
  heraldry:"New Viking helmets, decorated shields, dragon-head prows.",
  chars:["Viking warriors (unnamed)","Monsters: Fenris Wolf, wyvern, Nidhogg, Midgard Serpent, Fafnir, Ofnir"],
  rel:["Vikings against the monsters – no links to other factions."],
  hist:["2005: 7019 Viking Fortress against the Fafnir Dragon.","2022: 31132 Viking Ship and the Midgard Serpent (Creator 3in1).","2023: 21343 Viking Village (LEGO Ideas)."]},
 "fantasy-era":{alt:"Crown Knights, skeletons, trolls and dwarves",
  intro:"The Castle name returned in 2007. According to LEGO History it goes back to a traditional medieval setting, repeats fantasy elements such as dragons and sorcerers and adds new ones: skeleton warriors, trolls and dwarves. A single human kingdom fights non-human enemies – an evil wizard's skeletons in 2007, trolls from 2008.",
  heraldry:"Crown Knights: a crown; dark blue, light blue, gold. Skeletons: a skull; dark red and black. Dwarves: a king with a golden winged helmet.",
  chars:["King, Queen, Princess, the gold Champion knight, the court wizard, the jester","The evil wizard / necromancer, skeletons, the reaper","Troll King, Troll Sorceress, giant trolls","The Dwarf King"],
  rel:["Crown Knights against the skeletons (2007).","Crown Knights and dwarves against the trolls (2008–2009).","A dwarf–Crown Knight alliance – some dwarves wear the crown."],
  hist:["2007: 7094 King's Castle Siege.","2009: 7097 Trolls' Mountain Fortress and 10193 Medieval Market Village (1,601 pieces) – the basis for 10332 in 2024."]},
 "kingdoms":{alt:"Lion vs. Dragon",
  intro:"A realistic European Middle Ages with villagers and townsfolk. According to LEGO History it is two human kingdoms at war: the Lion Kingdom led by the Lion King, and the Dragon Kingdom, whose leader is unknown although sometimes implied to be a wizard. Firsts: back-printed minifigure torsos, a portcullis piece, goats.",
  heraldry:"Lion Knights: a rampant lion, red. Dragon Knights: a dragon, green.",
  chars:["King, Queen, Princess Verda, the Lion Prince","Dragon Knights – leader unknown, sometimes implied to be the Dragon Wizard"],
  rel:["War between two human kingdoms.","10223 includes a knight with a falcon – a nod to the Black Falcons, not confirmed by LEGO."],
  hist:["2010: 7946 King's Castle.","2012: 10223 Kingdoms Joust (1,575 pieces) closes the line; The Lord of the Rings follows."]},
 "castle-2013":{alt:"King's Knights vs. Dragon Knights",
  intro:"The last standalone castle line so far: according to LEGO History it combines historical and fantasy elements of its predecessors. Five sets and two battle packs – the King's lion army against the soldiers of the Dragon Wizard, who command a large dragon.",
  heraldry:"King's Knights: blue and gold, a crown on the torso, a lion on shields. Dragon Knights: red and black.",
  chars:["The King, the Princess, the Dragon Wizard"],
  rel:["The King's Knights against the Dragon Knights."],
  hist:["2013: 70404 King's Castle (996 pieces).", "2014: two battle packs (850888, 850889).", "2016: NEXO Knights – per LEGO History a castle line with more focus on storytelling and digital play; not covered on this site."]},
 "horse-knights":{alt:"The horse crest knights",
  intro:"The newest royal faction, introduced in 2025 in the Creator 3in1 set 31168 Medieval Horse Knight Castle. Knights in white surcoats with a blue-and-gold horse crest have their own king, champion, spearman and archer. According to the German site Promobricks, the 2025 Creator wave brings a castle “with two new factions at once”. The name Horse Knights is used by the BrickLink catalogue; whether LEGO uses it too is not verified.",
  heraldry:"A white surcoat with a blue and gold horse shield, silver chain mail, a belt with a horseshoe motif. The king wears a blue cape and a gold crown.",
  chars:["Horse Knight King – crowned, with a blue cape","Horse Knight Champion – pointed visor and a red plume","A spearman and an archer (with a blue hood)"],
  rel:["In 31168 they meet a single Serpent Knight; the set has a tournament ground and a spectator stand, so this looks like a tournament rivalry rather than a war. An interpretation, not an official story.","They appear with Griffin Knights and Kraken Warriors in BDP 910062 Alchemist's Shop and 910070 Sleepy Dragon Inn."],
  hist:["2025: debut in 31168 Medieval Horse Knight Castle (designer Jonathan Robson) – king, champion, knight and archer.", "2026: two Horse Knights in BDP 910062 Alchemist's Shop and the White King with a knight in 910064 Dustmark Keep.", "2027: announced in BDP 910070 Sleepy Dragon Inn."]},
 "serpent-knights":{alt:"The black knight",
  intro:"Knights in black armour with yellow plumes. A single one first appeared in set 31168, where reviewers describe him as a “guest” among the Horse Knights. They got a full army in 2026 in the BrickLink Designer Program: according to the Rebrickable inventory, the keep 910064 Dustmark Keep contains twelve serpent warriors (catalogued as “Snake”) – archers, katana fighters and commanders. The name Serpent Knights comes from the BrickLink catalogue; an official LEGO name is not documented yet.",
  heraldry:"Black armour with silver neck guards, yellow plumes on black helmets, black capes; the 31168 figure has dark purple stripes and silver diamonds.",
  chars:["Serpent Knight – tournament rival in 31168", "Twelve serpent warriors in 910064 Dustmark Keep (archers, fighters, plumed commanders)"],
  rel:["A tournament rival of the Horse Knights in 31168 – read from the set's contents.", "In 910064 Dustmark Keep twelve serpent warriors face two Horse Knights, two Griffin Knights and one Kraken Warrior (Rebrickable inventory); the set's story is not known yet."],
  hist:["2025: first figure in 31168 Medieval Horse Knight Castle.", "2026: an army of twelve serpent warriors in BDP 910064 Dustmark Keep."]},
 "griffin-knights":{alt:"The griffin crest knights",
  intro:"Knights in silver armour over dark red robes with a griffin shield. They first appeared in LEGO Ideas 21358 Minifigure Vending Machine (2025). According to a Brickset review, this faction and the Kraken Warriors were chosen by fans in a LEGO Ideas poll. They return in BrickLink Designer Program sets.",
  heraldry:"A white-and-silver griffin on dark red with a gold border; silver armour, dark red sleeves, gold gloves.",
  chars:["Griffin Knight – male and female (21358)","Griffin Knight with a shoulder plate (910062)"],
  rel:["Created together with the Kraken Warriors (21358); no official relationship has been described yet.","Together with Horse Knights and Kraken Warriors in 910062 and 910070."],
  hist:["2025: debut in 21358 Minifigure Vending Machine (LEGO Ideas No. 66).", "2026: BDP 910062 Alchemist's Shop, two Griffin Knights in 910064 Dustmark Keep and two in a dark blue variant aboard the ship 40912 Sea Serpent.", "2027: announced in BDP 910070 Sleepy Dragon Inn."]},
 "kraken-warriors":{alt:"Sea raiders",
  intro:"Sea raiders in dark green and turquoise with a kraken on the chest and on round shields. They debuted in 21358 Minifigure Vending Machine (2025) and have since appeared in BrickLink Designer Program sets, always as a single warrior. Eye patches and bandanas hint at a raider character.",
  heraldry:"A yellowish-green kraken on a dark green breastplate and in a dark turquoise circle on the shield; a brown helmet with cheek guards, a dark green bandana.",
  chars:["Kraken Warrior – a man with an eye patch and a woman (21358)","Kraken Bandit (910062)"],
  rel:["Created together with the Griffin Knights (21358); no official relationship described yet.","A raider character (Kraken Bandit, eye patch) – read from the figures."],
  hist:["2025: debut in 21358 Minifigure Vending Machine.", "2026: one warrior each in BDP 910062 Alchemist's Shop and 910064 Dustmark Keep.", "2027: announced in BDP 910070 Sleepy Dragon Inn."]},
};
const NOTE_EN = {
 "10305":"Retired 31 Dec 2025; LEGO 90th anniversary","10332":"Retired 31 Dec 2025","21325":"Retired 31 Dec 2023","21343":"Retired 31 Dec 2025",
 "21348":"Fantasy, not Castle; retired 31 Jul 2026","21358":"16 figures from LEGO history",
 "31120":"Retired 31 Dec 2024","31132":"Retired 31 Dec 2023","31161":"Medieval dragon, no faction","31168":"€119.99 (Brickset)",
 "BL19001":"Designer Raziel_Regulus; limited edition","910001":"Limited edition, sold out","910029":"Limited edition, sold out","910043":"Limited edition, sold out",
 "910045":"Limited edition, sold out","910047":"Limited edition, sold out","910048":"Medieval, no faction","910057":"Limited edition, sold out",
 "910062":"Limited edition, sold out","910064":"Limited edition, sold out","910070":"Pre-orders 6–12 Oct 2026, shipping from March 2027",
 "40567":"Remake of 6054; 90th anniversary","40601":"Remake of 6048; 11/2023 and 9/2024","40912":"Insiders Days 7/2026; remake of 6057","40952":"Sold only at LEGOLAND",
 "71048-2":"Brickset: 1 Jan–30 Apr 2025"
};
const MF_EN = {cas002:"Knight with red/grey shield",cas088s:"Yellow Castle knight (stickers)",cas112:"Crusader Lion – lion crest",cas105:"Crusader Axe – crossed axes",
 cas101a:"Black Falcon with shield (vintage)",cas253:"Black Falcon, pointed shield",cas137:"Forestman, green hat",cas126:"Forestman with pouch",
 cas141:"Black Knights – scale mail, blue",cas149:"Black Knights – scale mail, red",cas251:"Wolfpack, eye patch",cas252:"Wolfpack, moustache",
 cas001:"Dragon Master with yellow plumes",cas013:"Dragon Knight",cas061:"Royal Knights – knight",cas060:"Royal Knights – king",
 cas004:"Dark Forest – forestman 1",cas006:"Dark Forest – forestman 2",cas026:"Fright Knights – knight",cas022:"Basil the Bat Lord",
 cas056:"Shogun in armour",cas055:"Samurai",cas035:"King Leo",cas046:"Cedric the Bull",cas265:"Jayko",cas256:"Shadow Knight Vladek",
 "https://images.brickset.com/minifigs/large/vik015.jpg":"Viking warrior 1a","https://images.brickset.com/minifigs/large/vik001.jpg":"Viking warrior 1d",
 cas366:"Crown Knight",cas330:"Skeleton warrior",cas445:"Lion Knight",cas455:"Dragon Knight",cas516:"King's Knight with crown",cas522:"Dragon Knight with dragon shield",
 cas592:"Horse Knight – king",cas590:"Horse Knight – champion",cas591:"Horse Knight – spearman",bdp355:"Horse Knight (910062)",cas593:"Serpent Knight",idea232:"Griffin Knight – male",idea236:"Griffin Knight – female",bdp353:"Griffin Knight (910062)",idea229:"Kraken Warrior – male",idea234:"Kraken Warrior – female",bdp351:"Kraken Bandit (910062)"};

/* ================== JAZYK / LANGUAGE ================== */
// Výchozí jazyk určuje nasazená stránka (window.CASTLE_LANG); v náhledu přepíná na místě.
let LANG = (window.CASTLE_LANG==="en") ? "en" : "cs";
const PATHS = {cs:"/bricks/cs/castle/", en:"/bricks/castle/"};
const DEPLOYED = /\/bricks\/(cs\/)?castle\//.test(location.pathname);

/* ================== OBCHODY / SHOPS ==================
   Partnerské (affiliate) odkazy. Prázdná hodnota = běžný odkaz bez provize.
   Šablony obsahují {url} (cílová adresa, zakóduje se) nebo {q} (hledaný text).
   Příklady šablon najdete v README. */
const AFF = {
  lego_cs: "",        // např. "https://click.linksynergy.com/deeplink?id=VASE_ID&mid=ID_PROGRAMU&murl={url}"
  lego_en: "",
  alza: "",           // např. šablona z partnerského programu Alza s {url}
  ebay_campid: "",    // eBay Partner Network – Campaign ID
  amazon_tag: ""      // Amazon Associates – Tracking ID (např. vinmat-20); prázdné = Amazon se nezobrazí
};
const LEGO_EN_LOCALE = "en-us";

/* ================== PATIČKA / FOOTER ================== */
const CONTACT = "vinmat.sn@gmail.com";
const wrapAff = (tpl,url) => tpl ? tpl.replace("{url}",encodeURIComponent(url)) : url;
const slugOf = m => m && m.url && m.url.includes("/product/") ? m.url.split("/product/")[1] : null;
function legoUrl(m,lang){
  const slug=slugOf(m), loc = lang==="cs" ? "cs-cz" : LEGO_EN_LOCALE;
  return slug ? `https://www.lego.com/${loc}/product/${slug}` : `https://www.lego.com/${loc}/search?q=${encodeURIComponent(disp(m.n))}`;
}
const q = m => encodeURIComponent("LEGO "+disp(m.n));
const SHOPS = {
  cs: [
    {label:"LEGO.cz", onSale:true, url:m=>wrapAff(AFF.lego_cs, legoUrl(m,"cs"))},
    {label:"Alza",    onSale:true, url:m=>wrapAff(AFF.alza, `https://www.alza.cz/search.htm?exps=${q(m)}`)}
  ],
  en: [
    {label:"LEGO.com", onSale:true, url:m=>wrapAff(AFF.lego_en, legoUrl(m,"en"))},
    {label:"eBay",     onSale:false, url:m=>`https://www.ebay.com/sch/i.html?_nkw=${q(m)}`+(AFF.ebay_campid?`&mkcid=1&mkrid=711-53200-19255-0&siteid=0&campid=${AFF.ebay_campid}&toolid=10001&mkevt=1`:"")},
    {label:"Amazon",   onSale:true, hide:()=>!AFF.amazon_tag, url:m=>`https://www.amazon.com/s?k=${q(m)}&tag=${AFF.amazon_tag}`}
  ]
};
const anyAff = () => Object.values(AFF).some(Boolean);
// které obchody u setu ukázat: sety v prodeji všechny, vyřazené jen ty pro bazar (eBay)
function shopsFor(m){
  if(m.st==="lim"||m.st==="soon") return [];
  return SHOPS[LANG].filter(s=>!(s.hide&&s.hide())).filter(s=>m.st==="on" || !s.onSale);
}

/* ================== TEXTY UI ================== */
const UI = {
 cs:{brand:"Hradní kronika", tagline:"Neoficiální průvodce řadou LEGO® Castle 1978–2026", title:"Hradní kronika",
  nav:[["uvod","Úvod"],["diagram","Diagram vztahů"],["v-prodeji","Teď v prodeji"],["nedavno-vyrazeno","Nedávno vyřazeno"],["brzy","Již brzy"],["zdroje","Zdroje"]],
  factions:"Frakce", returnNav:"Návrat klasiky",
  foot:"LEGO® je ochranná známka skupiny LEGO, která tento web nesponzoruje, neschvaluje ani nepodporuje. Fotky setů a figurek: Brickset, BrickLink.",
  affNote:"Odkazy na obchody jsou partnerské: při nákupu můžeme získat malou provizi, cena pro vás zůstává stejná.",
  onSale:"● v prodeji", lim:"◐ jiný kanál", off:"○ vyřazeno", pieces:"dílků", none:"Žádné sety v této kategorii.",
  tags:{off:"oficiální",fan:"fanouškovské",unc:"nejisté"},
  type:{re:"Reedice",icons:"LEGO Icons",ideas:"LEGO Ideas",creator:"Creator 3 v 1",bdp:"BrickLink DP",gwp:"Dárek k nákupu",cmf:"Minifigurka"},
  retired:"Vyřazeno", soldOutTmp:"Na lego.cz dočasně vyprodáno"},
 en:{brand:"Castle Chronicle", tagline:"An unofficial guide to the LEGO® Castle theme 1978–2026", title:"Castle Chronicle",
  nav:[["uvod","Home"],["diagram","Faction map"],["v-prodeji","On sale now"],["nedavno-vyrazeno","Recently retired"],["brzy","Coming soon"],["zdroje","Sources"]],
  factions:"Factions", returnNav:"The classics return",
  foot:"LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize or endorse this site. Set and minifigure photos: Brickset, BrickLink.",
  affNote:"Shop links are affiliate links: we may earn a small commission on purchases at no extra cost to you.",
  onSale:"● on sale", lim:"◐ other channel", off:"○ retired", pieces:"pieces", none:"No sets in this category.",
  tags:{off:"official",fan:"fan reading",unc:"uncertain"},
  type:{re:"Reissue",icons:"LEGO Icons",ideas:"LEGO Ideas",creator:"Creator 3in1",bdp:"BrickLink DP",gwp:"Gift with purchase",cmf:"Minifigure"},
  retired:"Retired", soldOutTmp:"Temporarily sold out on LEGO.com"}
};
const t = k => UI[LANG][k];
const fmtNum = n => n.toLocaleString(LANG==="cs"?"cs-CZ":"en-US");

// překlad drobných českých přípon v názvech a řadách setů
function trName(s){
  if(LANG==="cs") return s;
  return s.replace(/Minifigurky série (\d+)/,"Minifigures Series $1").replace("(reedice)","(reissue)").replace("(figurky)","(minifigures)")
   .replace("US verze","US version of").replace("odkazy na žlutý hrad","Yellow Castle references").replace("s Wolfpack","with Wolfpack")
   .replace("Akční figurky 2006","Action figures 2006").replace("Akční figurky 2004–2005","Action figures 2004–2005").replace(/remake/,"remake");
}
function trLine(s){
  if(LANG==="cs"||!s) return s;
  return s.replace("Creator 3 v 1","Creator 3in1").replace("série","Series").replace("Dárek k nákupu","Gift with purchase")
   .replace("Jen v parcích LEGOLAND","LEGOLAND parks only").replace("Sběratelské minifigurky","Collectible Minifigures")
   .replace("Reedice","Reissue").replace("Minifigurka","Minifigure");
}
// texty frakce v aktuálním jazyce
function fx(f,key){
  if(LANG==="en"){ const e=FEN[f.id]||{}; if(key==="alt") return e.alt||f.cz; if(key==="name") return e.en||f.en; if(e[key]!==undefined) return e[key]; }
  if(key==="alt") return f.cz; if(key==="name") return f.en;
  if(key==="rel") return f.rel.map(r=>r[0]);
  return f[key];
}
const eraName = k => (LANG==="en"?ERAS_EN:ERAS)[k];
const noteOf = m => LANG==="en" ? (m.noteEn || (m.retiredOn?`${t("retired")} ${m.retiredOn}`:"") || NOTE_EN[m.n] || "") : (m.retiredOn?`${t("retired")} ${m.retiredOn}`:m.note||"");

/* ================== POMOCNÉ ================== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fById = id => F.find(f=>f.id===id);
const bs = n => `https://brickset.com/sets/${sid(n)}`;
const IMGFAIL = `onerror="if(this.dataset.fb){this.src=this.dataset.fb;this.dataset.fb=''}else{this.parentNode.classList.add('noimg');this.remove()}"`;
// fotky: na vinmat.eu lokální kopie (katalog), jinak Brickset / Rebrickable
const CAT_BASE = DEPLOYED ? "/bricks/cs/castle/assets/catalog/" : null;
/* místní kopie obrázků z BrickLinku, Bricksetu a Rebrickable (assets/ext, stahuje je akce „Stáhnout obrázky“);
   když kopie chybí, načte se originál */
const EXT_BASE = "/bricks/cs/castle/assets/ext/";
const EXT_RE = /(src|href)="(https:\/\/(img\.bricklink\.com|images\.brickset\.com|cdn\.rebrickable\.com)\/([^"]+))"/g;
const MIR = h => DEPLOYED ? h.replace(EXT_RE,(m,a,u,host,p)=>`${a}="${EXT_BASE}${host}/${p}" data-o="${u}"`) : h;
document.addEventListener("error", e => {
  const el=e.target; if(!el||!el.dataset||!el.dataset.o) return;
  const u=el.dataset.o; delete el.dataset.o; e.stopImmediatePropagation();
  el.setAttribute(el.tagName.toLowerCase()==="img"?"src":"href", u);
}, true);
function setImgAttrs(n){
  const id=sid(n), c=CAT_SETS[id];
  if(CAT_BASE && c && c[6]) return `src="${CAT_BASE}${id}.webp" data-fb="${setImg(n)}"`;
  return `src="${setImg(n)}" data-fb="https://cdn.rebrickable.com/media/sets/${id}.jpg"`;
}
function figImgAttrs(id){
  const c=CAT_FIGS[id], rb=`https://cdn.rebrickable.com/media/sets/${id}.jpg`;
  return CAT_BASE && c && c[4] ? `src="${CAT_BASE}${id}.webp" data-fb="${rb}"` : `src="${rb}"`;
}
const KIND = {cs:{"CMF":"Minifigurka","BDP":"BrickLink DP","Pick a Brick":"Pick a Brick","GWP":"Dárek k nákupu"},en:{"CMF":"Minifigure","BDP":"BrickLink DP","Pick a Brick":"Pick a Brick","GWP":"Gift with purchase"}};
const REL = `target="_blank" rel="noopener"`;
const RELAFF = `target="_blank" rel="sponsored noopener"`;
const tag = k => `<span class="tag ${k}">${t("tags")[k]}</span>`;
const stTxt = s => s==="soon"?`<span class="st lim">${LANG==="cs"?"◇ již brzy":"◇ coming soon"}</span>`:s==="on"?`<span class="st on">${t("onSale")}</span>`:s==="lim"?`<span class="st lim">${t("lim")}</span>`:`<span class="st off">${t("off")}</span>`;
let shieldSeq=0;
function shield(sh,size=40){
  const id="s"+(shieldSeq++);
  const path="M4 3 H44 V24 C44 40 34 50 24 55 C14 50 4 40 4 24 Z";
  let fill = (sh.p==="pale"&&sh.f.length>1) ? `<rect x="0" y="0" width="24" height="60" fill="${sh.f[0]}"/><rect x="24" y="0" width="24" height="60" fill="${sh.f[1]}"/>` : `<rect x="0" y="0" width="48" height="60" fill="${sh.f[0]}"/>`;
  const charge=sh.c?`<path d="M24 16 L32 27 L24 40 L16 27 Z" fill="${sh.c}" stroke="#00000033" stroke-width="1"/>`:"";
  const bord=sh.b?`<path d="${path}" fill="none" stroke="${sh.b}" stroke-width="7" clip-path="url(#${id})"/>`:"";
  return `<svg width="${size*0.8}" height="${size}" viewBox="0 0 48 60" aria-hidden="true"><defs><clipPath id="${id}"><path d="${path}"/></clipPath></defs><g clip-path="url(#${id})">${fill}${charge}</g>${bord}<path d="${path}" fill="none" stroke="currentColor" stroke-opacity=".55" stroke-width="2"/></svg>`;
}
function mini(f,h=30){
  const m=(MF[f.id]||[])[0];
  return `<span class="mini" style="height:${h}px">${m?`<img src="${mfUrl(m[0])}" alt="" style="height:${h}px" onerror="this.nextElementSibling.hidden=false;this.remove()">`:""}<span ${m?"hidden":""}>${shield(f.sh,h)}</span></span>`;
}
const nameOf = m => LANG==="cs" && CZNAME[disp(m.n)] ? CZNAME[disp(m.n)] : trName(m.name);
const subName = m => LANG==="cs" && CZNAME[disp(m.n)] ? `<span class="tnote">${esc(m.name)}</span>` : "";
const linkFactions = ids => ids.map(id=>`<a href="#${id}">${esc(fx(fById(id),"name"))}</a>`).join(", ");


/* ================== ERBY – FOTKY ORIGINÁLNÍCH ŠTÍTŮ ==================
   Číslo dílu a barva podle katalogu BrickLink (najdete v inventáři minifigurky, např. cas101a → Inventory).
   Formát "dil/barvaID", např. "3846p45/1" (1 = White, 11 = Black, 59 = Dark Red, 80 = Dark Green, 9 = Light Gray).
   Prázdné = zobrazí se zjednodušený kreslený štít. Když se fotka nenačte, také se použije kreslený štít. */
const SHIELD_PARTS = {   // zdroj: rešerše v katalogu BrickLink (ChatGPT), 30. 10. 2026
  "klasicky-hrad": "3846p47/9",
  "crusaders": "3846p4h/9",
  "black-falcons": "3846p46/9",
  "forestmen": "3846p48/8",
  "black-knights": "3846px10/9",
  "wolfpack": "3846p44/9",
  "dragon-masters": "2586p4b/9",
  "royal-knights": "3846p4d/1",
  "dark-forest": "3846p48/8",
  "fright-knights": "3846px7/9",
  "ninja": "2335px1/11",
  "knights-kingdom": "3846px5/9",
  "knights-kingdom-2": "48494pb03/99",
  "vikingove": "3960pb014/2",
  "fantasy-era": "3846pb024/86",
  "kingdoms": "3846pb027/86",
  "castle-2013": "3846pb036/86",
  "horse-knights": "3846pb079/86",
  "serpent-knights": "4972pb04/95",
  "griffin-knights": "4972pb02/95",
  "kraken-warriors": "75902pb35/80"
};
function emblem(f,h=26){
  const p=SHIELD_PARTS[f.id];
  if(!p) return shield(f.sh,h);
  const [part,col]=p.split("/");
  const a=`https://img.bricklink.com/ItemImage/PN/${col}/${part}.png`, b=`https://img.bricklink.com/ItemImage/PL/${part}.png`;
  return `<span class="emb" style="height:${h}px;width:${Math.round(h*0.9)}px"><img src="${a}" alt="" onerror="if(!this.dataset.b){this.dataset.b=1;this.src='${b}'}else{this.nextElementSibling.hidden=false;this.remove()}"><span hidden>${shield(f.sh,h)}</span></span>`;
}
/* ================== DLAŽDICE SETU ================== */
// o: {n,name,y,pcs,line,st,note} – pokud existuje v M, doplní se odtud (url, cena, stav)
function tile(o, opts={}){
  const m = Object.assign({}, M.find(x=>x.n===o.n)||{}, o);
  const shops = shopsFor(m);
  const primary = m.st==="on" && shops[0] ? shops[0].url(m) : bs(m.n);
  const priRel = m.st==="on" && shops[0] ? RELAFF : REL;
  const note = opts.noNote ? "" : noteOf(m);
  const price = m.st==="on" && m.price && LANG==="cs" ? ` · <b>${fmtNum(Math.round(m.price))} Kč</b>` : "";
  return `<div class="tile">
    <a class="ph" href="${primary}" ${priRel} data-n="${esc(disp(m.n))}"><img loading="lazy" ${setImgAttrs(m.n)} alt="${esc(trName(m.name))}" ${IMGFAIL}></a>
    <div class="b"><span class="tn">${esc(disp(m.n))}${m.line?` · ${esc(trLine(m.line))}`:""}</span><b>${esc(nameOf(m))}</b>${subName(m)}
    <span class="ty">${m.y}${m.pcs?` · ${fmtNum(m.pcs)} ${t("pieces")}`:""}${price}</span>${m.st?stTxt(m.st):""}
    ${note?`<span class="tnote">${esc(note)}</span>`:""}
    ${opts.extra||""}
    ${shops.length?`<div class="shops">${shops.map((s,i)=>`<a class="${i===0&&m.st==="on"?"pri":""}" href="${s.url(m)}" ${RELAFF}>${esc(s.label)}</a>`).join("")}</div>`:""}
    <a class="alt" href="${bs(m.n)}" ${REL}>Brickset</a></div></div>`;
}
const tiles = arr => arr.length?`<div class="tiles">${arr.join("")}</div>`:`<div class="empty">${t("none")}</div>`;

/* ================== RÁM STRÁNKY ================== */

/* ================== POŘADÍ FRAKCÍ (od nejnovějších) ================== */
const GROUPS = [
  {id:"now", cs:"Současné frakce (2025–)", en:"Current factions (2025–)", ids:["horse-knights","serpent-knights","griffin-knights","kraken-warriors"]},
  {id:"back", cs:"Klasické frakce v nových setech", en:"Classic factions in new sets", ids:["crusaders","forestmen","black-falcons","wolfpack","black-knights","dragon-masters","fright-knights","klasicky-hrad"]},
  {id:"old", cs:"Starší řady", en:"Earlier lines", ids:["castle-2013","kingdoms","fantasy-era","vikingove","knights-kingdom-2","knights-kingdom","ninja","dark-forest","royal-knights"]}
];
const ORDER = GROUPS.flatMap(g=>g.ids);
F.sort((a,b)=>ORDER.indexOf(a.id)-ORDER.indexOf(b.id));
const NOW_YEAR = 2026;

// všechna období prodeje frakce: [od, do, popisek, typ] – typ "orig" = původní řada
function salePeriods(f){
  const out=[];
  if(f.sets.length) out.push([f.from,f.to,f.years,"orig"]);
  const seen=new Set();
  for(const m of M) if(m.f.includes(f.id)&&m.st!=="soon"){ seen.add(m.n); out.push([m.y, m.to==null?NOW_YEAR:m.to, `${disp(m.n)} ${trName(m.name)}`, "new"]); }
  for(const tr of f.tributes) if(!seen.has(tr[0])&&REISSUE[tr[0]]){ seen.add(tr[0]); out.push([REISSUE[tr[0]][0],REISSUE[tr[0]][1],`${disp(tr[0])} ${trName(tr[1])}`,"new"]); }
  return out;
}
// roky jako text, sloučené do souvislých úseků: "1984–1992 · 2001 · 2022–2025"
function yearLabel(f){
  const ys=new Set();
  for(const [a,b] of salePeriods(f)) for(let y=a;y<=b;y++) ys.add(y);
  const arr=[...ys].sort((a,b)=>a-b), parts=[];
  for(let i=0;i<arr.length;){ let j=i; while(j+1<arr.length&&arr[j+1]===arr[j]+1) j++; parts.push(arr[i]===arr[j]?`${arr[i]}`:`${arr[i]}–${arr[j]}`); i=j+1; }
  return parts.reverse().join(" · ") || f.years;   // od nejnovějšího
}
// všechny sety frakce (původní, reedice, novodobé), seřazené od nejnovějšího
function factionSets(f){
  const map=new Map();
  for(const s of f.sets) map.set(s[0],{n:s[0],name:s[1],y:s[2],st:"off",line:""});
  for(const tr of f.tributes){ const m=M.find(x=>x.n===tr[0]); map.set(tr[0], m?{...m}:{n:tr[0],name:tr[1],y:tr[2],st:"off",line:t("type")[tr[3]]||""}); }
  for(const m of M) if(m.f.includes(f.id)) map.set(m.n,{...m});
  // doplnění z katalogu (inventáře Rebrickable)
  const have=new Set([...map.keys()].map(sid));
  for(const [id,c] of Object.entries(CAT_SETS)){
    if(!c[4].includes(f.id)) continue;
    const mf=c[5].filter(([fid])=>CAT_FIGS[fid]&&CAT_FIGS[fid][1]===f.id).reduce((a,[,q])=>a+q,0);
    if(have.has(id)){ for(const v of map.values()) if(sid(v.n)===id){ if(!v.pcs&&c[2]) v.pcs=c[2]; v.fmf=mf; } continue; }
    map.set(id,{n:id,name:c[0],y:c[1],pcs:c[2]||null,st:c[1]>NOW_YEAR?"soon":"off",line:KIND[LANG][c[3]]||"",fmf:mf});
  }
  return [...map.values()].sort((a,b)=>b.y-a.y || String(b.n).localeCompare(String(a.n)));
}
// galerie minifigurek frakce z katalogu, seskupená podle podskupin
function figGallery(f){
  const en=LANG==="en";
  const figs=Object.entries(CAT_FIGS).filter(([,c])=>c[1]===f.id);
  if(!figs.length) return "";
  const groups={};
  for(const [id,c] of figs) (groups[c[2]]=groups[c[2]]||[]).push([id,c]);
  const keys=Object.keys(groups);
  const card=([id,c])=>{
    const sets=c[3].slice().sort((a,b)=>((CAT_SETS[b]||[])[1]||0)-((CAT_SETS[a]||[])[1]||0));
    const links=sets.slice(0,3).map(sn=>`<a href="${bs(sn)}" ${REL}>${esc(disp(sn))}</a>`).join(", ")+(sets.length>3?` +${sets.length-3}`:"");
    return `<figure class="mfig"><div class="ph" data-n="?"><img loading="lazy" ${figImgAttrs(id)} alt="${esc(c[0])}" ${IMGFAIL}></div><figcaption><b>${esc(c[0])}</b><span>${links}</span></figcaption></figure>`;
  };
  let h=`<h2 class="sec">${en?"Minifigures":"Minifigurky"} <span class="cnt">${figs.length} ${en?"variants":"variant"}</span></h2>
  <p class="tnote">${en?"All catalogued figure variants of the faction with the sets they come in (Rebrickable inventories, 29 Oct 2026). Faction assignment is editorial, not an official LEGO taxonomy.":"Všechny katalogizované varianty figurek frakce a sety, ve kterých jsou (inventáře Rebrickable, 29. 10. 2026). Přiřazení k frakci je redakční, nejde o oficiální dělení LEGO."}</p>`;
  for(const k of keys){
    if(keys.length>1) h+=`<h3>${esc(en?CAT_SUB[k][1]:CAT_SUB[k][0])}</h3>`;
    h+=`<div class="mfigs">${groups[k].map(card).join("")}</div>`;
  }
  return h;
}
// sety, ve kterých se potkávají figurky dvou frakcí (inventáře)
function sharedSets(a,b){ return Object.entries(CAT_SETS).filter(([,c])=>c[4].includes(a)&&c[4].includes(b)).map(([id,c])=>[id,c]).sort((x,y)=>y[1][1]-x[1][1]); }
const descOf = n => SETDESC[n] ? SETDESC[n][LANG] : "";

// velká karta setu s popisem
function feature(m){
  m = Object.assign({}, M.find(x=>x.n===m.n)||{}, m);
  const shops=shopsFor(m);
  const primary = m.st==="on" && shops[0] ? shops[0].url(m) : bs(m.n);
  const facts=[m.y, m.pcs?`${fmtNum(m.pcs)} ${t("pieces")}`:"", m.mf?`${m.mf} ${LANG==="cs"?"minifigurek":"minifigures"}`:""].filter(Boolean).join(" · ");
  const fl = m.f && m.f.length ? `<span class="tnote">${linkFactions(m.f)}</span>` : "";
  return `<article class="feat">
    <a class="ph" href="${primary}" ${m.st==="on"?RELAFF:REL} data-n="${esc(disp(m.n))}"><img loading="lazy" ${setImgAttrs(m.n)} alt="${esc(trName(m.name))}" ${IMGFAIL}></a>
    <div class="fb"><span class="tn">${esc(disp(m.n))}${m.line?` · ${esc(trLine(m.line))}`:""}</span>
      <h3>${esc(nameOf(m))}</h3>${subName(m)}
      <div class="ty">${facts} ${m.st?stTxt(m.st):""}</div>
      <p>${esc(descOf(m.n))}</p>${fl}
      <div class="shops">${shops.map((s,i)=>`<a class="${i===0&&m.st==="on"?"pri":""}" href="${s.url(m)}" ${RELAFF}>${esc(s.label)}</a>`).join("")}<a href="${bs(m.n)}" ${REL}>Brickset</a></div>
    </div></article>`;
}

/* ================== DETAIL SETU, ČASOVÁ OSA, ŘÁDKY CIK-CAK ================== */
// další fotky z oficiálních stránek setů (lokální kopie v assets/gal/{číslo}-{n}.webp)
const GAL = {"10305":8,"10332":2,"21325":2,"21343":2,"21358":3,"31120":2,"31132":2,"31161":2,"31168":2,"40567":2,"40601":2,"40912":2};
const GAL_BASE = DEPLOYED ? "/bricks/cs/castle/assets/gal/" : "assets/gal/";
const SETREG = new Map();   // sety vykreslené na stránce – pro vyskakovací detail
const reg = m => { const k=String(m.n); SETREG.set(k,m); return k; };
const full = m => Object.assign({}, M.find(x=>x.n===m.n)||{}, m);
// doba prodeje: „2025 – dosud“, „2022–2025“, „1986“, „vyjde 2027“
function avail(m){
  const en=LANG==="en";
  if(m.st==="soon") return (en?"coming ":"vyjde ")+m.y;
  if(m.st==="on"||m.st==="lim") return `${m.y} – ${en?"present":"dosud"}`;
  let to=m.to; if(to==null && REISSUE[m.n]) to=REISSUE[m.n][1];
  return to && to!==m.y ? `${m.y}–${to}` : `${m.y}`;
}
const stLive = m => m.st && m.st!=="off" ? stTxt(m.st) : "";
function figCount(m){
  if(m.mf) return m.mf;
  const c=CAT_SETS[sid(m.n)]; return c ? c[5].reduce((a,[,q])=>a+q,0) : 0;
}
function factsOf(m){
  const en=LANG==="en", mf=figCount(m);
  return [avail(m), m.pcs?`${fmtNum(m.pcs)} ${t("pieces")}`:"", mf?`${mf} ${en?(mf===1?"minifigure":"minifigures"):(mf===1?"minifigurka":mf<5?"minifigurky":"minifigurek")}`:"",
    m.st==="on"&&m.price&&LANG==="cs"?`<b>${fmtNum(Math.round(m.price))} Kč</b>`:""].filter(Boolean);
}
const factionIds = m => (m.f&&m.f.length?m.f:((CAT_SETS[sid(m.n)]||[])[4]||[])).filter(fById);
const photoCount = m => 1 + (GAL[disp(m.n)]||0) + (((CAT_SETS[sid(m.n)]||[])[5])||[]).filter(([id])=>CAT_FIGS[id]).length;
function shopRow(m){
  const shops=shopsFor(m);
  return `<div class="shops">${shops.map((s,i)=>`<a class="${i===0&&m.st==="on"?"pri":""}" href="${s.url(m)}" ${RELAFF}>${esc(s.label)}</a>`).join("")}<a href="${bs(m.n)}" ${REL}>Brickset</a></div>`;
}

// karta na časové ose frakce (střídavě nad a pod linkou)
function tlCard(m,i,cur,x=0){
  const k=reg(m), d=descOf(m.n);
  return `<li class="tlc ${i%2?"dn":"up"} ${m.st||"off"}${cur?" cur":""}" style="--i:${i};--x:${x}">
    <button type="button" class="tlb" data-set="${esc(k)}" aria-haspopup="dialog">
      <span class="tlph" data-n="${esc(disp(m.n))}"><img loading="lazy" ${setImgAttrs(m.n)} alt="" ${IMGFAIL}></span>
      <span class="tlt"><span class="tn">${esc(disp(m.n))}</span><b>${esc(nameOf(m))}</b><span class="tlav">${esc(avail(m))}</span>${stLive(m)}</span>
    </button>
    <span class="tly" aria-hidden="true">${m.y}</span>${d?`<span class="vh">${esc(d)}</span>`:""}
  </li>`;
}
function setTimeline(list){
  const asc=list.slice().sort((a,b)=>a.y-b.y || String(a.n).localeCompare(String(b.n)));
  let cur=-1;
  asc.forEach((m,i)=>{ if(m.st==="on"||m.st==="lim") cur=i; });
  if(cur<0) asc.forEach((m,i)=>{ if(m.st!=="soon") cur=i; });
  const en=LANG==="en";
  // delší časová prodleva = větší mezera na ose (1 jednotka za každý rok navíc, nejvýš 16)
  const xs=[0], gaps=[];
  for(let i=1;i<asc.length;i++){
    const dy=asc[i].y-asc[i-1].y, u=Math.min(16,Math.max(0,dy-1));
    xs.push(xs[i-1]+u);
    if(dy>=4) gaps.push(`<li class="tlgap" aria-hidden="true" style="--i:${i-1};--x:${xs[i-1]};--u:${u}"><span>${dy} ${en?"years":dy<5?"roky":"let"}</span></li>`);
  }
  const cards=asc.map((m,i)=>tlCard(m,i,i===cur,xs[i])).join("");
  return `<div class="stlw">
    <button type="button" class="stl-nav prev" aria-label="${en?"Older sets":"Starší sety"}">‹</button>
    <div class="stl" tabindex="0" aria-label="${en?"Set timeline":"Časová osa setů"}"><ol class="stl-in" style="--n:${asc.length};--xt:${xs[xs.length-1]||0}">${gaps.join("")}${cards}</ol></div>
    <button type="button" class="stl-nav next" aria-label="${en?"Newer sets":"Novější sety"}">›</button>
  </div>`;
}

// řádek setu se střídáním fotky vlevo/vpravo (Teď v prodeji, Nedávno vyřazeno, Již brzy)
function zrow(m0,i){
  const m=full(m0), k=reg(m), en=LANG==="en", note=noteOf(m), fl=factionIds(m), pc=photoCount(m);
  return `<article class="zr${i%2?" rev":""}">
    <button type="button" class="zph" data-set="${esc(k)}" aria-haspopup="dialog" aria-label="${esc((en?"Details and photos: ":"Detail a fotky: ")+nameOf(m))}">
      <span class="tlph" data-n="${esc(disp(m.n))}"><img loading="lazy" ${setImgAttrs(m.n)} alt="${esc(nameOf(m))}" ${IMGFAIL}></span>
      ${pc>1?`<span class="zmore">${pc} ${en?"photos":pc<5?"fotky":"fotek"}</span>`:""}
    </button>
    <div class="zb"><span class="tn">${esc(disp(m.n))}${m.line?` · ${esc(trLine(m.line))}`:""}</span>
      <h3>${esc(nameOf(m))}</h3>${subName(m)}
      <div class="ty">${factsOf(m).join(" · ")} ${stLive(m)}</div>
      ${descOf(m.n)?`<p>${esc(descOf(m.n))}</p>`:""}
      ${note?`<span class="tnote">${esc(note)}</span>`:""}
      ${fl.length?`<span class="tnote">${en?"Factions":"Frakce"}: ${linkFactions(fl)}</span>`:""}
      ${shopRow(m)}
      <button type="button" class="zdet" data-set="${esc(k)}">${en?"Details and photos":"Detail a fotky"} →</button>
    </div></article>`;
}
const zrows = (arr,start=0) => arr.length?`<div class="zz">${arr.map((m,i)=>zrow(m,start+i)).join("")}</div>`:`<div class="empty">${t("none")}</div>`;

// vyskakovací okno s detailem setu
function setDialog(){
  let d=$("#setdlg"); if(d) return d;
  d=document.createElement("dialog"); d.id="setdlg"; d.className="sdlg";
  document.body.appendChild(d);
  d.addEventListener("click",e=>{
    if(e.target===d || e.target.closest(".sdx")){ d.close(); return; }
    const th=e.target.closest(".gth"); if(!th) return;
    const src=th.querySelector("img"); const v=d.querySelector(".gv img");
    if(!src||!v) return;
    v.src=src.currentSrc||src.src; v.alt=th.dataset.cap||"";
    d.querySelector(".gv figcaption").textContent=th.dataset.cap||"";
    d.querySelectorAll(".gth").forEach(b=>b.setAttribute("aria-current",b===th));
  });
  d.addEventListener("close",()=>document.documentElement.classList.remove("dlg-open"));
  return d;
}
function openSet(k){
  const m0=SETREG.get(k); if(!m0) return;
  const m=full(m0), en=LANG==="en", c=CAT_SETS[sid(m.n)];
  const pics=[{a:setImgAttrs(m.n),cap:""}];
  for(let i=1;i<=(GAL[disp(m.n)]||0);i++) pics.push({a:`src="${GAL_BASE}${disp(m.n)}-${i}.webp"`,cap:""});
  if(c) for(const [fid,q] of c[5]) if(CAT_FIGS[fid]) pics.push({a:figImgAttrs(fid),cap:CAT_FIGS[fid][0]+(q>1?` ×${q}`:"")});
  const fl=factionIds(m), d=descOf(m.n), note=noteOf(m);
  const html=`<button type="button" class="sdx" aria-label="${en?"Close":"Zavřít"}">×</button>
  <div class="sdin">
    <div class="sdg">
      <figure class="gv"><img ${pics[0].a} alt="${esc(nameOf(m))}" ${IMGFAIL}><figcaption></figcaption></figure>
      ${pics.length>1?`<div class="gths">${pics.map((p,i)=>`<button type="button" class="gth" data-cap="${esc(p.cap)}" aria-current="${i===0}" aria-label="${esc(p.cap||(en?"Photo ":"Fotka ")+(i+1))}"><img loading="lazy" ${p.a} alt="" ${IMGFAIL}></button>`).join("")}</div>`:""}
    </div>
    <div class="sdt">
      <span class="tn">${esc(disp(m.n))}${m.line?` · ${esc(trLine(m.line))}`:""}</span>
      <h2>${esc(nameOf(m))}</h2>${subName(m)}
      <div class="ty">${factsOf(m).join(" · ")} ${stLive(m)}</div>
      ${d?`<p>${esc(d)}</p>`:`<p class="tnote">${en?"We don’t have a longer description of this set yet – piece count, figures and instructions are on Brickset.":"Podrobnější popis tohoto setu zatím nemáme – dílky, figurky a návody najdete na Bricksetu."}</p>`}
      ${note?`<span class="tnote">${esc(note)}</span>`:""}
      ${fl.length?`<span class="tnote">${en?"Factions":"Frakce"}: ${linkFactions(fl)}</span>`:""}
      ${shopRow(m)}
    </div>
  </div>`;
  const dlg=setDialog();
  dlg.setAttribute("aria-label",nameOf(m));
  dlg.innerHTML=MIR(html); rewriteLinks(dlg);
  document.documentElement.classList.add("dlg-open");
  dlg.showModal();
}
document.addEventListener("click",e=>{
  const s=e.target.closest("[data-set]"); if(s){ e.preventDefault(); openSet(s.dataset.set); return; }
  const g=e.target.closest("[data-goto]"); if(g){ const el=document.getElementById(g.dataset.goto); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); return; }
  const nv=e.target.closest(".stl-nav"); if(nv){ const s2=nv.parentNode.querySelector(".stl"); s2.scrollBy({left:(nv.classList.contains("prev")?-1:1)*s2.clientWidth*0.8,behavior:"smooth"}); }
});

/* ================== RÁM STRÁNKY ================== */
function renderChrome(){
  document.documentElement.lang = LANG;
  document.title = t("title");
  $("#brand").innerHTML = `${esc(t("brand"))}<small>${esc(t("tagline"))}</small>`;
  $("#mainnav").setAttribute("aria-label", LANG==="cs"?"Hlavní navigace":"Main navigation");
  $("#mainnav").innerHTML = t("nav").map(([id,l])=>`<a href="#${id}">${esc(l)}</a>`).join("");
  $("#side").setAttribute("aria-label", t("factions"));
  const tt=$("#totop"); if(tt){ tt.setAttribute("aria-label",LANG==="cs"?"Nahoru":"Back to top"); tt.title=tt.getAttribute("aria-label"); }
  $("#langsw").innerHTML = ["cs","en"].map(l=>`<a href="${DEPLOYED?routeUrl(routeId(),l):"#"}" data-lang="${l}" hreflang="${l}" aria-current="${l===LANG}">${l.toUpperCase()}</a>`).join("");
  const cs=LANG==="cs";
  $("#foot").innerHTML = `<div class="fmain"><span>© 2026 ${cs?"Vyrobeno s ❤️ ke kreativnímu hraní":"Made with ❤️ for creative play"}</span><span class="dot">·</span><a href="#soukromi">${cs?"Zásady ochrany osobních údajů":"Privacy Policy"}</a><span class="dot">·</span><a href="#podminky">${cs?"Podmínky užití":"Terms of Use"}</a><span class="dot">·</span><a href="mailto:${CONTACT}" title="${CONTACT}">✉️ ${cs?"Kontakt":"Contact"}</a></div>`
    + `<div class="fsmall">${esc(t("foot"))}${anyAff()?" "+esc(t("affNote")):""}</div>`;
  let h="";
  for(const g of GROUPS){
    h+=`<h2>${esc(g[LANG])}</h2><ul>`;
    for(const id of g.ids){ const f=fById(id); h+=`<li><a href="#${f.id}" style="--fc:${f.sh.f[0]}">${emblem(f,28)}<span class="nm">${esc(fx(f,"name"))}<span class="yr">${yearLabel(f)}</span></span></a></li>`; }
    if(g.id==="back") h+=`<li><a href="#navrat">${shield({f:["#d7a521"],p:"plain",b:null,c:null},26)}<span class="nm">${t("returnNav")}<span class="yr">2016–2026</span></span></a></li>`;
    h+="</ul>";
  }
  $("#sidenav").innerHTML=MIR(h);
}

/* ================== ČASOVÁ OSA ================== */
// sloučí překrývající se období do souvislých úseků (popisky setů se spojí)
function mergedPeriods(f){
  const ps=salePeriods(f).map(p=>({a:p[0],b:p[1],labels:[p[2]],orig:p[3]==="orig"})).sort((x,y)=>x.a-y.a);
  const out=[];
  for(const p of ps){
    const last=out[out.length-1];
    if(last && p.a<=last.b+1 && !p.orig && !last.orig){ last.b=Math.max(last.b,p.b); last.labels.push(...p.labels); }
    else out.push({...p,labels:[...p.labels]});
  }
  return out;
}
function timeline(){
  const x0=1978,x1=2028,L=170,W=900,R=16,row=19,top=24;
  const sx=y=>L+(y-x0)/(x1-x0)*(W-L-R);
  const H=top+F.length*row+GROUPS.length*14+8;
  let g="", y=top;
  for(let yy=1980;yy<=2025;yy+=5){g+=`<line class="gl" x1="${sx(yy)}" x2="${sx(yy)}" y1="${top-6}" y2="${H-6}"/><text class="ax" x="${sx(yy)}" y="12" text-anchor="middle">${yy}</text>`;}
  for(const gr of GROUPS){
    g+=`<text class="ax" x="4" y="${y+9}" font-weight="700">${esc(gr[LANG].toUpperCase())}</text>`; y+=14;
    for(const id of gr.ids){
      const f=fById(id);
      g+=`<a href="#${f.id}"><text x="${L-8}" y="${y+12}" text-anchor="end" font-size="12">${esc(fx(f,"name"))}</text>`;
      for(const p of mergedPeriods(f)){
        const w=Math.max(5,sx(p.b+1)-sx(p.a));
        const yrs=p.a===p.b?`${p.a}`:`${p.a}–${p.b}`;
        const tip=(p.orig?(LANG==="cs"?"Původní řada ":"Original line ")+yrs:yrs+"\n"+p.labels.join("\n"));
        g+=`<rect class="tlbar" x="${sx(p.a)}" y="${y+2}" width="${w}" height="13" rx="2" fill="${f.sh.f[0]==="#16181b"?"var(--blk)":f.sh.f[0]}" stroke="var(--ink-2)" stroke-width="1.2"${p.orig?"":` stroke-dasharray="3 2"`}><title>${esc(tip)}</title></rect>`;
      }
      g+=`</a>`; y+=row;
    }
  }
  return `<div class="tl"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${LANG==="cs"?"Časová osa frakcí":"Faction timeline"}">${g}</svg></div>`;
}

/* ================== VŮDCE, JÍZDA, SÍDLO (ověřeno na Brickset, inventáře Rebrickable) ==================
   lead: [figurka z katalogu, jméno cs/en]; none: frakce vůdce nemá (ověřeno v setech); cav: příklad setu s jízdou; seat: hlavní sídla */
const FMETA = {
  "horse-knights":{lead:[["fig-016597",{cs:"Král koňských rytířů",en:"Horse Knight King"}]],cav:"31168",seat:["31168"]},
  "serpent-knights":{seat:["910064"]},
  "crusaders":{lead:[["fig-015248",{cs:"Král Lvích rytířů",en:"Lion Knights King"}]],cav:"6081",seat:["6080","6081","10305"]},
  "forestmen":{none:1,seat:["6054","6077-2","40567"]},
  "black-falcons":{cav:"6074",seat:["6074","10039"]},
  "wolfpack":{none:1,cav:"6038",seat:["6075-1","910057"]},
  "black-knights":{none:1,seat:["6085","6086"]},
  "dragon-masters":{lead:[["fig-000573",{cs:"Čaroděj Majisto",en:"Majisto the Wizard"}]],seat:["6082"]},
  "fright-knights":{lead:[["fig-000648",{cs:"Basil, Netopýří lord",en:"Basil the Bat Lord"}]],cav:"6097",seat:["6097","6087"]},
  "klasicky-hrad":{cav:"375-2",seat:["375-2","6075-2"]},
  "castle-2013":{lead:[["fig-010111",{cs:"Král",en:"The King"}]],seat:["70404"]},
  "kingdoms":{lead:[["fig-010066",{cs:"Lví král",en:"Lion King"}],["fig-010070",{cs:"Lví královna",en:"Lion Queen"}]],cav:"10223",seat:["7946"]},
  "fantasy-era":{lead:[["fig-009943",{cs:"Král Korunních rytířů",en:"Crown King"}]],seat:["7094","7097"]},
  "vikingove":{lead:[["fig-004676",{cs:"Vikingský král",en:"Viking King"}]],seat:["7019"]},
  "knights-kingdom-2":{lead:[["fig-009257",{cs:"Král Mathias",en:"King Mathias"}]],cav:"8781",seat:["8781","8877"]},
  "knights-kingdom":{lead:[["fig-001002",{cs:"Král Leo",en:"King Leo"}]],seat:["6098"]},
  "ninja":{lead:[["fig-000475",{cs:"Šógun",en:"The Shogun"}]],seat:["6093","3053"]},
  "dark-forest":{none:1,seat:["6079"]},
  "royal-knights":{lead:[["fig-007107",{cs:"Král",en:"The King"}]],cav:"6044",seat:["6090"]}
};
// set podle čísla – z frakce, katalogu nebo seznamu M; vrátí tlačítko otevírající detail
function setRef(f,n){
  const all=factionSets(f), key=sid(n);
  let m=all.find(x=>sid(x.n)===key) || M.find(x=>sid(x.n)===key);
  if(!m){ const c=CAT_SETS[key]; if(!c) return esc(disp(n)); m={n:key,name:c[0],y:c[1],pcs:c[2]||null,st:"off",line:""}; }
  const k=reg(m);
  return `<button type="button" class="sref" data-set="${esc(k)}"><span class="tn">${esc(disp(m.n))}</span> ${esc(nameOf(m))}<span class="sy"> · ${m.y}</span></button>`;
}
function leaderFigs(f){
  const L=(FMETA[f.id]||{}).lead||[];
  return L.filter(([id])=>CAT_FIGS[id]).map(([id,nm])=>`<figure class="fig lead"><div class="ph" data-n="?"><img loading="lazy" ${figImgAttrs(id)} alt="${esc(nm[LANG])}" ${IMGFAIL}></div><figcaption><b>${esc(nm[LANG])}</b></figcaption></figure>`).join("");
}
function factBox(f){
  const en=LANG==="en", fm=FMETA[f.id]||{}, rows=[];
  if(fm.lead&&fm.lead.length){
    rows.push([en?"Leader":"Vůdce", fm.lead.map(([id,nm])=>{ const c=CAT_FIGS[id]; const s=c?c[3].slice().sort((a,b)=>((CAT_SETS[a]||[])[1]||9999)-((CAT_SETS[b]||[])[1]||9999))[0]:null; return `${esc(nm[LANG])}${s?` <span class="sy">(${en?"first in":"poprvé v"} ${esc(disp(s))})</span>`:""}`; }).join("<br>")]);
  } else if(fm.none) rows.push([en?"Leader":"Vůdce", en?"no king or named leader in the sets":"v setech nemají krále ani jmenovaného vůdce"]);
  if(fm.cav) rows.push([en?"Cavalry":"Jízda", `${en?"yes – e.g.":"ano – např."} ${setRef(f,fm.cav)}`]);
  if(fm.seat&&fm.seat.length) rows.push([en?(fm.seat.length>1?"Seats":"Seat"):"Sídlo", fm.seat.map(n=>setRef(f,n)).join("")]);
  return rows.length?`<dl class="fbox">${rows.map(([k,v])=>`<dt>${k}</dt><dd>${v}</dd>`).join("")}</dl>`:"";
}
// malý náhled vztahů z diagramů + odkaz na diagram s vybranou frakcí
function relCard(f){
  const en=LANG==="en";
  const rank={off:0,fan:1,ally:2,legend:3,line:3,with:4};
  const isCenter = n => !n.name && dFac(n).id===f.id;
  const keyOf = n => isCenter(n) ? "@" : (n.name ? "n:"+n.id : dFac(n).id);
  const nodes=new Map(), edges=new Map();
  for(const d of DIAS) for(const e of d.edges){
    const A=dnode(d,e[0]), B=dnode(d,e[1]); if(!A||!B) continue;
    if(dFac(A).id!==f.id && dFac(B).id!==f.id) continue;
    const ka=keyOf(A), kb=keyOf(B); if(ka===kb) continue;
    for(const [k,n] of [[ka,A],[kb,B]]) if(k!=="@" && !nodes.has(k)) nodes.set(k,n);
    const ek=[ka,kb].sort().join("|"), prev=edges.get(ek);
    if(!prev || rank[e[2]]<rank[prev.t]) edges.set(ek,{a:ka,b:kb,t:e[2]});
  }
  const hasC=[...edges.values()].some(x=>x.a==="@"||x.b==="@");
  const ring=[...nodes.entries()].slice(0,7);
  const W=280,H=170,cx=W/2,cy=H/2, R=hasC?[112,58]:[100,56];
  const pos={"@":{x:cx,y:cy}};
  ring.forEach(([k],i)=>{ const a=-Math.PI/2+i*2*Math.PI/Math.max(ring.length,1)+(ring.length===2?Math.PI/2:0); pos[k]={x:cx+Math.cos(a)*R[0],y:cy+Math.sin(a)*R[1]}; });
  const cls={off:"e-off",fan:"e-fan",ally:"e-ally",legend:"e-legend",line:"e-line",with:"e-with"};
  const E=[...edges.values()].filter(x=>pos[x.a]&&pos[x.b]);
  const lines=E.map(x=>`<path class="${cls[x.t]}" d="M${pos[x.a].x.toFixed(1)} ${pos[x.a].y.toFixed(1)}L${pos[x.b].x.toFixed(1)} ${pos[x.b].y.toFixed(1)}"/>`).join("");
  const em=n=>n.sh?shield(n.sh,26):emblem(dFac(n),26);
  const nodesH=ring.map(([k,n])=>`<span class="rn" style="left:${(pos[k].x/W*100).toFixed(2)}%;top:${(pos[k].y/H*100).toFixed(2)}%" title="${esc(dName(n))}">${em(n)}</span>`).join("")
    + ((hasC||!ring.length)?`<span class="rn rc">${emblem(f,40)}</span>`:"");
  const cnt=t=>E.filter(x=>t.includes(x.t)).length;
  const en1=cnt(["off","fan"]), al=cnt(["ally"]), ln=cnt(["line","legend"]);
  const parts=[en1?`${en1} ${en?(en1===1?"conflict":"conflicts"):(en1===1?"konflikt":en1<5?"konflikty":"konfliktů")}`:"", al?`${al} ${en?(al===1?"alliance":"alliances"):(al===1?"spojenectví":"spojenectví")}`:"", ln?`${ln} ${en?(ln===1?"successor link":"successor links"):(ln===1?"vazba nástupce":ln<5?"vazby nástupců":"vazeb nástupců")}`:""].filter(Boolean).join(" · ");
  return `<a class="relcard" href="#diagram" data-dgf="${f.id}">
    <span class="relg"><svg viewBox="0 0 ${W} ${H}" aria-hidden="true">${lines}</svg>${nodesH}</span>
    <span class="relt"><span class="eyebrow">${en?"Faction map":"Diagram vztahů"}</span><b>${en?"Who did they fight and who were their allies?":"S kým bojovali a s kým se spojili?"}</b>${parts?`<span class="tnote">${parts}</span>`:""}<span class="relgo">${en?"Open the interactive map":"Otevřít interaktivní diagram"} →</span></span>
  </a>`;
}

/* ================== STRÁNKA FRAKCE ================== */
function vFaction(f){
  const en=LANG==="en";
  const all=factionSets(f);
  const figs=(MF[f.id]||[]).map(m=>{const cap=en?(MF_EN[m[0]]||m[1]):m[1];return `<figure class="fig"><div class="ph" data-n="?"><img loading="lazy" src="${mfUrl(m[0])}" alt="${esc(cap)}" ${IMGFAIL}></div><figcaption>${esc(cap)}</figcaption></figure>`;}).join("");
  const rels=fx(f,"rel");
  const yearOf = s => { const m=String(s).match(/^(\d{4})/); return m?+m[1]:-1; };
  const hist=fx(f,"hist").map((h,i)=>[h,i]).sort((a,b)=>(yearOf(b[0])-yearOf(a[0]))||(a[1]-b[1])).map(x=>x[0]);
  const idx=F.indexOf(f), prev=F[idx-1], next=F[idx+1];
  const nFig=Object.values(CAT_FIGS).filter(c=>c[1]===f.id).length;
  const gal=figGallery(f);
  const col=f.sh.f[0]==="#16181b"?"var(--blk)":f.sh.f[0];
  const secs=[["sec-uvod",en?"Overview":"Úvod"],["sec-sety",en?"Sets":"Sety"]];
  if(gal) secs.push(["sec-figurky",en?"Minifigures":"Minifigurky"]);
  secs.push(["sec-historie",en?"History":"Historie"]);
  const nextBtn = id => { const i=secs.findIndex(s=>s[0]===id), n=secs[i+1]; return n?`<button type="button" class="snext" data-goto="${n[0]}">${esc(n[1])} <span aria-hidden="true">↓</span></button>`:""; };
  return `<div class="fp" style="--fc:${col}">
  <nav class="fdots" aria-label="${en?"Page sections":"Části stránky"}">${secs.map(([id,l])=>`<button type="button" data-goto="${id}" aria-label="${esc(l)}"><span>${esc(l)}</span></button>`).join("")}</nav>

  <section class="fs fs-intro" id="sec-uvod">
    <div class="fintro">
      <div class="fi-main">
        <div class="eyebrow"><a class="back" href="#uvod" data-allf="1">← ${en?"All factions":"Všechny frakce"}</a> · ${eraName(f.era)}</div>
        <div class="fhead">${emblem(f,84)}<div style="min-width:0"><h1>${esc(fx(f,"name"))}</h1><div class="meta"><span class="chip">${esc(fx(f,"alt"))}</span><span class="chip">${yearLabel(f)}</span><span class="chip">${all.length} ${en?"sets":"setů"}</span>${nFig?`<span class="chip">${nFig} ${en?"minifigures":"minifigurek"}</span>`:""}</div></div></div>
        <p class="lede">${esc(fx(f,"intro"))}</p>
        <h2 class="h2s">${en?"Allies and enemies":"Spojenci a nepřátelé"}</h2>
        <ul class="facts">${f.rel.map((r,i)=>`<li>${esc(rels[i]||r[0])} ${tag(r[1])}</li>`).join("")}</ul>
        ${relCard(f)}
      </div>
      <div class="fi-side">
        ${(figs||leaderFigs(f))?`<div class="figs">${leaderFigs(f)}${figs}</div>`:""}
        ${factBox(f)}
        <div class="eyebrow">${en?"Crest and colours":"Erb a barvy"}</div><p>${esc(fx(f,"heraldry"))}</p>
        <div class="eyebrow">${en?"Characters":"Postavy"}</div><ul class="facts">${fx(f,"chars").map(c=>`<li>${esc(c)}</li>`).join("")}</ul>
      </div>
    </div>
    ${nextBtn("sec-uvod")}
  </section>

  <section class="fs fs-sets" id="sec-sety">
    <div class="fs-head"><h2 class="sec">${en?"Sets with this faction":"Sety s touto frakcí"} <span class="cnt">${all.length}</span></h2>
    <p class="tnote">${en?"From the oldest on the left to the newest on the right; the highlighted set is on sale now or was sold last. Click a set for details and more photos.":"Od nejstarších vlevo po nejnovější vpravo; zvýrazněný set je teď v prodeji, nebo se prodával naposledy. Kliknutím na set otevřete detail s dalšími fotkami."}</p></div>
    ${all.length?setTimeline(all):`<div class="empty">${en?"No sets yet.":"Zatím bez setů."}</div>`}
    ${nextBtn("sec-sety")}
  </section>

  ${gal?`<section class="fs fs-figs" id="sec-figurky">${gal}${nextBtn("sec-figurky")}</section>`:""}

  <section class="fs fs-hist" id="sec-historie">
    <h2 class="sec">${en?"History":"Historie"}</h2>
    <ul class="facts">${hist.map(h=>`<li>${esc(h)}</li>`).join("")}</ul>
    <div class="fpn">${prev?`<a href="#${prev.id}">${emblem(prev,26)}<span><small>${en?"Previous faction":"Předchozí frakce"}</small>${esc(fx(prev,"name"))}</span></a>`:"<span></span>"}${next?`<a class="nx" href="#${next.id}"><span><small>${en?"Next faction":"Další frakce"}</small>${esc(fx(next,"name"))}</span>${emblem(next,26)}</a>`:""}</div>
  </section>
  </div>`;
}

/* ================== TEĎ V PRODEJI ================== */
function vSale(){
  const en=LANG==="en", on=M.filter(m=>m.st==="on"), lim=M.filter(m=>m.st==="lim");
  const checked = LIVE.checked ? (en?`Checked automatically · last check ${esc(LIVE.checked)}`:`Hlídáno automaticky · poslední kontrola ${esc(LIVE.checked)}`) : (en?"Status as of 30 Oct 2026":"Stav k 30. 10. 2026");
  return `
  <div class="eyebrow">${checked}</div>
  <h1>${en?"On sale now":"Teď v prodeji"}</h1>
  <p class="lede">${en
    ?"Castle and medieval sets you can buy at LEGO.com right now. Links go straight to the product page; once a set leaves the shop, it moves to Recently retired by itself."
    :"Hradní a středověké sety, které teď koupíte na lego.cz. Odkaz vede přímo na produktovou stránku; jakmile set z nabídky zmizí, sám se přesune do sekce Nedávno vyřazeno."}</p>
  ${zrows(on)}
  ${lim.length?`<h2 class="sec">${en?"Only at LEGOLAND parks":"Jen v parcích LEGOLAND"}</h2>${zrows(lim,on.length)}`:""}
  <p class="note">${en?"Sale status is checked automatically once a week (LEGO and Brickset). Always confirm the price in the shop.":"Stav prodeje se kontroluje automaticky jednou týdně (lego.cz a Brickset). Cenu vždy ověřte v obchodě."}</p>`;
}

/* ================== NEDÁVNO VYŘAZENO ================== */
function vRetired(){
  const en=LANG==="en";
  const list=M.filter(m=>m.st==="off").sort((a,b)=>(b.to||0)-(a.to||0)||b.y-a.y);
  const byYear={};
  for(const m of list){ const k=m.to||m.y; (byYear[k]=byYear[k]||[]).push(m); }
  let h=`<div class="eyebrow">2016–2026</div><h1>${en?"Recently retired":"Nedávno vyřazeno"}</h1>
  <p class="lede">${en?"Castle and medieval sets of recent years that are no longer sold by LEGO. Many can still be found at other online shops, on eBay or in second-hand marketplaces.":"Hradní a středověké sety posledních let, které LEGO už neprodává. Mnohé se dají ještě sehnat na různých e-shopech a v bazarech."}</p>`;
  let i=0;
  for(const y of Object.keys(byYear).sort((a,b)=>b-a)){
    h+=`<h2 class="sec">${en?"Last sold in":"Naposledy v prodeji"} ${y}</h2>${zrows(byYear[y],i)}`; i+=byYear[y].length;
  }
  return h;
}

document.addEventListener("click",e=>{
  const a=e.target.closest("#langsw a"); if(!a) return;
  const l=a.dataset.lang; if(l===LANG){e.preventDefault();return;}
  if(DEPLOYED){ a.href = routeUrl(routeId(),l); return; }   // stejná stránka v druhém jazyce
  e.preventDefault(); LANG=l; renderChrome(); applyThemeButton(); route(true);
});

/* ================== POHLEDY ================== */


function vHome(){
  const cards=F.map(f=>`<a class="fcard" href="#${f.id}">${mini(f,64)}<div><b>${esc(fx(f,"name"))}</b><span>${esc(fx(f,"alt"))}</span><div class="y">${f.years}</div></div></a>`).join("");
  const onSale=M.filter(m=>m.st==="on").length;
  if(LANG==="en") return `
  <div class="eyebrow">Fan guide</div>
  <h1>What is LEGO Castle</h1>
  <p class="lede">LEGO Castle is one of the oldest LEGO themes: knights, castles, siege engines and later wizards and dragons. It was born in 1978, when owner Kjeld Kirk Kristiansen introduced play themes as we know them today; one of the first was LEGOLAND Castle, whose only set was the yellow castle 375. It gradually split into factions with their own crests, colours and enemies. The standalone line ended in 2014, but since 2021 the classic factions have been returning in LEGO Icons, Ideas, Creator, the BrickLink Designer Program and gifts with purchase.</p>
  <div class="twocol">
    <div class="panel"><div class="eyebrow">Beginnings</div><p style="margin:6px 0 0">1978 – the first modern minifigures came out in Castle, Space and Town (designer Jens Nygaard Knudsen). The first knights had movable visors and brick-built horses.</p></div>
    <div class="panel"><div class="eyebrow">Factions</div><p style="margin:6px 0 0">From 1984 knights are divided by the symbols on their shields; according to LEGO History the biggest factions were the Crusaders (Lion Knights) and the Black Falcons. This site follows ${F.length} groups.</p></div>
    <div class="panel"><div class="eyebrow">Today</div><p style="margin:6px 0 0">${onSale} medieval sets are on sale at LEGO.com right now; none of them carries a classic faction. <a href="#v-prodeji">Overview</a></p></div>
  </div>
  <h2 class="sec">Faction timeline</h2>
  <p>Solid bars show the years a faction was in regular sale; bars with a dashed outline are later reissues, tributes and new sets with the faction (e.g. 10305 Lion Knights' Castle in 2022–2025). Hover a bar to see the sets, click to open the faction.</p>
  ${timeline()}
  <h2 class="sec">Eras of the Castle line</h2>
  <ul class="facts">
    <li><b>1978–1983, the classic castle.</b> The yellow castle 375, then 383 Knight's Tournament and 677 Knight's Procession (1979). Knights with movable visors and coats of arms on tunics or breastplates; horses built from bricks; no story.</li>
    <li><b>1984–1997, the golden age of factions.</b> More realistic castles and new elements: one-piece horses, saddles, fixed-visor helmets, plumes, flags, bows and arrows. Lion Knights against Black Falcons; civilians such as peasants and blacksmiths in sets like 6041 Armor Shop and 6067 Guarded Inn (1986). Then the Forestmen (1987), the Black Knights (1988) and the Wolfpack (1992) – the year castle figures first got printed faces. In 1993 the Dragon Masters took the line into fantasy, in 1995 the first crowned king arrived with the Royal Knights, and in 1997 the Fright Knights closed the era.</li>
    <li><b>2000–2006, stories.</b> Knights' Kingdom with the first full royal family (King Leo, Queen Leonora, Prince Edward and Princess Storm), the more action-oriented Knights' Kingdom II with named knights, Vikings.</li>
    <li><b>2007–2014, the Castle name returns.</b> Castle 2007 with skeletons, trolls and dwarves, the realistic Kingdoms (Lion Kingdom against Dragon Kingdom), the 2013 line combining history and fantasy. In 2016 LEGO followed with NEXO Knights.</li>
    <li><b><a href="#navrat">2016–today, nostalgia.</a></b> Reimagined classics for adult fans: 10305 Lion Knights' Castle, 10332 Medieval Town Square, the BrickLink Designer Program, remake gifts 40567, 40601 and 40912.</li>
  </ul>
  <h2 class="sec" id="frakce">All factions</h2>
  <div class="grid">${cards}</div>
  <p class="note">Labels on claims: ${tag("off")} backed by LEGO material – LEGO.com articles, set descriptions, catalogues, boxes or instructions, ${tag("fan")} a fan interpretation, ${tag("unc")} contradictory or unverified. Crests are shown on original minifigures; the small shields are simplified colour markers, not replicas.</p>`;
  return `
  <div class="eyebrow">Informační průvodce</div>
  <h1>Co je LEGO Castle</h1>
  <p class="lede">LEGO Castle je jedna z nejstarších řad stavebnice LEGO: rytíři, hrady, obléhací stroje a později čarodějové a draci. Vznikla v roce 1978, kdy majitel firmy Kjeld Kirk Kristiansen zavedl herní témata, jak je známe dnes; jedním z prvních bylo LEGOLAND Castle s jediným setem, žlutým hradem 375. Postupně se rozdělila do frakcí s vlastními erby, barvami a nepřáteli. Samostatná řada skončila v roce 2014, ale klasické frakce se od roku 2021 vracejí v sadách LEGO Icons, Ideas, Creator, v BrickLink Designer Programu a v dárcích k nákupu.</p>
  <div class="twocol">
    <div class="panel"><div class="eyebrow">Začátek</div><p style="margin:6px 0 0">1978 – první moderní minifigurky vyšly v řadách Castle, Space a Town (autor Jens Nygaard Knudsen). První rytíři měli pohyblivá hledí a koně postavené z kostek.</p></div>
    <div class="panel"><div class="eyebrow">Frakce</div><p style="margin:6px 0 0">Od roku 1984 se rytíři dělí podle znaků na štítech; podle LEGO History byli největšími frakcemi Crusaders (Lion Knights) a Black Falcons. Tento web sleduje ${F.length} skupin.</p></div>
    <div class="panel"><div class="eyebrow">Dnes</div><p style="margin:6px 0 0">Na lego.cz jsou teď v prodeji ${onSale} středověké sety; žádný z nich nenese klasickou frakci. <a href="#v-prodeji">Přehled</a></p></div>
  </div>
  <h2 class="sec">Časová osa frakcí</h2>
  <p>Plné pruhy ukazují roky, kdy frakce vycházela v běžném prodeji; pruhy s čárkovaným okrajem jsou pozdější reedice, pocty a nové sety s frakcí (např. 10305 Lion Knights' Castle v letech 2022–2025). Najetím na pruh zobrazíte sety, kliknutím stránku frakce.</p>
  ${timeline()}
  <h2 class="sec">Éry řady Castle</h2>
  <ul class="facts">
    <li><b>1978–1983, klasický hrad.</b> Žlutý hrad 375, v roce 1979 přibyly 383 Knight's Tournament a 677 Knight's Procession. Rytíři s pohyblivým hledím a erbem na tunice nebo kyrysu, koně z kostek, bez příběhu.</li>
    <li><b>1984–1997, zlatý věk frakcí.</b> Realističtější hrady a nové díly: jednodílní koně, sedla, přilby s pevným hledím, chocholy, vlajky, luky a šípy. Lion Knights proti Black Falcons; v setech přibývají civilisté – sedlák, kovář – například 6041 Armor Shop a 6067 Guarded Inn (1986). Pak Forestmen (1987), Black Knights (1988) a Wolfpack (1992), kdy hradní figurky poprvé dostaly potištěné obličeje. V roce 1993 přivedli Dragon Masters řadu do fantasy, v roce 1995 přišel s Royal Knights první král s korunou a v roce 1997 éru uzavřeli Fright Knights.</li>
    <li><b>2000–2006, příběhy.</b> Knights' Kingdom s první celou královskou rodinou (král Leo, královna Leonora, princ Edward a princezna Storm), akčnější Knights' Kingdom II s pojmenovanými rytíři, Vikingové.</li>
    <li><b>2007–2014, návrat značky Castle.</b> Castle 2007 s kostlivci, trolly a trpaslíky, realistické Kingdoms (Lví království proti Dračímu), řada 2013 spojující historii a fantasy. V roce 2016 navázalo LEGO řadou NEXO Knights.</li>
    <li><b><a href="#navrat">2016–dnes, nostalgie.</a></b> Reinterpretace klasických setů pro dospělé fanoušky: 10305 Lion Knights' Castle, 10332 Medieval Town Square, BrickLink Designer Program, remake dárky 40567, 40601 a 40912.</li>
  </ul>
  <h2 class="sec" id="frakce">Všechny frakce</h2>
  <div class="grid">${cards}</div>
  <p class="note">Štítky u tvrzení: ${tag("off")} doloženo materiály LEGO – články na LEGO.com, popisy setů, katalogy, krabice nebo návody, ${tag("fan")} výklad fanoušků, ${tag("unc")} rozporné nebo neověřené. Erby jsou ukázané na původních figurkách; malé štíty jsou zjednodušené barevné značky, ne repliky.</p>`;
}







function vReturn(){
  const en=LANG==="en";
  const YT = en ? {
    2016:"After the Castle line ended in 2014, the futuristic NEXO Knights (2016–2018) took over the knight theme. Classic castles were absent for three years.",
    2019:"BrickLink AFOL Designer Program (pilot): the fan design BL19001 Löwenstein Castle is released as a limited edition.",
    2021:"A big medieval comeback: LEGO Ideas 21325 Medieval Blacksmith (designed by Clemens Fiedler, a trained blacksmith) and Creator 3in1 31120 Medieval Castle, both with falcon knights – according to LEGO.com the Black Falcons' return after decades. The BrickLink Designer Program releases 910001 Castle in the Forest with Black Falcons and Forestmen.",
    2022:"LEGO's 90th anniversary: in a LEGO Ideas poll with 55,000 participants fans asked for a classic castle, which became 10305 Lion Knights' Castle with 4,514 pieces and 22 minifigures (Lion Knights, Black Falcons, Forestmen, Majisto). Plus the gift 40567 Forest Hideout and the Yellow Castle knight in Series 23. The same year brought 31132 with the Midgard Serpent.",
    2023:"Gift 40601 Majisto's Magical Workshop (a remake of 6048, 30 years after the original), the Falconer minifigure in Series 24 and LEGO Ideas 21343 Viking Village.",
    2024:"LEGO Icons 10332 Medieval Town Square – the village of Felsa with the Broken Axe tavern, inspired by village 10193 from 2009, with Lion Knights and the Wolfpack. BrickLink Designer Program Series 1: 910029 Mountain Fortress. The Vampire Knight minifigure (Series 25).",
    2025:"The year of the BrickLink Designer Program: Series 3–6 brought Forest Stronghold, Siege Encampment, Medieval Seaside Market, Riverside Scholars and Outlaw Forest Den. Creator 31168 Medieval Horse Knight Castle introduces new factions, 21358 adds Griffin Knights and Kraken Warriors. The Wolfpack Beastmaster minifigure (Series 27).",
    2026:"Gift 40912 Sea Serpent for the Black Knights, winner of the LEGO Ideas contest “A Twist of Nostalgia” (Insiders Days, July), BDP 910062 Alchemist's Shop and 910064 Dustmark Keep, 40952 LEGOLAND Castle. 10305 and 10332 left sale at the end of 2025.",
    2027:"Announced: BDP Series 9, 910070 Sleepy Dragon Inn."
  } : {
    2016:"Po skončení řady Castle (2014) přebírá rytířské téma futuristická řada NEXO Knights (2016–2018). Klasické hrady se tři roky neobjevují.",
    2019:"BrickLink AFOL Designer Program (pilot): fanouškovský návrh BL19001 Löwenstein Castle vychází v limitované edici.",
    2021:"Velký návrat středověku: LEGO Ideas 21325 Středověká kovárna (autor Clemens Fiedler, vyučený kovář) a Creator 3 v 1 31120 Středověký hrad, oba se sokolími rytíři – podle LEGO.com návrat Black Falcons po desetiletích. V BrickLink Designer Programu vychází 910001 Castle in the Forest s Black Falcons a Forestmen.",
    2022:"90. výročí LEGO: v anketě LEGO Ideas s 55 000 účastníky si fanoušci přáli klasický hrad a vznikl 10305 Hrad Lvího rytíře se 4 514 dílky a 22 minifigurkami (Lion Knights, Black Falcons, Forestmen, Majisto). K tomu dárek 40567 Úkryt lesních zbojníků a figurka rytíře žlutého hradu v sérii 23. Ve stejném roce vychází 31132 s Midgardským hadem.",
    2023:"Dárek 40601 Majisto a jeho kouzelná dílna (remake 6048 po 30 letech), minifigurka Falconer v sérii 24 a LEGO Ideas 21343 Vikingská vesnice.",
    2024:"LEGO Icons 10332 Středověké náměstí – vesnička Felsa s hospodou U Zlomené sekyry, inspirovaná vesnicí 10193 z roku 2009, s Lion Knights a Wolfpack. BrickLink Designer Program série 1: 910029 Mountain Fortress. Minifigurka Vampire Knight (série 25).",
    2025:"Rok BrickLink Designer Programu: série 3–6 přinesly Forest Stronghold, Siege Encampment, Medieval Seaside Market, Riverside Scholars a Outlaw Forest Den. Creator 31168 Středověký hrad a rytíři na koních uvádí nové frakce, 21358 Automat na minifigurky přidává Griffin Knights a Kraken Warriors. Minifigurka Wolfpack Beastmaster (série 27).",
    2026:"Dárek 40912 Mořský had pro Black Knights, vítěz soutěže LEGO Ideas „A Twist of Nostalgia“ (Insiders Days, červenec), BDP 910062 Alchemist's Shop a 910064 Dustmark Keep, 40952 LEGOLAND Castle. Na konci roku 2025 skončil prodej 10305 i 10332.",
    2027:"Oznámeno: BDP série 9, 910070 Sleepy Dragon Inn."
  };
  let h=`<div class="eyebrow">2016–2027</div><h1>${t("returnNav")}</h1>
  <p class="lede">${en?"LEGO has not released a standalone Castle line since 2014. Since 2021, however, the classic factions have been coming back in sets for adult fans, fan designs and gifts with purchase. Here it is year by year; the same sets also appear on each faction's page.":"Po roce 2014 už LEGO samostatnou řadu Castle nevydává. Od roku 2021 se ale klasické frakce vracejí v sadách pro dospělé fanoušky, v návrzích fanoušků a v dárcích k nákupu. Tady je vše rok po roku; stejné sety najdete i na stránkách jednotlivých frakcí."}</p>`;
  for(const y of Object.keys(YT).map(Number)){
    const ms=M.filter(m=>m.y===y);
    h+=`<h2 class="sec">${y}</h2><p>${esc(YT[y])}</p>${ms.length?tiles(ms.map(m=>tile({n:m.n},{extra:m.f.length?`<span class="tnote">${linkFactions(m.f)}</span>`:""}))):""}`;
  }
  return h;
}

/* ================== DIAGRAMY VZTAHŮ (interaktivní, všechny éry) ==================
   Uzel: id, x, y, lp (poloha popisku: t/b/l/r), fid (stránka frakce), name/desc {cs,en}, years, sh (vlastní štít) – jinak štít frakce.
   Hrana: [od, do, typ, popis cs, popis en, zakřivení]
   typy: off = konflikt doložený materiály LEGO, fan = konflikt podle fanoušků, ally = spojenectví/smíření,
         line = nástupce, legend = nástupce podle legendy na LEGO.com, with = společně v setech (vztah neznámý) */
const DIAS = [
 {id:"klasicka", cs:"Klasická éra 1978–1998", en:"Classic era 1978–1998", vb:[900,660],
  nodes:[
   {id:"crusaders",x:260,y:110,lp:"t"},{id:"black-falcons",x:620,y:110,lp:"t"},
   {id:"forestmen",x:160,y:330,lp:"l"},{id:"black-knights",x:450,y:330,lp:"b"},{id:"wolfpack",x:780,y:240,lp:"t"},
   {id:"dragon-masters",x:780,y:470,lp:"b"},{id:"dark-forest",x:160,y:560,lp:"b"},{id:"royal-knights",x:450,y:560,lp:"b"},
   {id:"fright-knights",x:690,y:610,lp:"r"}],
  edges:[
   ["crusaders","black-falcons","off","Rivalita Lion Knights a Black Falcons (sety, katalogy 1984–90; LEGO.com)","Lion Knights vs. Black Falcons rivalry (sets, catalogues 1984–90; LEGO.com)"],
   ["crusaders","black-falcons","ally","Smíření v 10305 Hrad Lvího rytíře (2022, text krabice)","Reconciled in 10305 Lion Knights' Castle (2022, box text)",90],
   ["crusaders","forestmen","fan","Konflikt podle scén v setech (např. 6042)","Conflict read from set scenes (e.g. 6042)"],
   ["crusaders","black-knights","off","Souboj v britských reklamách 1992","Battle in the 1992 UK adverts"],
   ["crusaders","royal-knights","legend","Legenda na LEGO.com: král Lví srdce přejmenoval Lion Knights na Royal Knights","Legend on LEGO.com: King Lionheart renamed the Lion Knights the Royal Knights",-40],
   ["black-falcons","black-knights","off","Obléhání v 6059, útok v 6057","Siege in 6059, attack in 6057",30],
   ["black-falcons","black-knights","legend","Legenda na LEGO.com: uprchlý vůdce Black Falcons založil Black Knights","Legend on LEGO.com: the fleeing Black Falcons leader founded the Black Knights",-50],
   ["forestmen","black-knights","off","Black Knight zajímá Robina Hooda (reklama LEGO)","A Black Knight captures Robin Hood (LEGO commercial)"],
   ["forestmen","wolfpack","off","LEGO History: Wolfpack jsou protivníci Forestmen","LEGO History: the Wolfpack are the Forestmen's opponents",330],
   ["forestmen","dark-forest","line","Dark Forest přebírá erb Forestmen","Dark Forest reuse the Forestmen crest"],
   ["black-knights","wolfpack","off","Zajatec v 6086, útok v 6057","Prisoner in 6086, attack in 6057"],
   ["black-knights","dragon-masters","off","Trojstranný boj v katalozích 1993–94; podle LEGO.com zahnali draci na útěk i Black Knights","Three-way fight in the 1993–94 catalogues; per LEGO.com the dragons sent even the Black Knights running"],
   ["wolfpack","dragon-masters","off","Wolfpack se bojí Dragon Masters (katalogy); podle LEGO.com se plíží po pevnosti 6082","The Wolfpack fear the Dragon Masters (catalogues); per LEGO.com they sneak around fortress 6082"],
   ["royal-knights","dragon-masters","off","Podle LEGO.com přišli Royal Knights v roce 1995 jako nový nepřítel Dragon Masters","Per LEGO.com the Royal Knights arrived in 1995 as a new foe of the Dragon Masters"],
   ["royal-knights","dark-forest","off","Katalog 1996: útok psanců","1996 catalogue: the outlaws attack"],
   ["royal-knights","fright-knights","off","Willa zajímá krále (komiks LEGO Mania)","Willa captures the King (LEGO Mania comic)"]
  ]},
 {id:"pribehy", cs:"Příběhová éra 2000–2006", en:"Story era 2000–2006", vb:[900,440],
  nodes:[
   {id:"kk-lions",fid:"knights-kingdom",x:120,y:110,lp:"t",years:"2000",name:{cs:"Lvi krále Lea",en:"King Leo's Lions"},desc:{cs:"Rytíři krále Lea, královna Leonora, princ Edward a princezna Storm – první úplná královská rodina hradní řady (LEGO History).",en:"King Leo's knights, Queen Leonora, Prince Edward and Princess Storm – the first complete royal family of the castle line (LEGO History)."}},
   {id:"kk-bulls",fid:"knights-kingdom",x:120,y:360,lp:"b",years:"2000",sh:{f:["#3a2a22"],p:"plain",b:"#b3282d",c:"#c9ced4"},name:{cs:"Býci",en:"The Bulls"},desc:{cs:"Armáda banditů pod velením Cedrica the Bull, žijící v Temném lese (LEGO History).",en:"An army of bandits under Cedric the Bull, living in the Dark Forest (LEGO History)."}},
   {id:"morcia",fid:"knights-kingdom-2",x:470,y:110,lp:"t",years:"2004–2006",name:{cs:"Rytíři Morcie",en:"Knights of Morcia"},desc:{cs:"Král Mathias (později Jayko) a rytíři Jayko, Santis, Rascus, Danju, Kentis a Adric.",en:"King Mathias (later Jayko) and the knights Jayko, Santis, Rascus, Danju, Kentis and Adric."}},
   {id:"shadow",fid:"knights-kingdom-2",x:360,y:360,lp:"b",years:"2004–2005",sh:{f:["#16181b"],p:"plain",b:"#5b2a6e",c:"#7a7f87"},name:{cs:"Vladek a Stínoví rytíři",en:"Vladek & Shadow Knights"},desc:{cs:"Zlý rytíř Vladek, který proměňuje rytíře ve Stínové rytíře; znakem je štír.",en:"The evil knight Vladek, who turns knights into Shadow Knights; his emblem is a scorpion."}},
   {id:"rogue",fid:"knights-kingdom-2",x:590,y:360,lp:"b",years:"2006",sh:{f:["#6b5a2a"],p:"plain",b:"#16181b",c:"#c9ced4"},name:{cs:"Rogue Knights",en:"Rogue Knights"},desc:{cs:"Vladekovi Rogue Knights Dracus a Karzon z roku 2006.",en:"Vladek's Rogue Knights Dracus and Karzon from 2006."}},
   {id:"vikings",fid:"vikingove",x:790,y:110,lp:"t",years:"2005–2006",name:{cs:"Vikingové",en:"Vikings"},desc:{cs:"Vikingští válečníci bez jmen.",en:"Unnamed Viking warriors."}},
   {id:"beasts",fid:"vikingove",x:790,y:360,lp:"b",years:"2005–2006",sh:{f:["#4a5a3a"],p:"plain",b:"#16181b",c:"#c5d34a"},name:{cs:"Severské bestie",en:"Norse beasts"},desc:{cs:"Fenrir, wyverna, Nidhogg, Midgardský had, Fafnir a Ofnir.",en:"Fenrir, a wyvern, Nidhogg, the Midgard Serpent, Fafnir and Ofnir."}}
  ],
  edges:[
   ["kk-lions","kk-bulls","off","LEGO History: král Leo vede rytíře proti banditům Cedrica the Bull","LEGO History: King Leo leads the knights against Cedric the Bull's bandits"],
   ["morcia","shadow","off","LEGO History: barevní rytíři bojují proti zlému rytíři Vladekovi","LEGO History: the colourful knights fight the evil knight Vladek"],
   ["morcia","rogue","off","2006: závod s Rogue Knights k Mistlands Tower","2006: the race with the Rogue Knights to the Mistlands Tower"],
   ["shadow","rogue","ally","Rogue Knights slouží Vladekovi (2006)","The Rogue Knights serve Vladek (2006)"],
   ["vikings","beasts","off","Každý set staví vikingy proti jedné bestii ze severské mytologie","Every set pits Vikings against a beast from Norse mythology"]
  ]},
 {id:"fantasy", cs:"Fantasy a Kingdoms 2007–2014", en:"Fantasy & Kingdoms 2007–2014", vb:[900,510],
  nodes:[
   {id:"crown",fid:"fantasy-era",x:250,y:110,lp:"t",years:"2007–2009",name:{cs:"Korunní rytíři",en:"Crown Knights"},desc:{cs:"Lidské království s korunou ve znaku: král, královna, princezna a zlatý šampion.",en:"The human kingdom with a crown emblem: king, queen, princess and the gold champion."}},
   {id:"skeletons",fid:"fantasy-era",x:90,y:300,lp:"b",years:"2007–2008",sh:{f:["#3a1214"],p:"plain",b:"#16181b",c:"#f2f2f2"},name:{cs:"Kostlivci",en:"Skeletons"},desc:{cs:"Kostlivá armáda zlého čaroděje (2007).",en:"The evil wizard's skeleton army (2007)."}},
   {id:"trolls",fid:"fantasy-era",x:250,y:420,lp:"b",years:"2008–2009",sh:{f:["#4a5a2a"],p:"plain",b:"#16181b",c:"#8a6a3a"},name:{cs:"Trollové",en:"Trolls"},desc:{cs:"Troll král, čarodějka a obří trollové (2008–2009).",en:"The Troll King, the sorceress and giant trolls (2008–2009)."}},
   {id:"dwarves",fid:"fantasy-era",x:420,y:300,lp:"b",years:"2007–2009",sh:{f:["#8a6a3a"],p:"plain",b:"#d7a521",c:"#c9ced4"},name:{cs:"Trpaslíci",en:"Dwarves"},desc:{cs:"Trpasličí král se zlatou okřídlenou přilbou a jeho doly.",en:"The Dwarf King with a golden winged helmet and his mines."}},
   {id:"k-lion",fid:"kingdoms",x:620,y:110,lp:"t",years:"2010–2012",sh:{f:["#b3282d"],p:"plain",b:"#d7a521",c:"#d7a521"},name:{cs:"Lví království",en:"Lion Kingdom"},desc:{cs:"Červení Lví rytíři vedení Lvím králem (LEGO History).",en:"The red Lion Knights led by the Lion King (LEGO History)."}},
   {id:"k-dragon",fid:"kingdoms",x:620,y:300,lp:"b",years:"2010–2012",sh:{f:["#2f6b3a"],p:"plain",b:"#16181b",c:"#d7a521"},name:{cs:"Dračí království",en:"Dragon Kingdom"},desc:{cs:"Zelení Dračí rytíři; jejich vůdce je neznámý, občas se naznačuje, že jde o čaroděje (LEGO History).",en:"The green Dragon Knights; their leader is unknown, sometimes implied to be a wizard (LEGO History)."}},
   {id:"c13-king",fid:"castle-2013",x:800,y:110,lp:"t",years:"2013–2014",name:{cs:"Královi rytíři",en:"King's Knights"},desc:{cs:"Modro-zlatá královská armáda se lvem na štítech.",en:"The blue and gold royal army with lions on their shields."}},
   {id:"c13-dragon",fid:"castle-2013",x:800,y:300,lp:"b",years:"2013–2014",sh:{f:["#b3282d"],p:"plain",b:"#16181b",c:"#16181b"},name:{cs:"Dračí rytíři",en:"Dragon Knights"},desc:{cs:"Vojáci Dračího čaroděje v červené a černé, ovládající velkého draka.",en:"The Dragon Wizard's soldiers in red and black, commanding a large dragon."}}
  ],
  edges:[
   ["crown","skeletons","off","2007: lidské království proti kostlivcům zlého čaroděje","2007: the human kingdom against the evil wizard's skeletons"],
   ["crown","trolls","off","2008–2009: útoky trollů na království","2008–2009: troll attacks on the kingdom"],
   ["dwarves","trolls","off","Všechny trpasličí sety je staví proti trollům","Every dwarf set pits them against the trolls"],
   ["crown","dwarves","fan","Spojenectví jen naznačené – někteří trpaslíci nosí korunu (výklad fanoušků)","An alliance only hinted at – some dwarves wear the crown (fan reading)"],
   ["k-lion","k-dragon","off","LEGO History: dvě lidská království ve válce","LEGO History: two human kingdoms at war"],
   ["c13-king","c13-dragon","off","Královi rytíři proti vojákům Dračího čaroděje","The King's Knights against the Dragon Wizard's soldiers"]
  ]},
 {id:"soucasne", cs:"Současné frakce 2025–", en:"Current factions 2025–", vb:[900,460],
  nodes:[
   {id:"horse-knights",x:200,y:110,lp:"t"},{id:"serpent-knights",x:450,y:300,lp:"b"},
   {id:"griffin-knights",x:700,y:110,lp:"t"},{id:"kraken-warriors",x:700,y:340,lp:"b"}],
  edges:[
   ["horse-knights","serpent-knights","fan","31168: jediný Serpent Knight jako soupeř na turnaji; 910064: dvanáct hadích bojovníků proti koňským rytířům","31168: a lone Serpent Knight as a tournament rival; 910064: twelve serpent warriors against Horse Knights"],
   ["griffin-knights","serpent-knights","with","Společně v 910064 Dustmark Keep (inventář Rebrickable); strany konfliktu nejsou oficiálně popsané","Together in 910064 Dustmark Keep (Rebrickable inventory); sides not officially described"],
   ["kraken-warriors","serpent-knights","with","Společně v 910064 Dustmark Keep (inventář Rebrickable)","Together in 910064 Dustmark Keep (Rebrickable inventory)"],
   ["griffin-knights","kraken-warriors","with","Představeni spolu v 21358 Automat na minifigurky; dál spolu v 910062 a 910064","Introduced together in 21358 Minifigure Vending Machine; together again in 910062 and 910064"],
   ["horse-knights","griffin-knights","with","Společně v 910062 Alchemist's Shop a 910064 Dustmark Keep","Together in 910062 Alchemist's Shop and 910064 Dustmark Keep"]
  ]},
 {id:"ninja", cs:"Ninja 1998–2000", en:"Ninja 1998–2000", vb:[900,300],
  nodes:[
   {id:"shogun",fid:"ninja",x:250,y:130,lp:"b",years:"1998–2000",name:{cs:"Šógun a šedí ninjové",en:"Shogun & grey ninjas"},desc:{cs:"Šógun Gi-Dan, samurajové a šedý ninja Ito.",en:"Shogun Gi-Dan, the samurai and grey ninja Ito."}},
   {id:"bandits",fid:"ninja",x:650,y:130,lp:"b",years:"1998–2000",sh:{f:["#3a3f46"],p:"plain",b:"#16181b",c:"#b3282d"},name:{cs:"Bandité Kendo a Bonsai",en:"Bandits Kendo & Bonsai"},desc:{cs:"Náčelník banditů Kendo a temný ninja Bonsai.",en:"Bandit chief Kendo and the dark ninja Bonsai."}}
  ],
  edges:[
   ["shogun","bandits","off","Šógun a šedí ninjové proti banditům (příběh z klubových časopisů); role červených ninjů je rozporná","The Shogun and grey ninjas against the bandits (club magazine story); the red ninjas' role is contradictory"]
  ]}
];
const DG={dia:"klasicka",node:null,link:null};
const curDia = () => DIAS.find(d=>d.id===DG.dia)||DIAS[0];
const dgLab = e => LANG==="en" ? e[4] : e[3];
const dgTag = k => (k==="fan"||k==="legend")?tag("fan"):(k==="line"||k==="with")?tag("unc"):tag("off");
const dnode = (d,id) => d.nodes.find(n=>n.id===id);
const dFac = n => fById(n.fid||n.id);
const dName = n => n.name ? n.name[LANG] : fx(dFac(n),"name").split(" /")[0];
const dYears = n => n.years || dFac(n).years;
const dSh = n => n.sh || dFac(n).sh;
function shieldUrl(f){ const p=SHIELD_PARTS[f.id]; if(!p) return null; const [part,col]=p.split("/"); return `https://img.bricklink.com/ItemImage/PN/${col}/${part}.png`; }
function dgPath(d,e){
  const A=dnode(d,e[0]), B=dnode(d,e[1]); const [x1,y1,x2,y2]=[A.x,A.y,B.x,B.y];
  if(e[5]){ // ohyb kolmo na spojnici
    const mx=(x1+x2)/2, my=(y1+y2)/2, dx=x2-x1, dy=y2-y1, L=Math.hypot(dx,dy)||1;
    const cx=mx-dy/L*e[5], cy=my+dx/L*e[5];
    return `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`;
  }
  return `M${x1} ${y1} L${x2} ${y2}`;
}
function dgLabel(n){
  const R=34, nm=esc(dName(n)), yr=esc(dYears(n));
  let x=n.x, y1, y2, anchor="middle";
  if(n.lp==="t"){ y1=n.y-R-24; y2=n.y-R-8; }
  else if(n.lp==="l"){ x=n.x-R-10; anchor="end"; y1=n.y-2; y2=n.y+15; }
  else if(n.lp==="r"){ x=n.x+R+10; anchor="start"; y1=n.y-2; y2=n.y+15; }
  else { y1=n.y+R+20; y2=n.y+R+37; }
  return `<text x="${x}" y="${y1}" text-anchor="${anchor}" class="dgt">${nm}</text><text x="${x}" y="${y2}" text-anchor="${anchor}" class="dgy">${yr}</text>`;
}
function dgInner(){
  const en=LANG==="en", d=curDia(), R=34;
  if(!DG.node || !dnode(d,DG.node)) DG.node=d.nodes[0].id;
  let edges="", hits="";
  d.edges.forEach((e,i)=>{
    const p=dgPath(d,e), on=DG.link===i, near=DG.link===null&&(e[0]===DG.node||e[1]===DG.node);
    edges+=`<path class="e-${e[2]}${on?" dg-sel":""}${near?" dg-near":""}" d="${p}"/>`;
    hits+=`<path class="dg-hit" d="${p}" data-dgl="${i}" tabindex="0" role="button" aria-label="${esc(dgLab(e))}"><title>${esc(dgLab(e))}</title></path>`;
  });
  let nodes="";
  for(const n of d.nodes){
    const f=dFac(n), sel=DG.node===n.id&&DG.link===null, u=(!n.sh&&!n.name)?shieldUrl(f):null;
    const sh=shield(dSh(n),40).replace('<svg ',`<svg x="${n.x-16}" y="${n.y-20}" `);
    nodes+=`<g class="dgn${sel?" sel":""}" data-dgn="${n.id}" tabindex="0" role="button" aria-label="${esc(dName(n))}">
      <circle cx="${n.x}" cy="${n.y}" r="${R}" class="dgc"/>${sh}${u?`<image href="${u}" x="${n.x-24}" y="${n.y-24}" width="48" height="48" preserveAspectRatio="xMidYMid meet" onerror="this.remove()"/>`:""}
      ${dgLabel(n)}</g>`;
  }
  const [W,H]=d.vb;
  const svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(d[LANG])}">${edges}${hits}${nodes}</svg>`;
  let side="";
  if(DG.link!==null && d.edges[DG.link]){
    const e=d.edges[DG.link], A=dnode(d,e[0]), B=dnode(d,e[1]);
    const kind={off:en?"Rivalry":"Rivalita",fan:en?"Rivalry (fan reading)":"Rivalita (výklad fanoušků)",ally:en?"Alliance / reconciliation":"Spojenectví / smíření",line:en?"Successor":"Nástupce",legend:en?"Successor per legend":"Nástupce podle legendy",with:en?"Together in sets":"Společně v setech"}[e[2]];
    const sh = (!A.fid&&!B.fid) ? sharedSets(A.id,B.id) : [];
    side=`<button type="button" class="dgback" data-dgn="${e[0]}">← ${en?"Back":"Zpět"}</button>
      <div class="eyebrow">${kind}</div>
      <h3 class="dgh">${esc(dName(A))} &amp; ${esc(dName(B))}</h3>
      <p>${esc(dgLab(e))} ${dgTag(e[2])}</p>
      ${sh.length?`<div class="dgg dgg-succ">${en?"Together in sets (inventories)":"Společně v setech (inventáře)"}</div><p class="tnote">${sh.slice(0,8).map(([id,c])=>`<a href="${bs(id)}" ${REL}>${esc(disp(id))} ${esc(c[0])}</a> (${c[1]})`).join(", ")}${sh.length>8?" …":""}</p>`:""}
      <div class="dgbtns">${[...new Set([dFac(A).id,dFac(B).id])].map(id=>`<a class="btn" href="#${id}">${esc(fx(fById(id),"name").split(" /")[0])} →</a>`).join("")}</div>`;
  } else {
    const n=dnode(d,DG.node), f=dFac(n);
    const text = n.desc ? n.desc[LANG] : String(fx(f,"intro")).split(/(?<=\.)\s/)[0];
    const rel=d.edges.map((e,i)=>[e,i]).filter(([e])=>e[0]===n.id||e[1]===n.id);
    const groups=[["ally",en?"Allies":"Spojenci",["ally"]],["riv",en?"Rivals and opponents":"Rivalové a protivníci",["off","fan"]],["succ",en?"Predecessors and successors":"Předchůdci a nástupci",["line","legend"]],["with",en?"Appear together in sets":"Společně v setech",["with"]]];
    const g=groups.map(([k,label,types])=>{
      const items=rel.filter(([e])=>types.includes(e[2]));
      if(!items.length) return "";
      return `<h4 class="dgg dgg-${k}">${label}</h4>`+items.map(([e,i])=>{const o=dnode(d,e[0]===n.id?e[1]:e[0]);
        return `<button type="button" class="dgrel" data-dgl="${i}"><span>${esc(dName(o))}</span><span class="dgmore">detail →</span></button>`;}).join("");
    }).join("");
    let co="";
    if(!n.fid){
      const list=F.map(o=>[o,sharedSets(f.id,o.id).length]).filter(([o,c])=>o.id!==f.id&&c>0).sort((x,y)=>y[1]-x[1]);
      if(list.length) co=`<h4 class="dgg">${en?"Shares sets with (inventories)":"Sdílí sety s (podle inventářů)"}</h4><p class="tnote dgco">${list.map(([o,c])=>`<a href="#${o.id}">${esc(fx(o,"name").split(" /")[0])}</a>&nbsp;${c}×`).join(" · ")}</p>`;
    }
    const em = (n.sh||n.name) ? `<span class="emb" style="height:52px;width:47px">${shield(dSh(n),52)}</span>` : emblem(f,52);
    side=`<div class="dghead">${em}<div><h3 class="dgh">${esc(dName(n))}</h3><div class="tnote">${esc(n.name?fx(f,"name"):fx(f,"alt"))} · ${esc(dYears(n))}</div></div></div>
      <p>${esc(text)}</p>${g}${co}
      <div class="dgbtns"><a class="btn" href="#${f.id}">${en?"Open faction page":"Otevřít stránku frakce"} →</a></div>`;
  }
  const tabs=`<div class="dgtabs" role="tablist">${DIAS.map(x=>`<button type="button" role="tab" class="dgtab" data-dgd="${x.id}" aria-selected="${x.id===d.id}">${esc(x[LANG])}</button>`).join("")}</div>`;
  return `${tabs}<div class="dggrid"><div class="dgsvg">${svg}</div><div class="dgside panel">${side}</div></div>`;
}
document.addEventListener("click",e=>{
  const wrap=e.target.closest("#dgwrap"); if(!wrap) return;
  const t=e.target.closest("[data-dgd]"), l=e.target.closest("[data-dgl]"), n=e.target.closest("[data-dgn]");
  if(t){DG.dia=t.dataset.dgd;DG.node=null;DG.link=null;}
  else if(l){DG.link=+l.dataset.dgl;}
  else if(n){DG.node=n.dataset.dgn;DG.link=null;}
  else return;
  wrap.innerHTML=MIR(dgInner()); rewriteLinks(wrap);
});
document.addEventListener("keydown",e=>{
  if(e.key!=="Enter"&&e.key!==" ") return;
  const t=e.target; if(!t.closest||!t.closest("#dgwrap")||!(t.dataset.dgl!==undefined||t.dataset.dgn)) return;
  e.preventDefault(); t.dispatchEvent(new MouseEvent("click",{bubbles:true}));
});
function vDiagram(){
  const en=LANG==="en";
  if(DG_PRE){ for(const d of DIAS){ const n=d.nodes.find(x=>(x.fid||x.id)===DG_PRE && !x.name) || d.nodes.find(x=>(x.fid||x.id)===DG_PRE); if(n){ DG.dia=d.id; DG.node=n.id; DG.link=null; break; } } DG_PRE=null; }
  const lists=DIAS.map(d=>`<h3>${esc(d[LANG])}</h3><ul class="facts">${d.edges.map(e=>{const A=dnode(d,e[0]),B=dnode(d,e[1]);
    return `<li><b>${esc(dName(A))}</b> ${e[2]==="ally"?(en?"⟷ alliance":"⟷ spojenectví"):(e[2]==="line"||e[2]==="legend")?(en?"→ successor":"→ nástupce"):e[2]==="with"?(en?"＋ together":"＋ společně"):"⚔"} <b>${esc(dName(B))}</b>: ${esc(dgLab(e))} ${dgTag(e[2])}</li>`;}).join("")}</ul>`).join("");
  return `
  <div class="eyebrow">${en?"Who fought whom":"Kdo s kým bojoval"}</div>
  <h1>${en?"Faction relationship map":"Diagram vztahů frakcí"}</h1>
  <p class="lede">${en?"LEGO never published an official faction diagram. These maps draw on the official faction guide and LEGO History pages on LEGO.com, on who stands against whom in the sets, catalogues and adverts, and on set inventories. LEGO.com itself notes that many stories of alliances and rivalries come from fans. Pick an era, click a faction to see its relationships, click a line or relationship for its source.":"LEGO nevydalo oficiální diagram frakcí. Tyto diagramy vycházejí z oficiálního průvodce frakcemi a stránek LEGO History na LEGO.com, z toho, kdo proti komu stojí v setech, katalozích a reklamách, a z inventářů setů. LEGO.com samo upozorňuje, že řada příběhů o spojenectvích a rivalitách vznikla mezi fanoušky. Vyberte éru, kliknutím na frakci zobrazíte její vztahy, kliknutím na čáru nebo vztah jeho zdroj."}</p>
  <div class="legend">
    <span><svg width="34" height="10"><path class="e-off" d="M2 5H32"/></svg>${en?"conflict documented in LEGO material":"konflikt doložený materiály LEGO"}</span>
    <span><svg width="34" height="10"><path class="e-fan" d="M2 5H32"/></svg>${en?"conflict per fans":"konflikt podle fanoušků"}</span>
    <span><svg width="34" height="10"><path class="e-ally" d="M2 5H32"/></svg>${en?"alliance / reconciliation":"spojenectví / smíření"}</span>
    <span><svg width="34" height="10"><path class="e-line" d="M2 5H32"/></svg>${en?"successor":"nástupce"}</span>
    <span><svg width="34" height="10"><path class="e-legend" d="M2 5H32"/></svg>${en?"successor per legend on LEGO.com":"nástupce podle legendy na LEGO.com"}</span>
    <span><svg width="34" height="10"><path class="e-with" d="M2 5H32"/></svg>${en?"together in sets, relationship unknown":"společně v setech, vztah neznámý"}</span>
  </div>
  <div class="dgwrap" id="dgwrap">${dgInner()}</div>
  <h2 class="sec">${en?"All relationships and sources":"Všechny vztahy a zdroje"}</h2>
  ${lists}`;
}

function vSources(){
  const en=LANG==="en";
  const L=[
    ["LEGO.com – The Complete Guide to all LEGO® Castle Factions","https://www.lego.com/en-us/categories/adults-welcome/article/lego-castle-factions",en?"Official overview of the classic factions: crests, leaders, key sets and the fan legends LEGO retells.":"Oficiální přehled klasických frakcí: erby, vůdci, hlavní sety a fanouškovské legendy, které LEGO převypráví."],
    ["LEGO.com – LEGO® History: LEGO Castle","https://www.lego.com/en-us/history/articles/f-lego-castle",en?"Official history of the theme from 1978 to Lion Knights' Castle.":"Oficiální historie řady od roku 1978 po Hrad Lvího rytíře."],
    [en?"LEGO.com – set pages":"lego.cz – stránky setů","https://www.lego.com/cs-cz",en?"Descriptions, Czech names, prices and availability of the sets.":"Popisy, české názvy, ceny a dostupnost setů."],
    ["Wikipedia – Lego Castle","https://en.wikipedia.org/wiki/Lego_Castle",en?"History, factions, regional names, quotes from catalogues and DK books (The LEGO Book, LEGO Minifigure: A Visual History).":"Historie, frakce, regionální názvy, citace katalogů a knih DK (The LEGO Book, LEGO Minifigure: A Visual History)."],
    ["Brickset – Castle","https://brickset.com/sets/theme-Castle",en?"Set lists by subtheme and year (282 items, 1978–2016).":"Seznamy setů podle podtémat a let (282 položek 1978–2016)."],
    [en?"Brickset – individual sets":"Brickset – jednotlivé sety","https://brickset.com/sets/31168-1",en?"Launch and exit dates, piece counts, faction tags on modern sets (e.g. 31168, 40912, 21358, 10305).":"Data uvedení a konce prodeje, počty dílků, štítky frakcí u moderních setů (např. 31168, 40912, 21358, 10305)."],
    ["Brickipedia (fandom)","https://brickipedia.fandom.com/wiki/Castle",en?"Crests, characters and the retold official story; quotes from the 10305 box and catalogue profiles.":"Erby, postavy a převyprávěný oficiální příběh; citace krabice 10305 a katalogových profilů."],
  ];
  return en ? `
  <div class="eyebrow">How this site was made</div>
  <h1>Sources and confidence</h1>
  <p class="lede">The site relies first on official LEGO material: the faction guide and LEGO History page on LEGO.com and the set descriptions in the LEGO shop. Texts are retold in our own words, not quoted verbatim. Where LEGO.com is silent, we add Wikipedia, Brickipedia and the Brickset database. Claims backed by LEGO material are marked ${tag("off")}.</p>
  <ul class="facts">${L.map(l=>`<li><a href="${l[1]}" ${REL}>${esc(l[0])}</a> – ${esc(l[2])}</li>`).join("")}</ul>
  <h2 class="sec">Good to know</h2>
  <ul class="facts">
    <li>Many faction names (Black Falcons, Classic Castle) were coined by fans; LEGO adopted them later or never.</li>
    <li>Regional catalogues tell different stories (e.g. Fright Knights in the US and Europe).</li>
    <li>Sale status is checked automatically once a week against LEGO.com and Brickset.</li>
    <li>Set photos load from images.brickset.com, minifigure photos from the BrickLink catalogue (img.bricklink.com). Faction crests are shown on original figures that carry them on a shield or torso. If a photo fails to load, the set number or a simplified coloured shield is shown.</li>
    <li>Original set lists cover the main sets; small polybags and accessories may be incomplete.</li>
    ${anyAff()?`<li>${t("affNote")}</li>`:""}
  </ul>` : `
  <div class="eyebrow">Jak vznikl tento web</div>
  <h1>Zdroje a míra jistoty</h1>
  <p class="lede">Web stojí především na oficiálních materiálech LEGO: průvodci frakcemi a stránce LEGO History na LEGO.com a na popisech setů z lego.cz. Texty jsou převyprávěné vlastními slovy, ne doslovně citované. Tam, kde LEGO.com mlčí, doplňujeme Wikipedii, Brickipedii a databázi Brickset. Tvrzení doložená materiály LEGO mají štítek ${tag("off")}.</p>
  <ul class="facts">${L.map(l=>`<li><a href="${l[1]}" ${REL}>${esc(l[0])}</a> – ${esc(l[2])}</li>`).join("")}</ul>
  <h2 class="sec">Co je potřeba vědět</h2>
  <ul class="facts">
    <li>Mnoho názvů frakcí (Black Falcons, Classic Castle) vzniklo mezi fanoušky; LEGO je převzalo až později nebo vůbec.</li>
    <li>Regionální katalogy se v příbězích liší (např. Fright Knights v USA a v Evropě).</li>
    <li>Stav prodeje se kontroluje automaticky jednou týdně podle lego.cz a Brickset.</li>
    <li>Názvy setů jsou v původní anglické podobě; lego.cz může používat české překlady.</li>
    <li>Fotky setů se načítají z images.brickset.com, fotky minifigurek z katalogu BrickLink (img.bricklink.com). Erby frakcí jsou ukázané na původních figurkách, které je nesou na štítu nebo trupu. Pokud se fotka nenačte, zobrazí se číslo setu nebo zjednodušený barevný štít.</li>
    <li>Seznamy původních setů pokrývají hlavní sety; drobné polybagy a doplňky nemusí být úplné.</li>
    ${anyAff()?`<li>${t("affNote")}</li>`:""}
  </ul>`;
}

function vSoon(){
  const en=LANG==="en", soon=M.filter(m=>m.st==="soon").sort((a,b)=>a.y-b.y);
  return `
  <div class="eyebrow">${en?"Announced and upcoming":"Oznámené a připravované"}</div>
  <h1>${en?"Coming soon":"Již brzy"}</h1>
  <p class="lede">${en
    ?"Castle and medieval sets that have been announced but are not on sale yet. We add a set here once it is officially announced or listed in the Brickset database; when it goes on sale, it moves to On sale now by itself."
    :"Hradní a středověké sety, které už jsou oznámené, ale ještě se neprodávají. Set sem přidáme, jakmile ho LEGO oficiálně oznámí nebo se objeví v databázi Brickset; po zahájení prodeje se sám přesune do sekce Teď v prodeji."}</p>
  ${zrows(soon)}
  <p class="note">${en
    ?"No new set with a classic faction (Lion Knights, Black Falcons, Forestmen and others) has been announced so far. Rumours and unconfirmed leaks are not listed."
    :"Zatím nebyl oznámen žádný nový set s klasickou frakcí (Lion Knights, Black Falcons, Forestmen a další). Spekulace a nepotvrzené úniky neuvádíme."}</p>`;
}
const UPDATED = {cs:"30. 10. 2026", en:"30 October 2026"};
function vPrivacy(){
  const en=LANG==="en";
  const mail=`<a href="mailto:${CONTACT}">${CONTACT}</a>`;
  return en ? `
  <div class="eyebrow">Last updated ${UPDATED.en}</div>
  <h1>Privacy Policy</h1>
  <p class="lede">This site is a free, unofficial information guide. It has no registration, no forms, no cookies and no analytics.</p>
  <h2 class="sec">Who runs the site</h2>
  <p>The site is run by the operator of vinmat.eu. Questions about privacy: ${mail}.</p>
  <h2 class="sec">What we process</h2>
  <ul class="facts">
    <li>We do not ask you for any personal data and we do not store any cookies.</li>
    <li>If you email us, we use your address and message only to reply and delete them when they are no longer needed.</li>
  </ul>
  <h2 class="sec">Services your browser connects to</h2>
  <p>When a page loads, your browser downloads parts of it from other servers. Like any web server, they receive your IP address and basic browser information:</p>
  <ul class="facts">
    <li><b>GitHub Pages</b> (GitHub, Inc.) – hosts the site.</li>
    <li><b>Google Fonts</b> (Google) – fonts.</li>
    <li><b>Brickset</b> (images.brickset.com) – set photos.</li>
    <li><b>BrickLink</b> (img.bricklink.com) – minifigure photos.</li>
  </ul>
  <p>Each of these services handles the data under its own privacy policy.</p>
  <h2 class="sec">Shop links</h2>
  <p>Links to shops (LEGO.com, eBay and others) may be affiliate links. Nothing is sent until you click. After a click, the shop may set its own cookies under its own rules; from the shop we only receive aggregate information about commissions, never your personal data.</p>
  <h2 class="sec">Your rights</h2>
  <p>Under the GDPR you have the right to access, correct and erase your data and to object to its processing. Write to ${mail}. You can also lodge a complaint with your data protection authority; in the Czech Republic this is the Office for Personal Data Protection (ÚOOÚ).</p>
  <h2 class="sec">Changes</h2>
  <p>We may update this policy; the current version is always on this page with its date.</p>` : `
  <div class="eyebrow">Platné od ${UPDATED.cs}</div>
  <h1>Zásady ochrany osobních údajů</h1>
  <p class="lede">Tento web je bezplatný neoficiální informační průvodce. Nemá registraci, formuláře, cookies ani analytické nástroje.</p>
  <h2 class="sec">Kdo web provozuje</h2>
  <p>Web provozuje provozovatel stránek vinmat.eu. Dotazy k ochraně soukromí: ${mail}.</p>
  <h2 class="sec">Jaké údaje zpracováváme</h2>
  <ul class="facts">
    <li>Nežádáme po vás žádné osobní údaje a neukládáme žádné cookies.</li>
    <li>Když nám napíšete e-mail, použijeme adresu a zprávu jen k odpovědi a smažeme je, jakmile nebudou potřeba.</li>
  </ul>
  <h2 class="sec">Služby, ke kterým se připojuje váš prohlížeč</h2>
  <p>Při načtení stránky si prohlížeč stahuje části obsahu z jiných serverů. Ty jako každý webový server dostanou vaši IP adresu a základní údaje o prohlížeči:</p>
  <ul class="facts">
    <li><b>GitHub Pages</b> (GitHub, Inc.) – hosting webu.</li>
    <li><b>Google Fonts</b> (Google) – písma.</li>
    <li><b>Brickset</b> (images.brickset.com) – fotky setů.</li>
    <li><b>BrickLink</b> (img.bricklink.com) – fotky minifigurek.</li>
  </ul>
  <p>Každá z těchto služeb s údaji nakládá podle svých vlastních zásad.</p>
  <h2 class="sec">Odkazy do obchodů</h2>
  <p>Odkazy do obchodů (lego.cz, Alza a další) mohou být partnerské. Dokud na ně nekliknete, nic se neodesílá. Po kliknutí si obchod může nastavit vlastní cookies podle svých pravidel; od obchodu dostáváme jen souhrnné údaje o provizích, nikdy vaše osobní údaje.</p>
  <h2 class="sec">Vaše práva</h2>
  <p>Podle GDPR máte právo na přístup ke svým údajům, jejich opravu a výmaz a právo vznést námitku. Napište na ${mail}. Stížnost můžete podat také u Úřadu pro ochranu osobních údajů (www.uoou.cz).</p>
  <h2 class="sec">Změny</h2>
  <p>Zásady můžeme upravit; aktuální znění je vždy na této stránce i s datem.</p>`;
}
function vTerms(){
  const en=LANG==="en";
  const mail=`<a href="mailto:${CONTACT}">${CONTACT}</a>`;
  const amz = AFF.amazon_tag ? (en?"<p>As an Amazon Associate I earn from qualifying purchases.</p>":"<p>Jako partner programu Amazon Associates získáváme provizi z kvalifikovaných nákupů.</p>") : "";
  return en ? `
  <div class="eyebrow">Last updated ${UPDATED.en}</div>
  <h1>Terms of Use</h1>
  <h2 class="sec">About the site</h2>
  <p>This is an unofficial fan guide to the history, factions and sets of the castle theme. LEGO® is a trademark of the LEGO Group of companies which does not sponsor, authorize or endorse this site. Set names and numbers are used only to identify the products.</p>
  <h2 class="sec">Content</h2>
  <ul class="facts">
    <li>The information comes from public sources (see Sources) and is provided for information only. It may contain errors; we are happy to fix them – write to ${mail}.</li>
    <li>Prices and availability are indicative. The information in the shop at the time of purchase always applies.</li>
    <li>Set and minifigure photos belong to their owners and are displayed from the Brickset and BrickLink servers.</li>
    <li>You are welcome to share links and quote short passages with a link to the source. Please do not copy whole texts without permission.</li>
  </ul>
  <h2 class="sec">Links and affiliate links</h2>
  <p>We are not responsible for the content of external sites. Some shop links may be affiliate links: if you buy something through them, we may earn a small commission at no extra cost to you. This does not affect what we write about the sets.</p>
  ${amz}
  <h2 class="sec">Changes and contact</h2>
  <p>We may update these terms; the current version is always on this page. Contact: ${mail}.</p>` : `
  <div class="eyebrow">Platné od ${UPDATED.cs}</div>
  <h1>Podmínky užití</h1>
  <h2 class="sec">O webu</h2>
  <p>Jde o neoficiální fanouškovský průvodce historií, frakcemi a sety hradní řady. LEGO® je ochranná známka skupiny LEGO, která tento web nesponzoruje, neschvaluje ani nepodporuje. Názvy a čísla setů uvádíme jen proto, abychom výrobky označili.</p>
  <h2 class="sec">Obsah</h2>
  <ul class="facts">
    <li>Informace pocházejí z veřejných zdrojů (viz Zdroje) a mají jen informativní charakter. Mohou obsahovat chyby; rádi je opravíme – napište na ${mail}.</li>
    <li>Ceny a dostupnost jsou orientační. Vždy platí údaje v obchodě v okamžiku nákupu.</li>
    <li>Fotky setů a minifigurek patří jejich vlastníkům a zobrazují se ze serverů Brickset a BrickLink.</li>
    <li>Odkazy na web můžete sdílet a krátké pasáže citovat s odkazem na zdroj. Celé texty prosím bez svolení nekopírujte.</li>
  </ul>
  <h2 class="sec">Odkazy a partnerské odkazy</h2>
  <p>Za obsah cizích webů neodpovídáme. Některé odkazy do obchodů mohou být partnerské: když přes ně nakoupíte, můžeme získat malou provizi a cena pro vás zůstává stejná. Na to, co o setech píšeme, to nemá vliv.</p>
  ${amz}
  <h2 class="sec">Změny a kontakt</h2>
  <p>Podmínky můžeme upravit; aktuální znění je vždy na této stránce. Kontakt: ${mail}.</p>`;
}


/* ================== NOČNÍ REŽIM ================== */
const THEME_KEY="castle-theme";
function currentTheme(){
  const set=document.documentElement.dataset.theme;
  if(set) return set;
  return window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyThemeButton(){
  const dark=currentTheme()==="dark", b=$("#themebtn"); if(!b) return;
  b.textContent = dark ? "☀" : "☾";
  b.title = LANG==="cs" ? (dark?"Denní režim":"Noční režim") : (dark?"Light mode":"Dark mode");
  b.setAttribute("aria-label", b.title);
}
try{ const v=localStorage.getItem(THEME_KEY); if(v==="dark"||v==="light") document.documentElement.dataset.theme=v; }catch(e){}
document.addEventListener("click",e=>{
  if(!e.target.closest("#themebtn")) return;
  const next=currentTheme()==="dark"?"light":"dark";
  document.documentElement.dataset.theme=next;
  try{ localStorage.setItem(THEME_KEY,next); }catch(e){}
  applyThemeButton();
});
/* ================== ROUTER ================== */
/* ================== ADRESY STRÁNEK ==================
   Na vinmat.eu má každá sekce vlastní adresu (…/castle/black-falcons/), jinde (náhled) se přepíná přes #. */
const ROUTES_STATIC=["uvod","diagram","v-prodeji","nedavno-vyrazeno","navrat","brzy","zdroje","soukromi","podminky"];
const SITE="https://vinmat.eu";
const routeUrl = (id,lang=LANG) => PATHS[lang] + (!id||id==="uvod" ? "" : id+"/");
function routeId(){
  const h=location.hash.slice(1);
  if(h && (!DEPLOYED || fById(h) || ROUTES_STATIC.includes(h) || h==="moderni-sety")) return h;
  if(DEPLOYED){ const m=location.pathname.match(/\/bricks\/(?:cs\/)?castle\/([^\/]+)\/?$/); if(m) return m[1]; }
  return "uvod";
}
function rewriteLinks(root=document){
  if(!DEPLOYED) return;
  root.querySelectorAll('a[href^="#"]').forEach(a=>{ const id=a.getAttribute("href").slice(1); if(!id) return;
    let u=routeUrl(id); if(a.dataset.dgf) u+="?f="+a.dataset.dgf; if(a.dataset.allf) u+="#frakce"; a.setAttribute("href",u); });
}
// diagram otevřený z frakce: ?f=… (na webu) nebo kliknutí (náhled)
let DG_PRE = (()=>{ try{ return new URLSearchParams(location.search).get("f"); }catch(e){ return null; } })();
document.addEventListener("click",e=>{ const a=e.target.closest("a[data-dgf]"); if(a && !DEPLOYED) DG_PRE=a.dataset.dgf; const b=e.target.closest("a[data-allf]"); if(b && !DEPLOYED) setTimeout(()=>{ const g=document.getElementById("frakce"); if(g) g.scrollIntoView(); },60); });
function pageMeta(r){
  const en=LANG==="en", f=fById(r), brand=t("brand");
  const nav=Object.fromEntries(t("nav"));
  const T={diagram:nav.diagram,"v-prodeji":nav["v-prodeji"],"nedavno-vyrazeno":nav["nedavno-vyrazeno"],brzy:nav.brzy,zdroje:nav.zdroje,
    navrat:t("returnNav"),soukromi:en?"Privacy Policy":"Zásady ochrany osobních údajů",podminky:en?"Terms of Use":"Podmínky užití"};
  const D={
    diagram:en?"Who fought whom in the LEGO Castle theme: interactive maps of faction rivalries, alliances and successors for every era, with sources.":"Kdo s kým bojoval v řadě LEGO Castle: interaktivní diagramy rivalit, spojenectví a nástupců frakcí pro všechny éry, se zdroji.",
    "v-prodeji":en?"Castle and medieval LEGO sets on sale now, with direct shop links and weekly availability checks.":"Hradní a středověké sety LEGO, které se teď prodávají na lego.cz, s odkazy do obchodů a týdenní kontrolou dostupnosti.",
    "nedavno-vyrazeno":en?"Castle and medieval LEGO sets retired in recent years and where to find them.":"Hradní a středověké sety LEGO vyřazené v posledních letech – co se dá ještě sehnat.",
    navrat:en?"The return of LEGO Castle 2016–2027 year by year: Lion Knights' Castle, Medieval Town Square, BrickLink Designer Program and more.":"Návrat řady LEGO Castle 2016–2027 rok po roku: Hrad Lvího rytíře, Středověké náměstí, BrickLink Designer Program a další.",
    brzy:en?"Announced castle and medieval LEGO sets that are coming soon.":"Oznámené hradní a středověké sety LEGO, které teprve vyjdou.",
    zdroje:en?"Sources and confidence: official LEGO.com articles, Rebrickable, Brickset, Wikipedia and Brickipedia.":"Zdroje a míra jistoty: oficiální články LEGO.com, Rebrickable, Brickset, Wikipedie a Brickipedie.",
    soukromi:en?"Privacy policy of the Castle Chronicle fan site: no cookies or tracking, which external servers load images, and how shop links work.":"Zásady ochrany osobních údajů webu Hradní kronika: žádné cookies ani sledování, které servery načítají obrázky a jak fungují odkazy do obchodů.",
    podminky:en?"Terms of use of the Castle Chronicle fan site: unofficial fan project, trademarks, image sources, shop links and contact.":"Podmínky užití fanouškovského webu Hradní kronika: neoficiální projekt, ochranné známky, zdroje obrázků, odkazy do obchodů a kontakt.",
    uvod:en?"An unofficial guide to the LEGO® Castle theme 1978–2026: all factions from Lion Knights and Black Falcons to Horse Knights, their crests, history, relationships and sets.":"Neoficiální průvodce řadou LEGO® Castle 1978–2026: všechny frakce od Lion Knights a Black Falcons po Horse Knights, jejich erby, historie, vztahy a sety."
  };
  let title, desc;
  if(f){ title=`${fx(f,"name")} – ${en?"LEGO Castle faction":"frakce LEGO Castle"} | ${brand}`; desc=String(fx(f,"intro")).split(/(?<=\.)\s/).slice(0,2).join(" "); }
  else if(r==="uvod"){ title=en?`${brand} – LEGO® Castle factions, history and sets`:`${brand} – frakce, historie a sety LEGO® Castle`; desc=D.uvod; }
  else { title=`${T[r]||brand} | ${brand}`; desc=D[r]||D.uvod; }
  if(desc.length>300) desc=desc.slice(0,297).replace(/\s+\S*$/,"")+"…";
  return {title,desc};
}
function setHead(sel,attrs){
  let el=document.head.querySelector(sel);
  if(!el){ el=document.createElement(sel.startsWith("meta")?"meta":"link"); document.head.appendChild(el); }
  for(const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);
}
function applyMeta(r){
  const {title,desc}=pageMeta(r);
  document.title=title;
  setHead('meta[name="description"]',{name:"description",content:desc});
  setHead('meta[property="og:title"]',{property:"og:title",content:title});
  setHead('meta[property="og:description"]',{property:"og:description",content:desc});
  setHead('link[rel="canonical"]',{rel:"canonical",href:SITE+routeUrl(r)});
  setHead('link[rel="alternate"][hreflang="cs"]',{rel:"alternate",hreflang:"cs",href:SITE+routeUrl(r,"cs")});
  setHead('link[rel="alternate"][hreflang="en"]',{rel:"alternate",hreflang:"en",href:SITE+routeUrl(r,"en")});
  setHead('link[rel="alternate"][hreflang="x-default"]',{rel:"alternate",hreflang:"x-default",href:SITE+routeUrl(r,"en")});
}
function route(keepScroll){
  SETREG.clear();
  let r=routeId();
  if(r==="moderni-sety") r="nedavno-vyrazeno";
  // staré odkazy s # převést na skutečné adresy
  { const hr=location.hash.slice(1); if(DEPLOYED && hr && (fById(hr)||ROUTES_STATIC.includes(hr)||hr==="moderni-sety")){ location.replace(routeUrl(r)); return; } }
  const f=fById(r);
  let html;
  if(f) html=vFaction(f);
  else if(r==="diagram") html=vDiagram();
  else if(r==="v-prodeji") html=vSale();
  else if(r==="nedavno-vyrazeno") html=vRetired();
  else if(r==="zdroje") html=vSources();
  else if(r==="navrat") html=vReturn();
  else if(r==="brzy") html=vSoon();
  else if(r==="soukromi") html=vPrivacy();
  else if(r==="podminky") html=vTerms();
  else { r="uvod"; html=vHome(); }
  const oldStl=$(".stl"), keepSL = keepScroll && oldStl && fById(r) ? oldStl.scrollLeft : null;
  $("#view").innerHTML=MIR(html);
  document.querySelectorAll("nav.main a, aside a").forEach(a=>{
    const h=a.getAttribute("href"); if(h==="#"+r||h===routeUrl(r)) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
  });
  rewriteLinks(document);
  document.querySelectorAll("nav.main a, aside a").forEach(a=>{ if(a.getAttribute("href")===routeUrl(r)) a.setAttribute("aria-current","page"); });
  applyMeta(r);
  afterRender(!!f, keepScroll, keepSL);
  if(!keepScroll){ const anc=DEPLOYED&&location.hash.length>1&&document.getElementById(location.hash.slice(1)); if(anc) anc.scrollIntoView(); else window.scrollTo(0,0); }
}
/* po vykreslení: režim stránky frakce (bez levého menu, sekce přes celou obrazovku), časová osa setů */
let fObs=null;
function afterRender(isF, keep, sl){
  document.documentElement.classList.toggle("fmode", isF);
  const dlg=$("#setdlg"); if(dlg && dlg.open && !keep) dlg.close();
  if(fObs){ fObs.disconnect(); fObs=null; }
  if(!isF) return;
  const s=$(".stl");
  if(s){
    s.style.scrollBehavior="auto";
    if(sl!=null) s.scrollLeft=sl;
    else { const c=s.querySelector(".tlc.cur"); if(c) s.scrollLeft=c.offsetLeft+c.offsetWidth/2-s.clientWidth/2; }
    s.style.scrollBehavior="";
    dragScroll(s);
  }
  const dots=[...document.querySelectorAll(".fdots button")];
  if("IntersectionObserver" in window && dots.length){
    fObs=new IntersectionObserver(es=>{ for(const e of es) if(e.isIntersecting) dots.forEach(b=>b.setAttribute("aria-current", String(b.dataset.goto===e.target.id))); },{rootMargin:"-45% 0px -45% 0px"});
    document.querySelectorAll(".fs").forEach(x=>fObs.observe(x));
  }
}
// posouvání časové osy tažením myší
function dragScroll(s){
  if(s.dataset.drag) return; s.dataset.drag="1";
  let x0=0,l0=0,down=false,moved=false;
  s.addEventListener("pointerdown",e=>{ if(e.pointerType!=="mouse"||e.button!==0) return; down=true; moved=false; x0=e.clientX; l0=s.scrollLeft; });
  s.addEventListener("pointermove",e=>{ if(!down) return; const dx=e.clientX-x0; if(!moved&&Math.abs(dx)>5){ moved=true; s.classList.add("drag"); } if(moved) s.scrollLeft=l0-dx; });
  const up=()=>{ down=false; s.classList.remove("drag"); };
  s.addEventListener("pointerup",up); s.addEventListener("pointerleave",up); s.addEventListener("pointercancel",up);
  s.addEventListener("click",e=>{ if(moved){ e.preventDefault(); e.stopPropagation(); moved=false; } },true);
}
// ukotvená hlavička (výška do --hh) a tlačítko Nahoru
(function(){
  const h=$("header.top"), root=document.documentElement;
  const set=()=>root.style.setProperty("--hh",h.offsetHeight+"px");
  set(); if(window.ResizeObserver) new ResizeObserver(set).observe(h);
  const tt=$("#totop");
  const onS=()=>{ const y=window.scrollY; root.classList.toggle("scrolled",y>4); if(tt) tt.classList.toggle("show",y>600); };
  addEventListener("scroll",onS,{passive:true}); onS();
  if(tt) tt.addEventListener("click",()=>{ root.style.scrollSnapType="none"; window.scrollTo({top:0,behavior:"smooth"}); setTimeout(()=>root.style.scrollSnapType="",900); });
})();
renderChrome();
applyThemeButton();
window.addEventListener("hashchange",()=>route());
route();

/* ================== ŽIVÝ STAV PRODEJE ==================
   1) Na vinmat.eu: status.json (CZ verze) – aktualizuje ho týdenní GitHub Action.
   2) Na claude.ai: kolekce "stav" v databázi stránky.
   Jinak zůstává statický stav z dat výše. */
function applyStatus(id,v){
  let m=M.find(x=>x.n===id);
  if(!m && v.name){m={n:id,name:v.name,y:v.y||new Date().getFullYear(),pcs:v.pcs||null,line:v.line||"",f:v.f||[],st:"off",note:""};M.push(m);}
  if(!m) return;
  if(v.st) m.st=v.st;
  if(v.url) m.url=v.url;
  if(v.price) m.price=v.price;
  if(v.st==="off" && v.exit) m.retiredOn=v.exit;
  if(v.note){ m.note=v.note; m.noteEn = v.note===UI.cs.soldOutTmp ? UI.en.soldOutTmp : v.note; }
}
(async()=>{
  try{
    if(location.protocol.startsWith("http")){
      const url = DEPLOYED ? "/bricks/cs/castle/status.json" : "status.json";
      const r=await fetch(url,{cache:"no-cache"});
      if(r.ok){
        const j=await r.json();
        LIVE.checked = LANG==="en" && j.checked ? new Date(j.checked).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}) : (j.checkedLabel||j.checked);
        for(const [id,v] of Object.entries(j.sets||{})) applyStatus(id,v);
        route(true); return;
      }
    }
  }catch(e){}
  try{
    const db = window.claude && await window.claude.use("db");
    if(!db) return;
    db.collection("stav").onSnapshot(snap=>{
      for(const d of snap.docs){
        const v=d.data(); if(!v) continue;
        if(d.id==="_meta"){LIVE.checked=v.checked;continue;}
        applyStatus(d.id,v);
      }
      route(true);
    },()=>{});
  }catch(e){}
})();
