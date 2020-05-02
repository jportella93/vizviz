import useInterval from '@use-it/interval';
import React, { useState } from 'react';

function Interval({ callback, fps }) {
  useInterval(callback, fps > 0 ? 1000 / fps : 0);
  return null
}

function AutoUpdater({ name, value, setValue, fps, fn = x => x }) {
  const { cos, sin, floor } = Math;

  // const fn1 = (x) => floor(1 + (sin(x / 100) * 100 + sin(x / 100) * 45));
  // const fn2 = (x) => floor(1 + (cos(x / 15) * 100 + cos(x / 10) * 45));
  // const fn3 = (x) => floor(1 + (sin(x / 10) * 100 + sin(x / 10) * 40));
  // const fn4 = (x) => x + 1;
  // const fn4 = (x) => 500 + (cos(x / 100) * 10 + sin(x / 10) * 60);

  const [isActive, setActive] = useState(true)
  const [updateFn, setUpdateFn] = useState(() => fn)


  // console.log(`---->: AutoUpdater -> value`, value)
  // console.log(`---->: AutoUpdater -> updateFn(value)`, updateFn(value))
  const callback = () => setValue(updateFn(value))

  return (
    <div>
      <label>Auto updater {name}: {value}</label><br />
      <pre>{updateFn.toString()}</pre>

      <button onClick={() => setActive(!isActive)}>{isActive ? 'off' : 'on'}</button>

      {isActive && <Interval fps={fps} callback={callback} />}
    </div>
  );
}

export default AutoUpdater;
