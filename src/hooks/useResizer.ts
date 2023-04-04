import { RefObject, useCallback, useEffect, useState } from 'react';
import { callbackify } from 'util';

export default function useResizer(
  ref: RefObject<HTMLElement>,
  cb: (entry: DOMRectReadOnly) => void
) {
  const [dimensions, setDimensions] = useState({ cols: 0, rows: 0, area: null });

  const handleResize = useCallback(
    (entry: ResizeObserverEntry) => {
      setDimensions({
        cols: Math.round(entry.contentRect.width),
        rows: Math.round(entry.contentRect.height),
      });

      if (cb) {
        console.log(entry);
        cb(entry.contentRect);
      }
    },
    [dimensions]
  );

  const disconnect = useCallback(() => ref.current?.disconnect(), []);

  useEffect(() => {
    const resizer = new ResizeObserver(([entry]) => handleResize(entry));

    resizer.observe(ref.current);

    return () => disconnect();
  }, [ref]);
}
