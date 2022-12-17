#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'


#https://hkapk.github.io/Disc-Golf-Skins-ScoreKeeper/

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:hkapk/Disc-Golf-Skins-ScoreKeeper.git main:gh-pages

cd -