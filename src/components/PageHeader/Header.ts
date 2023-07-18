import styled, {
  type DefaultTheme,
  type StyledComponent,
  type StyledComponentProps,
} from 'styled-components';
import { type HeaderComponent } from '@/interfaces/Component';

type StyledHeader = StyledComponent<
  'header' | keyof JSX.IntrinsicElements,
  DefaultTheme,
  HeaderComponent,
  string | number | symbol
>;

type StyledHeaderProps = StyledComponentProps<
  StyledHeader,
  DefaultTheme,
  HeaderComponent,
  string | number | symbol
>;

export const Header = styled.header((props) => `
  color: ${props.theme.palette.primary.yellow};
  background-color: ${props.theme.palette.secondary.steel};
  border: 4px solid ${props.theme.palette.secondary.cyan};
  border-radius: 10% 20% / 10% 20%;
  height: 12vh;
  width: 100vh;
  min-width: 50%;
  margin: 4px 4px 4px 4px;
  padding: 4px 4px 4px 4px;
`
);
