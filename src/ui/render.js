import { createSidebar } from "./sidebar/Sidebar.js";
import { createMainTodoSection } from "./main/MainTodoSection.js";
import {
  createProfileFormModal,
  createTaskFormModal,
  createProjectFormModal,
} from "./modals/modal.js";
import { createProjectDetailName } from "../ui/sidebar/ProjectDetails.js";
import { createTodoElement } from "./main/TodoSection.js";
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
function renderTodo(projectId) {
  document.querySelector(".todo__container").replaceChildren();
  state.projects.forEach((project) => {
    if (project.projectId === projectId) {
      project.todo.forEach((todo) => {
        document
          .querySelector(".todo__container")
          .append(
            createTodoElement(
              todo.name,
              todo.priority,
              todo.date,
              todo.longSummary,
            ),
          );
      });
    }
  });
}

export { renderMainContent, renderModals, renderProjects, renderTodo };
