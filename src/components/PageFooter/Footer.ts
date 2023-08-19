import styled, {
  type StyledComponentProps,
  type DefaultTheme,
  type AnyStyledComponent,
} from 'styled-components';

import { type FooterComponent } from '@/interfaces/Component';

export type FooterProps = StyledComponentProps<
  'footer' | AnyStyledComponent,
  DefaultTheme,
  object,
  string | number | symbol
>;

// eslint-disable-next-line prettier/prettier
export const Footer = styled.footer<FooterProps & FooterComponent>((props) => `
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  max-height: 12vh;
  max-width: 120vw;
  margin: 4px 4px;
  padding: 4px 4px 4px 4px;
  color: ${props.theme.palette.secondary.tan};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 4% 8% / 8% 4%;

  /* @media (min-width: ${props.theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${props.theme.breakpoints.laptop}) {
    flex-flow: row nowrap;
    justify-content: space-between;
    /* flex: 3 4 6vh; */
  }

  `,
);
