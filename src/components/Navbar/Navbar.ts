import Link, { type LinkProps } from 'next/link';
import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';

import { Icon, shimmer } from '@/components/common';
import { type NavbarComponent } from '@/interfaces/Component';
import { type StyledOptions } from '@/interfaces/StyledOptions';

export type NavBarProps = StyledComponentProps<
  'nav' | 'button' | 'ul' | 'li',
  DefaultTheme,
  object,
  string | number | symbol
>;

export type NavLinkProps = StyledComponentProps<
  typeof Link | 'a',
  DefaultTheme,
  LinkProps,
  string | number | symbol
>;

// eslint-disable-next-line prettier/prettier
export const NavBar = styled.nav<NavBarProps & NavbarComponent>`
  border: 2px solid ${({ theme }) => theme.palette.primary.cyan};
  border-radius: ${({ theme }) => theme.defaultRadius};
  background-color: ${({ theme }) => theme.palette.tertiary.steel};
  width: 38vw;
  min-width: 30vw;
  height: 10vh;
  min-height: 8vh;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    justify-items: center;
    /* flex-flow: column wrap; */
    /* flex: auto; */
    /* align-items: center; */
    /* touch-action: auto; */
    /* user-select: none; */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    /* justify-content: flex-start; */
    /* flex-flow: column wrap; */
    /* flex: auto; */
    /* touch-action: auto;
    user-select: none; */
    /* align-items: center; */
  }
`;

// eslint-disable-next-line prettier/prettier
export const NavList = styled.ul<NavBarProps & NavbarComponent>`
  border: 0.8px solid ${({ theme }) => theme.palette.common.black};
  list-style: none;
  display: contents;
  inset: 82% -15% auto;
  position: absolute;
  z-index: 1;

  /* animation: slide-open 0.6s forwards; */

  /* &:hover { */
  /* visibility: visible; */
  /* } */

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    inset: 12% 58% auto;
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {

    } */
`;

// eslint-disable-next-line prettier/prettier
export const NavItem = styled.li<NavBarProps & NavbarComponent>`
  list-style: none;
  border: 0.8px solid ${({ theme }) => theme.palette.secondary.cyan};
  background-color: ${({ theme }) => theme.palette.tertiary.steel};
  padding: 4px 4px;
  height: 8vh;
  min-width: 30vw;
  max-width: 37vw;
  position: relative;

  mask-image: ${({ theme }) => theme.palette.secondary.linear},
    ${({ theme }) => theme.palette.tertiary.linear};
  -webkit-mask-image: ${({ theme }) => theme.palette.secondary.linear},
    ${({ theme }) => theme.palette.tertiary.linear};
  z-index: 1;

  &:hover {
    mask-size: 200%;
    -webkit-mask-size: 200%;
    animation: ${shimmer} 2000ms infinite;
  }
`;
/* color: ${({ theme }) => theme.palette.primary.neon}; */
/* border: 1.2px solid ${({ theme }) => theme.palette.secondary.neon}; */
/* filter: brightness(1.1); */

export const ToggleBtn = styled.button<NavBarProps & NavbarComponent>`
  width: stretch;
  height: 5vh;
  display: inline-block;
  padding: 4px;
  margin: 2px 3px 0 3px;
  color: ${({ theme }) => theme.palette.primary.blue};
  border: 0.8px solid ${({ theme }) => theme.palette.primary.cyan};
  background-color: ${({ theme }) => theme.palette.primary.black};
  border-radius: ${({ theme }) => theme.defaultRadius};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  text-shadow: ${({ theme }) => theme.palette.primary.steel} 1px 0.5px 0.5px;
  font-size: 32px;
  letter-spacing: 0.4px;
  transition:
    filter 300ms ease-in,
    color 300ms ease-in;

  /* &:hover {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightness(2);
  } */

  &:hover {
    filter: brightness(1.1);
    color: ${({ theme }) => theme.palette.primary.cyan};
  }
`;

// eslint-disable-next-line prettier/prettier
export const NavLink = styled(Link)<NavLinkProps>`
  display: contents;
  font-size: 1.5em;
  letter-spacing: 0.5px;
  /* background: ;
  background-size:
    100% 3px,
    0 3px;
  background-position:
    100% 100%,
    0 100%; */
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.cyan};
  font-family: ${({ theme }) => theme.fonts.at(1)};
  text-shadow: ${({ theme }) => theme.palette.secondary.black} 0.7px 0.6px 0.4px;
  text-align: center;
  /* transition: background-size 300ms; */
  /* filter 300ms ease-in,
    color 200ms ease-in; */

  /* &:focus-visible {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightness(1.1);
    background-size:
      0 3px,
      100% 3px;
  } */
  /*
  &:visited {
    filter: brightness(0.9);
  } */
`;

// eslint-disable-next-line prettier/prettier
export const NavIcon = styled(Icon)`
  display: contents;
  color: ${({ theme }) => theme.palette.primary.green};
  font-size: 1.8em;
  font-family: ${({ theme }) => theme.fonts.at(2)};
  text-shadow: ${({ theme }) => theme.palette.secondary.black} 1.2px 1.2px 0.8px;
  text-align: left;
  /* transition:
    filter 360ms ease-in,
    color 360ms ease-in;
*/

  &:hover {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightnness(1.1);
  }

  &:focus-visible {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightness(1.1);
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
