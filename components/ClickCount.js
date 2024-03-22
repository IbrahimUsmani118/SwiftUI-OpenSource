// ClickCount.js
import React, { useState } from 'react';

const ClickCount = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Clicks: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ClickCount;
