import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';
import { LgTxt, MdTxt } from '../common';

type HeaderProps = StyledComponentProps<
  'header',
  DefaultTheme,
  object,
  string | number | symbol
> &
  HeaderComponent;

// eslint-disable-next-line prettier/prettier
export const Header = styled.header<HeaderProps>((props) => `
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  /* justify-content: space-between; */
  color: ${props.theme.palette.primary.yellow};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 10% / 10% 10%;
  height: 20vh;

  margin: 6px 6px;
  padding: 4px 8px 4px 8px;

  /* @media (max-width: ${props.theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${props.theme.breakpoints.smallTab}) {
    flex-flow: row nowrap;
    /* justify-conent: space-between; */
  }
`,
);

export const HeaderLgTxt = styled(LgTxt)`
 
  flex: 1 0 auto;
`;
export const HeaderMdTxt = styled(MdTxt)`
  
  flex: 1 0 auto;
  /* flex: 1 0 auto; */
`;

/* @media (min-width: ${props.theme.breakpoints.fullDisplay}) {

  } */
