'use strict';
const age1 = calcAge1(2002);

//function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
}



//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(2002);
