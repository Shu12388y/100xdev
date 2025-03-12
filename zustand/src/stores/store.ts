import { create } from "zustand";

interface Habit {
  id: string;
  name: string;
  createAt: string;
  isCompleted: boolean;
}

interface HabitStore {
  habits: Habit[];
  addHabit: (name: string, isCompleted: boolean) => void;
  updateHabit: (id: string) => void;
  deleteHabit:(id:string) => void
}

// set is used to set particular value
// get is used to get particular value
export const useHabitStore = create<HabitStore>()((set) => {
  return {
    habits: [],
    addHabit: (name, isCompleted) =>
      set((state) => {
        return {
          habits: [
            ...state.habits,
            {
              id: Date.now().toString(),
              name,
              createAt: Date.now().toString(),
              isCompleted,
            },
          ],
        };
      }),
    updateHabit: (id) =>
      set((state) => ({
        habits: state.habits.map((ele) =>
          ele.id === id ? { ...ele, isCompleted: true } : ele
        ),
      })),

      deleteHabit :(id) =>
        set((state)=>({
        habits: state.habits.filter((ele)=>
                ele.id !== id 
        )
      })
)};
});
