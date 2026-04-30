import "./styles/index.css";
import { createSidebar } from "./ui/Sidebar.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
  },
};

const sidebar = createSidebar();
DOM.container.main.append(sidebar);
