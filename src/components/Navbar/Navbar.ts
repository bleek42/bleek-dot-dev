import type { ToggleProps } from '@props/navbar.props';

import styled from 'styled-components';
import Link from 'next/link';

export const Nav = styled.nav`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  padding-left: 20px;
  width: 15vh;
  min-width: 35%;
  position: fixed;
  z-index: 200;
  left: -100%;
  animation: slide-open 0.6s forwards;
`;

export const Toggle = styled.span<ToggleProps>`
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

export const ToggleBtn = styled.button`
  letter-spacing: 3px;
  text-shadow: rgb(135, 255, 0) 3px 0 3px;
  font-size: 30px;
  font-weight: 450;
  letter-spacing: 2px;
  border: 1px solid rgb(0, 0, 0);
  background-color: rgb(12, 95, 151);
  width: 275px;
  height: 30px;
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
  color: rgb(135, 255, 0);
  transition: filter 400ms;

  &:hover {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
  }
`;

export const NavLink = styled(Link)`
  font-family: 'Monocraft NF', 'Courier New', Courier, monospace;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-shadow: rgb(45, 230, 35) 1px 1px 1px;
`;
