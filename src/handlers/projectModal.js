import { createProject } from "../data/state.js";
import { renderProjects, renderTodo } from "../ui/render.js";
import { state } from "../data/state.js";

function projectModalToggleHidden() {
  document
    .querySelector(".project-modal__container")
    .classList.toggle("hidden");
}
function applyActiveClass() {
  document.querySelectorAll(".project-name__container").forEach((project) => {
    if (project.dataset.id === state.currentProject.projectId)
      project.classList.add("active-project");
  });
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
      applyActiveClass();
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
      if (e.target.closest(".project-name__heading")) return;
      if (e.target.closest(".project__remove-btn")) return;
      if (e.target.closest(".project-name__edit-btn")) return;
      if (e.target.closest(".project__edit-btn")) {
        projectModalToggleHidden();
      }
      if (e.target.closest(".project-name__container")) {
        state.currentProject = state.projects.find(
          (project) => project.projectId === e.target.dataset.id,
        );
        document
          .querySelectorAll(".project-name__container")
          .forEach((project) => {
            project.classList.remove("active-project");
          });
        applyActiveClass();
        document.querySelector(".header__project-name").textContent =
          `## ${state.currentProject.projectName}`;
        renderTodo();
      }
    });
  applyActiveClass();
}

export { initProjectModal };
