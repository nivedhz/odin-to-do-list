function todoGridExpander() {
  document.querySelector(".todo__container").addEventListener("click", (e) => {
    if (!e.target.closest(".todo__grid")) return;
    if (e.target.closest(".todo__edit-btn")) return;
    e.target.closest(".todo__grid").classList.toggle("todo-grid__onclick");
  });
}
export { todoGridListener };
