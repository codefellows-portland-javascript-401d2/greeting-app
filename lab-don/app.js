var moment = require('moment');
var hello = require('./hello');
var input = process.argv;
var name;

if (input[2] !== undefined) {
  name = '';
} 
// Handles input multiple names separated by space
for (var i = 2; i < input.length; i++) {
  name += input[i] + ' ';
}

// Main executive
console.log(hello.sayHello(moment().hour(), name));