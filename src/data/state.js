import defaultProfile from "../assets/images/default-user.svg";

const state = {
  username: "User",
  profilePicture: defaultProfile,
  editMode: false,
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
function changeUserInfo(name, picture) {
  state.profilePicture = picture;
  state.username = name;
}

export { state, createProject, createTodo, changeUserInfo };
