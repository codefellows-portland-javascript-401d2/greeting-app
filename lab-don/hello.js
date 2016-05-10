// var moment = require('moment');

var generateGreeting = function(hour) {
  var greeting;
  var thisHour = hour;
  if (thisHour < 12) {
    greeting = 'Good Morning';
  } else if (thisHour > 18) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Afternoon';
  }
  return greeting;
};

var sayHello = function(hour, name = 'Stranger') {
  return generateGreeting(hour) + ' ' + name;  
};

module.exports.sayHello = sayHello;
