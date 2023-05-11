import type { BaseComponent } from '@interfaces/BaseComponent';
import type { ResizerDimensions } from '@interfaces/ResizerDimensions';
import type { ComponentType } from 'react';
import type { DefaultTheme, StyledComponentProps, AnyStyledComponent } from 'styled-components';

export type BaseComponentProps = StyledComponentProps<
  AnyStyledComponent | keyof JSX.IntrinsicElements,
  DefaultTheme,
  BaseComponent,
  string | number | symbol
>;

export type XTermComponentProps = StyledComponentProps<
  AnyStyledComponent | keyof JSX.IntrinsicElements,
  DefaultTheme,
  ResizerDimensions,
  string | number | symbol
>;
