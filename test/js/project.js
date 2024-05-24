
window.addEventListener("load", async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
      );
      const data = await response.json();
  
      const mainProject = data.find((project) => project.uuid === "1");
      const otherProjects = data
        .filter((project) => project.uuid !== "1")
        .slice(0, 3);
  
      if (mainProject) {
        const titleElement = document.querySelector(".title");
        const subtitleElement = document.querySelector(".subtitle");
        const dateCompletedElement = document.querySelector(".date-completed");
        const projectImageElement = document.querySelector(".project-image");
        const projectDescriptionElement = document.querySelector(
          ".project-description"
        );
  
        titleElement.textContent = mainProject.name;
  
        subtitleElement.innerHTML = `
            <span class="subtitle-title">${mainProject.description}</span>
            <span class="complete-text">Completed on <span class="date-completed">${mainProject.completed_on}</span></span>
        `;
  
        projectImageElement.src = mainProject.image;
        projectImageElement.alt = mainProject.name;
  
        projectDescriptionElement.innerHTML = mainProject.content;
      } else {
        console.log("No se encontró el proyecto con uuid igual a '1'");
      }
  
      const projectCardsContainer = document.querySelector(".project-cards");
      projectCardsContainer.innerHTML = "";
  
      otherProjects.forEach((project) => {
        const articleElement = document.createElement("article");
        articleElement.classList.add("article-container");
  
        const imgElement = document.createElement("img");
        imgElement.classList.add("img-card");
        imgElement.src = project.image;
        imgElement.alt = project.name;
  
        const infoProjectElement = document.createElement("div");
        infoProjectElement.classList.add("info-project");
  
        const h4Element = document.createElement("h4");
        h4Element.textContent = project.name;
  
        const pElement = document.createElement("p");
        pElement.textContent = project.description;
  
        const aElement = document.createElement("a");
        aElement.href = `./project.html?id=${project.uuid}`;
        aElement.textContent = "Learn More";
  
        infoProjectElement.appendChild(h4Element);
        infoProjectElement.appendChild(pElement);
        infoProjectElement.appendChild(aElement);
  
        articleElement.appendChild(imgElement);
        articleElement.appendChild(infoProjectElement);
  
        projectCardsContainer.appendChild(articleElement);
      });
    } catch (error) {
      console.log("Se ha producido un error", error);
    }
  
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
  });
  