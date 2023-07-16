import type { DefaultTheme, StyledComponentProps, AnyStyledComponent } from 'styled-components';

import type { ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';

// export type BaseComponentProps<K extends > = StyledComponentProps<
//   K | AnyStyledComponent,
//   DefaultTheme,
//   BaseComponent<string | number | symbol>,
//   string | number | symbol
// >;

// type XTState = XTermInputOutput & ResizeObserverDimensions

export type XTermComponentProps<XTState extends object> = StyledComponentProps<
  AnyStyledComponent | keyof JSX.IntrinsicElements,
  DefaultTheme,
  XTState,
  string | number | symbol
>;
