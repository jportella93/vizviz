import React from 'react';
import Draggable from 'react-draggable';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { v4 as uuid } from 'uuid';
import CanvasControls from '../CanvasControls/CanvasControls';
import LineControls from '../LineControls/LineControls';
import './controls.css';
import styles from './Controls.module.css';

function Controls({
  innerHeight,
  innerWidth,
  meta,
  setMeta,
  elements,
  elementUpdaters
}) {

  const windowBorders = {
    windowHeightControls: {
      max: innerHeight * 2, min: -innerHeight * 2
    },
    windowWidthControls: {
      max: innerWidth * 2, min: -innerWidth * 2
    },
  }

  const getDefaultLine = () => ({
    stroke: "#ffffff",
    numberOfLines: 30,
    x1Form1: 'sin',
    y1Form1: 'cos',
    x2Form1: 'sin',
    y2Form1: 'cos',
    translateX: 0,
    translateY: 0,
    rotate: 0,
    delay: 0,
    amplitude: 100,
    type: 'line',
    id: `id-${uuid()}`
  })

  const handleClone = (id) => {
    elementUpdaters.add({
      ...elements[id],
      id: `id-${uuid()}`
    })
  }

  return (
    <Draggable handle="#controlsDraggableHandle">
      <div className={`${styles.controls} controls`}>
        <div className={styles.handle} id="controlsDraggableHandle"></div>

        <CanvasControls
          innerHeight={innerHeight}
          innerWidth={innerWidth}
          meta={meta}
          setMeta={setMeta}
        />

        <button onClick={() => elementUpdaters.add(getDefaultLine())}>
          Add line
        </button>

        {Object.values(elements).length > 0 &&
          <Tabs>
            <TabList>
              {Object.values(elements).map((el) => <Tab key={el.id}>{el.type}</Tab>)}
            </TabList>
            {Object.values(elements).map((element) =>
              <TabPanel key={element.id}>
                <LineControls
                  onClone={() => handleClone(element.id)}
                  element={element}
                  windowBorders={windowBorders}
                  elementUpdaters={elementUpdaters}
                />
              </TabPanel>
            )}
          </Tabs>
        }
      </div>
    </Draggable>
  );
}

export default Controls;
