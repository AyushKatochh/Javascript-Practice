'use strict';

const rest = new Map();
rest.set('name', "Classico Italy");
rest.set(1, "Paris, France");
console.log(rest.set(2, "Portugal"));

rest.set('categories', ["Italian", "Indian", "Germany"]).set('open',11)
.set('close', 22).set(true, "Open")
.set(false, "Closed");

console.log(rest.get('name'));
console.log(rest.get(true));

let time = 22;
rest.get(time >= rest.get('open') && time<rest.get('close'))
console.log(rest.has('categories'));

const arrayForKey = [1,2];
rest.set(arrayForKey, 'Sonal');

console.log(rest.get(arrayForKey));
const setDOM = rest.set(document.querySelector('h1'), "Selected");
console.log(setDOM);

//Map Iteration

const question = new Map([
    ['question', 'What is the best programming language in the world'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'Javascript'],
    ['correct', 3],
    [true, 'Correct'],
    [false, 'Try Again']
])

console.log(question.get('question'));

for(const [key, value] of question) {
    if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
} 

const answer = Number(prompt("Your Answer"));
console.log(answer);

console.log(question.get(question.get('correct') === answer));
