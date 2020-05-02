import React from 'react';

function ColorPicker({ name, color, setColor }) {

  function handleChange(e) {
    setColor(e.target.value);
  }

  return (
    <div>
      <label htmlFor="color">Color</label><br />
      <input type="color" id="color" value={color} onChange={handleChange} />
    </div>
  );
}

export default ColorPicker;
