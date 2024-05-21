//2.Create a variable that stores the price of a coffee.
//Create a variable that stores how many coffees the customer wants.
//Print out the total price such as "There you go, that'll be 10 euros"
//Where 10 is replaced by the calculation of the total price.

let coffeePrice = 2
    coffeeCups = 5
    console.log(`There you go, that will be ${coffeePrice * coffeeCups} euros`);


//3)Create a variable that stores a boolean.
//Print out "You said this coffee is the best, that was actually true"
//Where true is replaced by your varible

let isBestCoffee = true;
let isWorstCoffee = false;
if (isBestCoffee) {
    console.log(`You said this coffee is the best, that was actually ${isBestCoffee}`);
} else {
    console.log(`You said this coffee is the best, that was actually NOT ${isBestCoffee}`);
}
// USING SWITCH
switch (isWorstCoffee) {
    case true:
      console.log(
        `You said this coffee is the best, that was actually ${isBestCoffee}`
      );
      break;
    case false:
      console.log(
        `You said this coffee is the best, that was actually NOT ${isBestCoffee}`
      );
      break;
  }
/*
4)
Create a variable called cafeGuests, that shows us how many cafeGuests we have.
Assign it a value.
Print it out.
assign it a new value.
Print it out. => This should give you the new value.
*/

// LET + VAR are re-assignable
// const , never!!!

let cafeGuests = 10
console.log(`we have ${cafeGuests} guests today`);
cafeGuests = ["JC", "Ryan", "Carlos"];
console.log(cafeGuests);

