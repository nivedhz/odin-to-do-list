import addProjectsImg from "../assets/images/add-project.svg";
import editProjectImg from "../assets/images/edit-project.svg";
import removeProjectImg from "../assets/images/delete-project.svg";

function renderProjectDetailHeading(projectContainer) {
  const projectHeadingContainer = document.createElement("div");
  const myProjects = document.createElement("h2");
  const addProjects = document.createElement("img");

  projectHeadingContainer.classList.add("project-heading__container");
  myProjects.classList.add("project-heading__my-projects-heading");
  addProjects.classList.add("project-heading__add-projects-btn");

  myProjects.textContent = "# My Projects";
  addProjects.src = addProjectsImg;

  projectHeadingContainer.append(myProjects, addProjects);
  projectContainer.append(projectHeadingContainer);
}
function renderProjectDetailName(projectContainer) {
  const projectNameContainer = document.createElement("div");
  const projectName = document.createElement("h3");
  const projectBtnContainer = document.createElement("div");
  const editProjectBtn = document.createElement("img");
  const removeProjectBtn = document.createElement("img");

  projectNameContainer.classList.add("project-name__container");
  projectName.classList.add("project-name__heading");
  projectBtnContainer.classList.add("project-name__btn-container");
  editProjectBtn.classList.add("project-name__edit-btn");
  removeProjectBtn.classList.add("project-name__remove-btn");

  projectName.textContent = "## Project 1";
  editProjectBtn.src = editProjectImg;
  removeProjectBtn.src = removeProjectImg;

  projectBtnContainer.append(editProjectBtn, removeProjectBtn);
  projectNameContainer.append(projectName, projectBtnContainer);
  projectContainer.append(projectNameContainer);
}
export function renderProjectDetails(sidebarContainer) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  renderProjectDetailHeading(projectContainer);
  renderProjectDetailName(projectContainer);
  renderProjectDetailName(projectContainer);

  sidebarContainer.append(projectContainer);
}
