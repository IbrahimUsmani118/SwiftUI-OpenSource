import React from 'react';

const CheckBox = ({ label, checked, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      {label}
    </label>
  );
};

export default CheckBox;
