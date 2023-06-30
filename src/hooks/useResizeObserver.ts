import { MutableRefObject, RefObject, useEffect, useRef } from 'react';

export default function useResizeObserver<T extends HTMLElement>(
  cb: (target: T, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>();

  useEffect(() => {
    const element = ref?.current;

    const observer = new ResizeObserver(([entry]) => {
      if (element) cb(element, entry);
    });

    if (element) observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [cb, ref]);

  return ref;
}
