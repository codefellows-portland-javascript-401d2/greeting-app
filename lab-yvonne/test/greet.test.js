var assert = require( 'assert' );
var greet = require('../greet.js');


describe ( 'greet somebody', () => {

  it ('says hello to Bob, as specified', () => {
    assert.equal(greet('Bob'), 'Hello, Bob');
  });

  it ('says hello to stranger, since no one specified', () => {
    assert.equal(greet(), 'Hello, stranger');
  });

});
