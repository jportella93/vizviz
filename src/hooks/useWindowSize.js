import { useEffect, useState } from 'react';

export default function useWindowSize() {
  const [size, setSize] = useState(() => ({
    innerWidth: typeof window === 'undefined' ? 0 : window.innerWidth,
    innerHeight: typeof window === 'undefined' ? 0 : window.innerHeight,
  }));

  useEffect(() => {
    function onResize() {
      setSize({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    }

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return size;
}

