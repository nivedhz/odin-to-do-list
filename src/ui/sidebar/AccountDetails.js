import userDefaultImage from "../../assets/images/default-user.svg";
import editBtn from "../../assets/images/edit-project.svg";

export function createAccountDetails() {
  const accountContainer = document.createElement("div");
  const profileImg = document.createElement("img");
  const profileUsername = document.createElement("h1");
  const rightContainer = document.createElement("div");
  const addProfileBtn = document.createElement("button");
  const profileBtnImg = document.createElement("img");

  accountContainer.classList.add("account__container");
  profileImg.classList.add("profile__img");
  profileUsername.classList.add("profile__username");
  profileBtnImg.classList.add("profile__btn-img");
  rightContainer.classList.add("profile__right-container");

  profileBtnImg.src = editBtn;
  profileImg.src = userDefaultImage;
  profileUsername.textContent = "User";

  addProfileBtn.append(profileBtnImg);
  rightContainer.append(profileImg, profileUsername);
  accountContainer.append(rightContainer, addProfileBtn);
  return accountContainer;
}
