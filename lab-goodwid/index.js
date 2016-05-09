var greet = require('./greet.js');

var subject = process.argv.slice(2).join(' ');

console.log(greet(subject));
