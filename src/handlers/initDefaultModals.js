import { initTodoModal } from "./todoModal.js";
import { initProjectModal } from "./projectModal.js";
import { initUserModal } from "./userModal.js";
function initDefaultModals() {
  initProjectModal();
  initTodoModal();
  initUserModal();
}
export { initDefaultModals };
