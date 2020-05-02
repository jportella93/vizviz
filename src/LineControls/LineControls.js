import React from 'react';
import AutoUpdater from '../AutoUpdater/AutoUpdater';
import ColorPicker from '../ColorPicker/ColorPicker';
import Slider from '../Slider/Slider';

function LineControls({
  element,
  windowBorders,
  removeElement,
  updateElement,
  fps
}) {
  console.log(`---->: element`, element)
  const { x1, x2, y1, y2, stroke, id } = element;
  const { windowWidthControls, windowHeightControls } = windowBorders;

  const getUpdater = (key) =>
    (value) => updateElement({ ...element, [key]: value })

  return (
    <div>
      <p>Line</p>
      <button onClick={() => removeElement(id)}>Remove</button>
      {[{ x1 }, { x2 }, { y1 }, { y2 }].map(item => {
        const name = Object.keys(item)[0]
        const commonProps = {
          name: Object.keys(item)[0],
          value: item[name],
          setValue: getUpdater(name),
        }

        return <div key={name}>
          <Slider
            {...commonProps}
          />
          <AutoUpdater
            {...commonProps}
            fps={fps}
          />
        </div>
      }
      )}
      <ColorPicker
        color={stroke}
        setColor={getUpdater('stroke')}
      />
    </div>
  );
}

export default LineControls;
