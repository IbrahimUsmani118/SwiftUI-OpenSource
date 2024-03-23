import React, { useState } from 'react';
import styles from '../styles/home.module.css';

function ButtonWithCount() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Sample button component.</p>
      <button onClick={handleClick} className={styles.button}>
        Clicks: {count}
      </button>
    </div>
  );
}

export default ButtonWithCount;
