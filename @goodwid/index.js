#!/usr/bin/env node

var greet = require('./greet.js');
var program = require('commander');

program
  .version('1.0.3')
  .arguments('[name]')
  .option('-t, --time', 'Specifies a temporally appropriate greeting.')
  .option('-m, --male', 'Adds a male gender appropriate greeting.')
  .option('-f, --female', 'Adds a female gender appropriate greeting.')
  .parse(process.argv);

var subject = program.args[0];
var options = {
  time: program.time,
  male: program.male,
  female: program.female 
};


console.log(greet(subject, options));
