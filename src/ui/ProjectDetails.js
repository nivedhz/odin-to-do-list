import addProjectsImg from "../assets/images/add-project.svg";
import editProjectImg from "../assets/images/edit-project.svg";
import removeProjectImg from "../assets/images/delete-project.svg";

function createProjectHeading(projectContainer) {
  const projectHeadingContainer = document.createElement("div");
  const myProjects = document.createElement("h2");
  const addProjectsBtn = document.createElement("button");
  const addProjects = document.createElement("img");

  projectHeadingContainer.classList.add("project-heading__container");
  myProjects.classList.add("project-heading__my-projects-heading");
  addProjects.classList.add("project-heading__add-projects-btn");

  addProjectsBtn.append(addProjects);

  myProjects.textContent = "# My Projects";
  addProjects.src = addProjectsImg;

  projectHeadingContainer.append(myProjects, addProjectsBtn);
  projectContainer.append(projectHeadingContainer);
}
function createProjectDetailName(projectContainer) {
  const projectNameContainer = document.createElement("div");
  const projectName = document.createElement("h3");
  const projectBtnContainer = document.createElement("div");
  const editProjectBtn = document.createElement("button");
  const editProject = document.createElement("img");
  const removeProjectBtn = document.createElement("button");
  const removeProject = document.createElement("img");

  projectNameContainer.classList.add("project-name__container");
  projectName.classList.add("project-name__heading");
  projectBtnContainer.classList.add("project-name__btn-container");
  editProject.classList.add("project-name__edit-btn");
  removeProject.classList.add("project-name__remove-btn");

  editProjectBtn.append(editProject);
  removeProjectBtn.append(removeProject);

  projectName.textContent = "## Project 1";
  editProject.src = editProjectImg;
  removeProject.src = removeProjectImg;

  projectBtnContainer.append(editProjectBtn, removeProjectBtn);
  projectNameContainer.append(projectName, projectBtnContainer);
  projectContainer.append(projectNameContainer);
}
export function createProjectDetails(sidebarContainer) {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  createProjectHeading(projectContainer);
  createProjectDetailName(projectContainer);
  createProjectDetailName(projectContainer);

  sidebarContainer.append(projectContainer);
}
