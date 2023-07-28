import styled, {
  type StyledComponentProps,
  type DefaultTheme,
  type AnyStyledComponent,
} from 'styled-components';

import { type FooterComponent } from 'src/interfaces/Component';

export type FooterProps = StyledComponentProps<
  'footer' | AnyStyledComponent,
  DefaultTheme,
  object,
  string | number | symbol
> &
  FooterComponent;

// eslint-disable-next-line prettier/prettier
export const Footer = styled.footer<FooterProps>(
  (props) => `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  max-height: 12vh;
  max-width: 120vw;
  margin: 4px 4px;
  padding: 4px 4px 4px 4px;
  color: ${props.theme.palette.secondary.tan};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 10% / 10% 10%;

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */

  }

  `,
);
