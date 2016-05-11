var assert = require('assert');
var greet = require('../greet');
var execSync = require('child_process').execSync;

describe('greeting', function(){
  it('returns greeting with name parameter', function(){
    assert.equal(greet.hello('allison'), 'hello allison');
  });

  it('returns default argument if left blank', function(){
    assert.equal(greet.hello(), 'hello young Jedi');
  });

  // it('arguments are used correctly', function(){
  //   var out = execSync('node app.js Ginsburg', { encoding: 'utf-8'});
  //   assert.equal(out, /[hello Ginsburg]/);
  // });

});

//TODO how to fix last test to account for the cats?
