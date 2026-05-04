function initTodoModal() {
  document
    .querySelector(".header__add-todo-btn")
    .addEventListener("click", () => {
      document
        .querySelector(".task-modal__container")
        .classList.remove("hidden");
    });
  document.querySelector(".todo__edit-btn").addEventListener("click", () => {
    document.querySelector(".task-modal__container").classList.remove("hidden");
  });
  document
    .querySelector(".task-modal__quit-btn")
    .addEventListener("click", () => {
      document.querySelector(".task-modal__container").classList.add("hidden");
    });
}

export { initTodoModal };
