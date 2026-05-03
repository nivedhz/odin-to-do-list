import "./styles/index.css";
import { createSidebar } from "./ui/sidebar/Sidebar.js";
import { createMainTodoSection } from "./ui/main/MainTodoSection.js";
import { createProfileFormModal } from "./ui/modals/ProfileFormModal.js";
import { createTaskFormModal } from "./ui/modals/TaskFormModal.js";
import { createProjectFormModal } from "./ui/modals/ProjectFormModal.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
    body: document.querySelector("body"),
  },
};

const todoSection = createMainTodoSection();
const sidebar = createSidebar();
const userModal = createProfileFormModal();
const taskModal = createTaskFormModal();
const projectModal = createProjectFormModal();

DOM.container.main.append(sidebar, todoSection);
DOM.container.body.prepend(userModal, taskModal, projectModal);
