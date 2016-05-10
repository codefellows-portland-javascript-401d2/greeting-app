const helloYou = require('./hello');
const cool = require('cool-ascii-faces');

var params = [];

// Cycle through args
var argsKeep = process.argv.slice(2);
for (var i in argsKeep){
  if (argsKeep[i] === '-f'){
    // -f = Face Option, added a random cool ascii face
    console.log(`${cool()}`);
  }else if(argsKeep[i] === '-b'){
    // -b  = B Option
  }else{
    // Capture args that are not options
    params.push(argsKeep[i]);
  }
}

console.log(helloYou(params));
