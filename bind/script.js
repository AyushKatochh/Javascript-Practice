'use strict';
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} 
        flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name})
    }
}

lufthansa.book(240, 'Ayush Katoch');
lufthansa.book(200, "Katoch Ayush");
console.log(lufthansa);

const euroWings = {
    airliine: "Eurowings",
    iataCode: 'EW',
    bookings: [],
}

const book = lufthansa.book;

book.call(euroWings, 20, 'AK');
console.log(euroWings);

book.call(lufthansa, 78, 'Ayon');
console.log(lufthansa);

const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LV',
    bookings: [],
}

book.call(swiss, 809, 'Angelee');
console.log(swiss);

const flightData = [638, 'Sparsh'];
book.call(swiss, ...flightData);

const bookEW = book.bind(euroWings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Ayush');

const bookEW23 = book.bind(euroWings, 23);
bookEW23('Ayush');
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);

    this.planes++;
    console.log(this.planes);
}

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value*rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));

const addTaxRate = function(rate) {
    return function (value) {
        return value + value * rate;
    }
}

const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
