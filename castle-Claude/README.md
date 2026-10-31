# Hradní kronika — Castle Claude

Česká verze: https://vinmat.eu/bricks/cs/castle/  
Anglická verze: https://vinmat.eu/bricks/castle/  
Sitemap: https://vinmat.eu/bricks/castle-sitemap.xml

Aktualizace z archivu `lego-castle-github (3).zip`, 31. 10. 2026. Obsahuje 60 předvykreslených stránek, samostatné adresy frakcí, metadata pro vyhledávače, společný `castle-app.js` a ověřené erby z katalogu BrickLink. Partnerská ID zatím zůstávají prázdná.

## Publikace v tomto repozitáři

Veškeré zdroje i hotové stránky jsou ve složce `castle-Claude/`. Soubor `.github/workflows/pages.yml` v kořeni repozitáře připraví společné fotografie a přesměrování GPT a potom spustí `python castle-Claude/scripts/prepare_pages.py`. Ten ověří a zkopíruje dodané předvykreslené stránky do Pages artefaktu. Hotové HTML se při každém nasazení nepřepisuje prázdnou šablonou.

Všechny 1 015 fotografie dodané v ZIPu byly porovnány bajt po bajtu s existujícím katalogem GPT a jsou stejné. Při nasazení se používá společná veřejná složka `/bricks/cs/castle/assets/catalog/`. Jejich úplná kopie je pro samostatné sestavení rovněž v rozděleném archivu `assets/atlas-images.zip.001` a `.002`; Git uchovává stejné obrazové bloky bez duplikace. Kontrolní součty dodaných fotografií jsou v `assets/catalog-image-manifest.json`.

## Aktualizace zdrojů

Originální návod je v `README-castle.md`. Z kořene repozitáře spusť `bash castle-Claude/_src/castle/build.sh` v prostředí s Pythonem 3 a Node.js s Playwrightem a Chromiem. Skript sestaví a předvykreslí všech 60 stránek. Do commitu patří také nové HTML, `castle-app.js` a sitemap. CI porovnává sestavený skript se zdroji a odmítne nesladěnou verzi.

## Kontrola dostupnosti

Aktivní workflow je `.github/workflows/lego-castle-status.yml` v kořeni repozitáře, nikoli jeho archivní kopie uvnitř této složky. Spouští se každé pondělí v 05:17 UTC, ručně a při změně kontrolního skriptu nebo tohoto workflow. Má výslovně `permissions: contents: write`. Cíl aktualizací je `castle-Claude/bricks/cs/castle/status.json`. Úspěšné dokončení vyvolá nové nasazení přes `workflow_run`; nejsou potřeba nové secrets ani změna výchozích oprávnění Actions.

## Google a affiliate

Sitemap obsahuje 60 skutečných adres a jejich jazykové protějšky. Odeslání do Google Search Console je samostatný následující krok; samotné nasazení nezaručuje indexaci. Affiliate konfigurace je připravená v `05-app.js`, ale neobsahuje žádné partnerské identifikátory.


## Galerie a místní kopie externích obrázků

Nová verze přidává časové osy setů, vyskakovací detail setu a 31 dalších produktových fotografií ve složce `bricks/cs/castle/assets/gal/`. Tyto soubory se publikují spolu s HTML a společným skriptem.

Nové ručně spouštěné workflow `Hradní kronika – stáhnout obrázky` v kořeni repozitáře je převzaté ze ZIPu a přizpůsobené cestám `castle-Claude/`. Při spuštění ukládá místní kopie veřejných obrázků do `castle-Claude/bricks/cs/castle/assets/ext/`; jeho úspěšné dokončení vyvolá nové nasazení. Pokud kopie chybí, aplikace použije původní server. Při importu ZIPu toto volitelné stahování nespouštíme.

Předchozí verze je zachovaná v historii Git v commitu `11b6f16262cc6a0a5f29948a675937c9ea05690f`; nové nasazení historii nepřepisuje.
