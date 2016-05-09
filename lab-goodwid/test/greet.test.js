var assert = require('assert');
var greet = require('../greet.js');

describe('Testing the greet function, should greet the name supplied.', () => {
  it('greet(\'Bob\') returns \'Hello Bob!\'', () => {
    assert.equal(greet('Bob'), 'Hello Bob!');
  });

  it('greet() reutrns \'Hello friend!\'', () => {
    assert.equal(greet(), 'Hello friend!');
  });
});
