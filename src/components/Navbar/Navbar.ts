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
  width: 12vw;
  /* min-width: 14vw; */
  /* min-height: 8vh; */

  border: 1px solid rgb(0,0,0);
  background-color: ${props.theme.palette.secondary.gray};
  margin: 8px 8px;
  padding: 4px 3px 4px 3px;
  position: relative;
  order: 1;
  /* order: 3; */
  /* animation: slide-open 0.6s forwards; */


  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap; */
    touch-action: auto;
    user-select: none;
  }

  @media (min-width: ${props.theme.breakpoints.laptop}) {
    flex-flow: column nowrap;
  }

`,
);

// eslint-disable-next-line prettier/prettier
export const NavList = styled.ul<NavBarProps>((props) => `
  list-style: none;
  width: 12vw;
  /* margin: 4px 2px 4px 2px;
  padding: 2px 2px; */
  background-color: ${props.theme.palette.secondary.linear} ;
  letter-spacing: 1.5px;
  position: absolute;
  inset: 70% -18%;

  /* animation: slide-open 0.6s forwards; */
  /* bottom: ${props.toggle ? '0%' : '-100%'}; */


  /* flex: 2 3 4vh; */

  // z-index: 6;
  /* margin: 5px auto; */
  `,
);

// eslint-disable-next-line prettier/prettier
export const NavItem = styled.li<NavBarProps>((props) => `
  border-top: 2px solid ${props.theme.palette.common.black};
  padding: 6px 4px 6px 4px;
  background-color: ${props.theme.palette.primary.steel} ;
  opacity: 0.8;
  /* color: rgb(11, 211, 11);
  transition: filter 400ms; */
`,
);

// eslint-disable-next-line prettier/prettier
export const ToggleBtn = styled.button<NavBarProps>((props) => `
  min-width: 10vw;
  max-width: 12vw
  color: ${props.theme.palette.primary.cyan};
  background-color: ${props.theme.palette.secondary.black};
  border: 2px solid ${props.theme.palette.primary.cyan};
  border-radius: 4% 4% / 4% 4%;
  font-family: ${props.theme.fonts.at(2)};
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;
  font-size: 24px;
  letter-spacing: 1px;
  transition: filter 500ms;
  order: 2;

  &:hover {
    color: ${props.theme.palette.primary.neon};
    filter: brightness(3);
  }

`,
);

// eslint-disable-next-line prettier/prettier
export const NextLink = styled(Link)<NextLinkProps>(
  (props) => `
  /* display: inline-block; */
  color: ${props.theme.palette.secondary.green};
  font-family: ${props.theme.fonts.at(1)};
  font-size: 18px;

  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;

  &:hover, {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
  }

  &:visited {
    filter: brightness(0.9);
    color: rgb(44, 8, 250);
  }
`,
);

export const NavTxt = styled(MdTxt)`
  order: 1;
  /* flex: 2 0 auto; */
  text-align: center;
`;

// eslint-disable-next-line prettier/prettier
export const NavIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.secondary.green};
  display: inline-block;
  font-size: 16px;
  padding-right: 8px;
  margin: 4px;
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
