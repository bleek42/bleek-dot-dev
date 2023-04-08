import type { ReactComponentElement, RefObject } from 'react';
import { useCallback, useEffect, useState, useRef } from 'react';

// target: RefObject<T> | T | null,
//   cb: (entry: ResizeObserverEntry, observer: ResizeObserver) => any

export default function useResizeObserver<T extends Element>(
  cb?: (target: T, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      console.log(entry);
      setDimensions((prev) => ({ ...prev, ...entry.contentRect }));
      if (cb) cb(ref?.current, entry);
      if (!cb) return;
    });

    observer.observe(ref?.current);
    console.log(observer);
    // console.log(ref, observer);
    return () => {
      observer.disconnect();
    };
  }, []);

  return { ref };
}
