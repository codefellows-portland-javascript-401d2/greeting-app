// accepts a string and an options object
function greet (name='friend', option = {time:false, male: false, female: false}) {
  var greeting = '';
  var prefix = '';

  if (option.male && option.female) {
    console.log('\n  error: Please specify only one gender.\n');
    process.exit(1);
  }

  // Check for gender flags and if a name is entered.
  if (option.male && name !== 'friend') {
    prefix = 'Mr. ';
  }
  if (option.female && name !== 'friend') {
    prefix = 'Ms. ';
  }

  if (option.time) {
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

  return `${greeting} ${prefix}${name}!`;
}

module.exports = greet;
