import editBtn from "../../assets/images/edit-project.svg";

function createAccountDetails() {
  const accountContainer = document.createElement("div");
  const addProfileBtn = document.createElement("button");
  const profileBtnImg = document.createElement("img");
  const rightContainer = document.createElement("div");
  accountContainer.classList.add("account__container");
  profileBtnImg.classList.add("profile__btn-img");
  addProfileBtn.classList.add("profile__btn");
  rightContainer.classList.add("profile__right-container");
  profileBtnImg.src = editBtn;
  addProfileBtn.append(profileBtnImg);

  accountContainer.append(rightContainer, addProfileBtn);
  return accountContainer;
}

function editAccountDetails(profileImg, profileUsername) {
  const profileImgEl = document.createElement("img");
  const profileUsernameEl = document.createElement("h1");
  const rightContainer = document.querySelector(".profile__right-container");

  profileImgEl.classList.add("profile__img");
  profileUsernameEl.classList.add("profile__username");

  profileImgEl.src = profileImg;
  profileUsernameEl.textContent = profileUsername;

  rightContainer.append(profileImgEl, profileUsernameEl);
  return rightContainer;
}

export { createAccountDetails, editAccountDetails };
