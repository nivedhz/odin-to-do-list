import addProjectsImg from "../../assets/images/add-project.svg";
import editProjectImg from "../../assets/images/edit-project.svg";
import removeProjectImg from "../../assets/images/delete-project.svg";

function createProjectHeading() {
  const projectHeadingContainer = document.createElement("div");
  const myProjects = document.createElement("h2");
  const addProjectsBtn = document.createElement("button");
  const addProjects = document.createElement("img");

  projectHeadingContainer.classList.add("project-heading__container");
  myProjects.classList.add("project-heading__my-projects-heading");
  addProjects.classList.add("project-heading__add-projects-btn");
  addProjectsBtn.classList.add("project__add-btn");

  addProjectsBtn.append(addProjects);

  myProjects.textContent = "# My Projects";
  addProjects.src = addProjectsImg;

  projectHeadingContainer.append(myProjects, addProjectsBtn);
  return projectHeadingContainer;
}
function createProjectDetailName() {
  const projectNameContainer = document.createElement("div");
  const projectName = document.createElement("h3");
  const projectBtnContainer = document.createElement("div");
  const editProjectBtn = document.createElement("button");
  const editProject = document.createElement("img");
  const removeProjectBtn = document.createElement("button");
  const removeProject = document.createElement("img");

  editProjectBtn.classList.add("project__edit-btn");
  removeProjectBtn.classList.add("project__remove-btn");
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
  return projectNameContainer;
}
export function createProjectDetails() {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");

  const heading = createProjectHeading();
  const project = createProjectDetailName();
  const project2 = createProjectDetailName();

  projectContainer.append(heading, project, project2);
  return projectContainer;
}
