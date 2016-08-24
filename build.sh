#!/bin/sh
TARGET=`curl -s https://api.github.com/repos/webcomponents/webcomponentsjs/releases/latest | grep tarball_url | head -n 1 | cut -d '"' -f 4`
npm install $TARGET
./node_modules/.bin/webpack src/mutationobserver-polyfill.js release/mutationobserver-polyfill.min.js --optimize-minimize
