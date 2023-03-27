import type { NavBarProps } from 'types/props/navbar.props';

import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-flow: column wrap;
  position: fixed;
  padding-left: 20px;
  width: 400px;
  z-index: 200;
  left: -100%;
  animation: slide-open 0.6s forwards;
`;

export const Toggle = styled.span<NavBarProps>`
  position: ${(props) => (props.toggled ? 'absolute' : 'fixed')};
  bottom: ${(props) => (props.toggled ? '0%' : '-100%')};
  top: ${(props) => (props.toggled ? '65px' : '0px')};
  left: ${(props) => (props.toggled ? '0%' : '-100%')};
  width: ${(props) => (props.toggled ? '400px' : '100px')};
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  z-index: 200;
  margin: 0;
  text-shadow: rgb(135, 255, 0) 3px 0 3px;
  padding-left: 20px;
  letter-spacing: 3px;
  // animation: slide-open 0.6s forwards;
`;

export const ToggleTxt = styled.label`
  font-size: 30px;
  font-weight: 450;
  letter-spacing: 2px;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(12, 95, 151);
`;

export const ToggleBtn = styled.button`
  width: 275px;
  height: 30px;
  transition: filter 500ms;
`;

export const NavList = styled.ul`
  border: 1px solid rgb(66, 66, 66);
  list-style: none;
`;

export const NavItem = styled.li`
  color: rgb(43, 230, 33);
  margin: 10px, 3px, 3px, 10px;
  padding: 6px, 5px, 5px, 6px;
  transition: filter 400ms;
  border-top: 1px solid black;
`;
