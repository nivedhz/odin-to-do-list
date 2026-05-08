import addTaskImg from "../../assets/images/add-task.svg";

function createHeaderSection(projectName) {
  const headerSection = document.createElement("div");
  headerSection.classList.add("header-section");
  const projectNameEl = document.createElement("h1");
  projectNameEl.classList.add("header__project-name");
  const addTodo = document.createElement("button");
  addTodo.classList.add("header__add-todo-btn");
  const addTodoImg = document.createElement("img");
  addTodoImg.classList.add("header__add-todo-img");

  addTodo.append(addTodoImg);

  projectNameEl.textContent = `## ${projectName}`;
  addTodoImg.src = addTaskImg;

  headerSection.append(projectNameEl, addTodo);
  return headerSection;
}

export { createHeaderSection };
