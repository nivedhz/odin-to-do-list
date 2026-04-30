import "./sidebar.css";
import { createProjectDetails } from "./ProjectDetails.js";
import { createAccountDetails } from "./AccountDetails.js";

function renderSidebar(mainContainer) {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");
  createAccountDetails(sidebarContainer);
  createProjectDetails(sidebarContainer);

  mainContainer.append(sidebarContainer);
}

export { renderSidebar };
