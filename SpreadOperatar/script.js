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
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta containing ${ing1},${ing2},${ing3}`);
  }
};

restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  time: "20:10",
  address: "ABC"
})


const arr = [1,2,4];
const newArr = [5,8,...arr];
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Pastry'];
console.log(newMenu);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

const str = "Ayush";
const str2 = "Katoch";

const letters = [...str, ...str2];
console.log(letters);

// const ingredients = [alert(`Lets make pasta:`), prompt("Ingredient1: "), prompt("Ingredient2: "), prompt("Ingredient3: ")];

// restaurant.orderPasta(...ingredients);

const newRestaurant = {founded: 2022, ...restaurant};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Hotel";
console.log(restaurantCopy);



