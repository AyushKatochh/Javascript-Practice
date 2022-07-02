'use strict';

const objectIntroduction = {
    firstName: "Ayush",
    lastName: "Katoch",
    age: 2022 - 2002,
    job: "Software Engineer",
    friends: ["Ayon", "Angelee", "Sheetal", "Sanchi", "Manogna"]
}

// Extracting first name
console.log(objectIntroduction.firstName);

console.log(objectIntroduction['firstName']);

const nameKey = "Name";

console.log(objectIntroduction['first' + nameKey]);

const interestedIn = prompt("firstName, lastName, age, job, firends");
console.log(objectIntroduction[interestedIn]);

if(objectIntroduction[interestedIn]) {
    objectIntroduction[interestedIn];
} else {
    console.log("Wrong Request");
}

console.log(`${objectIntroduction.firstName} has ${objectIntroduction.friends.length} friends and his best friend is ${objectIntroduction.friends[0]}`);
