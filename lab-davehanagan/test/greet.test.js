var assert = require('assert');
const execSync = require('child_process').execSync;

describe('Greeting', () =>{

  it('greeting successful with no options', function(){
    var output = execSync('node greet.js Beth',{encoding:'utf-8'});
    assert.equal(output, 'Hello Beth\n');
  });

  it('greeting with -f option has successful greeting', function(){
    var output = execSync('node greet.js Beth -f',{encoding:'utf-8'});
    assert.equal(output.slice(-11), 'Hello Beth\n');
  });

});
