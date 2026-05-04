import "./styles/index.css";
import { renderMainContent, renderModals } from "./ui/render.js";
import { initModalHandler } from "./handlers/modalHandler.js";

const DOM = {
  container: {
    main: document.querySelector("#container"),
    body: document.body,
  },
};

initModalHandler();
renderMainContent(DOM.container.main);
renderModals(DOM.container.body);
