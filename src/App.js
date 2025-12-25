import React from 'react';
import Controls from './Controls/Controls';
import P5Viz from './P5Viz/P5Viz';
import usePersistedState from './hooks/usePersistedState';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [elements, setElements] = usePersistedState('elements', {})
  const [meta, setMeta] = usePersistedState('meta', () => ({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    bgColor: '#10232A'
  }))
  const { innerHeight, innerWidth } = useWindowSize();

  const elementUpdaters = {
    add: (element) => {
      setElements({ ...elements, [element.id]: element })
    },

    update: (id, key, value) => {
      const updatedElements = { ...elements }
      updatedElements[id][key] = value
      setElements(updatedElements)
    },

    remove: (id) => {
      const updatedElements = { ...elements }
      delete updatedElements[id]
      setElements(updatedElements)
    }
  }

  return (
    <>
      <P5Viz elements={elements} meta={meta} innerHeight={innerHeight} innerWidth={innerWidth} />
      <Controls
        meta={meta}
        setMeta={setMeta}
        elements={elements}
        elementUpdaters={elementUpdaters}
        innerHeight={innerHeight}
        innerWidth={innerWidth}
      />
    </>
  );
}

export default App;
