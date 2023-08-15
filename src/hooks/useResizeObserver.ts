import { MutableRefObject, RefObject, useEffect, useRef } from 'react';

<<<<<<< HEAD
export default function useResizeObserver<T extends HTMLElement>(
  cb: (target: T, entry: ResizeObserverEntry) => void,
=======
export default function useResizeObserver<T extends Element>(
  cb: (target: T | undefined, entry: ResizeObserverEntry) => void
>>>>>>> origin/main
) {
  const ref = useRef<T>();

  useEffect(() => {
    let element = ref?.current;

<<<<<<< HEAD
    const observer = new ResizeObserver(([entry]) => {
      // console.log({ element, entry });
      if (element) cb(element, entry);
    });

    if (element) observer.observe(element);
=======
      cb(ref.current, entry);
    });

    if (ref.current) observer.observe(ref.current);
>>>>>>> origin/main

    return () => {
      // console.log('ran useRO effect', { observer, ...ref });
      observer.disconnect();
    };
<<<<<<< HEAD
  }, [cb, ref.current]);
=======
  }, [ref.current, ref]);
>>>>>>> origin/main

  return ref;
}
