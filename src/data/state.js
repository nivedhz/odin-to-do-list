import defaultProfile from "../assets/images/default-user.svg";

const state = {
  username: "User",
  profilePicture: defaultProfile,
  editMode: false,
  projects: [
    {
      projectName: "Starting Project",
      projectId: crypto.randomUUID(),
      todo: [
        {
          name: "Todo with Low Priority",
          todoId: crypto.randomUUID(),
          priority: "Low",
          date: new Date().toISOString().split("T")[0],
          longSummary: "A test todo to find out what all this can do",
        },
        {
          name: "Todo with Medium Priority",
          todoId: crypto.randomUUID(),
          priority: "Medium",
          date: new Date().toISOString().split("T")[0],
          longSummary: "A test todo to find out what all this can do",
        },
        {
          name: "Todo with High Priority",
          todoId: crypto.randomUUID(),
          priority: "High",
          date: new Date().toISOString().split("T")[0],
          longSummary: "A test todo to find out what all this can do",
        },
      ],
    },
  ],
  currentProject: null,
  currentTodo: null,
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
