const state = {
  projects: [],
};

function createProject(projectName) {
  const Project = {
    projectName,
    projectId: crypto.randomUUID(),
    todo: [],
  };
  state.projects.push(Project);
}
function createTodo(name, priority, date, longSummary) {
  const Todo = {
    name,
    todoId: crypto.randomUUID(),
    projectId: this.projectId,
    priority,
    date,
    longSummary,
  };
}

export { state, createProject, createTodo };
