const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

for(const [i, movement] of movements.entries()) {
  if(movement >0) {
    console.log(`Movement ${i}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i}: You withdraw ${movement}`);
  }
}

console.log("-------------------------------------");
movements.forEach(function(mov, i, arr) {
   if(mov >0) {
    console.log(`Movement ${i}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i}: You withdraw ${mov}`);
  }
})
