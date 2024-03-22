import React from 'react';

const Rotate = ({ degrees, children }) => {
  return (
    <div style={{ transform: `rotate(${degrees}deg)` }}>
      {children}
    </div>
  );
};

export default Rotate;
