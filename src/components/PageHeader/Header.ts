import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';

export type HeaderProps = StyledComponentProps<
  'header',
  DefaultTheme,
  object,
  string | number | symbol
>;

export const Header = styled.header<HeaderProps & HeaderComponent>((props) => `
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  color: ${props.theme.palette.primary.yellow};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 10% / 10% 10%;
  height: 20vh;

  margin: 6px 6px;
  padding: 4px 8px 4px 8px;

  @media (max-width: ${props.theme.breakpoints.laptop}) {

  }

  @media (max-width: ${props.theme.breakpoints.smallTab}) {
    flex-flow: column nowrap;
    justify-conent: space-around;
  }
`,
);


/* @media (min-width: ${props.theme.breakpoints.fullDisplay}) {

  } */
