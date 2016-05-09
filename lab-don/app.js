var hello = require('./hello');
var input = process.argv;
var name = '';
// Handles input multiple names separated by space
for (var i = 2; i < input.length; i++) {
  name += input[i] + ' ';
}

console.log(hello.sayHello(name));