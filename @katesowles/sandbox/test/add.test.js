var assert = require("assert");
var add = require("../add");

describe ("add function", () => {
    it( "adds simple numbers", function() {
        assert.equal(add(1,2), 3);
    });

    it( "treats missing values as 0", () => {
        assert.equal(add(2), 2);
    });
});
