import type { NextLinkProps, ToggleProps } from '@prop-types/navbar.props';

import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  /* padding-left: 20px; */

  user-select: none;
  touch-action: auto;
  /* min-width: 35%; */
  position: sticky;
  top: 4%;
  left: -20%;
  z-index: 6;
  animation: slide-open 0.6s forwards;
`;

export const ToggleBtn = styled.button`
  text-shadow: ${({ theme }) => theme.palette.secondary.radial} 3px 1px 3px;
  font-size: 24px;
  font-weight: 450;
  letter-spacing: 2px;
  border: 1px solid ${({ theme }) => theme.palette.primary.neon};
  /* width: 16vh; */
  transition: filter 500ms;
`;

export const NavList = styled.ul`
  border: 2px solid rgb(66, 66, 66);
  list-style: none;
`;

export const NavItem = styled.li`
  background-color: rgb(66, 66, 66);
  margin: 10px, 3px, 3px, 10px;
  padding: 6px, 5px, 5px, 6px;
  border-top: 2px solid rgb(0, 0, 0);
  color: rgb(11, 211, 11);
  transition: filter 400ms;
`;

export const Toggle = styled.span.attrs<ToggleProps>((props) => ({
  toggle: props.toggle ? true : false,
}))<ToggleProps>`
  position: ${(props) => (props.toggle ? 'absolute' : 'fixed')};
  bottom: ${(props) => (props.toggle ? '0%' : '-100%')};
  top: ${(props) => (props.toggle ? '65px' : '0px')};
  left: ${(props) => (props.toggle ? '0%' : '-100%')};
  width: ${(props) => (props.toggle ? '400px' : '100px')};
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 200;
  margin: 0;
  padding-left: 20px;
  // animation: slide-open 0.6s forwards;
`;

export const NextLink = styled(Link)`
  font-family: 'MonocraftNF', 'Courier New', Courier, monospace;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.green};
  text-shadow: rgb(99, 104, 99) 3px 2px 3px;
  &:hover,
  &:focus,
  &:is('a') {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
  }

  &:visited {
    filter: brightness(0.9);
    color: rgb(44, 8, 250);
  }
`;

export const Icon = styled.i`
  font-size: 16px;
  font-weight: 850;
  text-align: center;
  color: ${({ theme }) => theme.palette.secondary.linear};
  text-shadow: ${({ theme }) => `${theme.palette.secondary.gray} 3px 2px 3px`};
  &:hover,
  &:focus,
  &:is('a') {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
  }

  &:visited {
    filter: brightness(0.9);
    color: rgb(44, 8, 250);
  }
`;
