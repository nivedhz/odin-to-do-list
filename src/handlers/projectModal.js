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
    project.classList.remove("active-project");
    if (project.dataset.id === state.currentProject.projectId)
      project.classList.add("active-project");
  });
}
function renameProjectHeading() {
  document.querySelector(".header__project-name").textContent =
    `## ${state.currentProject.projectName}`;
}
function handleProjectForm(event) {
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
}
function containerEvent(projectContainer) {
  state.currentProject = state.projects.find(
    (project) => project.projectId === projectContainer.dataset.id,
  );
  applyActiveClass();
  renameProjectHeading();
  renderTodo();
}
function removeBtnEvent(projectContainer) {
  if (state.projects.length <= 1) return;
  state.projects = state.projects.filter((project) => {
    return project.projectId !== projectContainer.dataset.id;
  });
  renderProjects();
  state.currentProject = state.projects[0];
  applyActiveClass();
  renameProjectHeading();
  renderTodo();
}

function handleDelegatedProjectFunctions(event) {
  const projectContainer = event.target.closest(".project-name__container");
  const projectEditBtn = event.target.closest(".project__edit-btn");
  const projectRemoveBtn = event.target.closest(".project__remove-btn");
  if (!projectContainer) return;

  if (projectContainer) {
    containerEvent(projectContainer);
  }
  if (projectEditBtn) return;
  if (projectRemoveBtn) {
    removeBtnEvent(projectContainer);
  }
}

function initProjectModal() {
  document
    .querySelector(".project-modal__form-container")
    .addEventListener("submit", handleProjectForm);
  document
    .querySelector(".project__add-btn")
    .addEventListener("click", projectModalToggleHidden);
  document
    .querySelector(".project-modal__quit-btn")
    .addEventListener("click", projectModalToggleHidden);
  document
    .querySelector(".project__bottom-container")
    .addEventListener("click", handleDelegatedProjectFunctions);
  applyActiveClass();
}

export { initProjectModal };
