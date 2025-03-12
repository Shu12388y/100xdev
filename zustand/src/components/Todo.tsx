"use client";

import React, { useState } from "react";
import { useHabitStore } from "@/stores/store";

function Todo() {
  const [habit, setHabit] = useState({
    name: "",
    isCompleted: false,
  });
  const { habits, addHabit, updateHabit,deleteHabit } = useHabitStore();
  return (
    <>
      <div className="flex flex-row items-center justify-between w-1/4 bg-slate-100 px-10 py-4">
        <div className="flex flex-col items-start pb-2">
          <label htmlFor="">Todo List</label>
          <input
            className="border w-full"
            onChange={(e) => setHabit({ ...habit, name: e.target.value })}
          />
        </div>
        <button
          onClick={() => {
            addHabit(habit.name, habit.isCompleted);
          }}
        >
          Add item
        </button>
      </div>
      <div className="border-3">
        {habits.length == 0 ? null : (
          <div className="flex flex-row items-center gap-12 border-2">
            <h3>Name</h3>
            <h3>IsCompleted</h3>
            <h3>CreatedAt</h3>
          </div>
        )}

        {habits.length == 0
          ? "Not habit present"
          : habits.map((ele, index) => {
              return (
                <>
                  <div className="flex flex-row items-center gap-12 text-center border-2">
                    <div key={index}>{ele.name} </div>
                    <div>{ele.isCompleted ? "Done" : "Pending"}</div>
                    <div>{ele.createAt}</div>
                    <button onClick={() => updateHabit(ele.id)}>updated</button>
                    <button onClick={()=>deleteHabit(ele.id)}>delete</button>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
}

export default Todo;
