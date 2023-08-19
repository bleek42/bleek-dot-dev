import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';
import { type SectionComponent } from '@/interfaces/Component';
import { borderPulse, fadeInBright } from '../common';

export type SectionProps = StyledComponentProps<
  'section' | 'article' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  object,
  string | number | symbol
>;

export const Section = styled.section<SectionProps & SectionComponent>(
  (props) => `
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border: 4px solid ${props.theme.palette.secondary.neon};
  border-radius: 5% / 5%;
  padding: 4px 8px 4px 8px;
  background-color: ${props.theme.palette.secondary.steel};
  margin: 8px 8px;
  min-height: 36vh;



  @media (min-width: ${props.theme.breakpoints.laptop}) {
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 16px 8px 4px 16px;
    margin: 8px;
  }

  /* @media (min-width: ${props.theme.breakpoints.smallTab}) {
    flex-flow: row wrap;
    justify-content: stretch;
    align-items: flex-start;
    padding: 4px 4px 4px 18px;
  } */

`,
);

export const Article = styled.article<SectionProps & SectionComponent>`
  color: ${({ theme }) => theme.palette.secondary.steel};
  background-color: ${({ theme }) => theme.palette.secondary.gray};
  border: 2px solid ${({ theme }) => theme.palette.primary.blue};
  border-radius: ${({ theme }) => theme.defaultRadius};
  flex: 2 1 24vh;
  margin: 0 16px 2px 0;
  padding: 16px 8px 16px 8px;

  transition:
    border 400ms ease-in-out,
    filter 400ms ease-in-out;

  &:hover {
    filter: brightness(1.2);
    border: 3px solid ${({ theme }) => theme.palette.secondary.cyan};
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
  border: 2px solid ${({ theme }) => theme.palette.primary.blue};
  border-radius: ${({ theme }) => theme.defaultRadius};
  flex: 2 1 45vh;
  margin: 0 16px 2px 0;
  padding: 16px 8px 16px 8px;
  transition:
    border 400ms ease-in-out,
    filter 400ms ease-in-out;

  &:hover {
    filter: brightness(1.2);
    border: 3px solid ${({ theme }) => theme.palette.secondary.cyan};
  }

  /* @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  } */

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin: 12px 8px 8px 18px;
  }
`;
