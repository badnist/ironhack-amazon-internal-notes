
console.log("Hello class");
console.log('Ryan loves coding');
// let firstName = (Ryan);

// console.log('${firstName} loves pizza')



const role = "student";
console.log(role);


let title = ["Hello folks", "gente", ];
console.table(title);

let nonono = ("Hello my friend")
console.table(nonono);
console.log(nonono.toUpperCase());


let age = 15;
if (age >= 18) {
    console.log('You are an adult, pay 10 Euros!');
}
else {
    console.log('You are an child, pay 8 Euros');
}

let weather = "rainy";
if (weather === "sunny") {
console.log("tome for the beach");
}
else if (weather === "rainy") {
console.log("umberlla time!");
}
else if (weather === "snowy") {
    console.log("stay inside!")
}
else {
console.log("Stay inside");
}

let isHungry = true;
let hasMoney = false;

if (isHungry) {
    if (hasMoney) {
        console.log("Buy a snack");
    } else {
        console.log("Work, bitch!");
    }
} else {
    console.log("Go for a run");
    
}

let chosenCharacter = "Hermione";

switch (chosenCharacter) {
    case "Harry":
    console.log('arry Potter hurra');
        break;

        case " Hermione":
        console.log('Hermione Granger');
        break;

        case "Ron":
            console.log('Ron Weasly');
            break;

    default: 
    console.log('not listed'); 
    break;
}

