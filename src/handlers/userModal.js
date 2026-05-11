import { changeUserInfo, state } from "../data/state.js";
import { editAccountDetails } from "../ui/sidebar/AccountDetails.js";

function userModalToggleHidden() {
  document
    .querySelector(".profile-modal__container")
    .classList.toggle("hidden");
}

function initUserModal() {
  editAccountDetails(state.profilePicture, state.username);
  document
    .querySelector(".profile__btn")
    .addEventListener("click", userModalToggleHidden);

  document
    .querySelector(".profile-modal__img-input")
    .addEventListener("change", (event) => {
      document.querySelector(".profile-modal__img-preview").src =
        URL.createObjectURL(event.target.files[0]);
    });
  document
    .querySelector(".profile-modal__form-container")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const data = new FormData(
        document.querySelector(".profile-modal__form-container"),
      );

      const values = Object.fromEntries(data.entries());
      const reader = new FileReader();

      document.querySelector(".profile__right-container").replaceChildren();
      reader.addEventListener("load", () => {
        changeUserInfo(values.profileUsername, reader.result);
        editAccountDetails(state.profilePicture, state.username);
        userModalToggleHidden();
      });

      reader.readAsDataURL(values.profilePicture);
    });

  document
    .querySelector(".profile-modal__quit-btn")
    .addEventListener("click", userModalToggleHidden);
}

export { initUserModal };
