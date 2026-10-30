
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
  nav:[["uvod","Úvod"],["diagram","Diagram vztahů"],["v-prodeji","Teď v prodeji"],["moderni-sety","Moderní sety"],["brzy","Již brzy"],["zdroje","Zdroje"]],
  factions:"Frakce", returnNav:"Návrat klasiky",
  foot:"LEGO® je ochranná známka skupiny LEGO, která tento web nesponzoruje, neschvaluje ani nepodporuje. Fotky setů a figurek: Brickset, BrickLink.",
  affNote:"Odkazy na obchody jsou partnerské: při nákupu můžeme získat malou provizi, cena pro vás zůstává stejná.",
  onSale:"● v prodeji", lim:"◐ jiný kanál", off:"○ vyřazeno", pieces:"dílků", none:"Žádné sety v této kategorii.",
  tags:{off:"oficiální",fan:"fanouškovské",unc:"nejisté"},
  type:{re:"Reedice",icons:"LEGO Icons",ideas:"LEGO Ideas",creator:"Creator 3 v 1",bdp:"BrickLink DP",gwp:"Dárek k nákupu",cmf:"Minifigurka"},
  retired:"Vyřazeno", soldOutTmp:"Na lego.cz dočasně vyprodáno"},
 en:{brand:"Castle Chronicle", tagline:"An unofficial guide to the LEGO® Castle theme 1978–2026", title:"Castle Chronicle",
  nav:[["uvod","Home"],["diagram","Faction map"],["v-prodeji","On sale now"],["moderni-sety","Modern sets"],["brzy","Coming soon"],["zdroje","Sources"]],
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
const IMGFAIL = `onerror="this.parentNode.classList.add('noimg');this.remove()"`;
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
const linkFactions = ids => ids.map(id=>`<a href="#${id}">${esc(fx(fById(id),"name"))}</a>`).join(", ");

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
    <a class="ph" href="${primary}" ${priRel} data-n="${esc(disp(m.n))}"><img loading="lazy" src="${setImg(m.n)}" alt="${esc(trName(m.name))}" ${IMGFAIL}></a>
    <div class="b"><span class="tn">${esc(disp(m.n))}${m.line?` · ${esc(trLine(m.line))}`:""}</span><b>${esc(trName(m.name))}</b>
    <span class="ty">${m.y}${m.pcs?` · ${fmtNum(m.pcs)} ${t("pieces")}`:""}${price}</span>${m.st?stTxt(m.st):""}
    ${note?`<span class="tnote">${esc(note)}</span>`:""}
    ${opts.extra||""}
    ${shops.length?`<div class="shops">${shops.map((s,i)=>`<a class="${i===0&&m.st==="on"?"pri":""}" href="${s.url(m)}" ${RELAFF}>${esc(s.label)}</a>`).join("")}</div>`:""}
    <a class="alt" href="${bs(m.n)}" ${REL}>Brickset</a></div></div>`;
}
const tiles = arr => arr.length?`<div class="tiles">${arr.join("")}</div>`:`<div class="empty">${t("none")}</div>`;

/* ================== RÁM STRÁNKY ================== */
function renderChrome(){
  document.documentElement.lang = LANG;
  document.title = t("title");
  $("#brand").innerHTML = `${esc(t("brand"))}<small>${esc(t("tagline"))}</small>`;
  $("#mainnav").setAttribute("aria-label", LANG==="cs"?"Hlavní navigace":"Main navigation");
  $("#mainnav").innerHTML = t("nav").map(([id,l])=>`<a href="#${id}">${esc(l)}</a>`).join("");
  $("#side").setAttribute("aria-label", t("factions"));
  $("#langsw").innerHTML = ["cs","en"].map(l=>`<a href="${DEPLOYED?PATHS[l]:"#"}" data-lang="${l}" hreflang="${l}" aria-current="${l===LANG}">${l.toUpperCase()}</a>`).join("");
  const cs=LANG==="cs";
  $("#foot").innerHTML = `<div class="fmain"><span>© 2026 ${cs?"Vyrobeno s ❤️ ke kreativnímu hraní":"Made with ❤️ for creative play"}</span><span class="dot">·</span><a href="#soukromi">${cs?"Zásady ochrany osobních údajů":"Privacy Policy"}</a><span class="dot">·</span><a href="#podminky">${cs?"Podmínky užití":"Terms of Use"}</a><span class="dot">·</span><a href="mailto:${CONTACT}" title="${CONTACT}">✉️ ${cs?"Kontakt":"Contact"}</a></div>`
    + `<div class="fsmall">${esc(t("foot"))}${anyAff()?" "+esc(t("affNote")):""}</div>`;
  let h="";
  for(const k of ["c","s","f","n"]){
    h+=`<h2>${eraName(k)}</h2><ul>`;
    for(const f of F.filter(x=>x.era===k)) h+=`<li><a href="#${f.id}" style="--fc:${f.sh.f[0]}">${mini(f,30)}<span>${esc(fx(f,"name"))}</span><span class="yr">${f.years}</span></a></li>`;
    if(k==="n") h+=`<li><a href="#navrat"><span class="mini" style="height:30px">${shield({f:["#d7a521"],p:"plain",b:null,c:null},30)}</span><span>${t("returnNav")}</span><span class="yr">2016–2026</span></a></li>`;
    h+="</ul>";
  }
  $("#sidenav").innerHTML=h;
}
document.addEventListener("click",e=>{
  const a=e.target.closest("#langsw a"); if(!a) return;
  const l=a.dataset.lang; if(l===LANG){e.preventDefault();return;}
  if(DEPLOYED){ a.href = PATHS[l] + location.hash; return; }   // přejít na druhou jazykovou verzi
  e.preventDefault(); LANG=l; renderChrome(); route(true);
});

/* ================== POHLEDY ================== */
function timeline(){
  const x0=1978,x1=2027,L=170,W=900,R=16,row=19,top=24;
  const sx=y=>L+(y-x0)/(x1-x0)*(W-L-R);
  const H=top+(F.length+1)*row+14, half=(sx(1)-sx(0))/2;
  let g="";
  for(let y=1980;y<=2025;y+=5){g+=`<line class="gl" x1="${sx(y)}" x2="${sx(y)}" y1="${top-6}" y2="${H-6}"/><text class="ax" x="${sx(y)}" y="12" text-anchor="middle">${y}</text>`;}
  F.forEach((f,i)=>{
    const y=top+i*row, w=Math.max(6,sx(f.to+1)-sx(f.from));
    g+=`<a href="#${f.id}"><text x="${L-8}" y="${y+12}" text-anchor="end" font-size="12">${esc(fx(f,"name"))}</text><rect x="${sx(f.from)}" y="${y+2}" width="${w}" height="13" rx="2" fill="${f.sh.f[0]}" stroke="currentColor" stroke-opacity=".35"/>`;
    const tr=new Map();
    f.tributes.forEach(x=>tr.set(x[0],[x[2],x[1]]));
    M.filter(m=>m.f.includes(f.id)).forEach(m=>tr.set(m.n,[m.y,m.name]));
    [...tr].filter(([,v])=>v[0]>f.to).forEach(([n,[yr,nm]])=>{g+=`<circle cx="${sx(yr)+half}" cy="${y+8.5}" r="4.5" fill="${f.sh.f[0]}" stroke="currentColor" stroke-opacity=".6"><title>${esc(disp(n))} ${esc(trName(nm))} (${yr})</title></circle>`;});
    g+=`</a>`;
  });
  const yN=top+F.length*row+4, cnt={};
  g+=`<a href="#navrat"><text x="${L-8}" y="${yN+12}" text-anchor="end" font-size="12" font-weight="700">${LANG==="cs"?"Novodobé sety":"Modern sets"}</text>`;
  M.slice().sort((a,b)=>a.y-b.y).forEach(m=>{cnt[m.y]=(cnt[m.y]||0)+1;g+=`<rect x="${sx(m.y)+1}" y="${yN+2}" width="${half*2-2}" height="13" rx="2" fill="var(--or)" opacity="${Math.min(1,.25+cnt[m.y]*.12)}"><title>${esc(disp(m.n))} ${esc(trName(m.name))} (${m.y})</title></rect>`;});
  g+=`</a>`;
  return `<div class="tl"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${LANG==="cs"?"Časová osa frakcí":"Faction timeline"} 1978–2027">${g}</svg></div>`;
}

function vHome(){
  const cards=F.map(f=>`<a class="fcard" href="#${f.id}">${mini(f,64)}<div><b>${esc(fx(f,"name"))}</b><span>${esc(fx(f,"alt"))}</span><div class="y">${f.years}</div></div></a>`).join("");
  const onSale=M.filter(m=>m.st==="on").length;
  if(LANG==="en") return `
  <div class="eyebrow">Fan guide</div>
  <h1>What is LEGO Castle</h1>
  <p class="lede">LEGO Castle is one of the oldest LEGO themes: knights, castles, siege engines and later wizards and dragons. It began in 1978 with the yellow castle 375 and gradually split into factions with their own crests, colours and enemies. The standalone line ended in 2014, but since 2021 the classic factions have been returning in LEGO Icons, Ideas, Creator, the BrickLink Designer Program and gifts with purchase.</p>
  <div class="twocol">
    <div class="panel"><div class="eyebrow">Beginnings</div><p style="margin:6px 0 0">1978 – the first modern minifigures came out in Castle, Space and Town. They were designed by Jens Nygaard Knudsen.</p></div>
    <div class="panel"><div class="eyebrow">Factions</div><p style="margin:6px 0 0">From 1984 (Lion Knights and Black Falcons) knights are divided by their crests. This site follows ${F.length} groups.</p></div>
    <div class="panel"><div class="eyebrow">Today</div><p style="margin:6px 0 0">${onSale} medieval sets are on sale at LEGO.com right now; none of them carries a classic faction. <a href="#v-prodeji">Overview</a></p></div>
  </div>
  <h2 class="sec">Faction timeline</h2>
  <p>Bars show the years a faction was in regular sale, dots mark later reissues and tributes (e.g. 10305 in 2022). The bottom row covers all modern sets; the darker, the more sets that year. Click to open a page, hover to see the set name.</p>
  ${timeline()}
  <h2 class="sec">Eras of the Castle line</h2>
  <ul class="facts">
    <li><b>1978–1983, the classic castle.</b> Yellow castles, knights with various crests, no story.</li>
    <li><b>1984–1999, the golden age of factions.</b> Grey castles, one-piece horses, Lion Knights against Black Falcons, then Forestmen, Black Knights, Wolfpack, the fantasy Dragon Masters, Royal Knights and Fright Knights.</li>
    <li><b>2000–2006, stories.</b> Knights' Kingdom with named heroes, the Knights' Kingdom II action figures, Vikings.</li>
    <li><b>2007–2014, the Castle name returns.</b> Fantasy with skeletons and trolls, realistic Kingdoms, the short 2013 line.</li>
    <li><b><a href="#navrat">2016–today, nostalgia.</a></b> Reimagined classics for adult fans: 10305 Lion Knights' Castle, 10332 Medieval Town Square, the BrickLink Designer Program, remake gifts 40567, 40601 and 40912.</li>
  </ul>
  <h2 class="sec">All factions</h2>
  <div class="grid">${cards}</div>
  <p class="note">Labels on claims: ${tag("off")} backed by LEGO sets, catalogues, boxes or instructions (often via quotes on Wikipedia/Brickipedia), ${tag("fan")} a fan interpretation, ${tag("unc")} contradictory or unverified. Crests are shown on original minifigures; the small shields are simplified colour markers, not replicas.</p>`;
  return `
  <div class="eyebrow">Informační průvodce</div>
  <h1>Co je LEGO Castle</h1>
  <p class="lede">LEGO Castle je jedna z nejstarších řad stavebnice LEGO: rytíři, hrady, obléhací stroje a později čarodějové a draci. Začala v roce 1978 žlutým hradem 375 a postupně se rozdělila do frakcí s vlastními erby, barvami a nepřáteli. Samostatná řada skončila v roce 2014, ale klasické frakce se od roku 2021 vracejí v sadách LEGO Icons, Ideas, Creator, v BrickLink Designer Programu a v dárcích k nákupu.</p>
  <div class="twocol">
    <div class="panel"><div class="eyebrow">Začátek</div><p style="margin:6px 0 0">1978 – první moderní minifigurky vyšly v řadách Castle, Space a Town. Navrhl je Jens Nygaard Knudsen.</p></div>
    <div class="panel"><div class="eyebrow">Frakce</div><p style="margin:6px 0 0">Od roku 1984 (Lion Knights a Black Falcons) se rytíři dělí podle erbů. Tento web jich sleduje ${F.length} skupin.</p></div>
    <div class="panel"><div class="eyebrow">Dnes</div><p style="margin:6px 0 0">Na lego.cz jsou teď v prodeji ${onSale} středověké sety; žádný z nich nenese klasickou frakci. <a href="#v-prodeji">Přehled</a></p></div>
  </div>
  <h2 class="sec">Časová osa frakcí</h2>
  <p>Pruh ukazuje roky, kdy frakce vycházela v běžném prodeji, body pozdější reedice a pocty (např. 10305 v roce 2022). Spodní řádek zachycuje všechny novodobé sety; čím sytější, tím víc setů v daném roce. Kliknutím otevřete stránku, najetím zobrazíte název setu.</p>
  ${timeline()}
  <h2 class="sec">Éry řady Castle</h2>
  <ul class="facts">
    <li><b>1978–1983, klasický hrad.</b> Žluté hrady, rytíři s různými erby, bez příběhu.</li>
    <li><b>1984–1999, zlatý věk frakcí.</b> Šedé hrady, jednodílní koně, Lion Knights proti Black Falcons, pak Forestmen, Black Knights, Wolfpack, fantasy Dragon Masters, Royal Knights a Fright Knights.</li>
    <li><b>2000–2006, příběhy.</b> Knights' Kingdom s pojmenovanými hrdiny, akční figurky Knights' Kingdom II, Vikingové.</li>
    <li><b>2007–2014, návrat značky Castle.</b> Fantasy s kostlivci a trolly, realistické Kingdoms, krátká řada 2013.</li>
    <li><b><a href="#navrat">2016–dnes, nostalgie.</a></b> Reinterpretace klasických setů pro dospělé fanoušky: 10305 Lion Knights' Castle, 10332 Medieval Town Square, BrickLink Designer Program, remake dárky 40567, 40601 a 40912.</li>
  </ul>
  <h2 class="sec">Všechny frakce</h2>
  <div class="grid">${cards}</div>
  <p class="note">Štítky u tvrzení: ${tag("off")} doloženo sety, katalogy, krabicemi nebo návody LEGO (často přes citaci Wikipedie/Brickipedie), ${tag("fan")} výklad fanoušků, ${tag("unc")} rozporné nebo neověřené. Erby jsou ukázané na původních figurkách; malé štíty jsou zjednodušené barevné značky, ne repliky.</p>`;
}

function vFaction(f){
  const en=LANG==="en";
  const mod=M.filter(m=>m.f.includes(f.id));
  const current=mod.filter(m=>m.st==="on");
  const tribRows=f.tributes.map(x=>{const m=M.find(y=>y.n===x[0]);return tile({n:x[0],name:x[1],y:x[2],line:t("type")[x[3]]||"",st:m?m.st:"off",pcs:m?m.pcs:null});});
  for(const m of mod){ if(!f.tributes.some(x=>x[0]===m.n) && m.st!=="on") tribRows.push(tile({n:m.n})); }
  const origRows=f.sets.map(s=>tile({n:s[0],name:s[1],y:s[2],st:"off"},{noNote:true}));
  const figs=(MF[f.id]||[]).map(m=>{const cap=en?(MF_EN[m[0]]||m[1]):m[1];return `<figure class="fig"><div class="ph" data-n="?"><img loading="lazy" src="${mfUrl(m[0])}" alt="${esc(cap)}" ${IMGFAIL}></div><figcaption>${esc(cap)}</figcaption></figure>`;}).join("");
  const rels=fx(f,"rel");
  const cur=current.length?tiles(current.map(m=>tile({n:m.n})))
    : `<div class="empty">${en?`No set from this faction is on sale at LEGO.com right now. The latest releases are listed below; current medieval sets without a faction are on the <a href="#v-prodeji">On sale now</a> page.`:`Na lego.cz se teď neprodává žádný set této frakce. Poslední novinky najdete níže, aktuální středověké sety bez frakce na stránce <a href="#v-prodeji">Teď v prodeji</a>.`}</div>`;
  const idx=F.indexOf(f), prev=F[idx-1], next=F[idx+1];
  return `
  <div class="eyebrow">${eraName(f.era)}</div>
  <div class="fhead">${mini(f,96)}<div style="min-width:0"><h1>${esc(fx(f,"name"))}</h1><div class="meta"><span class="chip">${esc(fx(f,"alt"))}</span><span class="chip">${f.years}</span><span class="chip">${f.sets.length} ${en?"original sets":"původních setů"}</span></div></div></div>
  <p class="lede">${esc(fx(f,"intro"))}</p>
  <h2 class="sec">${en?"The crest on original minifigures":"Erb na původních figurkách"}</h2>
  <div class="erb"><div class="figs">${figs}</div><div class="panel"><div class="eyebrow">${en?"Crest and colours":"Erb a barvy"}</div><p style="margin:6px 0 0">${esc(fx(f,"heraldry"))}</p></div></div>
  <div class="twocol" style="margin-top:14px">
    <div class="panel"><div class="eyebrow">${en?"Characters":"Postavy"}</div><ul class="facts" style="margin-top:6px">${fx(f,"chars").map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div>
  </div>
  <h2 class="sec">${en?"Allies and enemies":"Spojenci a nepřátelé"}</h2>
  <ul class="facts">${f.rel.map((r,i)=>`<li>${esc(rels[i]||r[0])} ${tag(r[1])}</li>`).join("")}</ul>
  <p style="margin-top:8px"><a href="#diagram">${en?"Show on the faction map":"Zobrazit v diagramu vztahů"}</a></p>
  <h2 class="sec">${en?"History":"Historie"}</h2>
  <ul class="facts">${fx(f,"hist").map(h=>`<li>${esc(h)}</li>`).join("")}</ul>
  <h2 class="sec">${en?"On sale now":"Aktuálně v prodeji"}</h2>
  ${cur}
  <h2 class="sec">${en?"Retired sets":"Vyřazené sety"}</h2>
  ${f.sets.length?`<h3>${en?"Original line":"Původní řada"} ${f.years}</h3>${tiles(origRows)}`:""}
  <h3>${en?"Reissues, tributes and limited editions":"Reedice, pocty a limitované edice"}</h3>
  <p style="font-size:.92rem;color:var(--ink-2)">${en?"LEGO Icons, Ideas, Creator, BrickLink Designer Program, gifts with purchase and collectible minifigures.":"LEGO Icons, Ideas, Creator, BrickLink Designer Program, dárky k nákupu a sběratelské minifigurky."}</p>
  ${tiles(tribRows)}
  <div class="meta" style="margin-top:28px;justify-content:space-between">${prev?`<a href="#${prev.id}">← ${esc(fx(prev,"name"))}</a>`:"<span></span>"}${next?`<a href="#${next.id}">${esc(fx(next,"name"))} →</a>`:""}</div>`;
}

function vSale(){
  const en=LANG==="en", on=M.filter(m=>m.st==="on");
  const facts = m => m.f.length?`<span class="tnote">${linkFactions(m.f)}</span>`:"";
  const checked = LIVE.checked ? (en?`Checked automatically · last check ${esc(LIVE.checked)}`:`Hlídáno automaticky · poslední kontrola ${esc(LIVE.checked)}`) : (en?"Status as of 29 Oct 2026":"Stav k 29. 10. 2026");
  return `
  <div class="eyebrow">${checked}</div>
  <h1>${en?"On sale now":"Teď v prodeji"}</h1>
  <p class="lede">${en
    ?"Medieval and castle sets currently sold at LEGO.com. Links go straight to the product page; once a set leaves the shop, its link switches to Brickset and the set moves to the retired list. No classic faction is on sale at the moment: 10305 Lion Knights' Castle and 10332 Medieval Town Square ended on 31 Dec 2025."
    :"Středověké a hradní sety, které se prodávají na lego.cz. Odkaz vede přímo na produktovou stránku; jakmile set z nabídky zmizí, odkaz se přepne na Brickset a set se přesune mezi vyřazené. Klasické frakce v nabídce momentálně nejsou: 10305 Lion Knights' Castle i 10332 Medieval Town Square skončily 31. 12. 2025."}</p>
  ${tiles(on.map(m=>tile({n:m.n},{extra:facts(m)})))}
  <h2 class="sec">${en?"Outside LEGO.com":"Mimo lego.cz"}</h2>
  ${tiles(M.filter(m=>m.st==="lim").map(m=>tile({n:m.n})))}
  <p class="note">${en?"Sale status is checked automatically once a week (LEGO and Brickset). Always confirm the price in the shop.":"Stav prodeje se kontroluje automaticky jednou týdně (lego.cz a Brickset). Cenu vždy ověřte v obchodě."}</p>`;
}

function vModern(){
  const en=LANG==="en";
  const groups=[...new Set(M.map(m=>m.line.replace(/ – série \d+/,"")))];
  let h=`<div class="eyebrow">2016–2027</div><h1>${en?"Modern sets":"Moderní sety"}</h1><p class="lede">${en?"All modern castle and medieval sets: reimagined classic factions for adult fans, fan designs and limited editions.":"Všechny novodobé hradní a středověké sety: reinterpretace klasických frakcí pro dospělé, fanouškovské návrhy a limitované edice."}</p>`;
  for(const g of groups){
    const rows=M.filter(m=>m.line.replace(/ – série \d+/,"")===g).sort((a,b)=>a.y-b.y).map(m=>tile({n:m.n,line:m.line.includes("série")?m.line.split("– ")[1]:""},{extra:m.f.length?`<span class="tnote">${linkFactions(m.f)}</span>`:""}));
    h+=`<h2 class="sec">${esc(trLine(g))}</h2>${tiles(rows)}`;
  }
  return h;
}

function vReturn(){
  const en=LANG==="en";
  const YT = en ? {
    2016:"After the Castle line ended in 2014, the futuristic NEXO Knights (2016–2018) took over the knight theme. Classic castles were absent for three years.",
    2019:"BrickLink AFOL Designer Program (pilot): the fan design BL19001 Löwenstein Castle is released as a limited edition.",
    2021:"A big medieval comeback: LEGO Ideas 21325 Medieval Blacksmith and Creator 3in1 31120 Medieval Castle, both with falcon knights. The BrickLink Designer Program releases 910001 Castle in the Forest with Black Falcons and Forestmen.",
    2022:"LEGO's 90th anniversary: fans voted for a classic castle, which became 10305 Lion Knights' Castle with 4,514 pieces and 22 minifigures (Lion Knights, Black Falcons, Forestmen, Majisto). Plus the gift 40567 Forest Hideout and the Yellow Castle knight in Series 23. The same year brought 31132 with the Midgard Serpent.",
    2023:"Gift 40601 Majisto's Magical Workshop (remake of 6048), the Falconer minifigure in Series 24 and LEGO Ideas 21343 Viking Village.",
    2024:"LEGO Icons 10332 Medieval Town Square (a remake of village 10193 with Lion Knights and Wolfpack). BrickLink Designer Program Series 1: 910029 Mountain Fortress. The Vampire Knight minifigure (Series 25).",
    2025:"The year of the BrickLink Designer Program: Series 3–6 brought Forest Stronghold, Siege Encampment, Medieval Seaside Market, Riverside Scholars and Outlaw Forest Den. Creator 31168 Medieval Horse Knight Castle introduces new factions, 21358 adds Griffin Knights and Kraken Warriors. The Wolfpack Beastmaster minifigure (Series 27).",
    2026:"Gift 40912 Sea Serpent for the Black Knights (Insiders Days, July), BDP 910062 Alchemist's Shop and 910064 Dustmark Keep, 40952 LEGOLAND Castle. 10305 and 10332 left sale at the end of 2025.",
    2027:"Announced: BDP Series 9, 910070 Sleepy Dragon Inn."
  } : {
    2016:"Po skončení řady Castle (2014) přebírá rytířské téma futuristická řada NEXO Knights (2016–2018). Klasické hrady se tři roky neobjevují.",
    2019:"BrickLink AFOL Designer Program (pilot): fanouškovský návrh BL19001 Löwenstein Castle vychází v limitované edici.",
    2021:"Velký návrat středověku: LEGO Ideas 21325 Medieval Blacksmith a Creator 3 v 1 31120 Medieval Castle, oba se sokolími rytíři. V BrickLink Designer Programu vychází 910001 Castle in the Forest s Black Falcons a Forestmen.",
    2022:"90. výročí LEGO: fanoušci v hlasování vybrali klasický hrad a vznikl 10305 Lion Knights' Castle se 4 514 dílky a 22 minifigurkami (Lion Knights, Black Falcons, Forestmen, Majisto). K tomu dárek 40567 Forest Hideout a figurka rytíře žlutého hradu v sérii 23. Ve stejném roce vychází 31132 s Midgardským hadem.",
    2023:"Dárek 40601 Majisto's Magical Workshop (remake 6048), minifigurka Falconer v sérii 24 a LEGO Ideas 21343 Viking Village.",
    2024:"LEGO Icons 10332 Medieval Town Square (remake vesnice 10193 s Lion Knights a Wolfpack). BrickLink Designer Program série 1: 910029 Mountain Fortress. Minifigurka Vampire Knight (série 25).",
    2025:"Rok BrickLink Designer Programu: série 3–6 přinesly Forest Stronghold, Siege Encampment, Medieval Seaside Market, Riverside Scholars a Outlaw Forest Den. Creator 31168 Medieval Horse Knight Castle uvádí nové frakce, 21358 přidává Griffin Knights a Kraken Warriors. Minifigurka Wolfpack Beastmaster (série 27).",
    2026:"Dárek 40912 Sea Serpent pro Black Knights (Insiders Days, červenec), BDP 910062 Alchemist's Shop a 910064 Dustmark Keep, 40952 LEGOLAND Castle. Na konci roku 2025 skončil prodej 10305 i 10332.",
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

function vDiagram(){
  const en=LANG==="en";
  const N={"crusaders":[190,90],"black-falcons":[470,70],"forestmen":[110,280],"black-knights":[450,270],
    "wolfpack":[780,210],"dragon-masters":[760,400],"royal-knights":[450,470],"dark-forest":[130,480],"fright-knights":[740,580]};
  const E=[
    ["crusaders","black-falcons","off","Rivalita Lion Knights a Black Falcons (sety, katalogy 1984–90)","Lion Knights vs. Black Falcons rivalry (sets, catalogues 1984–90)"],
    ["crusaders","black-falcons","ally","Smíření v 10305 Lion Knights' Castle (2022, text krabice)","Reconciled in 10305 Lion Knights' Castle (2022, box text)"],
    ["crusaders","forestmen","fan","Konflikt podle scén v setech (např. 6042)","Conflict read from set scenes (e.g. 6042)"],
    ["crusaders","black-knights","off","Souboj v britských reklamách 1992","Battle in the 1992 UK adverts"],
    ["black-falcons","black-knights","off","Obléhání v 6059, útok v 6057","Siege in 6059, attack in 6057"],
    ["forestmen","black-knights","off","Black Knight zajímá Robina Hooda (reklama LEGO)","A Black Knight captures Robin Hood (LEGO commercial)"],
    ["black-knights","wolfpack","off","Zajatec v 6086, útok v 6057","Prisoner in 6086, attack in 6057"],
    ["black-knights","dragon-masters","off","Trojstranný boj v katalozích 1993–94","Three-way fight in the 1993–94 catalogues"],
    ["wolfpack","dragon-masters","off","Wolfpack se bojí Dragon Masters (katalogy)","The Wolfpack fear the Dragon Masters (catalogues)"],
    ["royal-knights","dragon-masters","off","Katalog 1995: král Richard proti Majistovi","1995 catalogue: King Richard against Majisto"],
    ["royal-knights","dark-forest","off","Katalog 1996: útok psanců","1996 catalogue: the outlaws attack"],
    ["royal-knights","fright-knights","off","Willa zajímá krále (komiks LEGO Mania)","Willa captures the King (LEGO Mania comic)"],
    ["forestmen","dark-forest","line","Dark Forest přebírá erb Forestmen","Dark Forest reuse the Forestmen crest"],
    ["black-knights","royal-knights","line","Royal Knights nahrazují Black Knights (1995)","Royal Knights replace the Black Knights (1995)"]
  ];
  const lab = e => en ? e[4] : e[3];
  const W=134,H=46;
  let edges="";
  E.forEach(e=>{
    const [a,b,k]=e, [x1,y1]=N[a],[x2,y2]=N[b];
    let d=`M${x1} ${y1} L${x2} ${y2}`;
    if(k==="ally"){const mx=(x1+x2)/2,my=(y1+y2)/2-95;d=`M${x1} ${y1} Q${mx} ${my} ${x2} ${y2}`;}
    edges+=`<path class="e-${k}" d="${d}"><title>${esc(lab(e))}</title></path>`;
  });
  let nodes="";
  for(const [id,[x,y]] of Object.entries(N)){
    const f=fById(id), nm=fx(f,"name").split(" /")[0];
    nodes+=`<a href="#${id}" class="dg-node"><title>${esc(fx(f,"name"))} – ${esc(fx(f,"alt"))}</title><rect x="${x-W/2-12}" y="${y-H/2}" width="${W+24}" height="${H}" rx="4"/><g transform="translate(${x-W/2-6},${y-16})">${shield(f.sh,32).replace('<svg ','<svg x="0" y="0" ')}</g><text x="${x-W/2+26}" y="${y-2}" font-size="13" font-weight="700">${esc(nm)}</text><text class="yr" x="${x-W/2+26}" y="${y+14}">${f.years}</text></a>`;
  }
  const svg=`<svg viewBox="0 0 900 640" role="img" aria-label="${en?"Map of classic faction relationships":"Diagram vztahů klasických frakcí"}">${edges}${nodes}</svg>`;
  const nm = id => esc(fx(fById(id),"name").split(" /")[0]);
  const edgeList=E.map(e=>`<li><b>${nm(e[0])}</b> ${e[2]==="ally"?(en?"⟷ alliance":"⟷ spojenectví"):e[2]==="line"?(en?"→ successor":"→ nástupce"):"⚔"} <b>${nm(e[1])}</b>: ${esc(lab(e))} ${e[2]==="fan"?tag("fan"):e[2]==="line"?tag("unc"):tag("off")}</li>`).join("");
  const later=(en?[
    ["knights-kingdom","King Leo's Lions","The Bulls (Cedric the Bull)","x","King Leo's castle against the outlaws of the Dark Forest."],
    ["knights-kingdom-2","Knights of Morcia (Mathias, Jayko…)","Vladek, Shadow & Rogue Knights","x","Three years of story, 2004–2006."],
    ["vikingove","Vikings","Norse beasts","x","Fenrir, Nidhogg, the Midgard Serpent, Fafnir…"],
    ["fantasy-era","Crown Knights","The evil wizard's skeletons","x","2007"],
    ["fantasy-era","Crown Knights and dwarves","Trolls","x","2008–2009"],
    ["fantasy-era","Crown Knights","Dwarves","a","Alliance only hinted at (crowns on dwarves) – a fan reading."],
    ["kingdoms","Lion Knights (red)","Dragon Knights (green)","x","Two human kingdoms."],
    ["castle-2013","King's Knights","The Dragon Wizard's Dragon Knights","x","The last standalone line."],
    ["ninja","Shogun, samurai, grey ninjas","Bandits Kendo and Bonsai","x","The red ninjas' role is contradictory in the sources."],
    ["nove-frakce","Horse Knights","Serpent Knights","?","Together in 31168; relationship not documented yet."]
  ]:[
    ["knights-kingdom","Lvi krále Lea","Býci (Cedric the Bull)","x","Hrad krále Lea proti psancům z Temného lesa."],
    ["knights-kingdom-2","Rytíři Morcie (Mathias, Jayko…)","Vladek, Shadow & Rogue Knights","x","Tři roky příběhu 2004–2006."],
    ["vikingove","Vikingové","Severské bestie","x","Fenrir, Nidhogg, Midgardský had, Fafnir…"],
    ["fantasy-era","Korunní rytíři","Kostlivci zlého čaroděje","x","2007"],
    ["fantasy-era","Korunní rytíři a trpaslíci","Trollové","x","2008–2009"],
    ["fantasy-era","Korunní rytíři","Trpaslíci","a","Spojenectví jen naznačené (koruna na trpaslících) – fanouškovský výklad."],
    ["kingdoms","Lví rytíři (červení)","Dračí rytíři (zelení)","x","Dvě lidská království."],
    ["castle-2013","Královi rytíři","Dračí rytíři Dračího čaroděje","x","Poslední samostatná řada."],
    ["ninja","Šógun, samurajové, šedí ninjové","Bandité Kendo a Bonsai","x","Role červených ninjů je v materiálech rozporná."],
    ["nove-frakce","Horse Knights","Serpent Knights","?","Společně v 31168; vztah zatím nedoložen."]
  ]).map(p=>`<div class="pair"><div class="vs"><span>${esc(p[1])}</span><span class="${p[3]==="a"?"a":"x"}">${p[3]==="a"?"⟷":p[3]==="?"?"?":"⚔"}</span><span>${esc(p[2])}</span></div><div style="color:var(--ink-2);margin-top:4px">${esc(p[4])} <a href="#${p[0]}">${esc(fx(fById(p[0]),"name"))}</a></div></div>`).join("");
  return `
  <div class="eyebrow">${en?"Who fought whom":"Kdo s kým bojoval"}</div>
  <h1>${en?"Faction relationship map":"Diagram vztahů frakcí"}</h1>
  <p class="lede">${en?"LEGO never published a single official faction diagram. This map is built from who stands against whom in the sets, catalogues, adverts and on the 10305 box. Hover a line to see its source, click a faction to open its page.":"LEGO nikdy nevydalo jeden oficiální diagram frakcí. Tento diagram je sestavený z toho, kdo proti komu stojí v setech, katalozích, reklamách a na krabici setu 10305. Najetím na čáru zobrazíte zdroj, kliknutím na frakci její stránku."}</p>
  <div class="legend">
    <span><svg width="34" height="10"><path class="e-off" d="M2 5H32"/></svg>${en?"conflict documented in LEGO material":"konflikt doložený materiály LEGO"}</span>
    <span><svg width="34" height="10"><path class="e-fan" d="M2 5H32"/></svg>${en?"conflict per fans":"konflikt podle fanoušků"}</span>
    <span><svg width="34" height="10"><path class="e-ally" d="M2 5H32"/></svg>${en?"alliance / reconciliation":"spojenectví / smíření"}</span>
    <span><svg width="34" height="10"><path class="e-line" d="M2 5H32"/></svg>${en?"successor":"nástupce"}</span>
  </div>
  <h2 class="sec" style="margin-top:14px">${en?"Classic era 1984–1998":"Klasická éra 1984–1998"}</h2>
  <div class="diagram">${svg}</div>
  <ul class="facts" style="margin-top:14px">${edgeList}</ul>
  <h2 class="sec">${en?"Later lines":"Pozdější řady"}</h2>
  <p>${en?"From 2000 on, each line has its own closed two-sided conflict and does not connect to the classic factions.":"Od roku 2000 má každá řada vlastní uzavřený konflikt dvou stran a s klasickými frakcemi se nepropojuje."}</p>
  <div class="pairs">${later}</div>`;
}

function vSources(){
  const en=LANG==="en";
  const L=[
    ["Wikipedia – Lego Castle","https://en.wikipedia.org/wiki/Lego_Castle",en?"History, factions, regional names, quotes from catalogues and DK books (The LEGO Book, LEGO Minifigure: A Visual History).":"Historie, frakce, regionální názvy, citace katalogů a knih DK (The LEGO Book, LEGO Minifigure: A Visual History)."],
    ["Brickset – Castle","https://brickset.com/sets/theme-Castle",en?"Set lists by subtheme and year (282 items, 1978–2016).":"Seznamy setů podle podtémat a let (282 položek 1978–2016)."],
    [en?"Brickset – individual sets":"Brickset – jednotlivé sety","https://brickset.com/sets/31168-1",en?"Launch and exit dates, piece counts, faction tags on modern sets (e.g. 31168, 40912, 21358, 10305).":"Data uvedení a konce prodeje, počty dílků, štítky frakcí u moderních setů (např. 31168, 40912, 21358, 10305)."],
    ["Brickipedia (fandom)","https://brickipedia.fandom.com/wiki/Castle",en?"Crests, characters and the retold official story; quotes from the 10305 box and catalogue profiles.":"Erby, postavy a převyprávěný oficiální příběh; citace krabice 10305 a katalogových profilů."],
    ["LEGO.com",en?"https://www.lego.com/en-us":"https://www.lego.com/cs-cz",en?"The official shop – price and availability.":"Oficiální obchod – ověření ceny a dostupnosti."]
  ];
  return en ? `
  <div class="eyebrow">How this site was made</div>
  <h1>Sources and confidence</h1>
  <p class="lede">The aim was to rely on official LEGO material as much as possible. LEGO.com could not be read directly while gathering the data, so official information (catalogue, box, instruction and advert texts) is taken from its quotes on Wikipedia and Brickipedia and marked ${tag("off")}.</p>
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
  <p class="lede">Cílem bylo opřít se co nejvíc o oficiální materiály LEGO. Web lego.com ale při sběru dat nešel přímo načíst, proto jsou oficiální informace (texty katalogů, krabic, návodů a reklam) převzaté z jejich citací na Wikipedii a Brickipedii a označené štítkem ${tag("off")}.</p>
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
  ${tiles(soon.map(m=>tile({n:m.n},{extra:m.f.length?`<span class="tnote">${linkFactions(m.f)}</span>`:""})))}
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

/* ================== ROUTER ================== */
function route(keepScroll){
  const r=(location.hash||"#uvod").slice(1)||"uvod";
  const f=fById(r);
  let html;
  if(f) html=vFaction(f);
  else if(r==="diagram") html=vDiagram();
  else if(r==="v-prodeji") html=vSale();
  else if(r==="moderni-sety") html=vModern();
  else if(r==="zdroje") html=vSources();
  else if(r==="navrat") html=vReturn();
  else if(r==="brzy") html=vSoon();
  else if(r==="soukromi") html=vPrivacy();
  else if(r==="podminky") html=vTerms();
  else html=vHome();
  $("#view").innerHTML=html;
  document.querySelectorAll("nav.main a, aside a").forEach(a=>{
    if(a.getAttribute("href")==="#"+r) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
  });
  if(!keepScroll) window.scrollTo(0,0);
}
renderChrome();
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
      const url = /\/bricks\/castle\//.test(location.pathname) ? "../cs/castle/status.json" : "status.json";
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
</script>
