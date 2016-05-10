// accepts a string and a boolean value
function greet (name='friend', temporal) {
  var greeting = '';

  if (temporal) {
    greeting += 'Good ';
    let now = new Date;
    let hour = now.getHours();

    if (hour < 12) {
      greeting += 'Morning';
    } else if ((hour >= 12) && (hour < 19)) {
      greeting += 'Afternoon';
    } else {
      greeting += 'Evening';
    }
  } else {
    greeting += 'Hello';
  }

  return `${greeting} ${name}!`;
}

module.exports = greet;
