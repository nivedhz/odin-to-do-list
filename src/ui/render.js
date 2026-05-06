import { createSidebar } from "./sidebar/Sidebar.js";
import { createMainTodoSection } from "./main/MainTodoSection.js";
import {
  createProfileFormModal,
  createTaskFormModal,
  createProjectFormModal,
} from "./modals/modal.js";
import { createProjectDetailName } from "../ui/sidebar/ProjectDetails.js";
import { state } from "../data/state.js";

function renderMainContent(container) {
  const sidebar = createSidebar();
  const todoSection = createMainTodoSection();

  container.append(sidebar, todoSection);
}

function renderModals(root) {
  const userModal = createProfileFormModal();
  const taskModal = createTaskFormModal();
  const projectModal = createProjectFormModal();

  root.prepend(userModal, taskModal, projectModal);
}

function renderProjects() {
  document.querySelector(".project__bottom-container").replaceChildren();
  state.projects.forEach((project) => {
    document
      .querySelector(".project__bottom-container")
      .append(createProjectDetailName(project.projectName));
  });
}

export { renderMainContent, renderModals, renderProjects };
