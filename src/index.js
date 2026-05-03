import "./styles/index.css";
import { createSidebar } from "./ui/sidebar/Sidebar.js";
import { createMainTodoSection } from "./ui/main/MainTodoSection.js";
import { createProfileFormModal } from "./ui/modals/ProfileFormModal.js";
import { createTaskFormModal } from "./ui/modals/TaskFormModal.js";

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

DOM.container.main.append(sidebar, todoSection);
DOM.container.body.prepend(userModal, taskModal);
