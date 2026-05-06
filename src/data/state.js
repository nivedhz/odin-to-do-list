const state = {
  projects: [
    {
      projectName: "Starting Project",
      projectId: crypto.randomUUID(),
      todo: [],
    },
  ],
  currentProject: null,
};

function createProject(projectName) {
  const Project = {
    projectName,
    projectId: crypto.randomUUID(),
    todo: [],
  };
  state.projects.push(Project);
  state.currentProject = state.projects[0];
}
function createTodo(name, projectId, priority, date, longSummary) {
  const Todo = {
    name,
    todoId: crypto.randomUUID(),
    projectId,
    priority,
    date,
    longSummary,
  };
  state.projects.forEach((project) => {
    if (project.projectId === projectId) {
      project.todo.push(Todo);
    }
  });
}

export { state, createProject, createTodo };
