import { createProject } from "../data/state.js";
import { renderProjects } from "../ui/render.js";

export function projectModalToggleHidden() {
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
}

export { initProjectModal };
