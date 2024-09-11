import React from 'react'
import { useState } from 'react';

const Example1 = () => {
    const [color, setColor] = useState('Red');

    const changeColor = () => {
        setColor('Blue');
    }
  return (
    <div>
      {/*  */}
      <h1>My Favourite color is {color}</h1>
      <button onClick={changeColor}>Blue</button>
    </div>
  )
}

export default Example1;
