import { create } from "zustand";

export const store = (set) => ({
  tasks: [
    { title: "Test task", status: "Ongoing" },
    { title: "Test task", status: "Ongoing" },
    { title: "Test task", status: "Planned" },
    { title: "Test task", status: "Ongoing" },
    { title: "Test task", status: "Done" },
  ],
  addTasks: (title, state) =>
    set((store) => ({
      tasks: [...store.tasks, { title: title, status: state }],
    })),
});

export const useStore = create(store);
