console.log(Document.hey);
console.log(document.getElementById("hey")); 

console.log(document.querySelector("second-child".parentElement));


let createElement = document.createElement ("div")
console.log(createElement);
createElement.innerText = "I like Pizza";

let parentDiv = document.querySelector("#parent");
parentDiv.appendChild(createElement);

createElement.classnName = "example-1";
console.log(createElement.classList);

createElement.classList.add("some-cool-class");
console.log(createElement.classList);