import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type SectionComponent } from '@/interfaces/Component';
import { borderPulse, fadeInBright } from '../common';

export type SectionProps = StyledComponentProps<
  'section' | 'article' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  object,
  string | number | symbol
>;

export const Section = styled.section<SectionProps & SectionComponent>`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 5px groove ${(props) => props.theme.palette.secondary.neon};
  border-spacing: 4px;
  border-radius: 12px 12px 12px 12px;
  padding: 4px 8px 4px 8px;
  margin: 8px 8px;
  background-color: ${(props) => props.theme.palette.secondary.steel};
  min-height: 36vh;

  transition:
    border 450ms ease-in-out,
    filter 450ms ease-in-out;

  &:hover {
    filter: brightness(1.15);
    border: 5.5px groove ${({ theme }) => theme.palette.primary.neon};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0;
    padding: 16px 8px 4px 16px;
  }
`;

export const Article = styled.article<SectionProps & SectionComponent>`
  color: ${({ theme }) => theme.palette.secondary.steel};
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  border: 2px inset ${({ theme }) => theme.palette.primary.cyan};
  border-radius: ${({ theme }) => theme.defaultRadius};
  flex: 1 1 auto;
  min-height: 12vh;
  max-width: 60vw;
  margin: 0 16px 2px 0;
  padding: 16px 8px 16px 8px;

  transition:
    border 450ms ease-in-out,
    filter 450ms ease-in-out;

  &:hover {
    filter: brightness(1.1);
    border: 3px outset ${({ theme }) => theme.palette.secondary.cyan};
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    text-align: center;
    margin: 12px 8px 8px 18px;
  }
`;

export const ContactCard = styled.address<SectionProps & SectionComponent>`
  color: ${({ theme }) => theme.palette.secondary.steel};
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  border: 2px inset ${({ theme }) => theme.palette.primary.blue};
  border-radius: ${({ theme }) => theme.defaultRadius};
  flex: 2 1 45vh;
  margin: 0 16px 2px 0;
  padding: 16px 8px 16px 8px;
  transition:
    border 400ms ease-in-out,
    filter 400ms ease-in-out;

  &:hover {
    filter: brightness(1.2);
    border: 3px outset ${({ theme }) => theme.palette.secondary.cyan};
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 12px 8px 8px 18px;
  }
`;
