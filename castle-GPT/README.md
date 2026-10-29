# Castle Atlas — GPT

Produkce: https://vinmat.eu/bricks-gpt/cs/castle/

Obsahuje 32 frakcí a tematických skupin, 370 setů/produktů a 735 variant figurek. Katalogový snímek je z 29. 10. 2026; dostupnost není živý sklad. Původ dat a vymezení jsou na stránce Zdroje.

## Soubory

- `web/`: HTML, CSS, JavaScript a `catalog.json`.
- `assets/atlas-images.zip.001` a `.002`: všechny lokálně uložené katalogové fotografie. Build je spojí a rozbalí.
- `scripts/`: sestavení, ověření, balení fotografií a přesměrování starých adres.
- `build_catalog.py`, `cache_images.py`, `verify_catalog.py`: příprava a kontrola katalogu.
- `faction_routes.json`, `bricklink_ids.json`: mapování názvů frakcí a katalogových identifikátorů.

## Sestavení

Z kořene repozitáře, pouze se standardní knihovnou Pythonu:

```sh
python castle-GPT/scripts/build.py
python castle-GPT/scripts/verify.py
python castle-GPT/scripts/prepare_legacy.py
```

Výstup: `castle-GPT/_site/`. Všechny frakce, sety a figurky mají skutečnou HTML podstránku. Pro samostatnou kopii s relativními adresami fotografií použij `python castle-GPT/scripts/build.py --asset-base ''`.

## Publikace

GitHub Pages projektu `bricks` obsluhuje pouze `/bricks/`, nikoliv požadovanou cestu `/bricks-gpt/`. Proto:

1. Veřejné HTML, CSS, JS, katalog a sitemap z `_site/` se publikují do `Vinmatweb/vinmatweb.github.io`, složky `bricks-gpt/`. Vygenerované `assets/catalog/*.webp` není třeba duplikovat — katalog používá společné fotografie pod `/bricks/cs/castle/assets/catalog/`.
2. Workflow v tomto repozitáři kontroluje zdroje, připraví ke stažení export `castle-gpt-site` a automaticky publikuje `_legacy/` na původní GitHub Pages. Ten zachovává fotografie a přesměrovává původní HTML odkazy na `/bricks-gpt/`.
3. Při další úpravě webu je třeba aktualizovat také publikovaný export `bricks-gpt/` v hlavním repozitáři. Push sem sám o sobě neaktualizuje HTML v jiném repozitáři. Při publikaci zachovej všechny ostatní soubory hlavního webu a jeho `CNAME`.

V tomto projektu se `CNAME` nevytváří. Nový export neobsahuje žádné přihlašovací údaje ani API klíče.

LEGO® je ochranná známka LEGO Group; jde o nezávislý fanouškovský web.
