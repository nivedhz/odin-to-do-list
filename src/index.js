import "./styles/index.css";
import { renderSidebar } from "./ui/Sidebar.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
  },
};

renderSidebar(DOM.container.main);
