import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import Link, { type LinkProps } from 'next/link';

import { type NavbarComponent } from '@/interfaces/Component';
import { Icon } from '../common';

export type NavBarProps = StyledComponentProps<
  'nav' | 'button' | 'ul' | 'li',
  DefaultTheme,
  object,
  string | number | symbol
> &
  NavbarComponent;

export type NextLinkProps = StyledComponentProps<
  typeof Link | AnyStyledComponent,
  DefaultTheme,
  LinkProps,
  string | number | symbol
> &
  NavbarComponent;

// eslint-disable-next-line prettier/prettier
const toggleKeyframes = keyframes`
  to {

  }

  from {

  }

`;

// eslint-disable-next-line prettier/prettier
export const NavBar = styled.nav<NavBarProps>((props) => `
  display: inline-flex;
  flex-flow: column nowrap;
  flex: 2 1 12vw;
  position: sticky;
  left: 60%;
  top: 4%;
  animation: slide-open 0.6s forwards;
  height: 8vh;
  min-width: 20%;
  background-color: ${props.theme.palette.secondary.gray};
  padding: 2px 2px 2px 2px;
  margin: 8px auto;
  /* z-index: 20;
    overflow-y: 20%;
    overflow-x: 10%; */

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap; */
    flex-flow: column wrap;
    touch-action: auto;
    user-select: none;
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
  }

`,
);

// eslint-disable-next-line prettier/prettier
export const NavList = styled.ul<NavBarProps>((props) => `
  
  list-style: none;
  margin: 4px 4px auto;
  background-color: ${props.theme.palette.secondary.linear} ;
  position: absolute;
  letter-spacing: 3px;
  top: ${props.toggle ? '86%' : '0'};
  /* display: inline-flex; */
  /* flex-flow: column nowrap; */
  /* z-index: 200; */
  animation: slide-open 0.6s forwards;
  /* bottom: ${props.toggle ? '0%' : '-100%'}; */
  width: 100%;
  &:hover {}


  /* flex: 2 3 4vh; */

  // z-index: 6;
  /* margin: 5px auto; */
  `,
);

// eslint-disable-next-line prettier/prettier
export const NavItem = styled.li<NavBarProps>((props) => `
  min-width: 18vw;
  border-top: 2px solid ${props.theme.palette.common.black};
  padding: 6px 4px 6px 4px;
  margin: 4px 4px 4px 4px;

  top: 80px;
  background-color: ${props.theme.palette.primary.steel} ;
  opacity: 0.8;
  /* color: rgb(11, 211, 11);
  transition: filter 400ms; */
`,
);

// eslint-disable-next-line prettier/prettier
export const ToggleBtn = styled.button<NavBarProps>((props) => `
  color: ${props.theme.palette.primary.cyan};
  background-color: ${props.theme.palette.secondary.gray};
  border: 2px solid ${props.theme.palette.primary.cyan};
  border-radius: 3% 2% / 3% 2%;
  font-family: ${props.theme.fonts.at(2)};
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;
  font-size: 24px;
  letter-spacing: 1px;
  transition: filter 500ms;

  &:hover {
    color: ${props.theme.palette.primary.neon};
    filter: brightness(3);
  }

`,
);




// eslint-disable-next-line prettier/prettier
export const NextLink = styled(Link)<NextLinkProps>((props) => `
  display: inline-block;
  color: ${props.theme.palette.secondary.green};
  font-family: ${props.theme.fonts.at(1)};
  font-size: 14px;
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;
  text-align: right;

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
`,
);

// eslint-disable-next-line prettier/prettier
export const NavIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.secondary.green};
  display: inline;
  font-size: 16px;
  /* text-shadow: ${(props) => props.theme.palette.secondary.steel} 3px 2px 3px; */

  &:hover,
  &:focus {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
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
