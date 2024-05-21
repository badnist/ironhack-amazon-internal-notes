// DOM Excercises

// Exercise 1
// A add a paragraph element to the body of an HTML document as a child element of the body. Add some text to that 'P" tag that says `I Love Javascript!`.
let myElement = document.createElement("p");
document.body.appendChild(myElement);
console.log(myElement);

myElement.id = "exersice-1";
myElement.innertext = "I love Javascript";
console.log(myElement.innertext);

// Excercise 2
// Your task is to create a button element dynamically using JavaScript and add it to the HTML document.
document.body.innerHTML += ` <button id="exersice-2"></button>`

// Exercise 3. Change innerText.
// Create an <h1> with text "I haven't been modified yet". Below, create a button with any text you want ("Click me", for example).
// Then we have to generate a click event. When the user clicks the button, we will modify the text of the <h1> so that it becomes "I've been clicked already!".
let myH1 = document.createElement(`h1`)
myH1.innerText = "I haven't been modified yet";
document.body.innerHTML += ` <button id="exersice2">Click Me</button>`
console.log(myH1);

textChange = myH1.innerText

exersice2.addEventListener(`click`, function () {
    textChange = "I've been clicked already!",
        console.log(textChange);
})
// Exercise 4. Toggle.
// Imagine we have a small device that can be turned on and off with a button.
// Let's create an <h1> containing the text "OFF". Below we place a button containing the text "Turn on". For now our device is off.
// Next, we will create a click event listener so that when the user clicks it, the text changes from 'OFF' to 'ON' and the text of the button changes from 'Turn on' to 'Turn off'. This would allow us to turn on our imaginary device, but we must also ensure that, with the same click event, we can turn it off (i.e., set the value of the <h1> back to 'OFF' and the button's text back to 'Turn on').


let deviceState = false;

document.getElementById('toggleButton').addEventListener('click', function() {
  const deviceStatus = document.getElementById('deviceStatus');
  const toggleButton = document.getElementById('toggleButton');

  if (deviceState) {
    deviceStatus.innerText = 'OFF';
    toggleButton.innerText = 'Turn on';
    deviceState = false;
  } else {
    deviceStatus.innerText = 'ON';
    toggleButton.innerText = 'Turn off';
    deviceState = true;
  }
});


// Exercise 5. Counter.
// Let's create a small counter that adds and subtracts values. First we will create an <h1> with an initial value of '0'. Then we will create FOUR buttons: the first one will be "Double click -2", the second "Click -1", the third "Click +1", and the fourth "Double click +2".
// What we want from these four buttons is to modify the value of the <h1> as specified. That is, we will have two buttons with a double click event that will subtract and add 2 to the result of the <h1>, as well as two buttons with a click event that will add and subtract 1 to the result.

// Exercise 6. Class Toggle
// Create a button with a class "green" and text like 'I'm green'.
// When the user clicks the button, we should change the button's text to 'I'm red' and its color to red.
// When the button is red and the user clicks it again, we should set it back to its initial state.

// Exercise 7. Adding to lists with inputs - ADVANCED
// Let's create an ordered list that contains no elements. Then we create an input and a button containing the text "Add".
// When the user writes something in the input and clicks add, we should take the value of that input and add it to our ordered list.
// Bonus: In case the input is empty, we should make sure that an empty string is not added to the list, and that for example the input becomes a placeholder of 'Please add an item'