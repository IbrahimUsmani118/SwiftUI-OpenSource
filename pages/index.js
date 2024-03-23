import React, { useState } from 'react';
import { Form } from '../components';
import ClickCount from '../components/ClickCount'; // Import ClickCount component
import ButtonWithCount from '../components/ButtonWithCount'; // Import ButtonWithCount component
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
      <h1>Fast Refresh Demo</h1>
      <p>
        Fast Refresh is a Next.js feature that gives you instantaneous feedback
        on edits made to your React components, without ever losing component
        state.
      </p>
      <hr className={styles.hr} />
      <section>
      <div>
        <p>
          Auto incrementing value. The counter won't reset after edits or if
          there are errors.
        </p>
        <p>Current value: {count}</p>
        <ClickCount count={count} setCount={setCount} /> {/* Render ClickCount component and pass count */}
      </div>
      <hr className={styles.hr} />
      <div>
        <p>Button component with count.</p>
        <ButtonWithCount count={count} setCount={setCount} className={buttonStyles.btn}>
          Clicks: {count}
        </ButtonWithCount>
      </div>
      </section>
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
