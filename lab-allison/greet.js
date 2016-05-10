var hello = function (name){
  return ( 'hello ' + name );
};

exports.hello = hello;

console.log(hello(process.argv[2]));
