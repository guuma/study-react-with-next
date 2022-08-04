import { useCallback, useMemo, useState } from 'react';

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, []);
  const handleDisplay = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);
  return { count, doubleCount, isShow, handleClick, handleDisplay };
};
