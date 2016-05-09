// var magic = require('./magic');
// magic.foo = 'BAR';
// console.log('magic', magic);

module.exports = function add(x=0,y=0) {
  return x + y;
};

// console.log( __dirname ); // this is what the "requires" are relative to

// function subtract() {}

// exports.add = add;
// exports.subtract = subtract;
// is the same as...
// module.exports.add = add;
// module.exports.subtract = subtract;
// and...
// module.exports = {
//   add: add,
//   subtract: subtract
// };
// BUT, don't reassign "exports" unless you're qualifying it with "module".
