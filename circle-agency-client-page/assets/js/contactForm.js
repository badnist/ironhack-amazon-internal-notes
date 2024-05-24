const username = document.querySelector("#fullName");
const buttonSubmit = document.querySelector(".button-submit");

buttonSubmit.addEventListener("click", (event) => {
  if (username.value.toLowerCase() === "ironhack") {
    event.preventDefault();
    alert("Usted no puede ser Ironhack, porque yo soy Ironhack");
  }
});