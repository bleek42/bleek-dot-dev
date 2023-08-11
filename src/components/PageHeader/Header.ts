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
  justify-content: center;
  color: ${props.theme.palette.primary.yellow};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 15% 10% / 15% 10%;
  height: 20vh;
  align-items: center;
  margin: 4px 6px 4px 6px;
  padding: 4px 8px 4px 8px;

  /* @media (max-width: ${props.theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${props.theme.breakpoints.laptop}) {
    flex-flow: row nowrap;
    justify-content: space-between;
  }
`,
);

export const HeaderLgTxt = styled(LgTxt)`
  order: 2;
  flex: 1 1 1vw;
`;
export const HeaderMdTxt = styled(MdTxt)`
  order: 2;
  flex: 1 1 1vw;
  /* flex: 1 0 auto; */
`;

/* @media (min-width: ${props.theme.breakpoints.fullDisplay}) {

  } */
