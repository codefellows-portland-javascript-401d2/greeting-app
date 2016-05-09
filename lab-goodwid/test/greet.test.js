var assert = require('assert');
var greet = require('../greet.js');

describe('greeting', () => {
  it('greet(\'Bob\') returns \'Hello Bob!\'', () => {
    assert.equal((greet('Bob')), 'Hello Bob!');
  });
});
