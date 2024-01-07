import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type DetailsComponent } from '@/interfaces/Component';

type StyledDetailsProps = StyledComponentProps<
  'details' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  object,
  string | number | symbol
> &
  DetailsComponent;

export const Details = styled.details<StyledDetailsProps>(
  (props) => `
  margin: 4px 4px auto;

  background-color: ${props.theme.palette.secondary.gray};
  border: 2px solid ${props.theme.palette.common.black};
  border-radius: 5% 5% / 5% 5%;

   @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none;
     font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */

  }

`,
);

export const Summary = styled.summary(
  (props) => `
  
  color: ${props.theme.palette.secondary.blue};
  font-family: ${props.theme.fonts.at(1)};;
  border: 1px solid ${props.theme.palette.primary.cyan};
   @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */

  }
`,
);
