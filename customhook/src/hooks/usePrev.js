import { useRef, useEffect } from "react";

export const uePrev = (initalValue) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef();

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    ref.current = initalValue;
  }, [initalValue]);
  return ref.current;   // initial it is undefined
};


// it returns first , effect gets called later