var assert = require('assert');
var greet = require('../greet');
var getWeekDay = require('../date');
var execSync = require('child_process').execSync;

describe('greeting', function(){
  it('returns greeting with name parameter', function(){
    assert.equal(greet.hello('allison'), 'hello allison');
  });

  it('returns default argument if left blank', function(){
    assert.equal(greet.hello(), 'hello young Jedi');
  });

  it('arguments are used correctly', function(){
    var out = execSync('node app.js Ginsburg', { encoding: 'utf-8'});
    assert.equal(out.match(/hello Ginsburg/), 'hello Ginsburg');
  });

  it('returns valid weekday', function(){
    var testday = new Date().toDateString().slice(0,3);
    assert.equal(getWeekDay.date().slice(0,3), testday);
  });

});
