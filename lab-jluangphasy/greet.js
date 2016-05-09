function greet(name = 'there') {
  return 'Hello, ' + name + '!';
}

module.exports = greet;

console.log(greet(process.argv[2]));
