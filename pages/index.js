import React, { useState } from 'react';
import { Form } from '../components';
import styles from '../styles/home.module.css';
import buttonStyles from '../components/Button.module.css';

function Home() {
  const [count, setCount] = useState(0);

  const handleSubmit = (formData) => {
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header>
          <h1 className={styles.title}>Fast Refresh Demo</h1>
          <p className={styles.description}>
            Fast Refresh is a Next.js feature that gives you instantaneous feedback
            on edits made to your React components, without ever losing component
            state.
          </p>
        </header>
        <section className={styles.section}>
          <div className={styles.feature}>
            <h2 className={styles.featureTitle}>Button Click Counter</h2>
            <p>Number of clicks on the button: {count}</p>
            <button onClick={() => setCount(count + 1)} className={buttonStyles.btn}>
              Click Me
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
