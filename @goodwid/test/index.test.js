var assert = require('assert');
var es = require('child_process').execSync;




describe('Testing command line feature, should greet the names supplied as arguments.', () => {
  var test1 = es('node index.js David', {encoding: 'UTF-8'});
  var test2 = es('node index.js', {encoding: 'UTF-8'});
  it('\'node index.js David\' displays \'Hello David!\'', () => {
    assert.equal(test1, 'Hello David!\n');
  });

  it('\'node index.js\' displays \'Hello friend!\'', () => {
    assert.equal(test2, 'Hello friend!\n');
  });
});

describe('Testing command line parameters.', () => {
  var test3 = es('node -t index.js David', {encoding: 'UTF-8'});
  it('\'node index.js -t David\' displays \'Good Evening David!\'', () => {
    assert.equal(test3, 'Good Evening David!\n');
  });
});
