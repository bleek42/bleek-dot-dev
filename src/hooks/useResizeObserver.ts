import type { ReactComponentElement, RefObject } from 'react';
import { useCallback, useEffect, useState, useRef } from 'react';

// target: RefObject<T> | T | null,
//   cb: (entry: ResizeObserverEntry, observer: ResizeObserver) => any

export default function useResizeObserver<T extends Element>(
  cb?: (target: T, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        console.log(entry);
      }
      if (!cb) return;
    });
    console.log(ref);

    observer.observe(ref?.current);
    return () => {
      observer.disconnect();
    };
  }, [ref, cb]);

  return ref;
}
