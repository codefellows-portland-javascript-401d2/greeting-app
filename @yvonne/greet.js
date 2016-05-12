var moment = require('moment');

var greet = function (name = 'stranger') {
  var now = moment().hour();
  if (now < 12) {
    return 'Good Morning, ' + name;
  } else if ((now >= 13) && (now < 18)) {
    return 'Good Afternoon, ' + name;
  } else {
    return 'Good Evening, ' + name;
  }
};

module.exports.greet = greet;
