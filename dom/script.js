'use strict';



const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
document.querySelector('.number').textContent =secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess) {
        document.querySelector('.message').textContent="Not a number";
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent="Correct Answer";
    } else if(guess > secretNumber) {
        if(score > 1) {
              document.querySelector('.message').textContent="High";
              score--;
              document.querySelector('.score').textContent= score;

        } else {
           document.querySelector('.message').textContent="You loose";
           document.querySelector('.score').textContent= 0;
        }
    } else if(guess<secretNumber){
        if(score > 1) {
              document.querySelector('.message').textContent="Low";
              score--;
              document.querySelector('.score').textContent= score;

        } else {
           document.querySelector('.message').textContent="You loose";
           document.querySelector('.score').textContent= 0;
        }
    }
})
