import React from 'react'
import { useRef } from 'react';

const Example = () => {
    const inputElem = useRef();
    const btnClicked = () => {
        inputElem.current.style.border = "2px solid #f00";
    }
  return (
    <div>
      <input type='text' ref={inputElem}/>
      <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default Example;
