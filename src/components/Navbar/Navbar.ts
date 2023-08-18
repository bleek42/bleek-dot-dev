import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import Link, { type LinkProps } from 'next/link';

import { type NavbarComponent } from '@/interfaces/Component';
import { Icon, MdTxt } from '../common';

export type NavBarProps = StyledComponentProps<
  'nav' | 'button' | 'ul' | 'li',
  DefaultTheme,
  object,
  string | number | symbol
>;

export type NextLinkProps = StyledComponentProps<
  typeof Link | 'a' | AnyStyledComponent,
  DefaultTheme,
  LinkProps,
  string | number | symbol
>;

// eslint-disable-next-line prettier/prettier
const toggleKeyframes = keyframes`
  to {

  }

  from {

  }

`;

// eslint-disable-next-line prettier/prettier
export const NavBar = styled.nav<NavBarProps & NavbarComponent>(
  (props) => `
  border: 1px solid ${props.theme.palette.secondary.black};
  border-radius: ${props.theme.defaultRadius};
  background-color: ${props.theme.palette.secondary.gray};
  max-width: 38vw;
  min-width: 36vw;
  height: 12vh;
  min-height: 10vh;
  position: relative;
  flex: 3 1 auto;
  /* animation: slide-open 0.6s forwards; */

  @media (max-width: ${props.theme.breakpoints.smallTab}) {
    /* justify-content: flex-start; */
    /* flex-flow: column wrap; */
    /* flex: auto; */
    /* align-items: center; */
    /* touch-action: auto; */
    /* user-select: none; */
  }


  @media (min-width: ${props.theme.breakpoints.smallTab}) {

    /* justify-content: flex-start; */
    /* flex-flow: column wrap; */
    /* flex: auto; */
    /* touch-action: auto;
    user-select: none; */
    /* align-items: center; */
  }
`,
);

// eslint-disable-next-line prettier/prettier
export const NavList = styled.ul<NavBarProps & NavbarComponent>(
  (props) => `
  border: .5px solid ${props.theme.palette.common.black};
  list-style: none;
  display: contents;
  inset: 82% -15% auto;
  position: absolute;
  z-index: 1;
    /* visibility: collapse; */

  /* &:hover { */
    /* visibility: visible; */
  /* } */
  /* animation: slide-open 0.6s forwards; */

  @media (max-width: ${props.theme.breakpoints.smallTab}) {
    inset: 12% 58% auto;
  }

    /* @media (max-width: ${props.theme.breakpoints.laptop}) {

    } */


  `,
);

// eslint-disable-next-line prettier/prettier
export const NavItem = styled.li<NavBarProps & NavbarComponent>(
  (props) => `
  list-style: none;
  letter-spacing: .5px;
  border: .8px solid ${props.theme.palette.common.black};
  background-color: ${props.theme.palette.primary.teal};
  padding: 4px 4px;
  height: 8vh;
  min-width: 30vw;
  max-width: 37vw;
  position: relative;
  z-index: 1;

  &:hover {
    color: ${props.theme.palette.primary.cyan};
    filter: brightness(2);
  }
  /* color: rgb(11, 211, 11);
  transition: filter 400ms; */
`,
);

// eslint-disable-next-line prettier/prettier
export const ToggleBtn = styled.button<NavBarProps & NavbarComponent>(
  (props) => `
  width: stretch;
  height: 5vh;
  display: inline-block;
  padding: 4px;
  margin: 2px 3px 0 3px;
  color: ${props.theme.palette.secondary.blue};
  border: .4px solid ${props.theme.palette.primary.cyan};
  background-color: ${props.theme.palette.secondary.black};
  border-radius: 2% / 2%;
  font-family: ${props.theme.fonts.at(2)};
  text-shadow: ${props.theme.palette.secondary.steel} 1.5px 1px .5px;
  font-size: 24px;
  letter-spacing: .4px;
  transition: filter 360ms ease-in, color 420ms linear;

  /* &:hover {
    color: ${props.theme.palette.primary.neon};
    filter: brightness(2);
  } */

  &:hover {
    filter: brightness(1.8);
    color: ${props.theme.palette.primary.cyan};
  }

`,
);

// eslint-disable-next-line prettier/prettier
export const NextLink = styled(Link)<NextLinkProps>(
  (props) => `
  display: inline;
  font-size: 26px;
  color: ${props.theme.palette.secondary.cyan};
  font-family: ${props.theme.fonts.at(1)};
  text-shadow: ${props.theme.palette.secondary.steel} 1px 1px .5px;
  text-align: right;

  /* &:visited {
    filter: brightness(0.9);
    color: rgb(44, 8, 250);
  } */
`,
);

export const NavTxt = styled(MdTxt)`
  text-align: center;
`;

// eslint-disable-next-line prettier/prettier
export const NavIcon = styled(Icon)`
  display: contents;
  color: ${({ theme }) => theme.palette.primary.green};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.at(2)};
  text-shadow: ${({ theme }) => theme.palette.secondary.steel} 1.2px 0.9px 0.8px;
  transition:
    filter 360ms ease-in-out,
    color 420ms linear;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightnness(1.4);
  }
`;

//   position: ${(props) => (props.toggle ? 'absolute' : 'fixed')};
//   bottom: ${(props) => (props.toggle ? '0%' : '-100%')};
//   top: ${(props) => (props.toggle ? '65px' : '0px')};
//   left: ${(props) => (props.toggle ? '0%' : '-100%')};
//   width: ${(props) => (props.toggle ? '400px' : '100px')};
//   /* display: inline-flex;
//   flex-flow: row wrap;
//   justify-content: flex-start;
//   align-items: center; */
//   z-index: 200;
//   margin: 2px auto;
//   padding: 2px 2px;
//   /* padding-left: 20px; */
//   animation: slide-open 0.6s forwards;
