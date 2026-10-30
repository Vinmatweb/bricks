# Castle — Claude

Import webu z uživatelem dodaného `lego-castle-github.zip`.

- EN: https://vinmat.eu/bricks/castle/
- CS: https://vinmat.eu/bricks/cs/castle/
- Zdroje: `_src/castle/src/`
- Sestavení z kořene repozitáře: `bash castle-Claude/_src/castle/build.sh`
- Publikované HTML a stav prodeje: `bricks/` uvnitř této složky.

Společné `.github/workflows/pages.yml` sestaví obě varianty, ověří JavaScript a nasadí je automaticky při pushi do `main`. Zachovává fotografie používané GPT webem na `/bricks-gpt/` i přesměrování starých GPT detailů.

Dodaný workflow pro kontrolu stavu prodeje je upravený na tuto strukturu; aktivní kopie je v kořenové `.github/workflows/lego-castle-status.yml`. Běží podle dodaného plánu každé pondělí v 05:17 UTC a lze jej spustit ručně. Po dokončení se web znovu publikuje. Nepovinný Brickset API klíč není nastavený tímto importem. Podrobnosti původního projektu: `README-castle.md` (cesty v něm jsou relativní k importovanému balíčku).
