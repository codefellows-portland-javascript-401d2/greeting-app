#!/usr/bin/env node

var greet = require('./greet.js');
var program = require('commander');


program
  .version('1.0.0')
  .option('-t, --time', 'Specify temporally appropriate greeting.')
  .parse(process.argv);

const subject = program.args[0];
if (program.time) {
  console.log(greet(subject, true));
} else {
  console.log(greet(subject));
}
