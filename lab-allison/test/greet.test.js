var assert = require('assert');
var greet = require('../greet');
var execSync = require('child_process').execSync;

describe('greeting', function(){
  it('returns greeting with name parameter', function(){
    assert.equal(greet.hello('allison'), 'hello allison');
  });

  it('returns a string', function(){
    assert.equal(typeof greet.hello('allison'), 'string');
  });

  it('arguments are used correctly', function(){
    var out = execSync('node greet.js Ginsburg', { encoding: 'utf-8'});
    assert.equal(out, 'hello Ginsburg\n');
  });
});
