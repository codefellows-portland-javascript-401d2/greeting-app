var greet = (name = 'Stranger') => {
  return `Yo, ${name}!`;
};

module.exports = greet;

console.log(greet(process.argv[2]));
