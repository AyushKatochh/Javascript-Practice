const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter((mov,i) => mov >0);
console.log(deposits);

const withdrawal = movements.filter((mov,i) => mov<0);
console.log(withdrawal);

const balance = movements.reduce((acc, cur) => acc+cur ,0);
console.log(balance);

const max = movements.reduce((acc, mov) => {
  if(acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);
/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/


const calcAverageHumanAge = function(ages) {
   const humanAges = ages.map((dogAge) => dogAge <= 2 ? 2*dogAge: 16+dogAge*4);
   console.log(humanAges);

   const filterHumanAges = humanAges.filter((age) => age>=18);
   console.log(filterHumanAges);

  const average = filterHumanAges.reduce((acc, age) => acc+age, 0)/ filterHumanAges.length

  return average;
}

const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])
console.log(average1, average2);
