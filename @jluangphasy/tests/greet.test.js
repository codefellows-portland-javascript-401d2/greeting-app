const assert = require('assert');
const greet = require('../greet');
const execSync = require('child_process').execSync;
const textSync = require('figlet').textSync;

describe('Greeting', () => {
  describe('greet()', () => {
    it('Should return "Yo, Stranger!"', () => {
      const figletGreeting = textSync('Yo, Stranger!');
      assert.equal(greet(), figletGreeting);
    });

    it('Should return "Yo, Johnny!"', () => {
      const figletGreeting = textSync('Yo, Johnny!');
      assert.equal(greet('Johnny'), figletGreeting);
    });

    it('Should not return "Yo, Friend!"', () => {
      const figletGreeting = textSync('Yo, Johnny!');
      assert.notEqual(greet('Friend'), figletGreeting);
    });
  });

  describe('execSync()', () => {
    it('Should return "Yo, Stranger!"', () => {
      const cliGreeting = execSync('node index.js', { encoding: 'utf-8' });
      const figletGreeting = textSync('Yo, Stranger!') + '\n';
      assert.equal(cliGreeting, figletGreeting);
    });

    it('Should return "Yo, Johnny!"', () => {
      const cliGreeting = execSync('node index.js Johnny', { encoding: 'utf-8' });
      const figletGreeting = textSync('Yo, Johnny!') + '\n';
      assert.equal(cliGreeting, figletGreeting);
    });

    it('Should not return "Yo, Friend!"', () => {
      const cliGreeting = execSync('node index.js Friend', { encoding: 'utf-8' });
      const figletGreeting = textSync('Yo, Johnny!') + '\n';
      assert.notEqual(cliGreeting, figletGreeting);
    });
  });
});
