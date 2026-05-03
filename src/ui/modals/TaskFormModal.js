import "../../styles/task-form-modal.css";

function createTaskFormContent() {
  const formContainer = document.createElement("form");
  formContainer.classList.add("task-modal__form-container");
  formContainer.method = "POST";

  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "taskName");
  nameLabel.textContent = "Name: ";
  const nameInput = document.createElement("input");
  nameInput.classList.add("task-modal__name-input");
  nameInput.id = "taskName";
  nameInput.setAttribute("name", "taskName");
  nameInput.type = "text";
  nameInput.required = true;
  nameInput.placeholder = "Take out the trash...";
  nameLabel.append(nameInput);

  const priorityLabel = document.createElement("label");
  priorityLabel.setAttribute("for", "taskPriority");
  priorityLabel.textContent = "Priority: ";
  const prioritySelect = document.createElement("select");
  prioritySelect.classList.add("task-modal__priority-select");
  prioritySelect.name = "taskPriority";
  prioritySelect.id = "taskPriority";
  const lowOption = document.createElement("option");
  lowOption.value = "low";
  lowOption.textContent = "Low";
  const mediumOption = document.createElement("option");
  mediumOption.value = "medium";
  mediumOption.textContent = "Medium";
  mediumOption.selected = true;
  const highOption = document.createElement("option");
  highOption.value = "high";
  highOption.textContent = "High";
  prioritySelect.append(lowOption, mediumOption, highOption);
  priorityLabel.append(prioritySelect);

  const dueDateLabel = document.createElement("label");
  dueDateLabel.setAttribute("for", "dueDate");
  dueDateLabel.textContent = "Date: ";
  const dueDateInput = document.createElement("input");
  dueDateInput.classList.add("task-modal__due-date-input");
  dueDateInput.name = "dueDate";
  dueDateInput.id = "dueDate";
  dueDateInput.type = "date";
  dueDateInput.required = true;
  dueDateInput.min = new Date().toISOString().split("T")[0];
  dueDateLabel.append(dueDateInput);

  const longSummaryInput = document.createElement("textarea");
  longSummaryInput.setAttribute("for", "longSummary");
  longSummaryInput.classList.add("task-modal__long-summary-input");
  longSummaryInput.id = "longSummary";
  longSummaryInput.name = "longSummary";
  longSummaryInput.rows = "5";
  longSummaryInput.cols = "40";
  longSummaryInput.placeholder = "Type Long Summary Here...";

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Submit";
  submitBtn.classList.add("task-modal__submit-btn");

  const quitForm = document.createElement("button");
  quitForm.classList.add("task-modal__quit-btn");
  quitForm.type = "button";
  quitForm.textContent = "X";

  formContainer.append(
    quitForm,
    nameLabel,
    priorityLabel,
    dueDateLabel,
    longSummaryInput,
    submitBtn,
  );
  return formContainer;
}
function createTaskFormModal() {
  const taskModalContainer = document.createElement("div");
  taskModalContainer.classList.add("task-modal__container", "hidden");

  const formContainer = createTaskFormContent();

  taskModalContainer.append(formContainer);
  return taskModalContainer;
}

export { createTaskFormModal };
