'use strict';

function cutFruitPieces(fruits) {
    return fruits *2;
}

function fruitProcessor(apples, oranges) {
    const cutApples = cutFruitPieces(apples);
    const cutOranges = cutFruitPieces(oranges);

    const juice = `Juice is being made of ${cutApples} apple and 
                     ${cutOranges} orange pieces`;
            
                  return juice;
}

console.log(fruitProcessor(8, 10));
