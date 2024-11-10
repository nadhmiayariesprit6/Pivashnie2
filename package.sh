#!/bin/bash
mkdir tmp
cp manifest.json tmp/
cp eradicate.js tmp/
cp eradicate.css tmp/
cp info-panel.html tmp/
cp jquery.js tmp/

cp icon16.jpg tmp/
cp icon48.jpg tmp/
cp icon128.jpg tmp/
cp taiko_tiny.png tmp/

GITTAG=$(git describe --always --tag)

zip -r build/NewsFeedEradicator_$GITTAG.zip tmp
rm -R tmp
