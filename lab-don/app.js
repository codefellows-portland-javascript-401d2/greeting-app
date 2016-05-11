var moment = require('moment');
var hello = require('./hello');
var input = process.argv.slice(2);
var currentHour = moment().hour();
var name;

if (input.length) {
  console.log('input is not empty');
  name = input.join(' ');
}
// Main executive
console.log(hello.sayHello(currentHour, name));