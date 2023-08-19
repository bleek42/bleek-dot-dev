import { useLayoutEffect, useEffect, EffectCallback, DependencyList } from 'react';

export const useIsomorphicEffect: (efx: EffectCallback, deps?: DependencyList) => void =
  typeof window !== undefined ? useLayoutEffect : useEffect;
