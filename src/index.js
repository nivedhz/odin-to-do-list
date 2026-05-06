import "./styles/index.css";
import { renderMainContent, renderModals } from "./ui/render.js";
import { initDefaultFunctions } from "./handlers/initDefaultFunctions.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
    body: document.body,
  },
};

renderMainContent(DOM.container.main);
renderModals(DOM.container.body);
initDefaultFunctions();
