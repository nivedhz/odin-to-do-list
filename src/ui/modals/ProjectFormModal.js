import "../../styles/project-form-modal.css";

function createProjectFormContent() {
  const formContainer = document.createElement("form");
  formContainer.classList.add("project-modal__form-container");

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "projectName");
  nameLabel.textContent = "Name: ";
  const nameInput = document.createElement("input");
  nameInput.classList.add("project-modal__name-input");
  nameInput.id = "projectName";
  nameInput.setAttribute("name", "projectName");
  nameInput.type = "text";
  nameInput.required = true;
  nameInput.placeholder = "Gym..";
  nameLabel.append(nameInput);

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("project-modal__submit-btn");

  formContainer.append(nameLabel, submitBtn);
  return formContainer;
}

function createProjectFormModal() {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("project-modal__container", "hidden");

  const formContainer = createProjectFormContent();

  modalContainer.append(formContainer);
  return modalContainer;
}

export { createProjectFormModal };
