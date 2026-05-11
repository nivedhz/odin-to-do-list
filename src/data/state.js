import defaultProfile from "../assets/images/default-user.svg";

const state = {
  username: "User",
  profilePicture: defaultProfile,
  editMode: false,
  projects: [
    {
      projectName: "Frontend Grind",
      projectId: crypto.randomUUID(),
      todo: [
        {
          name: "Fix modal rendering",
          todoId: crypto.randomUUID(),
          priority: "High",
          date: "2026-05-10",
          longSummary:
            "Investigate why modal listeners stop working after rerender.",
        },
        {
          name: "Refactor render flow",
          todoId: crypto.randomUUID(),
          priority: "Medium",
          date: "2026-05-11",
          longSummary:
            "Separate rendering logic from delegated event handlers.",
        },
      ],
    },

    {
      projectName: "Gym Progression",
      projectId: crypto.randomUUID(),
      todo: [
        {
          name: "Push Day",
          todoId: crypto.randomUUID(),
          priority: "High",
          date: "2026-05-12",
          longSummary: "Focus on incline dumbbell press and controlled reps.",
        },
        {
          name: "Track protein intake",
          todoId: crypto.randomUUID(),
          priority: "Low",
          date: "2026-05-13",
          longSummary: "Hit daily protein goal and monitor consistency.",
        },
      ],
    },

    {
      projectName: "Life Admin",
      projectId: crypto.randomUUID(),
      todo: [
        {
          name: "Organize study notes",
          todoId: crypto.randomUUID(),
          priority: "Medium",
          date: "2026-05-15",
          longSummary: "Sort notes by subject and remove duplicate PDFs.",
        },
        {
          name: "Backup project repos",
          todoId: crypto.randomUUID(),
          priority: "High",
          date: "2026-05-16",
          longSummary:
            "Push all active branches and clean old experimental commits.",
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
