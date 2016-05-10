var greet = require('./greet.js');

var subject = process.argv.slice(2);

console.log(greet(subject[0]));
