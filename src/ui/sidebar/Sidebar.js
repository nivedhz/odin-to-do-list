import "../styles/sidebar.css";
import { createProjectDetails } from "./ProjectDetails.js";
import { createAccountDetails } from "./AccountDetails.js";

function createSidebar() {
  const sidebarContainer = document.createElement("div");
  sidebarContainer.classList.add("sidebar-container");
  const account = createAccountDetails();
  const project = createProjectDetails();

  sidebarContainer.append(account, project);
  return sidebarContainer;
}

export { createSidebar };
