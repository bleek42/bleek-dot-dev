import type { ComponentType } from 'react';
import type { DefaultTheme, StyledComponentProps, AnyStyledComponent } from 'styled-components';

import { type Component } from '@/interfaces/BaseComponent';
import type { ResizeObserverDimensions } from '@/interfaces/ResizeObserverDimensions';

// export type BaseComponentProps = StyledComponentProps<
//   AnyStyledComponent,
//   DefaultTheme,
//   ComponentBase,
//   string | number | symbol
// > & {
//     props: ComponentBase
// }

// type XTState = XTermInputOutput & ResizeObserverDimensions

// export type XTermComponentProps<XTState extends object> = StyledComponentProps<
//   AnyStyledComponent | keyof JSX.IntrinsicElements,
//   DefaultTheme,
//   XTState,
//   string | number | symbol
// >;
