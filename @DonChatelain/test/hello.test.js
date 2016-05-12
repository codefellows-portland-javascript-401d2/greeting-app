var assert = require('assert');
var hello = require('../hello');
var execSync = require('child_process').execSync;

describe('greeting', () => {
  
  it('converts current hour to custom greeting', () => {
    var testAfternoonHour = 14;
    assert.equal(hello.sayHello(testAfternoonHour, 'Don'),
    'Good Afternoon Don');
  });

  it('accepts argument via command line, uses as name input', () => {
    var testStr = execSync('node app.js Dingle').toString();
    var pattern = /Morning|Afternoon|Evening/;
    var whichGreeting = pattern.exec(testStr);
    var actualStr = 'Good ' + whichGreeting + ' Dingle\n';
    assert.equal(testStr, actualStr);
  });
  
  it('handles multiple names in CLI arguments', () => {
    var testStr = execSync('node app.js Dingle McFuss Jr').toString();
    var pattern = /Morning|Afternoon|Evening/;
    var whichGreeting = pattern.exec(testStr);
    var actualStr = 'Good ' + whichGreeting + ' Dingle McFuss Jr\n';
    assert.equal(testStr, actualStr);
  });
        
});
