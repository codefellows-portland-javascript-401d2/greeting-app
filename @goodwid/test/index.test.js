var assert = require('assert');
var es = require('child_process').execSync;




describe('Testing command line feature, should greet the names supplied as arguments.', () => {
  var test1 = es('./index.js David', {encoding: 'UTF-8'});
  var test2 = es('./index.js', {encoding: 'UTF-8'});
  it('\'index.js David\' displays \'Hello David!\'', () => {
    assert.equal(test1, 'Hello David!\n');
  });

  it('\'index.js\' displays \'Hello friend!\'', () => {
    assert.equal(test2, 'Hello friend!\n');
  });
});

describe('Testing command line parameters.', () => {
  var test3 = es('./index.js -t David', {encoding: 'UTF-8'});
  it('\'index.js -t David\' displays \'Good Evening David!\'', () => {
    assert(/Good (Morning|Afternoon|Evening) David!\n/.test(test3));
  });
});
