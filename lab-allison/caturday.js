var catMe =  require('cat-me');

var caturday = function(meow){
  if(meow !== undefined){
    console.log(catMe());
  }
};

exports.caturday = caturday;
