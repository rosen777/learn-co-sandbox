var x = 1;

function myFunction() 
{
  y = 2
  console.log(x);
  
}

myFunction(); // 1

console.log(y) // Error!

console.log(x); // 1

function outerFunction() {
  var innerVariable = "I'm sort of a secret.";
 
  return function innerScope() {
    var inaccessible = "Nothing can touch me.";
 
    return innerVariable;
  }
}

var myScope = outerFunction();

console.log(myScope());
