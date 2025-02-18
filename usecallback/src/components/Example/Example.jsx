import React, { useCallback, useState } from 'react';
import Header from '../Header/Header';

const Example = () => {
    const [count, setCount] = useState(0);

    const newFn = useCallback(()=> {},[])
  return (
    <div>
      {/* useCallback(function, dependencies) */}
      <Header newFn={newFn}/>
      <h1>{count}</h1>
      <button onClick={()=> setCount(prev => prev + 1)}>Click Here</button>
    </div>
  )
}

export default Example;