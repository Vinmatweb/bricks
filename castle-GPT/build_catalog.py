"""Build a dated, attributed Castle catalogue from Rebrickable's public CSV exports.
No API keys. The curated faction mapping is kept separately from source inventories.
Run: python build_catalog.py --data-dir /path/to/downloaded/csv.gz
"""
import csv, gzip, json, re, argparse, collections
from pathlib import Path

args=argparse.ArgumentParser();args.add_argument('--data-dir',required=True);opt=args.parse_args()
root=Path(__file__).parent; cache=Path(opt.data_dir)
def read(n): return list(csv.DictReader(gzip.open(cache/(n+'.csv.gz'),'rt')))
themes={x['id']:x for x in read('themes')}
allsets={x['set_num']:x for x in read('sets')}
allfigs={x['fig_num']:x for x in read('minifigs')}
latest={}
for x in read('inventories'):
 if x['set_num'] not in latest or int(x['version'])>int(latest[x['set_num']]['version']):latest[x['set_num']]=x
inv_to_set={x['id']:k for k,x in latest.items()}
setfig=collections.defaultdict(dict); figsets=collections.defaultdict(set)
for x in read('inventory_minifigs'):
 s=inv_to_set.get(x['inventory_id'])
 if s and s in allsets:
  setfig[s][x['fig_num']]=int(x['quantity']);figsets[x['fig_num']].add(s)

# ID, Czech name, English name, debut, era, palette, representative set, representative figure,
# recognition, history, catalogue note, primary catalogue category where available.
spec=[
('lion','Lví rytíři','Crusaders / Lion Knights',1984,'Klasické frakce','#a54132','10305-1','fig-012994','Lev ve vzpřímeném postoji. Klasická modrá a červená, v novější podobě výrazné červené oděvy.','Jedna ze dvou hlavních skupin restartu Castle v roce 1984. Moderní návrat přinesl Hrad Lvího rytíře a později Středověké náměstí.','Crusaders a Lion Knights bývají v katalozích dělené různě; zde tvoří jednu historickou linii. Kingdoms a Castle 2013 mají vlastní stránky.',291),
('falcon','Černí sokoli','Black Falcons',1984,'Klasické frakce','#355f86','6074-1','fig-012998','Černobílý sokol s roztaženými křídly; převládají modré oděvy a tmavá zbroj.','Klasická rivalita se Lvími rytíři patří k základům Castle. Obnovené figurky se vrátily v roce 2021 a výrazně se rozšířily díky BrickLink Designer Programu.','Black Falcons nejsou Black Knights. Obě frakce mají odlišné erby i vlastní katalogové skupiny.',289),
('forest','Lesní zbojníci','Forestmen / Forest People',1987,'Klasické frakce','#47734f','6066-1','fig-012855','Jelení hlava na zeleném štítu, zelené klobouky, luky a úkryty ve stromech.','Lesní skupina inspirovaná prostředím Robina Hooda rozšířila Castle mimo kamenné hrady. Její figurky dnes najdeš i ve velkých BrickLink pevnostech.','Dark Forest z roku 1996 má vlastní stránku. Shodný erb sám o sobě neznamená shodnou sérii.',288),
('black','Černí rytíři','Black Knights',1988,'Klasické frakce','#414d59','6086-1','fig-006587','Dračí erb v modré, červené a žluté; hrady se silným zastoupením černé barvy.','Frakci otevřel Black Monarch’s Castle. Velké hrady a lodě ji odlišovaly od starších šedých pevností.','Dračí erb nezaměňuj s Dragon Masters z roku 1993 ani s draky Kingdoms. Samostatný štít v novém setu evidujeme jako heraldický odkaz.',278),
('wolf','Vlčí smečka','Wolfpack',1992,'Klasické frakce','#79634d','910057-1','fig-017433','Vlčí hlava, hnědé a černé oblečení, kápě a výraz lupičů.','Původní malá skupina měla jen několik vlastních setů, ale její figurky hostovaly i u jiných frakcí. Nový domov získala v Outlaw Forest Den.','Wolfpack ze Star Wars sem nepatří. Figurky rozlišujeme podle konkrétního Castle inventáře.',286),
('dragon','Dračí mistři','Dragon Masters / Dragon Knights',1993,'Klasické frakce','#497755','6082-1','fig-014421','Dračí motiv, zelené a červené detaily a kouzelník Majisto v modrém.','S Dračími mistry vstoupili do Castle skuteční draci a výraznější magie. Majistova dílna se později dočkala moderní pocty.','Jméno Dragon Knights používá více různých řad. Zde jde o původní skupinu z 90. let.',281),
('royal','Královští rytíři','Royal Knights',1995,'Klasické frakce','#b25047','6090-1','fig-007107','Korunovaná lví hlava na červenobílém erbu a král s korunou.','Král a jeho hrad tvoří střed této řady. Frakce navázala na tradiční rytířský svět v době, kdy Castle stále více pronikalo do fantasy.','Royal Knights nejsou automaticky všichni rytíři s králem. Rozhoduje konkrétní erb a inventář.',285),
('dark','Temný les','Dark Forest',1996,'Klasické frakce','#435a43','6079-1','fig-006877','Lesní skrýše, hnědé kápě a znovu použitý jelení erb.','Krátká řada tří původních setů navázala na lesní zbojníky. Oproti starším Forestmen má jinou podobu minifigurek.','Série a frakce se mohou překrývat. Hostující rytíři v těchto setech zůstávají u své frakce.',280),
('fright','Netopýří rytíři','Fright Knights',1997,'Klasické frakce','#744d68','6097-1','fig-014653','Netopýří erb, černá a červená, okřídlená přilba Basila a čarodějnice Willa.','Pozdní Castle spojilo rytíře s temným fantasy. Moderní Vampire Knight ze sběratelských minifigurek připomíná Basila.','Samostatní strašidelní rytíři CMF nejsou bez dalšího důkazu automaticky členy stejné frakce.',282),
('classic','Rytíři žlutého hradu','Classic Castle',1978,'Počátky','#bf9b46','375-1','fig-004436','Několik samostatných geometrických erbů a raná pohyblivá hledí přileb.','Žlutý hrad otevřel éru Castle s minifigurkami. Rané sety používají několik erbovních skupin, které ještě netvoří pozdější jednotné frakce.','Jde o přehled raného období. Jednotlivé erby z let 1978–1979 nepovažujeme za jednu sjednocenou armádu.',290),
('leo','Království krále Lea','King Leo’s Kingdom',2000,'Knights’ Kingdom','#b35b43','6098-1','fig-001002','Lví královské motivy a postavy krále Lea a princezny Storm.','První Knights’ Kingdom vypráví konflikt království s Cedrikovými Býky. Na rozdíl od původního Castle má konkrétně pojmenované hlavní postavy.','Jedná se o Knights’ Kingdom I. Barevní hrdinové z roku 2004 patří do samostatného světa Morcie.',None),
('bull','Býčí rytíři','Bull Knights',2000,'Knights’ Kingdom','#726053','6096-1','fig-000097','Býčí motiv, tmavá zbroj a vůdce Cedric the Bull.','Protivníci krále Lea používají obléhací a útočné stroje. Jejich příběh tvoří druhou stranu Knights’ Kingdom I.','Samotné podobné rohy na přilbě nejsou důkazem příslušnosti.',None),
('morcia','Hrdinové Morcie','Morcia / Hero Knights',2004,'Knights’ Kingdom','#5271a0','8877-1','fig-000639','Barevně odlišení hrdinové Jayko, Santis, Rascus a Danju.','Knights’ Kingdom II staví na osobních hrdinech a konfliktu s Vladekem. Vedle minifigurek vyšly i velké sestavitelné akční postavy.','Velké akční postavy jsou v setech, ale nemají minifigurový inventář. Nejde o chybějící minifigurky.',None),
('shadow','Stínoví rytíři','Shadow Knights / Vladek',2004,'Knights’ Kingdom','#6a4656','8877-1','fig-005779','Štíří motiv a temná zbroj Vladeka a jeho vojáků.','Temná armáda je hlavním protivníkem hrdinů Morcie. Jméno jednotlivého hrdiny není automaticky jménem další frakce.','Rogue Knights z pozdějších let evidujeme samostatně.',None),
('rogue','Odpadlí rytíři','Rogue Knights',2006,'Knights’ Kingdom','#8b7445','8823-1','fig-010050','Pozdní bojovníci Knights’ Kingdom II, například Karzon a Dracus.','Pozdější etapa Knights’ Kingdom II přidala nové protivníky a postavy. Zůstává součástí stejného světa jako Morcia.','Příslušnost určujeme z názvu a inventáře; jednotlivé osobní erby neměníme na domnělé samostatné armády.',None),
('crown','Korunní rytíři','Crown Knights',2007,'Fantasy Era','#425c82','7094-1','fig-009923','Zlatá koruna, tmavě modré oděvy a stříbrná zbroj.','Lidské království éry 2007–2009 čelí kostlivcům a trollům. Doplňuje ho civilní středověká vesnice.','Fantasy Era je název období, nikoli jedné frakce. Trpaslíci, trollové a kostlivci mají vlastní stránky.',None),
('dwarf','Trpaslíci','Dwarves',2007,'Fantasy Era','#9b754d','7036-1','fig-009902','Nízké postavy, dlouhé vousy a výrazné kovové přilby.','Trpasličí doly přinesly do fantasy Castle další skupinu. Trpaslíky najdeme i v novějších fantasy stavbách.','Trpaslíci z licencovaného Pána prstenů nejsou součástí této frakce.',None),
('troll','Trollové a orkové','Troll Warriors / Orcs',2007,'Fantasy Era','#728258','7097-1','fig-009908','Zelené tváře, hrubá výzbroj a velcí trollové vedle běžných figurek.','Trollové patří mezi hlavní nepřátele fantasy Castle. Tvoří je malí orčí bojovníci i velké figurky trollů.','Bigfigové jsou zahrnuti podle inventáře Rebrickable, přestože nejde o standardní minifigurku.',None),
('skeleton','Armáda kostlivců','Skeleton Army',2007,'Fantasy Era','#777167','7093-1','fig-009907','Bílí či černí kostlivci, často s rudýma očima, a zbroj fantasy bojovníků.','Nemrtvá armáda doprovází návrat Castle v roce 2007. Je propojena s temným kouzelníkem a útoky na lidské království.','Běžný kostlivec v jiném setu je neutrální inventář, nikoli automaticky člen této armády.',None),
('kingdom-lion','Červení lvi','Lion Kingdom · Kingdoms',2010,'Kingdoms a Castle 2013','#aa4d3f','7946-1','fig-010082','Červená královská výstroj a lví motiv řady Kingdoms.','Kingdoms se po fantasy soustředilo na soupeření dvou lidských království. Červená strana má krále, královnu a velký hrad.','Odděleno od klasických Crusaders i modrých lvů z roku 2013.',None),
('kingdom-dragon','Zelení draci','Dragon Kingdom · Kingdoms',2010,'Kingdoms a Castle 2013','#4c6753','7947-1','fig-010078','Tmavě zelené oděvy, tmavá zbroj a dračí erb.','Druhá strana konfliktu Kingdoms staví na tmavší paletě. Figurky se objevují i v menších přepadových a vězeňských setech.','Nejde o Majistovy Dragon Masters ani o červené Dragon Soldiers z roku 2013.',None),
('blue-lion','Modří lvi','King’s Knights · Castle 2013',2013,'Kingdoms a Castle 2013','#4e76a5','70404-1','fig-010112','Modré oděvy, lví motiv a světlá rytířská zbroj.','Návrat Castle v roce 2013 postavil modré královské rytíře proti červeným dračím vojákům.','Přes podobná jména jde o samostatný design od Kingdoms i původních Lvích rytířů.',None),
('red-dragon','Červení draci','Dragon Soldiers · Castle 2013',2013,'Kingdoms a Castle 2013','#95483d','70403-1','fig-010062','Červené oděvy, temná zbroj a odlišný dračí erb.','Protivníci modrého království používají mimo jiné Dračí horu. Řada kombinuje lidský konflikt s fantasy prvky.','Zde patří i jejich doplňková figurková sada 850889. Některé databáze ji řadí pod obecné Dragon Knights.',None),
('horse','Koňští rytíři','Horse Knights',2025,'Nové erby','#8c6844','31168-1','fig-016595','Kůň na erbu, bílé tuniky a červenomodré detaily.','Nová skupina debutovala v Creator 3 v 1. Další použití těchto motivů přinesly BrickLink středověké stavby.','Historie této skupiny je zatím krátká. Starší bílé tuniky samy o sobě nejsou důkazem příslušnosti.',None),
('griffin','Gryfí rytíři','Griffin Knights',2025,'Nové erby','#79504e','21358-1','fig-016357','Gryfí erb a v první podobě tmavě červené oděvy.','Jedna z nových erbovních skupin Automatu na minifigurky. Objevuje se i v nových BrickLink setech.','Set 21358 obsahuje také mnoho figurek jiných témat. Započítané jsou jen příslušné rytířské figurky.',None),
('kraken','Krakení válečníci','Kraken Warriors',2025,'Nové erby','#437a75','21358-1','fig-016354','Kraken na kulatém štítu a zelenomodrá barevnost.','Druhá nová skupina z Automatu na minifigurky propojuje námořní motiv s fantasy rytíři. Další varianty používá BrickLink Designer Program.','Nezaměňovat s Krakenem nebo postavami jiných licencovaných témat.',None),
('serpent','Hadí rytíři','Serpent / Snake Knights',2025,'Nové erby','#62554d','910064-1','fig-016598','Hadí znak, černá zbroj a žluté detaily.','Samostatný hadí rytíř z Creator 31168 se motivem propojuje s bojovníky Dustmark Keep. Jejich zařazení zde vychází z názvů nového inventáře.','Hadí frakce je mladá a její pojmenování není ustálené. Ninjago Serpentine sem nezahrnujeme.',None),
('independent','Samostatní rytíři','Independent Knights · CMF',2011,'Samostatné postavy','#74628c','71027-6','fig-008798','Osobní erby a motivy jednotlivých sběratelských rytířů.','Sběratelské minifigurky rozšiřují středověký svět i bez vlastního hradu. Některé navazují na klasické frakce, jiné zůstávají samostatné.','Rytíře s unikátním štítem nepovyšujeme bez dokladů na celou historickou frakci.',None),
('civil','Obyvatelé středověku','Civilians & unassigned',1978,'Obyvatelé a souvislosti','#8b8273','10193-1','fig-012977','Kováři, vesničané, kupci a postavy bez jednoznačného frakčního erbu.','Castle není jen o armádách. Civilní figurky propojují hrady s tržišti, hostinci a dílnami.','Jde o pomocnou katalogovou skupinu. Běžní duchové a neutrální kostlivci nejsou automaticky zařazeni do armády.',None),
('ninja','Ninja · původní řada','Ninja · 1998–2000',1998,'Obyvatelé a souvislosti','#795847','6093-1','fig-001187','Japonské hrady, samurajové a ninjové původní řady.','Příbuzná historická řada rozšířila Castle o prostředí Japonska. Katalog ji vede odděleně od pozdějšího Ninjaga.','Tato stránka shrnuje celé téma; jednotlivé japonské skupiny zatím nerozděluje. Ninjago není zahrnuto.',None),
('viking','Vikingové','Vikings',2005,'Obyvatelé a souvislosti','#7f7861','7018-1','fig-001187','Severské lodě, kulaté štíty a mytologická monstra.','Příbuzné středověké téma má vlastní původní řadu a novější pocty. Je zde pro kontext stavby širšího Castle světa.','Jde o souhrnné téma, ne o jednu doloženou armádu s jednotným erbem.',None),
]
spec.append(('elf','Elfové','Elves / Elflands · CMF',2011,'Obyvatelé a souvislosti','#6d845b','8803-9','fig-000907','Špičaté uši, lesní barevnost a elfí zbroj sběratelských postav.','Elfí figurky ze sběratelských sérií doplňují fantasy prostředí Castle. V atlasu jsou samostatnou příbuznou skupinou.','Nejde o minipanenky z LEGO Elves ani o licencované postavy Pána prstenů. Samostatné CMF postavy netvoří ucelenou hradní produktovou řadu.',None))
F=[]
for id,cz,en,year,era,color,hero,portrait,recognition,history,note,cat in spec:
 F.append(dict(id=id,name=cz,english=en,year=year,era=era,color=color,hero=hero,portrait=portrait,recognition=recognition,history=history,note=note,category=cat))

castle_ids={k for k,v in themes.items()if k=='186' or v['parent_id']=='186'}
extra_ids={k for k,v in themes.items()if v['name']=='Vikings' and not v['parent_id']}|{'434'}
base={k for k,v in allsets.items()if v['theme_id']in castle_ids|extra_ids}
modern={'10305-1','10332-1','21325-1','31120-1','40567-1','40601-1','31168-1','21358-1','910001-1','910029-1','910043-1','910045-1','910047-1','910048-1','910049-1','910057-1','910062-1','910064-1','910070-1','19001-1','31132-1','21343-1'}
base|=modern & allsets.keys()
seedfigs=set(f for s in base for f in setfig[s])
cmf_groups={'fig-000907':'elf','fig-008790':'elf','fig-000926':'independent','fig-000491':'independent','fig-001052':'independent','fig-001264':'independent','fig-001314':'independent','fig-001319':'independent','fig-002072':'independent','fig-008777':'independent','fig-008779':'independent','fig-012183':'civil','fig-013089':'classic'}
seedfigs.update(cmf_groups)
# Named cross-theme appearances, excluding licensed material and costume homages.
for k,v in allfigs.items():
 n=v['name'].lower()
 if any(w in n for w in ['falconer -','wolfpack beastmaster','vampire knight','male griffin knight','female kraken warrior','male kraken warrior','griffin knight,','horse knight,','tournament knight (cmf)','frightening knight','evil knight']) or n=='forestman (cmf)':seedfigs.add(k)

def contexts(fid):return {themes[allsets[s]['theme_id']]['name'] for s in figsets[fid] if s in base}
def classify(fid):
 n=allfigs[fid]['name'].lower();ss=figsets[fid];tt=contexts(fid)
 if fid in cmf_groups:return cmf_groups[fid]
 if 'clone' in n or 'cyber drone' in n or 'johnny thunder' in n:return 'civil'
 if 'black falcon' in n or 'falconer' in n or fid=='fig-010073':return 'falcon'
 if 'wolfpack' in n:return 'wolf'
 if 'dark forest' in n:return 'dark'
 if 'forestman' in n or 'forestwoman' in n or 'forestgirl' in n or 'forestboy' in n:return 'forest'
 if 'griffin knight' in n:return 'griffin'
 if 'kraken warrior' in n:return 'kraken'
 if 'horse knight' in n:return 'horse'
 if 'snake, black armor' in n or fid=='fig-016598':return 'serpent'
 if '31168-1' in ss and ('white tunic' in n):return 'horse'
 if '910064-1' in ss and n in ['white king, crown','white knight, helmet']:return 'horse'
 if 'fright knights' in n or 'vampire knight' in n:return 'fright'
 if any(w in n for w in ['tournament knight','frightening knight','evil knight','fright knight']):return 'independent'
 if 'royal knights' in n:return 'royal'
 if 'crusader' in n:return 'lion'
 if 'majisto' in n or '(dragon knights)' in n:return 'dragon'
 if 'dragon knight' in n:
  return 'red-dragon' if ', red,' in n else 'kingdom-dragon'
 if 'lion knight' in n:
  return 'kingdom-lion' if 'Kingdoms' in tt else 'lion'
 if 'gold lion' in n:return 'lion'
 if fid in {'fig-014811','fig-016549','fig-016552'} or ('10305-1'in ss and n.startswith(('knight,','queen,'))):return 'lion'
 if 'Knights Kingdom I'in tt or '(knights kingdom i)'in n:
  if any(w in n for w in ['cedric','gilbert','bull robber']):return 'bull'
  if any(w in n for w in ['knight','archer','king leo','princess storm']):return 'leo'
 if 'Knights Kingdom II'in tt:
  if any(w in n for w in ['vladek','shadow knight']):return 'shadow'
  if any(w in n for w in ['rogue','rouge','karzon','dracus']):return 'rogue'
  if any(w in n for w in ['jayko','santis','rascus','danju','mathias','adric','kentis','guardian','hero,']):return 'morcia'
 if 'Fantasy Era'in tt:
  if n.startswith('dwarf'):return 'dwarf'
  if n.startswith('troll'):return 'troll'
  if n.startswith('skeleton') or 'morax' in n or 'evil' in n or n.startswith('witch'):return 'skeleton'
  if n.startswith(('knight','king','queen','chess piece - crown','wizard')):return 'crown'
 if 'Kingdoms'in tt:
  if 'dark green' in n:return 'kingdom-dragon'
  if n.startswith(('knight','lion knight','king','queen','chess king','chess queen')):return 'kingdom-lion'
 if 'Black Knights'in tt and n.startswith(('knight','archer')):return 'black'
 if 'Classic Castle'in tt and n.startswith(('knight','prince','princess')):return 'classic'
 if 'Ninja'in tt:return 'ninja'
 if 'Vikings'in tt:return 'viking'
 if 'Castle'in tt and n.startswith(('knight, blue','knight, archer, blue','king, dark blue')):return 'blue-lion'
 if 'Castle'in tt and 'red dragon'in n:return 'red-dragon'
 return 'civil'

fig_group={fid:classify(fid)for fid in seedfigs}
# Cross-theme inventory appearances: all sets containing a specifically assigned Castle figure.
selected=set(base)
for fid,g in fig_group.items():
 if g not in {'civil','ninja','viking'}:selected|=figsets[fid]
# Keep catalogs non-licensed; skeletons and generic heads are not allowed to pull in unrelated themes.
selected={s for s in selected if s in allsets}
figselected={f for s in selected for f in setfig[s]}
for f in figselected:
  if f not in fig_group:fig_group[f]=classify(f)

base_theme={'187':'falcon','188':'black','189':'classic','190':'dragon','191':'dark','194':'forest','195':'fright','199':'lion','201':'royal','203':'wolf','434':'ninja'}
outsets=[]
for s in sorted(selected,key=lambda x:(int(allsets[x]['year']),x),reverse=True):
 x=allsets[s];tt=themes[x['theme_id']]['name']; groups=sorted({fig_group[f] for f in setfig[s]if fig_group.get(f)!='civil'})
 catalog_groups=[]
 if x['theme_id'] in base_theme and base_theme[x['theme_id']] not in groups:catalog_groups=[base_theme[x['theme_id']]]
 if s in {'EG00160-1','EG00161-1'}:catalog_groups=['lion']
 if s=='EG00164-1':catalog_groups=['wolf']
 if s=='EG00165-1':catalog_groups=['classic']
 if tt=='Vikings' and 'viking'not in groups:catalog_groups=['viking']
 if tt=='Knights Kingdom II' and not groups:catalog_groups=['shadow'if 'vladek'in x['name'].lower()else 'morcia']
 if tt=='BrickLink Designer Program': kind='BDP'
 elif tt=='Collectible Minifigures' or 'Minifigures'in tt or s.startswith(('710','868','880','883'))and len(setfig[s])==1:kind='CMF'
 elif s.startswith('EG'):kind='Pick a Brick'
 elif s in {'40567-1','40601-1','40775-1','40912-1'}:kind='GWP'
 elif int(x['year'])>=2021:kind='Moderní set'
 else:kind='Historický set'
 item=dict(id=s,name=x['name'],year=int(x['year']),theme=tt,parts=int(x['num_parts']),image=x['img_url'],factions=groups,catalogFactions=catalog_groups,figures=[{'id':f,'quantity':q}for f,q in setfig[s].items()],kind=kind,status='unknown'if int(x['year'])>=2025 else 'secondary',statusSource=None)
 if kind=='BDP':item['status']='closed';item['statusNote']='Původní crowdfunding uzavřen. Nabídky na sekundárním trhu ověř u prodejce.'
 if s=='910070-1':item.update(status='upcoming',statusNote='Předobjednávky říjen 2026 uzavřeny; katalogový rok dodání 2027. Inventář figurek ve zdroji chybí.',references=['black','horse','griffin','kraken','serpent'])
 if s=='910064-1':item['mappingNote']='Frakce přiřazeny podle názvů nově zveřejněného inventáře Rebrickable; BrickLink inventář může být ještě v revizi.'
 outsets.append(item)

availability={'31168-1':('available','https://www.lego.com/cs-cz/product/medieval-horse-knight-castle-31168',2949),'21358-1':('available','https://www.lego.com/cs-cz/product/minifigure-vending-machine-21358',4149),'10305-1':('retired','https://www.lego.com/cs-cz/product/lion-knights-castle-10305',None),'10332-1':('retired','https://www.lego.com/cs-cz/product/medieval-town-square-10332',None)}
for x in outsets:
 if x['id']in availability:
  status,url,price=availability[x['id']];x.update(status=status,statusSource=url,checked='2026-10-29',price=price)

outfigs=[]
for fid in sorted(figselected):
 x=allfigs[fid];outfigs.append(dict(id=fid,name=x['name'],image=x['img_url'],faction=fig_group[fid],sets=sorted(s for s in figsets[fid]if s in selected)))

# Normalize portrait fallbacks and missing hero sets to real local catalogue records.
ids={x['id']for x in outsets};fids={x['id']for x in outfigs}
for f in F:
 members=[x for x in outfigs if x['faction']==f['id']]
 if f['portrait']not in fids or fig_group.get(f['portrait'])!=f['id']:f['portrait']=members[-1]['id']if members else None
 if f['hero']not in ids:
  hero=next((x for x in outsets if f['id']in x['factions']+x['catalogFactions']),None);f['hero']=hero['id']if hero else None
 f['setCount']=sum((any(fig_group[z['id']]=='civil'for z in x['figures'])if f['id']=='civil'else f['id']in x['factions']+x['catalogFactions'])for x in outsets)
 f['figureCount']=len(members)

data=dict(updated='2026-10-29',factions=F,sets=outsets,figures=outfigs,sources=[
 {'name':'Rebrickable — katalogová data','url':'https://rebrickable.com/downloads/','description':'Veřejné CSV: témata, sety, minifigurky, inventáře a jejich vazby. Převzatá jména zůstávají v angličtině. Použitá poslední verze inventáře.'},
 {'name':'LEGO — historie Castle','url':'https://www.lego.com/cs-cz/history/articles/f-lego-castle','description':'Oficiální vývoj tématu a základní historické milníky; text této stránky LEGO je v angličtině.'},
 {'name':'LEGO — průvodce klasickými frakcemi','url':'https://www.lego.com/en-gb/categories/adults-welcome/article/lego-castle-factions','description':'Erby a klasické skupiny. Fanouškovské legendy nepovažujeme za potvrzenou historii.'},
 {'name':'BrickLink Reference Catalog','url':'https://www.bricklink.com/catalogTree.asp?itemType=M','description':'Přesné varianty a jejich výskyt v setech. U nové produkce může schválení inventářů zaostávat.'},
 {'name':'Brickset — Castle','url':'https://brickset.com/sets/theme-Castle','description':'Katalog podle let a podtémat, recenze a zprávy. Některé výpisy mohou vyžadovat přihlášení.'},
 {'name':'BrickCult — mapa frakcí 2026','url':'https://brickcult.com/article/all-lego-castle-factions-complete-list-2026/','description':'Anglický přehled erbů a rozlišení frakcí od samostatných rytířů. Fanouškovská klasifikace se může lišit.'},
 {'name':'Brickipedia — Castle factions','url':'https://brickipedia.fandom.com/wiki/Category:Castle_Factions','description':'Komunitní encyklopedie pro další čtení. Katalogové počty ověřujeme v inventářích.'}
],methodology='Katalog vychází z celého tématu Castle, původních témat Ninja a Vikings, vybraných novějších středověkých setů a dalších výskytů rozpoznaných frakčních minifigurek napříč tématy. Přiřazení frakcí je redakční podle názvu figurky a původního inventáře, nikoli oficiální taxonomie LEGO. Neutrální postavy z přesahových setů jsou v pomocné skupině. Samotné štíty, prapory a nefigurkové díly nejsou plošně zindexované. Databáze může mít mezery a později doplněné inventáře; nejde o záruku absolutní úplnosti. Dostupnost je ručně ověřený stav k uvedenému datu, nikoli živý sklad.')
bl=json.loads((root/'bricklink_ids.json').read_text())
for item in outfigs:
 if item['id']in bl:item['bricklink']=bl[item['id']]
for item in outsets+outfigs:
 imagepath='assets/catalog/'+item['id']+'.webp'
 if (root/'web'/imagepath).exists():item['localImage']=imagepath
 if item['id']=='21358-1':item['imageSource']='https://images.brickset.com/sets/images/21358-1.jpg'
for f in F:
 if not (root/'web'/'assets'/'catalog'/(f['portrait']+'.webp')).exists():
  fallback=next((x for x in outfigs if x['faction']==f['id']and x.get('localImage')),None)
  if fallback:f['portrait']=fallback['id']
 if f['id']=='independent':
  f.update(name='Samostatné postavy CMF',english='Independent medieval CMF',history='Rytíři, kouzelníci a další sběratelské postavy rozšiřují středověký a fantasy svět i bez vlastního hradu. Některé mají osobní erb, ale samy o sobě nedokládají celou armádu.',recognition='Osobní erby, výrazná výstroj a samostatné charaktery ze sběratelských sérií.')
 if f['id']=='classic':f['category']=489
(root/'web'/'catalog.json').write_text(json.dumps(data,ensure_ascii=False,separators=(',',':')))
print(json.dumps({'factions':len(F),'sets':len(outsets),'figures':len(outfigs),'by_faction':[(f['id'],f['setCount'],f['figureCount'])for f in F]},ensure_ascii=False))
