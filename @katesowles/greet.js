const faces = require("cool-ascii-faces");

module.exports = function greet(name = "no one") {
    var today = new Date().getDay();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return `hello ${name}, how is your ${days[today]} going? ${faces()}`;  // using back ticks so I can utilize the ${} format
};
