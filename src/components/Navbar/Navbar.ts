import Link, { type LinkProps } from 'next/link';
import styled, {
  keyframes,
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
  type ThemedStyledFunction,
  type ThemedStyledProps,
} from 'styled-components';

export type ToggleProps = StyledComponentProps<
  typeof Link | AnyStyledComponent,
  DefaultTheme,
  { toggle: boolean },
  string | number | symbol
>;

// type NavLinkComponentBase = StyledComponentBase<AnyStyledComponent | typeof Link>;

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

export const NavBar = styled.nav`
  /* display: flex;
  flex-flow: row wrap;
  justify-content: flex-start; */
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  padding: 2px 2px;
  margin: 4px auto;
  float: inline-end;
  position: sticky;
  top: 4%;
  right: 10%;
  left: -20%;
  overflow-x: 10%;
  overflow-y: 20%;
  z-index: 6;
  touch-action: auto;
  user-select: none;
  animation: slide-open 0.6s forwards;
`;

export const NavList = styled.ul`
  padding: 2px 2px 2px 2px;
  list-style: none;
`;

export const NavItem = styled.li`
  border-top: 1px solid ${({ theme }) => theme.palette.common.black};
  padding: 2px 2px;
  margin: 2px auto;
  /* margin: 10px, 3px, 3px, 10px;
  padding: 6px, 5px, 5px, 6px; */
  /* color: rgb(11, 211, 11);
  transition: filter 400ms; */
`;

export const ToggleBtn = styled.button.attrs<ToggleProps>(({ toggle, theme }) => ({
  toggle: toggle ? true : false,
  theme,
}))<ToggleProps>`
  position: ${({ toggle }) => (toggle ? 'absolute' : 'fixed')};
  bottom: ${({ toggle }) => (toggle ? '0%' : '-100%')};
  top: ${({ toggle }) => (toggle ? '65px' : '0px')};
  left: ${({ toggle }) => (toggle ? '0%' : '-100%')};
  width: ${({ toggle }) => (toggle ? '400px' : '100px')};
  /* display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center; */
  z-index: 200;
  margin: 2px auto;
  padding: 2px 2px;
  /* padding-left: 20px; */
  animation: slide-open 0.6s forwards;
  color: ${({ theme }) => theme.palette.primary.cyan};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  font-size: 24px;
  font-weight: 450;
  text-shadow: ${({ theme }) => theme.palette.secondary.steel} 3px 2px 3px;
  letter-spacing: 1px;
  border: 2px solid ${({ theme }) => theme.palette.primary.cyan};
  border-radius: 3% 3% / 3% 3%;
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  /* width: 16vh; */
  transition: filter 500ms;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightness(3);
  }
`;

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

export const NextLink = styled(Link)`
  color: ${({ theme }) => theme.palette.secondary.green};
  font-family: ${({ theme }) => theme.fonts.at(1)};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  text-shadow: ${({ theme }) => theme.palette.secondary.steel} 3px 2px 3px;

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
  color: ${({ theme }) => theme.palette.secondary.green};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  font-size: 16px;
  font-weight: 850;
  text-align: center;
  text-shadow: ${({ theme }) => theme.palette.secondary.steel} 3px 2px 3px;

  &:hover,
  &:focus {
    filter: brightness(2.6);
    color: rgb(12, 205, 160);
  }
`;
