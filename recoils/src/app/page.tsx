"use client";
import { countState, isEven } from "@/context/context";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Home() {
  const setCount = useSetRecoilState(countState);
  const isEvens = useRecoilValue(isEven);
  
  const Counter = () => {
    const count = useRecoilValue(countState);
    return <span>{count}</span>;
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <button onClick={() => setCount((c) => c + 2)}>Increase</button>
      <Counter/>
      <span>{isEvens}</span>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}
