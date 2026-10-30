
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
  <p class="tnote" style="max-width:68ch">${en?"All catalogued figure variants of the faction with the sets they come in (Rebrickable inventories, 29 Oct 2026). Faction assignment is editorial, not an official LEGO taxonomy.":"Všechny katalogizované varianty figurek frakce a sety, ve kterých jsou (inventáře Rebrickable, 29. 10. 2026). Přiřazení k frakci je redakční, nejde o oficiální dělení LEGO."}</p>`;
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

/* ================== RÁM STRÁNKY ================== */
function renderChrome(){
  document.documentElement.lang = LANG;
  document.title = t("title");
  $("#brand").innerHTML = `${esc(t("brand"))}<small>${esc(t("tagline"))}</small>`;
  $("#mainnav").setAttribute("aria-label", LANG==="cs"?"Hlavní navigace":"Main navigation");
  $("#mainnav").innerHTML = t("nav").map(([id,l])=>`<a href="#${id}">${esc(l)}</a>`).join("");
  $("#side").setAttribute("aria-label", t("factions"));
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
  $("#sidenav").innerHTML=h;
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

/* ================== STRÁNKA FRAKCE ================== */
function vFaction(f){
  const en=LANG==="en";
  const all=factionSets(f);
  const featured=all.filter(m=>SETDESC[m.n] || m.st==="on" || m.st==="soon");
  const retired=all.filter(m=>m.st==="off"||m.st==="lim");
  const figs=(MF[f.id]||[]).map(m=>{const cap=en?(MF_EN[m[0]]||m[1]):m[1];return `<figure class="fig"><div class="ph" data-n="?"><img loading="lazy" src="${mfUrl(m[0])}" alt="${esc(cap)}" ${IMGFAIL}></div><figcaption>${esc(cap)}</figcaption></figure>`;}).join("");
  const rels=fx(f,"rel");
  const yearOf = s => { const m=String(s).match(/^(\d{4})/); return m?+m[1]:-1; };
  const hist=fx(f,"hist").map((h,i)=>[h,i]).sort((a,b)=>(yearOf(b[0])-yearOf(a[0]))||(a[1]-b[1])).map(x=>x[0]);
  const idx=F.indexOf(f), prev=F[idx-1], next=F[idx+1];
  return `
  <div class="eyebrow">${eraName(f.era)}</div>
  <div class="fhead">${emblem(f,84)}<div style="min-width:0"><h1>${esc(fx(f,"name"))}</h1><div class="meta"><span class="chip">${esc(fx(f,"alt"))}</span><span class="chip">${yearLabel(f)}</span><span class="chip">${all.length} ${en?"sets":"setů"}</span>${(()=>{const n=Object.values(CAT_FIGS).filter(c=>c[1]===f.id).length;return n?`<span class="chip">${n} ${en?"minifigures":"minifigurek"}</span>`:""})()}</div></div></div>
  <p class="lede">${esc(fx(f,"intro"))}</p>
  <div class="erb"><div class="figs">${figs}</div><div class="panel"><div class="eyebrow">${en?"Crest and colours":"Erb a barvy"}</div><p style="margin:6px 0 12px">${esc(fx(f,"heraldry"))}</p><div class="eyebrow">${en?"Characters":"Postavy"}</div><ul class="facts" style="margin-top:6px">${fx(f,"chars").map(c=>`<li>${esc(c)}</li>`).join("")}</ul></div></div>
  <h2 class="sec">${en?"Sets with this faction":"Sety s touto frakcí"}</h2>
  ${featured.length?`<div class="feats">${featured.map(feature).join("")}</div>`:`<div class="empty">${en?"No described sets yet.":"Zatím bez popsaných setů."}</div>`}
  ${figGallery(f)}
  <h2 class="sec">${en?"Allies and enemies":"Spojenci a nepřátelé"}</h2>
  <ul class="facts">${f.rel.map((r,i)=>`<li>${esc(rels[i]||r[0])} ${tag(r[1])}</li>`).join("")}</ul>
  <p style="margin-top:8px"><a href="#diagram">${en?"Show on the faction map":"Zobrazit v diagramu vztahů"}</a></p>
  <h2 class="sec">${en?"History":"Historie"}</h2>
  <ul class="facts">${hist.map(h=>`<li>${esc(h)}</li>`).join("")}</ul>
  <h2 class="sec">${en?"Retired sets":"Vyřazené sety"}</h2>
  <p style="font-size:.92rem;color:var(--ink-2)">${en?"From newest to oldest.":"Od nejnovějších po nejstarší."}</p>
  ${tiles(retired.map(m=>tile(m,{noNote:!M.find(x=>x.n===m.n)})))}
  <div class="meta" style="margin-top:28px;justify-content:space-between">${prev?`<a href="#${prev.id}">← ${esc(fx(prev,"name"))}</a>`:"<span></span>"}${next?`<a href="#${next.id}">${esc(fx(next,"name"))} →</a>`:""}</div>`;
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
  <div class="feats">${on.map(feature).join("")}</div>
  ${lim.length?`<h2 class="sec">${en?"Only at LEGOLAND parks":"Jen v parcích LEGOLAND"}</h2>${tiles(lim.map(m=>tile(m)))}`:""}
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
  for(const y of Object.keys(byYear).sort((a,b)=>b-a)){
    h+=`<h2 class="sec">${en?"Last sold in":"Naposledy v prodeji"} ${y}</h2>${tiles(byYear[y].map(m=>tile(m,{extra:m.f.length?`<span class="tnote">${linkFactions(m.f)}</span>`:`<span class="tnote">${en?"no faction":"bez frakce"}</span>`})))}`;
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
  <h2 class="sec">All factions</h2>
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
  <h2 class="sec">Všechny frakce</h2>
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
  wrap.innerHTML=dgInner(); rewriteLinks(wrap);
});
document.addEventListener("keydown",e=>{
  if(e.key!=="Enter"&&e.key!==" ") return;
  const t=e.target; if(!t.closest||!t.closest("#dgwrap")||!(t.dataset.dgl!==undefined||t.dataset.dgn)) return;
  e.preventDefault(); t.dispatchEvent(new MouseEvent("click",{bubbles:true}));
});
function vDiagram(){
  const en=LANG==="en";
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
  if(location.hash.length>1) return location.hash.slice(1);
  if(DEPLOYED){ const m=location.pathname.match(/\/bricks\/(?:cs\/)?castle\/([^\/]+)\/?$/); if(m) return m[1]; }
  return "uvod";
}
function rewriteLinks(root=document){
  if(!DEPLOYED) return;
  root.querySelectorAll('a[href^="#"]').forEach(a=>{ const id=a.getAttribute("href").slice(1); if(id) a.setAttribute("href",routeUrl(id)); });
}
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
  let r=routeId();
  if(r==="moderni-sety") r="nedavno-vyrazeno";
  // staré odkazy s # převést na skutečné adresy
  if(DEPLOYED && location.hash.length>1 && (fById(r)||ROUTES_STATIC.includes(r))){ location.replace(routeUrl(r)); return; }
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
  $("#view").innerHTML=html;
  document.querySelectorAll("nav.main a, aside a").forEach(a=>{
    const h=a.getAttribute("href"); if(h==="#"+r||h===routeUrl(r)) a.setAttribute("aria-current","page"); else a.removeAttribute("aria-current");
  });
  rewriteLinks(document);
  document.querySelectorAll("nav.main a, aside a").forEach(a=>{ if(a.getAttribute("href")===routeUrl(r)) a.setAttribute("aria-current","page"); });
  applyMeta(r);
  if(!keepScroll) window.scrollTo(0,0);
}
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
</script>
