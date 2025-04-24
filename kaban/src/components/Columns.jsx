import React, { useMemo } from "react";
import Task from "./Task";
import { useStore } from "../store";

function Columns({ state }) {
  const tasks = useStore((store) => store.tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter((f) => f.status === state);
  }, [tasks, state]);

  const addTasks = useStore((store)=>store.addTasks)

  return (
    <div className="w-full" onDragOver={(e)=>{
        e.preventDefault()

    }}
    
    onDrop={(e)=>{
        console.log(e)
    }}
    
    >
      <div className="bg-slate-100 w-[33rem] h-screen items-center justify-center p-10">
        <div className="flex flex-row items-center justify-between">
          <p className="font-semibold">{state}</p>
          <button onClick={()=>addTasks("sample test","Ongoing")} className="bg-slate-300 px-4 py-2">Add</button>
        </div>
        {filteredTasks.map((ele) => (
          <Task status={ele.status} key={ele.title + "-" + ele.title} />
        ))}
      </div>
    </div>
  );
}

export default Columns;
