import { useEffect, useRef } from 'react';

export default function useResizeObserver<T extends Element>(
  cb: (target: T | undefined, entry: ResizeObserverEntry) => void
) {
  const ref = useRef<T>();

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      if (!cb) return;

      cb(ref.current, entry);
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref.current, ref]);

  return { ref };
}
