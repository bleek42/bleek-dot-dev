import { useEffect, useRef } from 'react';

export default function useResizeObserver<T extends Element>(
  cb?: (target: T, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (!cb) return;

      cb(ref?.current, entry);
    });

    observer.observe(ref?.current);

    return () => {
      observer.disconnect();
    };
  }, [ref?.current]);

  return { ref };
}
