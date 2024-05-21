/*const timeoutId = setTimeout(() => {
    console.log("Hey there, Ironhackers!");
  }, 1000);
  clearTimeout(timeoutId);

  let counter = 1;
  const callbackFunction =  () => {
    console.log(counter);
    setTimeout(callbackFunction, 1000);
  
    counter += 1;
  };
  
  let timeoutId1 = setTimeout(callbackFunction, 1000);
  
  clearTimeout(timeoutId1);


// ITERATION 1

function updateSubtotal(product) {
    console.log('Calculating subtotal, yey!');

    //... your code goes here
}

function calculateAll() {
    // code in the following two lines is added just for testing purposes.
    // it runs when only iteration 1 is completed. at later point, it can be removed.
    const singleProduct = document.querySelector('.product');
    updateSubtotal(singleProduct);

    function updateSubtotal(product) {
        const price = product.querySelector('.price span').textContent;
        const quantity = product.querySelector(`.quantity input`).value;
        const subtotal = price*quantity
        
        const subtotalNode = product.querySelector('.subtotal span');
        subtotalNode.textContent = subtotal;
      
        return subtotal;
    }


    // ITERATION 2
    //... your code goes here

    // ITERATION 3
    //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    console.log('The target in remove is:', target);
    //... your code goes here
}

// ITERATION 5

function createProduct() {
    //... your code goes here
}

window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);

    //... your code goes here
});

function myCallBackErrorHandling(callback, errorCallback) {
  // Inside the function, create an asynchronous operation using setTimeout
  setTimeout(() => {
    // Simulate success or failure randomly
    // if success is less than 0.5 we will execute the callback function define first
    // if success is more than 0.5 we will execute the errorCallback function defined second
    let success = Math.random() < 0.5;
    if (success) {
      // If success, call the success callback with the message "Callback executed!"
      callback(`Callback executed! - Number is ${success.toString()}`);
      console.log(success);
    } else {
      // If failure, call the error callback with the message "Error occurred!"
      errorCallback(`Error occurred! - Number is ${success.toString()}`);
    }
  }, 2000);
}


function myNames(name1, name2) {
return name1 + name2
}
const aNames = myNames(1, 2) 
  console.log(aNames);

  function printPerson(person) {
    console.log(person);
  }

  printPerson({name: "Ryan"})*/

const favFood = "sushi"
console.log(typeof favFood);


myVariable = 10;
console.log(myVariable);

let fruit = 'apple';
switch (fruit) {
  case 'banana':
    console.log('I am a banana');
    break;
  case 'apple':
    console.log('I am an apple');
    break;
  default:
    console.log('I am not a fruit listed');
}

let olympicRecords = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powel'
};

olympicRecords.swimming200Men = 'Michael Phelps';
olympicRecords.myName = "Ryan"

console.log(olympicRecords);

Object.keys(olympicRecords);

//    placeholder can be any word
//       |
for (let key in olympicRecords) {
  console.log(key);
}

// console:
// athletics100Men
// athleticsLongJumpMen
// swimming200Men
// swimming400Women

/*if (athletics100Men = " tyu") {
console.log("love");
} else {
console.log("Hate");

}
const age = parseInt(prompt27("Welcome to Ironhack cinema. How old are you?"));
if (age <= 16) {
  console.log("You have a teenager discount.");
} else if (age >= 65) {
  console.log("You have a senior citizen discount :)");
} else {
  console.log("Sorry, you don't have any discount :(");
} 

const number1 = parseInt(prompt("First number:"));
const number2 = parseInt(prompt("Second number:"));
if (number1 === number2) {
  console.log("The numbers are equal.");
} else {
  if (number1 > number2) {
    console.log("Number 1 is bigger than number 2.");
  } else {
    console.log("Number 1 is smaller than number 2.");
  }
} 

const name = prompt("Favorite Game of Thrones main character:");
let house = "hey";
if (name === "Khal Drogo") {
  house = "Dothraki Horselord";
} else if (name === "Daenerys") {
  house = "Targaryen";
} else if (name === "Jon Snow" || name === "Sansa" || name === "Arya") {
  house = "Stark";
} else if (name === "Cersei" || name === "Tyrion" || name === "Ser Jaime") {
  house = "Lannister";
} else {
  house = "Other";
}
console.log(`Your favorite character is from the house ${house}.`); 



switch (expression) {
  case value1:
    // executed code when the expression === value1
    break;
  case value2:
    // executed code when the expression === value2
    break;
  case value3:
    // executed code when the expression === value3
    break;
  default:
  // executed code when none of the values match the expression
} */


/*
let  name  = prompt("Welcome to Ironhack cinema. name?");
let house = "";
if (name === "Khal Drogo") {
  house = "Dothraki Horselord"
  console.log(`Your favorite character is from the house ${house}.`);
}*/

/* const name = prompt("Favorite person in the family:");
let lastName = "";
switch (name) {
  case "Masoud":
    case "Armin":
      case "Milad":
    lastName = "Marzban"

    break

  case "Behnaz":
    case "Reza":
    lastName = "Kiani"

    break
}
console.log(`Your last name is ${lastName}!`); */

/*
let i = 0;
while (i <= 100) {
  console.log(i);
  i = i * 2; // this is the same as i = i + 1

}
*/

const someIterable = "amsterdam";
for (const value of someIterable) {
  console.log(value);
}

let i = 0;
while (i < 5) {
  i++;
  if (i === 4) {
    continue;
  }
  console.log(`The number is: ${i}.`);
}
