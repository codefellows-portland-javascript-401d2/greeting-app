var generateGreeting = function() {
  var greeting;
  var thisHour = new Date().getHours();
  if (thisHour >= 0 && this < 12) {
    greeting = 'Good Morning';
  } else if (thisHour >= 12 && thisHour < 18) {
    greeting = 'Good Afternoon';
  } else {
    greeting = 'Good Evening';
  }
  return greeting;
};

var sayHello = function(name = 'Stranger') {
  return generateGreeting() + ' ' + name;  
};

module.exports.sayHello = sayHello;
