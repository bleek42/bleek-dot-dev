import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type DetailsComponent } from '@/interfaces/Component';

type StyledDetailsProps = StyledComponentProps<
  'details' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  DetailsComponent,
  string | number | symbol
>;

export const Details = styled.details<StyledDetailsProps>((props) => `
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 4px 4px;
  padding: 3px 2px 2px 3px;
  color: ${props.theme.palette.secondary.blue};
  background-color: ${props.theme.palette.secondary.white};
  border: 2px solid rgb(0, 0, 0);
  border-radius: 20% 10% / 10% 20%;
`
);

export const Summary = styled.summary`
  font-family: Oxanium;
  width: 400px;
  min-width: 60%;
  height: 180px;
  min-height: 45%;
  border: 1px solid rgb(43, 230, 33);
`;
