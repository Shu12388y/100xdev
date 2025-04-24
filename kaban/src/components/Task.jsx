import React from "react";
import { useStore } from "../store";

function Task({ status }) {
  const task = useStore((store) =>
    store.tasks.find((t) => t.status === status)
  );
  return (
    <div className="bg-white p-5 rounded-md mt-6 cursor-grab" draggable>
      <div className=" font-semibold">{task.title}</div>
      <div className="flex flex-row justify-between">
        <div></div>
        <div>{task.status}</div>
      </div>
    </div>
  );
}

export default Task;
