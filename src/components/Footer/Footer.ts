import styled, {
  type StyledComponentProps,
  type DefaultTheme,
  type AnyStyledComponent,
} from 'styled-components';

import { type FooterComponent } from '@/interfaces/Component';

export type StyledFooterProps = StyledComponentProps<
  'footer' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  FooterComponent,
  string | number | symbol
>;

export const Footer = styled.footer<StyledFooterProps>((props) => `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 10vh;
  width: 120vh;
  margin: 4px 4px;
  padding: 4px 4px 4px 4px;
  color: ${props.theme.palette.secondary.tan};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 10% / 10% 10%;`
);
