const taskManager = {
  tasks: [],

  addTask({ name, description, status, priority }) {
    this.tasks.push({
      name,
      description,
      status,
      priority,
    });
  },

  changeStatus({ taskName, newStatus }) {
    this.tasks.find((task) => task.name === taskName).status = newStatus;
  },

  getTasksByPriority(priority) {
    return this.tasks.filter((task) => task.priority === priority);
  },

  getTasksByStatus(status) {
    return this.tasks.filter((task) => task.status === status);
  },
};

taskManager.addTask({
  name: "task1",
  description: "desc",
  status: "open",
  priority: 1,
});
taskManager.addTask({
  name: "task2",
  description: "desc",
  status: "in process",
  priority: 2,
});
taskManager.addTask({
  name: "task3",
  description: "desc",
  status: "done",
  priority: 3,
});

console.log(taskManager.getTasksByStatus("done"));

taskManager.changeStatus({ taskName: "task3", newStatus: "in process" });

console.log(taskManager.getTasksByPriority(3));
console.log(taskManager.getTasksByStatus("in process"));
