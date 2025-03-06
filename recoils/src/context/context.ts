import { atom, selector } from "recoil";

// atom
export const countState = atom({
  key: "counter",
  default: 0,
});

// selector or Derived state
export const isEven = selector({
  key: "isEvenSelector",
  get: ({ get }) => {
    const count = get(countState);
    return count % 2  == 0 ? "Even" : "Odd";
  },
});
