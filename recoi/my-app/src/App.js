import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from "recoil";
import React from "react";

const counter = atom({
  key: "counter",
  default: 0,
});

function Buttons() {
  const setCount = useSetRecoilState(counter);

  function increase() {
    setCount((c) => c + 1);
  }

  function decrease() {
    setCount((c) => c - 1);
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

function Counter() {
  const count = useRecoilValue(counter);

  return (
    <div>
      {count}
      <Buttons />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}


export default App;