import React, { useMemo, useState } from 'react'

const Example = () => {
    const [number, setNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    function cubeNum(num) {
        console.log("Calculation done");
        return Math.pow(num, 3);
    }
    const result = useMemo(() => {return cubeNum(number)}, [number]);
  return (
    <div>
     {/* useMemo(callback, dependencies) */}
      <input type='number' onChange={(e) => setNumber(e.target.value)} value={number}/>
      <h1>Cube of the number: {result}</h1>
      <button onClick={() => setCounter(counter + 1)}>Counter++</button>
      <h1>{counter}</h1>
    </div>
  )
}

export default Example;
