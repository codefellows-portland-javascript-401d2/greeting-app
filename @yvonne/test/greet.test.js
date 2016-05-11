var assert = require( 'assert' );
var greet = require('../greet.js');


describe ( 'greet somebody', () => {

  it ('greets Bob according to time of day', () => {
    assert.equal(greet.greet('Bob'), 'Good Evening, Bob');
  });

  it ('says Good Evening to stranger, since no one specified', () => {
    assert.equal(greet.greet(), 'Good Evening, stranger');
  });

});
