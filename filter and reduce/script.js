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
