import { type RefObject, useEffect, useRef } from 'react';

import { useIsomorphicEffect } from './useIsomorphicEffect';

// ? useEventListener function typedef with MediaQueryList Event
// export default function useEventListener<K extends keyof MediaQueryListEventMap>(
//   eventName: K,
//   handler: (event: MediaQueryListEventMap[K]) => void,
//   element: RefObject<MediaQueryList>,
//   options?: boolean | AddEventListenerOptions,
// ): void;

// // ? useEventListener function typedef with Window Event based
// export default function useEventListener<K extends keyof WindowEventMap>(
//   eventName: K,
//   handler: (event: WindowEventMap[K]) => void,
//   element?: undefined,
//   options?: boolean | AddEventListenerOptions,
// ): void;

// ? useEventListener function typedef with Element Event
export function useEventListener<
  K extends keyof HTMLElementEventMap,
  T extends HTMLElement = HTMLDivElement,
>(
  eventName: K,
  handler: (event: HTMLElementEventMap[K]) => void,
  element: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
): void;

// // ? useEventListener function typedef with Document Event
// export default function useEventListener<K extends keyof DocumentEventMap>(
//   eventName: K,
//   handler: (event: DocumentEventMap[K]) => void,
//   element: RefObject<Document>,
//   options?: boolean | AddEventListenerOptions,
// ): void;

// ! Now the actual function implementation...
export function useEventListener<
  WinEvt extends keyof WindowEventMap,
  ElemEvt extends keyof HTMLElementEventMap,
  MedEvt extends keyof MediaQueryListEventMap,
  T extends HTMLElement | MediaQueryList | void = void,
>(
  eventName: WinEvt | ElemEvt | MedEvt,
  handler: (
    event:
      | WindowEventMap[WinEvt]
      | HTMLElementEventMap[ElemEvt]
      | MediaQueryListEventMap[MedEvt]
      | Event,
  ) => void,
  element?: RefObject<T>,
  options?: boolean | AddEventListenerOptions,
) {
  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useIsomorphicEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener)) return;

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => savedHandler.current(event);

    targetElement.addEventListener(eventName, listener, options);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}
