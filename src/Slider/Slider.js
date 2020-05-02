import React from 'react';

function Slider({ name, value, setValue, min = 0, max = 100, step = 1 }) {
  // const [max, setMax] = useState(10)
  // const [min, setMin] = useState(0)
  // const [step, setStep] = useState(1)

  const handleChange = (e) => {
    setValue(e.target.value);
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
      {/* <label htmlFor="max">Max</label>
      <input id="max" type="number" value={max} onChange={(e) => {
        setMax(e.target.value);
      }} />
      <label htmlFor="min">Min</label>
      <input id="min" type="number" value={min} onChange={(e) => {
        setMin(e.target.value);
      }} />
      <label htmlFor="step">Step</label>
      <input id="step" type="number" value={step} onChange={(e) => {
        setStep(e.target.value);
      }} /> */}
    </div>
  );
}

export default Slider;
