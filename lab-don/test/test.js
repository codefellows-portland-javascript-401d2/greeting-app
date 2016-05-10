var assert = require('assert');
var hello = require('../hello');
var execSync = require('child_process').execSync;

describe('greeting', () => {
  
  it('greets input string', () => {
    assert.equal(hello.sayHello('Don'), 'Hello, Don'); 
  });
    
  it('treats no input as Stranger', () => {
    assert.equal(hello.sayHello(), 'Hello, Stranger'); 
  });
  
  it('greets input numbers', () => {
    assert.equal(hello.sayHello(328), 'Hello, 328'); 
  });
  
  it('properly receives command line input', () => {
    assert.equal(execSync('node app.js Dingle').toString(), 
    'Hello, Dingle \n');
  });
  
  it('receives multiple names (i.e first and last)', () => {
    assert.equal(assert.equal(execSync('node app.js Dingle McFuss').toString(), 
    'Hello, Dingle McFuss \n'));
  });
        
});
