'use strict';

function calcAge(birthYear) {
  
  console.log(this);
  return 2022 - birthYear;
}

const calcAgeExpression = function(birthYear) {
    console.log(this);
    return 2022 - birthYear;
}

const calcAgeArrow = (birthYear) => {
  console.log(this);
  return 2022 - birthYear;
}

calcAge(2002);
calcAgeExpression(2002);
calcAgeArrow(2002);

const Ayush = {
  year: 2002,
  calcAge: function() {
    console.log(this);
    console.log(2022 - this.year);
  }
}

Ayush.calcAge();

