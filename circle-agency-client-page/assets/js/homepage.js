const cardTitle = document.querySelectorAll(".info-project h4");
const cardSubTitle = document.querySelectorAll(".info-project p");
const imageCard = document.querySelectorAll(".img-card");

let apiContent = async () => {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );
    const data = await response.json();

    const projectsReversed = data.reverse();
    const projectsToShow = projectsReversed.slice(0, 3);

    projectsToShow.forEach((project, index) => {
      cardTitle[index].innerText = project.name;
      cardSubTitle[index].innerText = project.description;
      imageCard[index].setAttribute = project.image;
    });
  } catch (error) {
    console.log("Se ha producido un error", error);
  }
};

apiContent();

const articleContainers = document.querySelectorAll(".article-container");

  articleContainers.forEach((container) => {
    const projectCardTitle = container.querySelector("h4");
    const projectCardLearnMore = container.querySelector("a");

    projectCardLearnMore.addEventListener("click", (event) => {
      event.preventDefault();

      if (projectCardTitle.innerText === "Lorem ipsum") {
        window.location.href = "third.html";
      } else if (projectCardTitle.innerText === "Vectorify") {
        window.location.href = "second.html";
      } else if (projectCardTitle.innerText === "Dashcoin") {
        window.location.href = "first.hrml";
      } else {
        window.location.href = "project.html";
      }
    });
  });