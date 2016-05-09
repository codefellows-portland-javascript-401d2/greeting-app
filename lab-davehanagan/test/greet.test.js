var assert = require('assert');
const execSync = require('child_process').execSync;

describe('greeting test', () =>{

  it('greeting output test', function(){
    var output = execSync('node greet.js Beth',{encoding:'utf-8'});
    assert.equal(output, 'Hello Beth\n');
  });
});
