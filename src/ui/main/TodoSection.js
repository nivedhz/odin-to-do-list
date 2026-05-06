import editTodoImg from "../../assets/images/edit-todo.svg";

function createTodoDate() {
  const todoDate = document.createElement("h1");
  todoDate.classList.add("todo__date");

  todoDate.textContent = "## Today";

  return todoDate;
}

function createTodoElement(
  todoName,
  todoPriority,
  todoDueDate,
  todoLongSummary,
) {
  const todoEl = document.createElement("div");
  todoEl.classList.add("todo__grid");
  const todoDefaultContainer = document.createElement("div");
  todoDefaultContainer.classList.add("todo__default-container");
  const todoRightContainer = document.createElement("div");
  todoRightContainer.classList.add("todo__right-container");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  checkBox.classList.add("todo__checkbox");
  const todoNameEl = document.createElement("h2");
  todoNameEl.classList.add("todo__name");
  const editTodoBtn = document.createElement("button");
  editTodoBtn.classList.add("todo__edit-btn");
  const editTodoImgEl = document.createElement("img");
  editTodoImgEl.classList.add("todo__edit-img");
  const todoPriorityEl = document.createElement("p");
  const todoDueDateEl = document.createElement("p");
  const todoLongSummaryEl = document.createElement("p");
  todoPriorityEl.textContent = `Priority: ${todoPriority}`;
  todoDueDateEl.textContent = `Due Date: ${todoDueDate}`;
  todoLongSummaryEl.textContent = `Long Summary: ${todoLongSummary}`;

  if (todoPriority === "Low") todoEl.classList.add("low-priority");
  if (todoPriority === "Medium") todoEl.classList.add("medium-priority");
  if (todoPriority === "High") todoEl.classList.add("high-priority");

  todoNameEl.textContent = todoName;
  editTodoImgEl.src = editTodoImg;

  editTodoBtn.append(editTodoImgEl);
  todoRightContainer.append(checkBox, todoNameEl);
  todoDefaultContainer.append(todoRightContainer, editTodoBtn);
  todoEl.append(
    todoDefaultContainer,
    todoPriorityEl,
    todoDueDateEl,
    todoLongSummaryEl,
  );
  return todoEl;
}

function createtodoContainer() {
  const todoContainer = document.createElement("div");
  todoContainer.classList.add("todo__container");

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

export { createTodoSection, createTodoElement };
