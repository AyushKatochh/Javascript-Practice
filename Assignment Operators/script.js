'use strict';



const rest1 = {
  name: "Ayush",
  numGuests: 0
}

const rest2 = {
  name:"Katoch",
  owner: "Pirates of Grill"
}

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

rest1.owner &&= "<ANONYMOUS>"
rest2.owner &&= "<ANONYMOUS>"

console.log(rest1);
console.log(rest2);
