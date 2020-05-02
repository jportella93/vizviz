import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import { v4 as uuid } from 'uuid';
import CircleControls from '../CircleControls/CircleControls';
import LineControls from '../LineControls/LineControls';
import Slider from '../Slider/Slider';
import { controls, handle } from './Controls.module.css';

function Controls(props) {
  const {
    fps, setFps,
    transitionTime, setTransitionTime,
    innerHeight, innerWidth,
    elements, addElement, updateElement, removeElement,
  } = props

  const commonElementProps = {
    windowBorders: {
      windowHeightControls: {
        max: innerHeight * 2, min: -innerHeight * 2
      },
      windowWidthControls: {
        max: innerWidth * 2, min: -innerWidth * 2
      },
    },
    fps,
    updateElement,
    removeElement,
  }

  const getDefaultCircle = (() => ({
    x: innerWidth / 2,
    y: innerHeight / 2,
    r: 10,
    fill: '#ffffff',
    type: 'circle',
    id: `id-${uuid()}`
  }))

  const getDefaultLine = () => ({
    x1: 0,
    y1: 80,
    x2: 100,
    y2: 20,
    stroke: "#ffffff",
    type: 'line',
    id: `id-${uuid()}`
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => addElement(getDefaultCircle()), [])

  return (
    <Draggable handle="#controlsDraggableHandle">
      <div className={controls}>
        <div className={handle} id="controlsDraggableHandle"></div>
        <Slider name="fps" value={fps} setValue={setFps} max={100} min={1} />
        <Slider name="transitionTime" value={transitionTime} setValue={setTransitionTime} max={1000} min={1} />

        <button onClick={() => addElement(getDefaultCircle())}>Add circle</button>
        <button onClick={() => addElement(getDefaultLine())}>Add line</button>

        {Object.values(elements).map((element) => {
          if (element.type === 'circle') {
            return (
              <CircleControls
                key={element.id}
                element={element}
                {...commonElementProps}
              />
            )
          }
          if (element.type === 'line') {
            return (
              <LineControls
                key={element.id}
                element={element}
                {...commonElementProps}
              />
            )
          }
          return null
        })}
      </div>
    </Draggable>
  );
}

export default Controls;
