import defaultUserProfile from "../../assets/images/default-user.svg";
import "../../styles/profile-modal-form.css";

function createImgForm() {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("profile-modal__img-container");
  const imgWrapper = document.createElement("div");
  imgWrapper.classList.add("profile-modal__img-wrapper");
  const imgIconOverlay = document.createElement("label");
  imgIconOverlay.setAttribute("for", "ImgUpload");
  const imgPreview = document.createElement("img");
  imgPreview.classList.add("profile-modal__img-preview");
  imgPreview.src = defaultUserProfile;
  const imgInfo = document.createElement("p");
  imgInfo.textContent = "Add a Profile Picutre";
  const imgInput = document.createElement("input");
  imgInput.id = "ImgUpload";
  imgInput.setAttribute("name", "profilePicture");
  imgInput.classList.add("profile-modal__img-input", "hidden");
  imgInput.type = "file";
  imgInput.accept = "image/*";

  imgIconOverlay.append(imgPreview);
  imgWrapper.append(imgIconOverlay, imgInfo);
  imgContainer.append(imgWrapper, imgInput);
  return imgContainer;
}
function createUsernameForm() {
  const usernameContainer = document.createElement("div");
  usernameContainer.classList.add("profile-modal__username-container");
  const usernameLabel = document.createElement("label");
  usernameLabel.setAttribute("for", "profile-modal__username");
  const usernameInput = document.createElement("input");
  usernameInput.setAttribute("name", "profileUsername");
  usernameInput.id = "profile-modal__username";
  usernameInput.classList.add("profile-modal__username-input");
  usernameInput.required = true;
  usernameInput.placeholder = "John";
  usernameLabel.textContent = "Username: ";

  usernameContainer.append(usernameLabel, usernameInput);
  return usernameContainer;
}

function createProfileFormModal() {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("profile-modal__container", "hidden");
  const formContainer = document.createElement("form");
  formContainer.method = "POST";
  formContainer.classList.add("profile-modal__form-container");

  const profileSubmitBtn = document.createElement("button");
  profileSubmitBtn.classList.add("profile-modal__username-btn");
  profileSubmitBtn.type = "submit";
  profileSubmitBtn.textContent = "Submit";

  const imgContainer = createImgForm();
  const usernameContainer = createUsernameForm();

  formContainer.append(imgContainer, usernameContainer, profileSubmitBtn);
  modalContainer.append(formContainer);
  return modalContainer;
}

export { createProfileFormModal };
