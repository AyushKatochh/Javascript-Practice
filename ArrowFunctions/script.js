'use strict';


// Arrow Function
const retirementAge = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirementAge = 60 - age;
    return `${firstName} will retire in ${retirementAge} years`;
}

console.log(retirementAge(2002, "Ayush"));
