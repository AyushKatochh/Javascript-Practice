'use strict';



const secretNumber = Math.trunc(Math.random()*20) + 1;
let score = 20;



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    if(!guess) {
        document.querySelector('.message').textContent="Not a number";
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent="Correct Answer";
       document.querySelector('.number').textContent =secretNumber;
        document.querySelector("body").style.backgroundColor = "#53BF9D";
        document.querySelector(".number").style.width = "30rem";
        let highscore = 0;
        if(score>highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
        

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

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector(".again").addEventListener("click", function () {
    let score = 20;
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".message").textContent = "Start Guessing";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem"
})
