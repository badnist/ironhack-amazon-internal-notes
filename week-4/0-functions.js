
function multiply(num1, num2, callback) {
    const result = num1 * num2;

    console.log(`${num1} + ${num2}`);
    callback();

}

const alphabet = [1, 9, 3, 7]
const newSorted = alphabet.sort()
console.table(newSorted);

const checkFuncExpression = function () {
    console.log("Func expression CAN NOT be invoked before it is defined.");
}

function printName(name, anonFunc) {
    anonFunc(name);
}

printName("sandra", function (name) {
    console.log(name[0].toUpperCase() + name.slice(1));
});


// setTimeout(function () {
//   console.log("I am anonymous function,I will execute after 2 seconds.");
// }, 2000);

const notifyUser = function () {
    console.log("I am anonymous function,I will execute after 2 seconds");
}

const greeting = (name) => `Hello, ${name}!`;

greeting("Ana"); // => Hello, Ana!



// const user = {
// name: "ana",
// age: 29,
// getOlder: function () {
//  setInterval(()=> {
//  this.age += 1;
// console.log(this.age);
//  }, 1000);
// },
// };


// user.getOlder();
// => 30

function printSomething() {
    console.log(arguments);
}

printSomething("hi");

// [Arguments] { '0': 'hi' }

function printSomething() {
    console.log("arguments length: ", arguments.length);
    console.log("all: ", arguments);
    console.log("first arg: ", arguments[1]);
    console.log("second arg: ", arguments[0]);
}
printSomething("hi", "there");




function printArgs() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printArgs("hey", "there", "ironhacker");
printArgs(1, 77, { name: "milo" }, ["cat", "dog"]);
printArgs("ryan", 7)


var arrayNames = ['Pedro', 'Jake', 'Joan', 'Mike'];
arrayNames.push("Rachel");
console.log(arrayNames[4]);


var arrayNames1 = ["Pedro", "Jake", "Joan", "Ryan", "Carli"];
console.log(arrayNames1[0]);
arrayNames1.splice(0,4);
console.log(arrayNames1[0]);

const arrayNames2 = ['abbas', 'ali', 'majid'];
for (let i = 0; i < arrayNames2.length; i++) {
  console.log(arrayNames2[i]); }

const arrayNames3 = ['tara', 'mara', 'sara'];
arrayNames3.forEach(name => console.log(name));

['a', 'b', 'a'].forEach(() => console.log('hi!'));

[1, 2, 3, 4].forEach(element => console.log(element * 2));

const raceResults = ['Helen', 'John', 'Peter', 'Merry'];
raceResults.forEach( (elem, index) => {
  console.log(elem + ' finished the race in ' + (index + 1) + ' position!');
});

// => Helen finished the race in 1 position!
// => John finished the race in 2 position!
// => Peter finished the race in 3 position!
// => Merry finished the race in 4 position!


let phrase = "This is long enough for a string to count it words";
let words = phrase.split(" ");
console.log(words);
console.log(words[0]);
console.log(words.length);

const arr1 = ['one', 'two', 'three'];
const arr2 = arr1.reverse();

console.log(arr1); // ['three', 'two', 'one'] // --> original array is mutated
console.log(arr2); // ['three', 'two', 'one']

const numbers = [2, 4, 6, 8];

const total = numbers.reduce(function (accumulator, currentValue) {
  console.log(
    "accumulator is: ",
    accumulator,
    "and current value is: ",
    currentValue
  );
  return accumulator + currentValue;
});

console.log('total is: ', total);

// accumulator is:  2 and current value is:  4
// accumulator is:  6 and current value is:  6
// accumulator is:  12 and current value is:  8
// total is:  20
