'use client';

import { useEffect, useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('number of clicks: ' + counter);
  }, [counter]);

  function incCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <button style={{ width: '50px' }} onClick={incCounter}>
        {counter}
      </button>
    </>
  );
}
