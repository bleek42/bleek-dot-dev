import { useRef, useState, useEffect, useLayoutEffect } from 'react';

import { useIsomorphicEffect } from './useIsomorphicEffect';

export default function useTimeout(cb: () => void, timer: number | null) {
  const cbRef = useRef(cb);

  useIsomorphicEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  useEffect(() => {
    if (!timer && timer !== 0) return;

    const timeout = setTimeout(() => cbRef.current(), timer);
    return () => clearTimeout(timeout);
  }, [timer]);
}
