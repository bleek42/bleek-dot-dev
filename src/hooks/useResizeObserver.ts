import { type MutableRefObject, type RefObject, useEffect, useRef } from 'react';

import { useIsomorphicEffect } from './useIsomorphicEffect';

export default function useResizeObserver<T extends HTMLElement>(
  cb: (target: T, entry: ResizeObserverEntry) => void,
) {
  const ref = useRef<T>();

  useIsomorphicEffect(() => {
    let element = ref?.current;

    const observer = new ResizeObserver(([entry]) => {
      // // console.log({ element, entry });
      if (element) cb(element, entry);
    });

    if (element) observer.observe(element);

    return () => {
      // // console.log('ran useRO effect', { observer, ...ref });
      observer.disconnect();
    };
  }, [cb, ref.current]);

  return ref;
}
