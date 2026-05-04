function initUserModal() {
  document.querySelector(".profile__btn").addEventListener("click", () => {
    document
      .querySelector(".profile-modal__container")
      .classList.remove("hidden");
  });
  document
    .querySelector(".profile-modal__quit-btn")
    .addEventListener("click", () => {
      document
        .querySelector(".profile-modal__container")
        .classList.add("hidden");
    });
}

export { initUserModal };
