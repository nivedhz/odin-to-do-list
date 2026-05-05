import { initTodoModal } from "./todoModal.js";
import { initProjectModal } from "./projectModal.js";
import { initUserModal } from "./userModal.js";
import { todoGridListener } from "./todoGridListener.js";
function initDefaultFunctions() {
  initProjectModal();
  initTodoModal();
  initUserModal();
  todoGridListener();
}
export { initDefaultFunctions };
