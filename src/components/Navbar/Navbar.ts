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
  border: 1px solid rgb(0,0,0);
  border-radius: 2% / 2%;
  background-color: ${props.theme.palette.secondary.gray};
  min-width: 22vw;
  max-width: 24vw;
  height: 12vh;
  position: relative;
  /* min-height: 8vh; */
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
`
);

// eslint-disable-next-line prettier/prettier
export const NavList = styled.ul<NavBarProps>((props) => `
  
  list-style: none;
  /* height: 8vh; */
  display: contents;
  inset: 82% -15% auto;
  position: absolute;
  z-index: 1;
  letter-spacing: .5px;
  /* background-color: ${props.theme.palette.primary.steel} ; */
  /* animation: slide-open 0.6s forwards; */

  @media (max-width: ${props.theme.breakpoints.smallTab}) {
    inset: 12% 58% auto;
  }

    @media (max-width: ${props.theme.breakpoints.laptop}) {

    }


  `,
);

// eslint-disable-next-line prettier/prettier
export const NavItem = styled.li<NavBarProps>((props) => `
  opacity: 0.8;
  border-top: 1px solid ${props.theme.palette.common.black};
  list-style: none;
  background-color: ${props.theme.palette.primary.teal};
  /* padding: 4px; */
  /* color: rgb(11, 211, 11);
  transition: filter 400ms; */
`,
);

// eslint-disable-next-line prettier/prettier
export const ToggleBtn = styled.button<NavBarProps>((props) => `
  min-width: inherit;
  max-width: inherit;
  display: inline-block;
  color: ${props.theme.palette.primary.cyan};
  background-color: ${props.theme.palette.secondary.black};
  border: 1px solid ${props.theme.palette.primary.cyan};
  border-radius: 2% / 2%;
  font-family: ${props.theme.fonts.at(2)};
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;
  font-size: 24px;
  letter-spacing: .8px;
  transition: filter 360ms ease, color 450ms linear;

  &:hover {
    color: ${props.theme.palette.primary.neon};
    filter: brightness(2);
  }

`,
);

// eslint-disable-next-line prettier/prettier
export const NextLink = styled(Link)<NextLinkProps>((props) => `
  /* display: inline-block; */
  color: ${props.theme.palette.secondary.green};
  font-family: ${props.theme.fonts.at(1)};
  font-size: 24px;
  text-shadow: ${props.theme.palette.secondary.steel} 3px 2px 3px;

    transition: filter 360ms linear, color 450ms ease;

  &:hover {
    color: ${props.theme.palette.primary.green};
    filter: brightness(2);
  }

  /* &:visited {
    filter: brightness(0.9);
    color: rgb(44, 8, 250);
  } */
`,
);

export const NavTxt = styled(MdTxt)`
  order: 1;
  text-align: center;
`;

// eslint-disable-next-line prettier/prettier
export const NavIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.primary.blue};
  display: inline-block;
  font-size: 22px;
  /* padding-right: 8px; */

  /* text-shadow: ${(props) => props.theme.palette.secondary.steel} 3px 2px 3px; */
    transition: filter 360ms ease, color 450ms linear;

  &:hover {
    filter: brightness(2);
    color: ${({ theme }) => theme.palette.secondary.blue};
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
