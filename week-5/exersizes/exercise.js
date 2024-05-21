
let newElement = document.createElement("p");
document.body.appendChild(newElement)
newElement.innerText = "I Love Javascript!";
console.log(newElement);

// Your task is to create a button element dynamically using JavaScript and add it to the HTML document.
    const boxDisplay = document.querySelector(".box-display");
    boxDisplay.classList.toggle("toggle-test")

    currentText = boxDisplay.innerText;

    if (currentText === "remove test") {
        boxDisplay.innerText = "Changed text and color";
    } else {
        boxDisplay.innerText = "remove test";
    }
 

let myElement = document.getElementById("DOM");
myElement.innerHTML = "Bye DOM";
myElement.style. backgroundColor = "red"

let personElement = document.createElement("div");
personElement.id = ("person");

let ryAn = document.querySelector("#person");

if (ryAn.id === "person") {
    ryAn.id = "Not Ryan";

} else {
    ryAn.id = "Ryan";
    
}
console.log(ryAn.innerText);

let mouse1 = document.querySelector(".notMyname");
".notMyname".classname = mouse1;

console.log(mouse1.className); // <== mouse

// the JavaScript file
const btn = document.querySelector('#htmlButton');
btn.addEventListener('click', () => {
  alert("Hello World");
});

// METHOD 1
function alertFunction() {
  alert("YAY! YOU DID IT!");
}


document.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
  
  