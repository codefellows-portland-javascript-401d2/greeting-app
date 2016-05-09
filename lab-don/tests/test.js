var assert = require('assert');
var hello = require('../hello');

describe('greeting', () => {
    
    it('greets input string', () => {
        assert.equal(hello.sayHello('Don'), 'Hello, Don!'); 
    });
    
    it('treats no input as empty string', () => {
        assert.equal(hello.sayHello(), 'Hello, !'); 
    });
        
});
