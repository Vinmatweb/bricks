#!/bin/bash
# Sestaví obě jazykové verze ze společných zdrojů.
set -euo pipefail
cd "$(dirname "$0")"
OUT=../../bricks
wrap(){
  local lang="$1" title="$2" description="$3" output="$4"
  {
    printf '<!doctype html>\n<html lang="%s">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n' "$lang"
    printf '<meta name="description" content="%s">\n' "$description"
    printf '<link rel="canonical" href="https://vinmat.eu/bricks/%s">\n' "$5"
    printf '<link rel="alternate" hreflang="cs" href="https://vinmat.eu/bricks/cs/castle/">\n<link rel="alternate" hreflang="en" href="https://vinmat.eu/bricks/castle/">\n<link rel="alternate" hreflang="x-default" href="https://vinmat.eu/bricks/castle/">\n'
    printf '<script>window.CASTLE_LANG="%s"</script>\n' "$lang"
    sed "1s#<title>.*</title>#<title>$title</title>#" src/01-head.html
    printf '\n</head>\n<body>\n'
    cat src/02-shell.html src/03-data-cs.js src/04-data-en.js src/05-app.js
    printf '\n</body>\n</html>\n'
  } > "$output"
}
mkdir -p "$OUT/cs/castle" "$OUT/castle"
wrap cs "Hradní kronika" "Neoficiální průvodce řadou LEGO® Castle 1978–2026 – frakce, historie a sety: Black Falcons, Lion Knights, Forestmen, Dragon Masters a další." "$OUT/cs/castle/index.html" "cs/castle/"
wrap en "Castle Chronicle" "An unofficial guide to the LEGO® Castle theme 1978–2026 – factions, history and sets: Black Falcons, Lion Knights, Forestmen, Dragon Masters and more." "$OUT/castle/index.html" "castle/"
echo 'Built Castle Claude: cs + en'
