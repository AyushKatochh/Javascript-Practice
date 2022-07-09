'use strict';

// Primitive  Type
let lastName= "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(oldLastName, lastName);

// Reference Type
const Ayush = {
  firstName: "Ayush",
  lastName: "Katoch",
  age: "19"
}

// Everything will be same and the last updated firstName will be displayed 
const AyushExactReference = Ayush;
AyushExactReference.firstName = "Katoch"

console.log(Ayush, AyushExactReference);

const AyushCopy = Object.assign({}, Ayush);

AyushCopy.age = "20";

console.log(AyushCopy);
