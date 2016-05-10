var assert = require("assert");
var greet = require("../greet");

describe ("greetings", () => {
    it("greets properly", function() {
        const greeting = greet("kate");
        assert.ok( /hello kate, how is your (Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day going?/.test(greeting), `result was "${greeting}"`);
    });
    it("no name = no one", function() {
        const greeting = greet();
        assert.ok( /hello no one, how is your (Mon|Tues|Wednes|Thurs|Fri|Satur|Sun)day going?/.test(greeting), `result was "${greeting}"`);
    });

});
