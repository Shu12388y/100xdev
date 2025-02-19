// import { useEffect, useState } from "react";
import "./App.css";
// import { useCounter } from "./hooks/useCounter";
// import { useFetch } from "./hooks/useFetch";
// import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  // const { value, increment, decrement } = useCounter();
  // const { data, loading } = useFetch(
  //   "https://jsonplaceholder.typicode.com/todos/1"
  // );
  // const [str, setStr] = useState("");
  const backendServer = ()=>{
    console.log("searching")
  }
  const debounce = useDebounce(backendServer);
  // const {value, prevs,update} = usePrev(0);
  return (
    <>
      {/* <button onClick={increment}>+</button>
      <div>
        {value}
      </div>
      <button onClick={decrement}>-</button> */}
      {/* {loading ? "Loading" : JSON.stringify(data)} */}
      {/* <div>updated value {value}</div>
      <button onClick={update}>+</button>
      <div>Previous value {prevs}</div> */}
      <input
        type="text"
        name=""
        id=""
        onChange={debounce}
      />
    </>
  );
}

export default App;
