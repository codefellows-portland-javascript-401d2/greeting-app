var greet = require('./greet.js');

var subject = process.argv.slice(2)[0];

console.log(greet(subject));
