import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import Link, { type LinkProps } from 'next/link';

import { type NavbarComponent } from 'src/interfaces/Component';

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
  flex-flow: column wrap;
  justify-content: flex-start;
  position: sticky;
  left: 60%;
  top: 4%;
  z-index: 20;
  /* overflow-x: 10%;
  overflow-y: 20%; */
  animation: slide-open 0.6s forwards;
  min-width: 20vw;
  background-color: ${props.theme.palette.secondary.gray};
  padding: 2px 2px 2px 2px;
  margin: 8px auto;

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap; */
    touch-action: auto;
    user-select: none;
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    flex-flow: column nowrap;
  }

`,
);

// eslint-disable-next-line prettier/prettier
export const NavList = styled.ul<NavBarProps>((props) => `
  list-style: none;
  margin: 4px 4px auto;
  background-color: ${props.theme.palette.secondary.linear} ;
  /* display: inline-flex; */
  position: absolute;
  /* flex-flow: column nowrap; */
  letter-spacing: 3px;
  /* z-index: 200; */
  /* animation: slide-open 0.6s forwards; */
  /* bottom: ${props.toggle ? '0%' : '-100%'}; */
  top: ${props.toggle ? '86%' : '0'};



  // animation: slide-open 0.6s forwards;
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
export const ToggleBtn = styled.button<NavBarProps>(
  (props) => `
  /* padding: 4px 4px;
  margin: 4px 4px; */
  color: ${props.theme.palette.primary.cyan};
  font-family: var(${props.theme.fonts.at(2)});
  font-size: 24px;
  font-weight: 450;
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;
  letter-spacing: 1px;
  border: 2px solid ${props.theme.palette.primary.cyan};
  background-color: ${props.theme.palette.secondary.gray};
  border-radius: 3% 2% / 3% 2%;
  transition: filter 500ms;
  /* flex: 1 3 2vw; */

  &:hover {
    color: ${props.theme.palette.primary.neon};
    filter: brightness(3);

  }
`,
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

// eslint-disable-next-line prettier/prettier
export const NextLink = styled(Link)<NextLinkProps>(
  (props) => `
  flex: 2 1 4vw;
  color: ${props.theme.palette.secondary.green};
  font-family: var(${props.theme.fonts.at(1)});
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
`,
);

// eslint-disable-next-line prettier/prettier
export const Icon = styled.i(
  (props) => `
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
`,
);

// export const NavLabel = styled.label.attrs((props) => ({
//   htmlFor: props.htmlFor || 'nav-toggle',
// }))`
//   font-family: ${(props) => props.theme.fonts.at(2)};

//   background-color: ${(props) => props.theme.palette.secondary.steel};
// `;
