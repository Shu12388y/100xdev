import { useState } from "react";

export function useCounter() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((value) => value + 1);
  };
  const decrement = () => {
    setValue((value) => value - 1);
  };

  return { value, increment,decrement };
}
