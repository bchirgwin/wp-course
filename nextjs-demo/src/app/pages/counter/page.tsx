'use client';

import { useState } from 'react';

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function incCounter() {
    setCounter((prev) => prev + 1);
  }

  return (
    <>
      <button style={{ width: '50px' }} onClick={incCounter}>
        {counter}
      </button>
    </>
  );
}
