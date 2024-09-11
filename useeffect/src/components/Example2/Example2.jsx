import React, { useState, useEffect } from 'react';

const Example2 = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds(prev => {
          if (prev >= 30) {
            clearInterval(interval);
            setIsActive(false);
            return 30;
          }
          return prev + 1;
        });
      }, 1000);
    } 
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <h1>Time: {seconds}s</h1>
    </div>
  );
};

export default Example2;