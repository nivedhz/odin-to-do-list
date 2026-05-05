import { state, createProject } from "../data/state.js";
import { createProjectDetailName } from "../ui/sidebar/ProjectDetails.js";

function toggleHidden() {
  document
    .querySelector(".project-modal__container")
    .classList.toggle("hidden");
}
function reloadProjects() {
  if (document.querySelector(".project-name__container")) {
    console.log("reload is true");
    document.querySelector(".project__bottom-container").replaceChildren();
  }
  state.projects.forEach((project) => {
    document
      .querySelector(".project__bottom-container")
      .append(createProjectDetailName(project.projectName));
  });
}
function initProjectModal() {
  document
    .querySelector(".project__add-btn")
    .addEventListener("click", toggleHidden);
  document.querySelectorAll(".project__edit-btn").forEach((editBtn) => {
    editBtn.addEventListener("click", toggleHidden);
  });
  document
    .querySelector(".project-modal__quit-btn")
    .addEventListener("click", toggleHidden);

  document
    .querySelector(".project-modal__form-container")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      toggleHidden();
      const data = new FormData(
        document.querySelector(".project-modal__form-container"),
      );
      const values = Object.fromEntries(data.entries());
      createProject(values.projectName);
      reloadProjects();
    });
}

export { initProjectModal };
