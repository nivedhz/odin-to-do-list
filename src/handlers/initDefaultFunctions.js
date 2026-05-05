import { initTodoModal } from "./todoModal.js";
import { initProjectModal } from "./projectModal.js";
import { initUserModal } from "./userModal.js";
import { todoGridExpander } from "./todoGridExpander.js";
function initDefaultFunctions() {
  initProjectModal();
  initTodoModal();
  initUserModal();
  todoGridExpander();
}
export { initDefaultFunctions };
