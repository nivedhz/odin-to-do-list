function toggleHidden() {
  document.querySelector(".task-modal__container").classList.toggle("hidden");
}

function initTodoModal() {
  document
    .querySelector(".header__add-todo-btn")
    .addEventListener("click", toggleHidden);

  document.querySelectorAll(".todo__edit-btn").forEach((editBtn) => {
    editBtn.addEventListener("click", toggleHidden);
  });

  document
    .querySelector(".task-modal__quit-btn")
    .addEventListener("click", toggleHidden);

  document
    .querySelector(".task-modal__submit-btn")
    .addEventListener("click", toggleHidden);
}

export { initTodoModal };
