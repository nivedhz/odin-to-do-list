import "./sidebar.css";
import { renderProjectDetails } from "./ProjectDetails.js";
import { renderAccountDetails } from "./AccountDetails.js";

const DOM = {
  container: document.querySelector("#container"),
};

function renderSidebar() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");
  renderAccountDetails(sidebarContainer);
  renderProjectDetails(sidebarContainer);

  DOM.container.append(sidebarContainer);
}

export { renderSidebar };
