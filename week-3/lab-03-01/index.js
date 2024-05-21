let hacker1 = "Ryan"
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Date"
console.log(`The navigator's name is ${hacker2}`);

let hacker1Lenght = hacker1.length
let hacker2Lenght = hacker2.length
if (hacker1Lenght > hacker2Lenght) {
    console.log(
        `The driver has a larger name, he has ${hacker1Lenght} charecters`)
}
else if (hacker1Lenght < hacker2Lenght) {
    console.log(`Seems like the navigator has a larger name, he has ${hacker2Lenght} charecters`)
}

else {
    console.log
        (`Wow, they both have equally long names, ${hacker1Lenght} characters!.`);
}
let hacker1UpperCase = hacker1.toUpperCase()
let hacker1Separated = ""
for (let i = 0; i < hacker1UpperCase.length; i++) {
  hacker1Separated += hacker1UpperCase[i] + " "
}
console.log(hacker1Separated)
