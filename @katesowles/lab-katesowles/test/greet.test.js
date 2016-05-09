var assert = require('assert');
var greet = require('greet');

describe ('greetings', () => {
  it('greets properly', function() {
    assert.equal(greet('kate'), 'kate');
  });
  it('no name = no one', function() {
    assert.equal(greet(), 'no one');
  });
});
