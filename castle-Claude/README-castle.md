# LEGO Castle Kronika – nasazení na vinmat.eu

Česká verze: https://vinmat.eu/bricks/cs/castle/ · Anglická verze: https://vinmat.eu/bricks/castle/

## Co kam patří (cesty od kořene repozitáře)

| Soubor | Účel |
|---|---|
| `bricks/cs/castle/index.html` | web – česká verze |
| `bricks/castle/index.html` | web – anglická verze (stav prodeje čte z české složky) |
| `bricks/cs/castle/status.json` | stav prodeje, který web načítá |
| `scripts/lego-castle-status.mjs` | kontrola lego.cz + Brickset |
| `.github/workflows/lego-castle-status.yml` | spouští kontrolu každé pondělí |

## Nastavení

1. Nahrajte soubory do repozitáře na uvedené cesty.
2. **Settings → Actions → General → Workflow permissions**: zvolte *Read and write permissions*.
3. Volitelně: zaregistrujte si zdarma API klíč na https://brickset.com/tools/webservices/requestkey
   a uložte ho jako secret `BRICKSET_API_KEY` (**Settings → Secrets and variables → Actions**).
   Bez klíče se Brickset čte z veřejné stránky setu.
4. **Actions → LEGO Castle – stav prodeje → Run workflow** spustí první kontrolu ručně.
   V logu uvidíte pro každý set, co vrátilo lego.cz a Brickset.

## Jak se rozhoduje

- lego.cz vrátí 404, přesměruje jinam nebo označí produkt jako `Discontinued` → set je vyřazen,
  odkaz na webu se přepne na Brickset.
- Brickset má datum konce prodeje v minulosti a lego.cz set nenabízí → vyřazen.
- `OutOfStock` / `SoldOut` → zůstává v prodeji s poznámkou „dočasně vyprodáno“.
- lego.cz nejde načíst (blokace, výpadek) → stav se nemění.
- Cena v Kč se převezme z lego.cz, pokud ji stránka uvádí.

## Nový set do sledování

Přidejte do `status.json` položku, např.:

```json
"10999": { "st": "on", "brickset": "10999-1", "url": "https://www.lego.com/cs-cz/product/nazev-setu-10999",
           "name": "Název setu", "y": 2027, "pcs": 1234, "line": "LEGO Icons", "f": ["black-falcons"] }
```

`f` jsou ID frakcí z webu (např. `crusaders`, `black-falcons`, `forestmen`).

## Poznámka k nasazení

Commit vytvořený akcí (GITHUB_TOKEN) nespouští další workflow. Pokud GitHub Pages
nasazujete vlastním workflow (ne „Deploy from a branch“), přidejte do něj
`workflow_run` na dokončení „LEGO Castle – stav prodeje“, nebo nasazení spusťte ručně.

## Partnerské (affiliate) odkazy

Na začátku skriptu v obou `index.html` je blok `const AFF = {...}`. Vyplňte jen to, co máte schválené;
prázdná položka = obyčejný odkaz bez provize, Amazon se bez `amazon_tag` vůbec nezobrazí.

| Klíč | Program | Co vložit |
|---|---|---|
| `lego_cs`, `lego_en` | LEGO Affiliate Program (Rakuten Advertising) | deeplink šablonu s `{url}`, např. `https://click.linksynergy.com/deeplink?id=VASE_ID&mid=ID_PROGRAMU&murl={url}` |
| `alza` | partnerský program Alza | šablonu odkazu s `{url}` podle návodu programu |
| `ebay_campid` | eBay Partner Network | Campaign ID (parametry odkazu ověřte v EPN generátoru odkazů) |
| `amazon_tag` | Amazon Associates | Tracking ID, např. `vinmat-20` |

Jakmile je vyplněný aspoň jeden klíč, objeví se v patičce a na stránce Zdroje upozornění na partnerské odkazy.
Odkazy na obchody mají `rel="sponsored"`.

## Úpravy webu

Zdroje jsou v `_src/castle/src/` (složky s podtržítkem GitHub Pages nepublikuje). Po úpravě spusťte
`_src/castle/build.sh` – vygeneruje obě jazykové verze do `bricks/`. Data jsou v `03-data-cs.js`
(české texty, sety) a `04-data-en.js` (anglické texty); partnerské odkazy v bloku `AFF` v `05-app.js`.

## Sekce „Již brzy“

Oznámené sety mají v datech stav `"st": "soon"`. Pokud mají v `status.json` i `url` na lego.cz,
týdenní kontrola je po zahájení prodeje sama přepne na „v prodeji“; dokud se neprodávají, nechá je beze změny.
Sety z BrickLink Designer Programu se na lego.cz neprodávají, ty je potřeba přepnout ručně.

## Patička, ochrana soukromí, podmínky

Zásady ochrany osobních údajů a Podmínky užití jsou součástí webu (`#soukromi`, `#podminky`) v obou jazycích.
Kontaktní e-mail je v konstantě `CONTACT` v `05-app.js`. Datum platnosti je v konstantě `UPDATED`.
