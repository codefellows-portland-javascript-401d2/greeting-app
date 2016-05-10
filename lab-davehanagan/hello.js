function helloYou(name){
  if (name.length < 1) name = 'Mysterious Stranger';
  return('Hello ' + name);
}

module.exports = helloYou;
