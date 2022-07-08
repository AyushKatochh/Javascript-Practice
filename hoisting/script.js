'use strict';

console.log(funcDecl(2,3));
//console.log(expression(2,3));
//console.log(arrowFunction(2,3));

// Only declaration will work before actually decalraing 
function funcDecl(a, b) {
  return a+b;
}

const expression = function(a,b) {
  return a+b;
}

const arrowFunction = (a,b) => {
  return a+b;
}

// Undefined behaviour of var

if(!number) {
   console.log(deleteAllProducts());
}

var number = 10;

function deleteAllProducts() {
  console.log("All the products are deleted successfully");
}
