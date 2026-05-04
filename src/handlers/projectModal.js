function initProjectModal() {
  document.querySelector(".project__add-btn").addEventListener("click", () => {
    document
      .querySelector(".project-modal__container")
      .classList.remove("hidden");
  });
  document.querySelector(".project__edit-btn").addEventListener("click", () => {
    document
      .querySelector(".project-modal__container")
      .classList.remove("hidden");
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
