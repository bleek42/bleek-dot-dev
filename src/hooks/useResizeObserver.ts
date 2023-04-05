// import type { ReactComponentElement, RefObject } from 'react';
// import { useCallback, useEffect, useState, useRef } from 'react';

// // target: RefObject<T> | T | null,
// //   cb: (entry: ResizeObserverEntry, observer: ResizeObserver) => any

// export default function useResizeObserver() {
//   const [dimensions, setDimensions] = useState({ cols: 0, rows: 0, area: null });
//   const ref = useRef<ResizeObserver>(new ResizeObserver(([entry]) => console.log(entry)));

//   const handleResize = useCallback(() => {
//     console.log(ref.current);
//   }, [ref.current]);

//   const disconnect = useCallback(() => {
//     ref.current.disconnect();
//   }, [ref.current]);

//   useEffect(() => {
//     if (!ref.current) handleResize();

//     return () => {
//       disconnect();
//     };
//   }, [ref.current]);

//   return { dimensions, ref };
// }
