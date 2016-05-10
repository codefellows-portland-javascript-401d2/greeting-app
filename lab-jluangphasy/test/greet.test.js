var assert = require('assert');
var greet = require('../greet');

describe('Greeting', function () {
  it('should return "Hello, there!"', function () {
    assert.equal(greet(), 'Hello, there!');
  });

  it('should return "Hello, Johnny!"', function () {
    assert.equal(greet('Johnny'), 'Hello, Johnny!');
  });
});
