import useWindowSize from '@rehooks/window-size';
import React from 'react';
import createPersistedState from 'use-persisted-state';
import Controls from './Controls/Controls';
import P5Viz from './P5Viz/P5Viz';
const useElementsState = createPersistedState('elements');
const useMetaState = createPersistedState('meta');

function App() {
  const [elements, setElements] = useElementsState({})
  const [meta, setMeta] = useMetaState(() => ({
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
