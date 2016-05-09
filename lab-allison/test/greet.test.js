var assert = require( 'assert' );
var greet = require ( '../greet');

describe('greeting', function(){
  it('returns greeting with name parameter', function(){
    assert.equal(greet('allison'), 'hello allison');
  });

  it('returns a string', function(){
    assert.equal(typeof greet('allison'), 'string');
  });
});
