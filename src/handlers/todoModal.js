import { state } from "../data/state.js";
import { createTodo } from "../data/state.js";
import { renderTodo } from "../ui/render.js";

function todoModalToggleHidden() {
  document.querySelector(".task-modal__container").classList.toggle("hidden");
}
function handleTodoForm(event) {
  event.preventDefault();
  todoModalToggleHidden();
  const data = new FormData(
    document.querySelector(".task-modal__form-container"),
  );
  const values = Object.fromEntries(data.entries());
  if (!state.editMode) {
    createTodo(
      values.taskName,
      state.currentProject.projectId,
      values.taskPriority,
      values.dueDate,
      values.longSummary,
    );
    renderTodo();
  } else {
    state.currentTodo.date = values.dueDate;
    state.currentTodo.longSummary = values.longSummary;
    state.currentTodo.name = values.taskName;
    state.currentTodo.priority = values.taskPriority;
    renderTodo();
    state.editMode = state.editMode === true ? false : true;
  }
  document.querySelector(".task-modal__form-container").reset();
}

function containerEvent(todoContainer) {
  todoContainer.classList.toggle("todo-grid__onclick");
  if (state.currentProject.todo.length > 0) {
    state.currentTodo = state.currentProject.todo.find(
      (todo) => todo.todoId === todoContainer.dataset.id,
    );
  } else {
    state.currentTodo = null;
  }
}

function editBtnEvent(todoContainer) {
  state.editMode = state.editMode === true ? false : true;
  const todo = state.currentProject.todo.find(
    (todo) => todo.todoId === todoContainer.dataset.id,
  );
  document.querySelector(".task-modal__name-input").value = todo.name;
  document.querySelector(".task-modal__priority-select").value = todo.priority;
  document.querySelector(".task-modal__due-date-input").value = todo.date;
  document.querySelector(".task-modal__long-summary-input").value =
    todo.longSummary;
  todoModalToggleHidden();
}
function checkboxEvent(todoContainer, todoCheckbox) {
  if (todoCheckbox.checked) {
    todoContainer.classList.add("checked-todo");
    setTimeout(() => {
      state.currentProject.todo = state.currentProject.todo.filter(
        (todo) => todo.todoId !== state.currentTodo.todoId,
      );
      renderTodo();
    }, 1500);
  }
}

function initTodoModal() {
  document
    .querySelector(".header__add-todo-btn")
    .addEventListener("click", todoModalToggleHidden);

  document.querySelector(".todo__container").addEventListener("click", (e) => {
    const todoContainer = e.target.closest(".todo__grid");
    const todoEditBtn = e.target.closest(".todo__edit-btn");
    const todoCheckbox = e.target.closest(".todo__checkbox");

    if (!todoContainer) return;
    if (todoContainer) containerEvent(todoContainer);
    if (todoEditBtn) editBtnEvent(todoContainer);
    if (todoCheckbox) checkboxEvent(todoContainer, todoCheckbox);
  });

  document
    .querySelector(".task-modal__form-container")
    .addEventListener("submit", handleTodoForm);

  document
    .querySelector(".task-modal__quit-btn")
    .addEventListener("click", todoModalToggleHidden);

  renderTodo();
}

export { initTodoModal };
