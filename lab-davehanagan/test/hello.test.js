var assert = require('assert');
var helloYou = require('../hello');

describe('Hello function', () => {
  
  it('returns greeting and name', function(){
    assert.equal(helloYou('Dave'), 'Hello Dave');
  });

  it('returns default name when none is given', function(){
    assert.equal(helloYou(), 'Hello Mysterious Stranger');
  });
});
