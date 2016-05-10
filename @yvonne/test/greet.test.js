var assert = require( 'assert' );
var greet = require('../greet.js');


describe ( 'greet somebody', () => {

  it ('greets Bob according to time of day', () => {
    assert.equal(greet('Bob'), 'Good Afternoon, Bob');
  });

  it ('says Good Afternoon to stranger, since no one specified', () => {
    assert.equal(greet(), 'Good Afternoon, stranger');
  });

});
