import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';

type StyledHeaderProps = StyledComponentProps<
  'header' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  HeaderComponent,
  string | number | symbol
>;

export const Header = styled.header<StyledHeaderProps>(
  (props) => `
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  color: ${props.theme.palette.primary.yellow};
  background-color: ${props.theme.palette.tertiary.linear};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 20% / 10% 20%;
  height: 12vh;
  width: 100vh;
  min-width: 50%;
  margin: 4px 4px 4px 4px;
  padding: 4px 4px 4px 4px;
`
);
