'use client';

import { useEffect, useMemo, useState } from 'react';

export default function Memo() {
  const [value, setValue] = useState(0);

  const [count, setCount] = useState(0);

  useEffect(() => {
    setValue(Math.random());
  }, []);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);
  // const calculation = expensiveCalculation(count);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const decrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <>
      {value}
      <button onClick={() => setValue(Math.random())}>Random #</button>
      <h1>{calculation}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  );
}

const expensiveCalculation = (num: number) => {
  console.log('calculating...', num);
  for (let i = 0; i <= 1_000_000_000; i++) {
    num += 1;
  }
  console.log('done');
  return num;
};
