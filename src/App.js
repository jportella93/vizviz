import useWindowSize from '@rehooks/window-size';
import React, { useState } from 'react';
import styles from './App.module.css';
import Controls from './Controls/Controls';
import D3Viz from './D3Viz/D3Viz';


function App() {
  const [fps, setFps] = useState(1000);
  const [transitionTime, setTransitionTime,] = useState(1000 / 30);
  const [elements, setElements] = useState({})
  console.log(`---->: App -> elements`, elements)
  const { innerHeight, innerWidth } = useWindowSize();

  const addElement = (element) => {
    setElements({ ...elements, [element.id]: element })
  }

  const updateElement = (id, key, value) => {
    const updatedElements = { ...elements }
    updatedElements[id][key] = value
    setElements(updatedElements)
  }

  const removeElement = (id) => {
    const updatedElements = { ...elements }
    delete updatedElements[id]
    setElements(updatedElements)
  }

  const controlsProps = {
    fps, setFps,
    transitionTime, setTransitionTime,
    elements, addElement, updateElement, removeElement,
    innerHeight, innerWidth
  }

  const data = {
    elements,
    window: { innerHeight, innerWidth },
    meta: { fps, transitionTime }
  }

  return (
    <div className={styles.App}>
      <D3Viz data={data} />
      <Controls {...controlsProps} />
    </div>
  );
}

export default App;
