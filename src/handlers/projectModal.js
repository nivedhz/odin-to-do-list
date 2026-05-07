import { createProject } from "../data/state.js";
import { renderProjects } from "../ui/render.js";

function projectModalToggleHidden() {
  document
    .querySelector(".project-modal__container")
    .classList.toggle("hidden");
}

function initProjectModal() {
  document
    .querySelector(".project-modal__form-container")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      projectModalToggleHidden();
      const data = new FormData(
        document.querySelector(".project-modal__form-container"),
      );
      const values = Object.fromEntries(data.entries());
      createProject(values.projectName);
      renderProjects();
      document.querySelector(".project-modal__form-container").reset();
    });
  document
    .querySelector(".project__add-btn")
    .addEventListener("click", projectModalToggleHidden);
  document
    .querySelector(".project-modal__quit-btn")
    .addEventListener("click", projectModalToggleHidden);
  document
    .querySelector(".project__bottom-container")
    .addEventListener("click", (e) => {
      if (e.target.closest(".project__edit-btn")) {
        projectModalToggleHidden();
      }
    });
}

export { initProjectModal };
