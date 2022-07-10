'use strict';


const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function(starterIndex, mainIndex) {
     return `${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]}`;
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
      console.log(`Order ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${address} ${time}`);
  }
};

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  time: "20:10",
  address: "ABC"
})

const {openingHours, categories, starterMenu} = restaurant;
console.log(openingHours, categories, starterMenu);

const {
  openingHours: hours,
  categories: foodCategories,
  starterMenu: starter
} = restaurant;

console.log(hours, foodCategories, starter);

//Mutating variables
let a = 22;
let b = 10;

const obj = {a: 20, b: 12};
({a,b} = obj);
console.log(a,b);

//Nested Objects
const {fri: {open:o, close:c}} = hours;
console.log(o,c);





