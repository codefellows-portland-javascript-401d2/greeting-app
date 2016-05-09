var greet = require('./greet.js');

var args = process.argv.slice(2);

console.log(greet(args[0]));
