import React from 'react';
import ColorPicker from '../ColorPicker/ColorPicker';
import Slider from '../Slider/Slider';

function CanvasControls({ innerHeight, innerWidth, meta, setMeta }) {
  const { rotate, translateX, translateY, bgColor } = meta;

  const getMetaUpdater = (name) => (val) => setMeta({ ...meta, [name]: val })

  return (
    <>
      <Slider
        name="translate canvas X"
        value={translateX}
        setValue={getMetaUpdater('translateX')}
        max={innerWidth * 2}
        min={-innerWidth * 2}
      />
      <Slider
        name="translate canvas Y"
        value={translateY}
        setValue={getMetaUpdater('translateY')}
        max={innerHeight * 2}
        min={-innerHeight * 2}
      />
      <Slider
        name="rotate canvas"
        value={rotate}
        setValue={getMetaUpdater('rotate')}
        max={360}
        min={-100}
      />
      <ColorPicker
        name="canvas color"
        color={bgColor}
        setColor={getMetaUpdater('bgColor')}
      />
    </>
  );
}

export default CanvasControls;
