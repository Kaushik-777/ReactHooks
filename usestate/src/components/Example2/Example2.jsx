import React from 'react'
import { useState } from 'react';

const Example2 = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Current count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default Example2;
