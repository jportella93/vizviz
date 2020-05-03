import React from 'react';

function ColorPicker({ name, color, setColor }) {

  function handleChange(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <label htmlFor={name}>{name}</label><br />
      <input type="color" id={name} value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
