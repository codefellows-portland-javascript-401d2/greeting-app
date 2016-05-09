var assert = require( 'assert' );

function greet (name) {
  console.log('Hello ' + name);
  return 'Hello ' + name;
}

describe ( 'greet somebody', () => {

  it ('says hello to Bob', () => {
    assert.equal(greet('Bob'), 'Hello Bob');
  });

});
