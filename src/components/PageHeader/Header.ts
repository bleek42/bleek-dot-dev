import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';
import Image from 'next/image';

export type HeaderProps = StyledComponentProps<
  'header',
  DefaultTheme,
  object,
  string | number | symbol
>;

export const Header = styled.header<HeaderProps & HeaderComponent>`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  height: 24vh;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.yellow};
  background-color: ${({ theme }) => theme.palette.secondary.steel};
  border: 4px solid ${({ theme }) => theme.palette.secondary.cyan};
  border-radius: ${({ theme }) => theme.defaultRadius};

  margin: 6px 6px;
  padding: 4px 8px 4px 8px;

  /* @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
  } */

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    justify-content: space-between;
    min-height: 32vh;
    flex-flow: column nowrap;
  }
`;

export const LambdaSVG = styled(Image)`
  /* flex: 1 1 1vw; */

  background: ${({ theme }) => theme.palette.primary.black};
  border: 1.5px groove ${({ theme }) => theme.palette.primary.cyan};
`;


/* @media (min-width: ${({ theme }) => theme.breakpoints.fullDisplay}) {

  } */
