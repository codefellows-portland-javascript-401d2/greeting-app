var assert = require("assert");
var greet = require("../greet");

describe ("greetings", () => {
    it("greets properly", function() {
        const greeting = greet("kate");
        assert.ok( /hello kate, how is your day going?/.test(greeting), `result was "${greeting}"`);
        // assert.ok(greet("kate"), "hello kate, how is your day going?");
    });
    it("no name = no one", function() {
        // const greeting = greet("");
        assert.ok(greet(), "hello no one, how is your day going?");
    });
});
