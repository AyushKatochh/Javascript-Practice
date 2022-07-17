'use strict';

const airline = "AIR INDIA";

console.log(airline.length);
console.log(airline.indexOf('R'));
console.log(airline.slice(4));
console.log(airline.slice(0, 3));

const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1);
    if(s === 'E') {
      console.log("Middle Seat");
    } else{
      console.log("Not a middle Seat");
    }
}

checkMiddleSeat('1A');
checkMiddleSeat('2S');
checkMiddleSeat('2E');

const passenger = "aYUsH";

const passengerLower = passenger.toLowerCase();
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

const email = 'hello@ayush.com';
const loginEmail = 'Hello@AyusH.COM';

const normalEmail = loginEmail.toLowerCase().trim();
console.log(normalEmail);
console.log(email === loginEmail);

const priceIN = '200₹';
const priceUSA = priceIN.replace('₹', '$');
console.log(priceUSA);

const announcement = 'All passengers come to boarding gate, boarding gate ';
console.log(announcement.replaceAll('boarding', 'on board'));

const checkBaggage = function(items) {
  const baggage = items.toLowerCase();
  if(baggage.includes('knife') || baggage.includes('gun')){
    console.log("Not Allowed");
  } else {
    console.log("Allowed");
  }
}

checkBaggage("I have gun");
checkBaggage("Knife  butter");
checkBaggage("Clothes there");

console.log('a+very+nice+string'.split('*'));



const capitalizeName = function(name) {
  const names = name.split('');
  const namesUpper = [];

  for(const n of names) {
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('ayush chand katoch');

//Padding
const maskedCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
}

console.log(maskedCreditCard(123400001234));
