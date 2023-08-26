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
export const Footer = styled.footer<FooterProps & FooterComponent>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  /* width: 96vw; */
  margin: 4px 4px;
  padding: 4px 4px 4px 4px;
  color: ${(props) => props.theme.palette.secondary.tan};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  border: 4px solid ${(props) => props.theme.palette.secondary.cyan};
  border-radius: ${(props) => props.theme.defaultRadius};

  /* @media (min-width: ${(props) => props.theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-flow: column wrap;
    justify-content: flex-start;
  }
`;
