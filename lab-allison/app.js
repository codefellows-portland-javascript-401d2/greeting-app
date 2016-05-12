var greet = require('./greet');
var catMe =  require('cat-me');
var getWeekDay = require('./date');

console.log(greet.hello(process.argv[2]));
console.log(`Happy ${getWeekDay.date()}!\n ${catMe()}`);
