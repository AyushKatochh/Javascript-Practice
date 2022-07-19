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
