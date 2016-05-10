const assert = require('assert');
const greet = require('../greet');
const execSync = require('child_process').execSync;

describe('Greeting', () => {
  describe('greet()', () => {
    it('Should return "Yo, Stranger!"', () => {
      assert.equal(greet(), 'Yo, Stranger!');
    });

    it('Should return "Yo, Johnny!"', () => {
      assert.equal(greet('Johnny'), 'Yo, Johnny!');
    });

    it('Should not return "Yo, Friend!"', () => {
      assert.notEqual(greet('Friend'), 'Yo, Johnny!');
    });
  });

  describe('execSync()', () => {
    it('Should return "Yo, Stranger!"', () => {
      var greeting = execSync('node greet.js', { encoding: 'utf-8' });
      assert.equal(greeting.trim(), 'Yo, Stranger!');
    });

    it('Should return "Yo, Johnny!"', () => {
      var greeting = execSync('node greet.js Johnny', { encoding: 'utf-8' });
      assert.equal(greeting.trim(), 'Yo, Johnny!');
    });

    it('Should not return "Yo, Friend!"', () => {
      var greeting = execSync('node greet.js Friend', { encoding: 'utf-8' });
      assert.notEqual(greeting.trim(), 'Yo, Johnny!');
    });
  });
});
