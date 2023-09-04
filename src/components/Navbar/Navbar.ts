import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import Link, { type LinkProps } from 'next/link';

import { type NavbarComponent } from '@/interfaces/Component';
import { Icon, shimmerUnderline } from '../common';
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
  height: 10vh;
  width: 32vw;
  display: inline-flex;
  flex-flow: row wrap;
  min-height: 8vh;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    justify-items: center;
    min-width: 48vw;
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
  /* border: 0.8px solid ${({ theme }) => theme.palette.common.black}; */
  list-style: none;
  display: inline-block;
  /* inset: 82% -15% auto; */
  inset: 89% -1% auto;
  position: absolute;
  /* width: 28vw; */
  z-index: 1;
  /* flex: 1 1 2vw; */
  /* animation: slide-open 0.6s forwards; */

  /* &:hover { */
  /* visibility: visible; */
  /* } */

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {

    } */
`;

// eslint-disable-next-line prettier/prettier
export const NavItem = styled.li<NavBarProps & NavbarComponent>`
  list-style: none;
  letter-spacing: 0.5px;
  border: 1px inset ${({ theme }) => theme.palette.primary.cyan};
  background-color: ${({ theme }) => theme.palette.primary.gray};
  padding: 4px 4px;
  height: 8vh;

  position: relative;
  z-index: 1;

  &:hover {
    animation: ${shimmerUnderline} 600ms steps(40) infinite;
  }
`;

export const ToggleBtn = styled.button<NavBarProps & NavbarComponent>`
  width: stretch;
  height: 5vh;
  display: inline-block;
  padding: 4px;
  margin: 2px 3px 0 3px;
  color: ${({ theme }) => theme.palette.primary.blue};
  border: 0.8px inset ${({ theme }) => theme.palette.primary.blue};
  background-color: ${({ theme }) => theme.palette.primary.black};
  border-radius: ${({ theme }) => theme.defaultRadius};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  text-shadow: ${({ theme }) => theme.palette.primary.steel} 1px 0.5px 0.5px;
  font-size: 32px;
  letter-spacing: 0.4px;
  transition:
    color 360ms ease-in-out,
    border 450ms ease-in,
    filter 450ms ease-in;

  &:hover {
    border: 1.2px outset ${({ theme }) => theme.palette.primary.cyan};
    color: ${({ theme }) => theme.palette.primary.cyan};
  }
`;

// eslint-disable-next-line prettier/prettier
export const NavLink = styled(Link)<NavLinkProps>`
  display: contents;
  font-size: 1.5em;
  color: ${({ theme }) => theme.palette.secondary.neon};
  font-family: ${({ theme }) => theme.fonts.at(1)};
  text-shadow: ${({ theme }) => theme.palette.secondary.black} 1px 0.5px 0.5px;
  text-align: center;
  opacity: 0.5;

  transition:
    transform 360ms,
    color 450ms ease-in-out,
    filter 450ms ease-in-out;

  &:hover,
  &:active,
  &:focus-visible {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightness(1.1);
  }
`;

// eslint-disable-next-line prettier/prettier
export const NavIcon = styled(Icon)`
  display: contents;
  color: ${({ theme }) => theme.palette.secondary.green};
  font-size: 1.8em;
  font-family: ${({ theme }) => theme.fonts.at(2)};
  text-shadow: ${({ theme }) => theme.palette.secondary.black} 1.2px 1.2px 0.8px;
  text-align: left;
  /* transition:
    filter 360ms ease-in,
    color 360ms ease-in;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightnness(1.1);
  } */
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
