'use strict';

const calcAge = function(Year) {
    return 2022 - Year;
}

// Function calling another function

const yearsUntilRetirement = function(birthYear, name) {
    const age = calcAge(birthYear);

    const retirementYears = 60 - age;

    if(retirementYears > 0) {
        console.log(retirementYears);
        return `${name} will retire in ${retirementYears} years`;
    } else {
        console.log("Already retired");
        return -1;
    }

}

//passing arguments

console.log(yearsUntilRetirement(2002, "Ayush"));
console.log(yearsUntilRetirement(1970, "Ayon"));
