import userDefaultImage from "../assets/images/default-user.svg";

export function createAccountDetails() {
  const accountContainer = document.createElement("div");
  const profileImg = document.createElement("img");
  const profileUsername = document.createElement("h1");

  accountContainer.classList.add("account__container");
  profileImg.classList.add("profile__img");
  profileUsername.classList.add("profile__username");

  profileImg.src = userDefaultImage;
  profileUsername.textContent = "User";

  accountContainer.append(profileImg, profileUsername);
  return accountContainer;
}
