import React from 'react';

function Slider({ name, value, setValue, min = -2000, max = 2000, step = 1 }) {

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  }

  return (
    <div>
      <label htmlFor="slider">{name}: {value}</label><br />
      <input
        id="slider"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default Slider;
