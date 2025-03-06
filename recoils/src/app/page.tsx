"use client";
import { countState, isEven } from "@/context/context";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function Home() {
  const count = useRecoilValue(countState);
  const setCount = useSetRecoilState(countState);
  const isEvens = useRecoilValue(isEven);
  return (
    <div className="flex flex-col">
      <button onClick={() => setCount((c) => c + 1)}>Increase</button>
      <span>{count}</span>
      <span>{isEvens}</span>
      <button onClick={() => setCount((c) => c - 1)}>Decrease</button>
    </div>
  );
}
