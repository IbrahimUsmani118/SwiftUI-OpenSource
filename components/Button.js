// Button.js
import React from 'react';
import styles from './Button.module.css'; // Import CSS module styles

const Button = ({ onClick, children, className }) => {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
