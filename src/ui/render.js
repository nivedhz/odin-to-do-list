import { createSidebar } from "./sidebar/Sidebar.js";
import { createMainTodoSection } from "./main/MainTodoSection.js";
import {
  createProfileFormModal,
  createTaskFormModal,
  createProjectFormModal,
} from "./modals/modal.js";

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

export { renderMainContent, renderModals };
