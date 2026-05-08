import { createHeaderSection } from "./HeaderSection.js";
import { createTodoSection } from "./TodoSection.js";
import "../../styles/main-todo-section.css";

function createMainTodoSection(projectName) {
  const todoSectionContainer = document.createElement("div");
  todoSectionContainer.classList.add("todo-section__container");

  const header = createHeaderSection(projectName);
  const todo = createTodoSection();

  todoSectionContainer.append(header, todo);
  return todoSectionContainer;
}

export { createMainTodoSection };
