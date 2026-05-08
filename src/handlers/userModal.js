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
      userModalToggleHidden();
      document.querySelector(".profile__right-container").replaceChildren();
      const data = new FormData(
        document.querySelector(".profile-modal__form-container"),
      );
      const values = Object.fromEntries(data.entries());
      changeUserInfo(
        values.profileUsername,
        URL.createObjectURL(values.profilePicture),
      );
      editAccountDetails(state.profilePicture, state.username);
    });

  document
    .querySelector(".profile-modal__quit-btn")
    .addEventListener("click", userModalToggleHidden);
}

export { initUserModal };
