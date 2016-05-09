var assert = require( 'assert' );
var greet = require('../greeting.js');


describe ( 'greet somebody', () => {

  it ('says hello to Bob', () => {
    assert.equal(greet('Bob'), 'Hello Bob');
  });

});
