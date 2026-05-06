import { createSidebar } from "./sidebar/Sidebar.js";
import { createMainTodoSection } from "./main/MainTodoSection.js";
import {
  createProfileFormModal,
  createTaskFormModal,
  createProjectFormModal,
} from "./modals/modal.js";
import { createProjectDetailName } from "../ui/sidebar/ProjectDetails.js";
import { state } from "../data/state.js";
import { projectModalToggleHidden } from "../handlers/projectModal.js";

function initProjectQuery() {
  document
    .querySelector(".project__add-btn")
    .addEventListener("click", projectModalToggleHidden);
}

function renderMainContent(container) {
  const sidebar = createSidebar();
  const todoSection = createMainTodoSection();

  container.append(sidebar, todoSection);
  initProjectQuery();
}

function renderModals(root) {
  const userModal = createProfileFormModal();
  const taskModal = createTaskFormModal();
  const projectModal = createProjectFormModal();

  root.prepend(userModal, taskModal, projectModal);
  document
    .querySelector(".project-modal__quit-btn")
    .addEventListener("click", projectModalToggleHidden);
}

function renderProjects() {
  document.querySelector(".project__bottom-container").replaceChildren();
  state.projects.forEach((project) => {
    document
      .querySelector(".project__bottom-container")
      .append(createProjectDetailName(project.projectName));
  });
  console.log(document.querySelectorAll(".project__edit-btn"));
  document.querySelectorAll(".project__edit-btn").forEach((editBtn) => {
    editBtn.addEventListener("click", projectModalToggleHidden);
  });
}

export { renderMainContent, renderModals, renderProjects };
