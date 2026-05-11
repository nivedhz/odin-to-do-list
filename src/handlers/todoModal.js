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
  createTodo(
    values.taskName,
    state.currentProject.projectId,
    values.taskPriority,
    values.dueDate,
    values.longSummary,
  );
  renderTodo();
  document.querySelector(".task-modal__form-container").reset();
}

function initTodoModal() {
  document
    .querySelector(".header__add-todo-btn")
    .addEventListener("click", todoModalToggleHidden);

  document.querySelector(".todo__container").addEventListener("click", (e) => {
    const todoContainer = e.target.closest(".todo__grid");
    const todoEditBtn = e.target.closest(".todo__edit-btn");
    if (!todoContainer) return;
    if (todoContainer) todoContainer.classList.toggle("todo-grid__onclick");
    if (todoEditBtn) console.log(todoContainer.dataset.id);
  });

  document
    .querySelector(".task-modal__form-container")
    .addEventListener("submit", handleTodoForm);

  document
    .querySelector(".task-modal__quit-btn")
    .addEventListener("click", todoModalToggleHidden);
}

export { initTodoModal };
