var helloYou = require('./hello');
var params = process.argv.slice(2).toString();
console.log(helloYou(params));
