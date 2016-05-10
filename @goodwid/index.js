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

if (program.male && program.female) {
  console.log('\n  error: Please specify only one gender.\n');
  process.exit(1);
}

var subject = program.args[0];

// Check for gender flags and if a name is entered.
if (program.male && subject) {
  subject = 'Mr. ' + subject;
}
if (program.female && subject) {
  subject = 'Ms. ' + subject;
}

// check for temporal flag
if (program.time) {
  console.log(greet(subject, true));
} else {
  // default behavior.
  console.log(greet(subject));
}
