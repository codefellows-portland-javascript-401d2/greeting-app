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

    it('Should return "Yo, Johnny!" with tombstone font', () => {
      const figletGreeting = textSync('Yo, Johnny!', { font: 'tombstone' });
      assert.equal(greet('Johnny', 'tombstone'), figletGreeting);
    });

    it('Should not return "Yo, Friend!"', () => {
      const figletGreeting = textSync('Yo, Johnny!');
      assert.notEqual(greet('Friend'), figletGreeting);
    });

    it('Should not return "Yo, Friend!" with sweet font', () => {
      const figletGreeting = textSync('Yo, Johnny!', { font: 'sweet' });
      assert.notEqual(greet('Friend', 'sweet'), figletGreeting);
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

    it('Should return "Yo, Johnny!" with univers font', () => {
      const cliGreeting = execSync('node index.js Johnny univers', { encoding: 'utf-8' });
      const figletFontOptions = { font: 'univers' };
      const figletGreeting = textSync('Yo, Johnny!', figletFontOptions) + '\n';
      assert.equal(cliGreeting, figletGreeting);
    });

    it('Should not return "Yo, Friend!"', () => {
      const cliGreeting = execSync('node index.js Friend', { encoding: 'utf-8' });
      const figletGreeting = textSync('Yo, Johnny!') + '\n';
      assert.notEqual(cliGreeting, figletGreeting);
    });

    it('Should not return "Yo, Friend!" with weird font', () => {
      const cliGreeting = execSync('node index.js Friend weird', { encoding: 'utf-8' });
      const figletFontOptions = { font: 'weird' };
      const figletGreeting = textSync('Yo, Johnny!', figletFontOptions) + '\n';
      assert.notEqual(cliGreeting, figletGreeting);
    });
  });
});
