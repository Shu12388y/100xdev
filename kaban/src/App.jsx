import React from "react";
import Columns from "./components/Columns";

function App() {
  return (
    <div className="flex flex-row items-center justify-center gap-10">
      <Columns state={"Planned"} />
      <Columns state={"Ongoing"} />
      <Columns state={"Done"} />
    </div>
  );
}

export default App;
