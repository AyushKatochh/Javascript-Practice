'use strict';

const friends  = ["Ayush", "Ayon", "Angelee"];

const years = new Array(2002, 2003, 2004);

console.log(friends);
console.log(years);

console.log(friends[2]);
console.log(friends.length);

//Passing only function expressions
console.log(friends[friends.length - 1]);

friends[2] = "Angelina";
console.log(friends);

const firstName = "Katoch";

const Ayush = [firstName, "Ayush", 2022-2002, "Student", friends];

console.log(Ayush);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}

const year = [2001, 2002, 2003];

console.log(calcAge(year[0]));
console.log(calcAge(year[1]));

'use strict';

// const friends  = ["Ayush", "Ayon", "Angelee"];

// const years = new Array(2002, 2003, 2004);

// console.log(friends);
// console.log(years);

// console.log(friends[2]);
// console.log(friends.length);

// //Passing only function expressions
// console.log(friends[friends.length - 1]);

// friends[2] = "Angelina";
// console.log(friends);

// const firstName = "Katoch";

// const Ayush = [firstName, "Ayush", 2022-2002, "Student", friends];

// console.log(Ayush);

// const calcAge = function (birthYear) {
//     return 2022 - birthYear;
// }

// const year = [2001, 2002, 2003];

// console.log(calcAge(year[0]));
// console.log(calcAge(year[1]));

const friends = ["Jay", "Micheal", "Angelee"];
const length1 = friends.push("Ayush");

console.log(length1);

const firstAddLength = friends.unshift("Ayon");
console.log(firstAddLength);
console.log(friends);

const removeLast = friends.pop();
console.log(removeLast);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Dan"));

friends.push(23);
console.log(friends.includes('Steven'));



