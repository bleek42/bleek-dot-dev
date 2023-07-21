import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import Link, { type LinkProps } from 'next/link';

import { type NavbarComponent } from '@/interfaces/Component';

export type NavBarProps = StyledComponentProps<
  'nav' | 'button' | 'ul' | 'li',
  DefaultTheme,
  NavbarComponent,
  string | number | symbol
>;

export type NextLinkProps = StyledComponentProps<
  typeof Link | AnyStyledComponent,
  DefaultTheme,
  LinkProps,
  string | number | symbol
>;

const toggleKeyframes = keyframes`
  to {

  }

  from {

  }

`;

export const NavBar = styled.nav<NavBarProps>((props) => `
  display: flex;
  flex-flow: column wrap;
  min-width: 12vw;
  background-color: ${props.theme.palette.secondary.gray};
  padding: 2px 4px 4px 2px;
  margin: 4px;
  float: right;

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap; */
    touch-action: auto;
    user-select: none;
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */

  }

`
);

export const NavList = styled.ul<NavBarProps>((props) => `
  list-style: none; 
  position: ${props.toggle ? 'absolute' : 'inherit'};
  /* z-index: 200; */
  /* animation: slide-open 0.6s forwards; */
  bottom: ${props.toggle ? '0%' : '-100%'};
  top: ${props.toggle ? '65px' : '0px'};
  left: ${props.toggle ? '0%' : '-100%'};
  width: ${props.toggle ? '400px' : '100px'};
/*   
  right: 10%;
  top: 10vh; */
  z-index: 3;
  
  overflow-x: 10%;
  overflow-y: 20%;
  

  // animation: slide-open 0.6s forwards;
  letter-spacing: 3px;
  padding: 3px 2px 3px 2px;
  background-color: ${props.theme.palette.secondary.linear} ;
  /* flex: 2 3 4vh; */

  // z-index: 6;
  /* margin: 5px auto; */
  `
);

export const NavItem = styled.li<NavBarProps>((props) => `
  border-top: 1px solid ${props.theme.palette.common.black};
  padding: 4px 4px;
  margin: 2px 2px;
  min-width: 12vw;
  /* margin: 10px, 3px, 3px, 10px;
  padding: 6px, 5px, 5px, 6px; */
  /* color: rgb(11, 211, 11);
  transition: filter 400ms; */
`
);

export const ToggleBtn = styled.button<NavBarProps>((props) => `
  /* flex: 1 3 2vw; */
  padding: 4px 4px;
  margin: 4px 4px auto;
  color: ${props.theme.palette.primary.cyan};
  font-family: ${props.theme.fonts.at(2)};
  font-size: 24px;
  font-weight: 450;
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;
  letter-spacing: 1px;
  border: 2px solid ${props.theme.palette.primary.cyan};
  background-color: ${props.theme.palette.secondary.gray};
  border-radius: 3% 2% / 3% 2%;
  transition: filter 500ms;

  &:hover {
    color: ${props.theme.palette.primary.neon};
    filter: brightness(3);

  }
`
);

// export const Toggle = styled.span.attrs<ToggleProps>((props) => ({
//   toggle: props.toggle ? true : false,
// }))<ToggleProps>`
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
// `;

export const NextLink = styled(Link)<NextLinkProps>((props) => `
  color: ${props.theme.palette.secondary.green};
  font-family: ${props.theme.fonts.at(1)};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;

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
`
);

export const Icon = styled.i((props) => `
  color: ${props.theme.palette.secondary.green};
  font-family: ${props.theme.fonts.at(2)};
  font-size: 16px;
  font-weight: 850;
  text-align: center;
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;

  &:hover,
  &:focus {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
  }
`
);

// export const NavLabel = styled.label.attrs((props) => ({
//   htmlFor: props.htmlFor || 'nav-toggle',
// }))`
//   font-family: ${(props) => props.theme.fonts.at(2)};

//   background-color: ${(props) => props.theme.palette.secondary.steel};

//   @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {

//   }

//   @media (max-width: ${(props) => props.theme.breakpoints.phone}) {

//   }
// `;
