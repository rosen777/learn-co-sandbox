var cuteAnimal = 'quokka';

function makeVariable() {
  var cuteAnimal = 'sugar gilder';
  return cuteAnimal;
}

makeVariable();
// 'sugar gilder'

cuteAnimal;
// 'quokka'

volume = 10;  // declares a global variable called volume and sets it to 10

function returnEleven() {
  var volume = 11;  // declares a local variable
  //called volume and sets it to 11
  
  return volume;
}

returnEleven(); // returns 11
volume; // the global var is still 10

function goToEleven() {
  volume = 11;  // changes the global var to 11
  return volume;
}

goToEleven(); // returns 11
volume; // the global variable volume has been 
// changed to 11
