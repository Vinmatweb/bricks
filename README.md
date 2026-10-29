# Bricks

České informační weby o LEGO. První částí je **Castle Atlas**.

- Produkční adresa: https://vinmat.eu/bricks/cs/castle/
- Zdrojové soubory atlasu: `castle/`
- Příklad frakce: https://vinmat.eu/bricks/cs/castle/black-falcons/
- Samostatné skutečné HTML stránky mají také všechny sety a varianty minifigurek.

## GitHub Pages

V repozitáři musí být zapnuté **Settings → Pages → Source: GitHub Actions**. Workflow `pages.yml` potom při každém pushi do `main` sestaví a publikuje web.

V tomto repozitáři se nenastavuje vlastní doména `vinmat.eu` a nevytváří se `CNAME`: projekt dědí doménu uživatelského webu `Vinmatweb/vinmatweb.github.io` a připojí cestu `/bricks/`.

## Místní sestavení

```sh
python scripts/build.py
python scripts/verify.py
```

Sestavený web je v `_site/`. `castle/web/` obsahuje běžné HTML, CSS, JavaScript, katalog JSON a optimalizované fotografie. Build používá pouze standardní knihovnu Pythonu. Obrázky ani katalog se při sestavení znovu nestahují.

Data: Rebrickable a jednotlivě doložené katalogy. Katalogový snímek k 29. 10. 2026. Dostupnost je ručně ověřený stav, ne živý sklad. Podrobnosti a omezení jsou na stránce Zdroje. LEGO® je ochranná známka LEGO Group; projekt je nezávislý fanouškovský web.

