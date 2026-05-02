import addTaskImg from "../assets/images/add-task.svg";

function createHeaderSection() {
  const headerSection = document.createElement("div");
  headerSection.classList.add("header-section");
  const projectName = document.createElement("h1");
  projectName.classList.add("header__project-name");
  const addTodo = document.createElement("button");
  addTodo.classList.add("header__add-todo-btn");
  const addTodoImg = document.createElement("img");
  addTodoImg.classList.add("header__add-todo-img");

  addTodo.append(addTodoImg);

  projectName.textContent = "# Project 1";
  addTodoImg.src = addTaskImg;

  headerSection.append(projectName, addTodo);
  return headerSection;
}

export { createHeaderSection };
