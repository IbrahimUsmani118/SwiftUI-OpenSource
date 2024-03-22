import React from 'react';

const SlideIn = ({ direction, children }) => {
  return <div className={`slide-in slide-${direction}`}>{children}</div>;
};

export default SlideIn;
