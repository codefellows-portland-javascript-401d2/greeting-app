const textSync = require('figlet').textSync;

const greet = (name = 'Stranger') => {
  return textSync(`Yo, ${name}!`);
};

module.exports = greet;
