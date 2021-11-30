#!/usr/bin/env node

const browserslist = require('browserslist');

console.log(browserslist(['ie >= 11', 'safari >= 7', 'iOS >= 10.0', 'and_chr >= 5.0', 'last 1 version', '> 1%']))
console.log(browserslist())
