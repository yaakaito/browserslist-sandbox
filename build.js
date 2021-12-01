#!/usr/bin/env node

const browserslist = require('browserslist');
const { buildSync } = require('esbuild');

const browsers = browserslist();
const target = [browsers.reverse().find(t => t.startsWith('chrome')).replace(' ', '')];
console.log(buildSync({
    entryPoints: ['src/index.js'],
    target
}))
