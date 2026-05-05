function initProjectModal() {
  document.querySelector(".project__add-btn").addEventListener("click", () => {
    document
      .querySelector(".project-modal__container")
      .classList.remove("hidden");
  });
  document.querySelectorAll(".project__edit-btn").forEach((editBtn) => {
    editBtn.addEventListener("click", () => {
      document
        .querySelector(".project-modal__container")
        .classList.remove("hidden");
    });
  });
  document
    .querySelector(".project-modal__quit-btn")
    .addEventListener("click", () => {
      document
        .querySelector(".project-modal__container")
        .classList.add("hidden");
    });
}

export { initProjectModal };
