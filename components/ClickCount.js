import React, { useEffect } from 'react';

function ClickCount({ count, setCount }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1); // Increment count
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, [setCount]);

  return null; // No visible rendering
}

export default ClickCount;
