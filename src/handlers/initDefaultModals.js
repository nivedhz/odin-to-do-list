import { initTodoModal } from "./initTodoModal.js";
import { initProjectModal } from "./initProjectModal.js";
import { initUserModal } from "./initUserModal.js";
function initDefaultModals() {
  initProjectModal();
  initTodoModal();
  initUserModal();
}
export { initDefaultModals };
