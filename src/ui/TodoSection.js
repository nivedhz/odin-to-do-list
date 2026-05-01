import editTodoImg from "../assets/images/edit-todo.svg";

function createTodoDate() {
  const todoDate = document.createElement("h1");
  todoDate.classList.add("todo__date");

  todoDate.textContent = "## Today";

  return todoDate;
}

function createTodoElement() {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo__grid");
  const todoRightContainer = document.createElement("div");
  todoRightContainer.classList.add("todo__right-container");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("todo__checkbox");
  const todoName = document.createElement("h2");
  todoName.classList.add("todo__name");
  const editTodoBtn = document.createElement("button");
  editTodoBtn.classList.add("todo__edit-btn");
  const editTodoImgEl = document.createElement("img");
  editTodoImgEl.classList.add("todo__edit-img");

  todoName.textContent = "Todo 1";
  editTodoImgEl.src = editTodoImg;

  editTodoBtn.append(editTodoImgEl);
  todoRightContainer.append(checkBox, todoName);
  todoEl.append(todoRightContainer, editTodoBtn);
  return todoEl;
}

function createtodoContainer() {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo__container");

  const todoItem = createTodoElement();
  const todoItem2 = createTodoElement();
  const todoItem3 = createTodoElement();
  const todoItem4 = createTodoElement();

  todoContainer.append(todoItem, todoItem2, todoItem3, todoItem4);
  return todoContainer;
}

function createTodoSection() {
  const todoSection = document.createElement("div");
  todoSection.classList.add("todo-section");

  const todoDate = createTodoDate();
  const todoContainer = createtodoContainer();

  todoSection.append(todoDate, todoContainer);
  return todoSection;
}

export { createTodoSection };
