var assert = require('assert');
var helloYou = require('../hello');

describe('Hello', () => {

  it('returns greeting and name', function(){
    assert.equal(helloYou('Dave'), 'Hello Dave');
  });

  it('returns default name when no name is given', function(){
    assert.equal(helloYou(''), 'Hello Mysterious Stranger');
  });
  
});
