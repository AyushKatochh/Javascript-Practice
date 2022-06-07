'use strict';

// Object Methods
const ayush = {
  firstName: 'Ayush',
  lastName: 'Katoch',
  birthYear: 2002,
  job: 'Junior Developer',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
      return `${this.firstName} is ${this.calcAge()} old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
  }
};


// object methods
console.log(ayush.calcAge());
console.log(ayush.getSummary());
