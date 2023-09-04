import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type SectionComponent } from '@/interfaces/Component';
import { borderPulse, render } from '@/components/common/animations';
import Image from 'next/image';

export type SectionProps = StyledComponentProps<
  'section' | 'article' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  SectionComponent,
  string | number | symbol
>;

export const Article = styled.article<SectionProps & SectionComponent>`
  color: ${({ theme }) => theme.palette.secondary.steel};
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  border: 2px inset ${({ theme }) => theme.palette.primary.cyan};
  border-radius: ${({ theme }) => theme.defaultRadius};
  flex: 1 1 auto;
  align-self: center;
  min-height: 16vh;
  max-width: 60vw;
  min-width: 40vw;
  margin: 0 16px 2px 0;
  padding: 16px 8px 16px 8px;

  transition:
    border 450ms ease-in-out,
    filter 450ms ease-in;

  &:hover {
    filter: brightness(1.05);
    border: 2.8px outset ${({ theme }) => theme.palette.secondary.cyan};
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* margin: 12px 8px 8px 18px; */
  }
`;

export const ContactCard = styled.address<SectionProps & SectionComponent>`
  color: ${({ theme }) => theme.palette.secondary.steel};
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  border: 2px inset ${({ theme }) => theme.palette.primary.blue};
  border-radius: ${({ theme }) => theme.defaultRadius};
  margin: 8px 4px 8px 16px;
  padding: 16px 8px 16px 8px;
  min-height: 28vh;
  max-width: 60vw;
  min-width: fit-content;
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: flex-start;

  /* flex: 1 1 auto; */
  /* min-width: 52vw; */
  transition:
    border 400ms ease-in-out,
    filter 400ms ease-in-out;

  &:hover {
    filter: brightness(1.15);
    border: 2.8px outset ${({ theme }) => theme.palette.secondary.cyan};
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    align-items: center;
  }
`;

export const Section = styled.section<SectionProps & SectionComponent>`
  display: flex;
  flex-flow: column wrap;

  justify-content: flex-start;
  align-items: stretch;
  border: 4px groove ${({ theme }) => theme.palette.secondary.neon};
  border-spacing: 4px;
  border-radius: 12px 12px 12px 12px;
  padding: 4px 8px 4px 8px;
  margin: 8px 8px;
  background-color: ${({ theme }) => theme.palette.secondary.steel};
  min-height: 40vh;
  transition:
    border 360ms ease-in,
    filter 400ms ease-in;

  &:hover {
    filter: brightness(1.15);
    border: 5px groove ${({ theme }) => theme.palette.primary.neon};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    /* align-items: flex-start; */
    margin: 0;
    padding: 16px 8px 4px 16px;
  }
`;

/* ${ContactCard} > & {
    columns: 1;
    flex-flow: column wrap;
  } */
