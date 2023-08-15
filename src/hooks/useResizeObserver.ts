import { MutableRefObject, RefObject, useEffect, useRef } from 'react';

export default function useResizeObserver<T extends HTMLElement>(
  cb: (target: T, entry: ResizeObserverEntry) => void,
) {
  const ref = useRef<T>();

  useEffect(() => {
    let element = ref?.current;

    const observer = new ResizeObserver(([entry]) => {
      // console.log({ element, entry });
      if (element) cb(element, entry);
    });

    if (element) observer.observe(element);

    return () => {
      // console.log('ran useRO effect', { observer, ...ref });
      observer.disconnect();
    };
  }, [cb, ref.current]);

  return ref;
}
