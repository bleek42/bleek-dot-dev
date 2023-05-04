import type { ComponentType } from 'react';
import type { DefaultTheme, StyledComponentProps, AnyStyledComponent } from 'styled-components';
import type { BaseComponent, XTermInputOutput } from '@interfaces/BaseComponent';
import type { ResizeObserverDimensions } from '@interfaces/ResizeObserverDimensions';

export type BaseComponentProps = StyledComponentProps<
  AnyStyledComponent | keyof JSX.IntrinsicElements,
  DefaultTheme,
  BaseComponent,
  string | number | symbol
>;

// type XTState = XTermInputOutput & ResizeObserverDimensions

export type XTermComponentProps<XTState extends object> = StyledComponentProps<
  AnyStyledComponent | keyof JSX.IntrinsicElements,
  DefaultTheme,
  XTState,
  string | number | symbol
>;
