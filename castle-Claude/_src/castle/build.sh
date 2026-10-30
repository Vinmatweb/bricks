#!/bin/bash
# Sestaví obě jazykové verze se samostatnými stránkami do bricks/ (v kořeni repozitáře)
set -e
cd "$(dirname "$0")"
python3 build_site.py ../../bricks
node prerender.cjs ../..
rm -f index.html
