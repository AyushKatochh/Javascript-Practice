'use strict';

const flight = 'Ay123';
const ayush = {
    name: "Ayush Katoch",
    passport: 12345678
}

const checkIn = function(flightNum, passenger) {
    flightNum = "AB12";
    passenger.name = 'Mr. ' + passenger.name;

    if(passenger.passport === 12345678) {
        alert('Checked In');
    } else {
        alert("Wrong passport");
    }
}

checkIn(flight, ayush);
console.log(flight);
console.log(ayush);

const newPassport = function(person) {
    person.passport = Math.trunc(Math.random() *1000000000)
}

newPassport(ayush);
checkIn(flight, ayush);

// Functions calling other functions
const oneWord = function(str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function() {
    console.log('👍');
}

document.body.addEventListener('click', high5);

