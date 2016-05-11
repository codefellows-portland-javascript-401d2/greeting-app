const textSync = require('figlet').textSync;

const greet = (name = 'Stranger', font = 'Standard') => {
  return textSync(`Yo, ${name}!`, { font: `${font}` });
};

module.exports = greet;
