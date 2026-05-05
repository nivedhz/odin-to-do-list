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
export function createProjectDetailName(projectName) {
  const projectNameContainer = document.createElement("div");
  const projectNameEl = document.createElement("h3");
  const projectBtnContainer = document.createElement("div");
  const editProjectBtn = document.createElement("button");
  const editProject = document.createElement("img");
  const removeProjectBtn = document.createElement("button");
  const removeProject = document.createElement("img");

  editProjectBtn.classList.add("project__edit-btn");
  removeProjectBtn.classList.add("project__remove-btn");
  projectNameContainer.classList.add("project-name__container");
  projectNameEl.classList.add("project-name__heading");
  projectBtnContainer.classList.add("project-name__btn-container");
  editProject.classList.add("project-name__edit-btn");
  removeProject.classList.add("project-name__remove-btn");

  editProjectBtn.append(editProject);
  removeProjectBtn.append(removeProject);

  projectNameEl.textContent = `## ${projectName}`;
  editProject.src = editProjectImg;
  removeProject.src = removeProjectImg;

  editProjectBtn.addEventListener("click", () => {
    document
      .querySelector(".project-modal__container")
      .classList.toggle("hidden");
  });

  projectBtnContainer.append(editProjectBtn, removeProjectBtn);
  projectNameContainer.append(projectNameEl, projectBtnContainer);
  return projectNameContainer;
}
export function createProjectDetails() {
  const projectContainer = document.createElement("div");
  projectContainer.classList.add("project-container");
  const projectBottomContainer = document.createElement("div");
  projectBottomContainer.classList.add("project__bottom-container");

  const heading = createProjectHeading();

  projectContainer.append(heading, projectBottomContainer);
  return projectContainer;
}
