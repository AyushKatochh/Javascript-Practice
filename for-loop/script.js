'use strict';

const ayush = [
  'Ayush',
  'Katoch',
  2022 - 2002,
  'student',
  ['Ayon', 'Angelee', 'Sanchi'],
  true
];

let types=[];

for(let i=0; i< ayush.length; i++) {
  console.log(ayush[i], typeof ayush[i]);
  types.push(typeof ayush[i]);
}

console.log("Only for Strings");
for(let i=0; i< ayush.length; i++) {
  if(typeof ayush[i] !== "string") continue

  console.log(ayush[i], typeof ayush[i]);
}

console.log("Only for numbers");
for(let i=0; i< ayush.length; i++) {
  if(typeof ayush[i] === "number") break

  console.log(ayush[i], typeof ayush[i]);
}


console.log(types);

const years = [1990, 1994, 1998, 2002];

const ages = [];

for(let i=0; i< years.length; i++) {
   ages.push(2037 - years[i]);
}

console.log(ages);

// Looping backwards 
console.log('LOOPING BACKWARDS');
for(let i = ayush.length - 1; i <=0; i--) {
  console.log(i, ayush[i]);
}

// Loop within loop
for(let exercise = 1; exercise<= 3; exercise++) {
  console.log(`Starting exercise ${exercise}`);

  for(let rep = 1; rep < 6; rep++) {
    console.log(`Lifting weight repetition ${rep} of exercise ${exercise}`);
  }
}

 
