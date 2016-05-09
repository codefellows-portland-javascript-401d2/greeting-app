var assert = require('assert');
var greet = require('../greet');

describe ('greetings', () => {
  it('greets properly', function() {
    assert.equal(greet('kate'), 'hello kate, how is your day going?');
  });
  it('no name = no one', function() {
    assert.equal(greet(), 'hello no one, how is your day going?');
  });
});
