import { createProject } from "../data/state.js";
import { reloadProjects } from "../ui/render.js";

function toggleHidden() {
  document
    .querySelector(".project-modal__container")
    .classList.toggle("hidden");
}
function initProjectModal() {
  document
    .querySelector(".project__add-btn")
    .addEventListener("click", toggleHidden);
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
      document
        .querySelector(".project-name__edit-btn")
        .addEventListener("click", toggleHidden);
      document.querySelector(".project-modal__form-container").reset();
    });
}

export { initProjectModal };
