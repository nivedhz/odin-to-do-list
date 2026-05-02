import "./styles/index.css";
import { createSidebar } from "./ui/Sidebar.js";
import { createMainTodoSection } from "./ui/MainTodoSection.js";
import { createProfileFormModal } from "./ui/ProfileFormModal.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
    body: document.querySelector("body"),
  },
};

const todoSection = createMainTodoSection();
const sidebar = createSidebar();
const userModal = createProfileFormModal();

DOM.container.main.append(sidebar, todoSection);
DOM.container.body.prepend(userModal);
