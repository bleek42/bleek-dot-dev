import styled, {
  type StyledComponentProps,
  type DefaultTheme,
  type AnyStyledComponent,
} from 'styled-components';

import { type FooterComponent } from '@/interfaces/Component';

export type FooterProps = StyledComponentProps<
  'footer' | AnyStyledComponent,
  DefaultTheme,
  FooterComponent,
  string | number | symbol
> &
  FooterComponent;

export const Footer = styled.footer<FooterProps>((props) => `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 16vh;
  width: 120vh;
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

  `
);
