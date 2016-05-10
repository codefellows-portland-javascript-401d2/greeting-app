module.exports = function greet (name = 'stranger') {
  var now = new Date();
  if (now.getHours() < 12) {
    return 'Good Morning, ' + name;
  } else if ((now.getHours() <= 13) && (now.getHours() < 18)) {
    return 'Good Afternoon, ' + name;
  } else {
    return 'Good Evening, ' + name;
  }
};
