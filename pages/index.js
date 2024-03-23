import React, { useCallback, useEffect, useState } from 'react';
import { Button, ClickCount, Form } from '../components';
import styles from '../styles/home.module.css';

function Home() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((v) => v + 1);
  }, [setCount]);

  useEffect(() => {
    const r = setInterval(() => {
      increment();
    }, 1000);

    return () => {
      clearInterval(r);
    };
  }, [increment]);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <main className={styles.main}>
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p>Current value: {count}</p>
      </div>
      <hr className={styles.hr} />
      
      <div>
        <p>Sample button component.</p>
        <Button onClick={() => console.log('Button clicked')}>Sample Button</Button>
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Form component.</p>
        <Form onSubmit={handleSubmit} />
      </div>
      <hr className={styles.hr} />
    </main>
  );
}

export default Home;
