const faces = require("cool-ascii-faces");

module.exports = function greet(name = "no one") {
    return `hello ${name}, how is your day going? ${faces()}`;  // using back ticks so I can utilize the ${} format
};
