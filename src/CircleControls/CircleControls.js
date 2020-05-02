import React from 'react';
import AutoUpdater from '../AutoUpdater/AutoUpdater';
import ColorPicker from '../ColorPicker/ColorPicker';
import Slider from '../Slider/Slider';

function CircleControls({
  element,
  windowBorders,
  removeElement,
  updateElement,
  fps
}) {
  const { fill, r, x, y, id } = element;
  const { windowWidthControls, windowHeightControls } = windowBorders;

  const getUpdater = (key) =>
    (value) => updateElement(id, key, value)

  return (
    <div>
      <p>Circle</p>
      <button onClick={() => removeElement(id)}>Remove</button>
      <Slider
        name="x"
        value={x}
        setValue={getUpdater('x')}
        {...windowWidthControls}
      />
      <Slider
        name="y"
        value={y}
        setValue={getUpdater('y')}
        {...windowHeightControls}
      />
      <Slider
        name="radius"
        value={r}
        setValue={getUpdater('r')}
      />
      <ColorPicker
        color={fill}
        setColor={getUpdater('color')}
      />
      {/* {[{ x }, { y }].map(dimension => {
        const name = Object.keys(dimension)[0]
        const fn = name === 'x'
          ? (t) => t + 2
          : (t) => t + 1

        return <AutoUpdater
          name={name}
          key={name}
          fps={fps}
          value={dimension[name]}
          setValue={getUpdater(name)}
          fn={fn}
        />
      }
    )} */}
      <AutoUpdater
        name={'y'}
        fps={fps}
        value={y}
        setValue={getUpdater('y')}
        fn={(y) => y + 5}
      />
      <AutoUpdater
        name={'x'}
        fps={fps}
        value={x}
        setValue={getUpdater('x')}
        fn={(x) => x + 1}
      />
    </div>
  );
}

export default CircleControls;
