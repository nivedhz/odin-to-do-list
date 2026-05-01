import "./styles/index.css";
import { createSidebar } from "./ui/Sidebar.js";
import { createMainTodoSection } from "./ui/MainTodoSection.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
  },
};

const todoSection = createMainTodoSection();
const sidebar = createSidebar();

DOM.container.main.append(sidebar, todoSection);
