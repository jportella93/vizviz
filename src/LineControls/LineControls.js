import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import Slider from '../Slider/Slider';

function LineControls({
  element,
  elementUpdaters: {
    remove,
    update
  },
  onClone,
}) {
  const {
    translateX,
    translateY,
    rotate, delay,
    stroke, numberOfLines, amplitude, id,
    x1Form1, y1Form1, x2Form1, y2Form1
  } = element;

  const getUpdater = (key) =>
    (value) => update(id, key, value)

  return (
    <div>
      <button onClick={() => remove(id)}>Remove</button>
      <button onClick={onClone}>Clone</button>
      <ColorPicker
        name="color"
        color={stroke}
        setColor={getUpdater('stroke')}
      />
      <Slider
        name="followers"
        value={numberOfLines}
        setValue={getUpdater('numberOfLines')}
        max={300}
        min={1}
      />
      <Slider
        name="amplitude"
        value={amplitude}
        setValue={getUpdater('amplitude')}
        max={1000}
        min={1}
      />
      <Slider
        name="ride the wave"
        value={translateX}
        setValue={getUpdater('translateX')}
        max={100}
        min={-100}
      />
      <Slider
        name="up the hill"
        value={translateY}
        setValue={getUpdater('translateY')}
        max={100}
        min={-100}
      />
      <Slider
        name="trip"
        value={rotate}
        setValue={getUpdater('rotate')}
        max={360}
        min={-360}
      />
      <Slider
        name="delay"
        value={delay}
        setValue={getUpdater('delay')}
        max={100}
        min={-100}
      />

      {[{ x1Form1 }, { y1Form1 }, { x2Form1 }, { y2Form1 }].map(item => {
        const name = Object.keys(item)[0]
        const value = item[name]

        return (
          <>
            <label htmlFor={`select-${name}`}>{name}</label><br />
            <select id={`select-${name}`}
              value={value}
              onChange={(e) => update(id, name, e.target.value)}
            >
              <option>cos</option>
              <option>sin</option>
            </select><br />
          </>
        )
      })}
    </div>
  );
}

export default LineControls;
