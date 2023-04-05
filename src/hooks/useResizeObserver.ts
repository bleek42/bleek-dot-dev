import { useCallback, useEffect, useState } from 'react';

export default function useResizeObserver(ref) {
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0, area: null });

  const handleResize = useCallback(
    (entry: ResizeObserverEntry) => {
      console.log(entry);
      ref?.current ?? new ResizeObserver(([entry]) => console.log(entry));
    },
    [dimensions]
  );

  const disconnect = useCallback(() => ref?.current.disconnect(), []);

  useEffect(() => {
    if (!ref.current) handleResize(ref);

    return () => disconnect();
  }, [ref]);

  return { dimensions, setDimensions };
}
