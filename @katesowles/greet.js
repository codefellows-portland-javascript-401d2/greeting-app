const emoji = require("random-emoji");

module.exports = function greet(name = "no one") {
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date().getDay();
    var emojis = emoji.random({count:1}).map(e => e.character).join("  ");
    return `hello ${name}, how is your ${days[today]} going? ${emojis}`;  // using back ticks so I can utilize the ${} format
};
