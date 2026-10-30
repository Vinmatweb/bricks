# Castle Atlas — GPT v2

Produkce: https://vinmat.eu/bricks-gpt/cs/castle/

Přepracovaná encyklopedie podle [porovnání Claude / GPT / Gemini](COMPARISON.md). Původní zdroje jsou archivované vedle ve složce `bricks-gpt-v1/`, původní web na https://vinmat.eu/bricks-gpt-v1/cs/castle/.

## Obsah

32 frakcí a tematických skupin, 370 setů / produktů a 735 variant figurek. Katalogový snímek 29. 10. 2026; dostupnost není živý sklad. Počet skupin není počet oficiálních frakcí. Metodika a původ dat jsou součástí webu.

`web/` obsahuje aplikaci, styly, `catalog.json`, směrování a redakční kapitoly `content.js`. V `assets/atlas-images.zip.001` a `.002` jsou všechny lokálně uložené fotografie. Sestavení používá standardní knihovnu Pythonu; pro syntaktické kontroly JavaScriptu je potřeba Node. Katalogové a obrazové přípravné skripty zůstávají v této složce.

## Sestavení a kontroly

```sh
python castle-GPT/scripts/build.py
python castle-GPT/scripts/verify.py
python castle-GPT/scripts/prepare_legacy.py
bash castle-Claude/_src/castle/build.sh
python castle-Claude/scripts/prepare_pages.py
```

`_site/` je plný statický export v2: 1 148 skutečných HTML stránek, skripty, data a obrázky. Pro samostatný export s lokálními adresami obrázků použij `python castle-GPT/scripts/build.py --asset-base ''`. Nevyžaduje serverové přepisování adres.

## Publikace

Požadovaná cesta `/bricks-gpt/` leží mimo projektové Pages `/bricks/`. Proto jsou zdroje zde a veřejný export v repozitáři `Vinmatweb/vinmatweb.github.io` ve složce `bricks-gpt/`. Při změně zdrojů je třeba aktualizovat i tuto publikovanou kopii. Archiv `bricks-gpt-v1/` na produkci se již nepřepisuje.

Workflow tohoto repozitáře kontroluje v2, připraví artefakt `castle-gpt-site`, zachová fotografie pod `/bricks/cs/castle/assets/catalog/`, původní GPT detaily přesměruje na v2 a doplní hlavní stránky Claude verze. Fotografie se v hlavním repozitáři neduplikují; odkazy katalogu míří na toto sdílené úložiště. Nastavení `CNAME` se nemění.

## Ověřené chování

- Všechny statické adresy, existující cíle odkazů, obrázky a reciproční inventáře.
- Načtení detailu setu přímou adresou i po reloadu; 10305 má 22 záznamů v inventáři.
- Frakce → záložka figurek, globální hledání → set, přepnutí seznamu na karty.
- Sdílený filtr Černí sokoli + 2025; po reloadu stejné dva výsledky a v CSV oba odpovídající sety.
- Tmavý vzhled a mapa vazeb z inventářů.

LEGO® je ochranná známka LEGO Group. Projekt je nezávislý fanouškovský web.
