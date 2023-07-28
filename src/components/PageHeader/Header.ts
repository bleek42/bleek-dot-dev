import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';

type HeaderProps = StyledComponentProps<
  'header',
  DefaultTheme,
  object,
  string | number | symbol
> &
  HeaderComponent;

// eslint-disable-next-line prettier/prettier
export const Header = styled.header<HeaderProps>(
  (props) => `
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  color: ${props.theme.palette.primary.yellow};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 20% / 10% 20%;
  min-height: 14vh; 
  margin: 4px 4px 4px 4px;
  padding: 4px 4px 4px 4px;
  /* height: 12vh;
  width: 100vh; */

  @media (max-width: ${props.theme.breakpoints.phone}) {
    flex-flow: row wrap;
  }
`,
);

/* @media (min-width: ${props.theme.breakpoints.fullDisplay}) {

  } */
