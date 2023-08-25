import styled, {
  type AnyStyledComponent,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import { type StyledOptions } from '@/interfaces/StyledOptions';

type ButtonProps = StyledComponentProps<
  AnyStyledComponent | keyof JSX.Element,
  DefaultTheme,
  StyledOptions,
  string | number | symbol
> &
  StyledOptions;

export const Btn = styled.button<ButtonProps>`
  flex: ${(props) => props.$flex ?? '1 1 12vh'};
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(2)};
  font-size: ${(props) => props.$size ?? 'inherit'};
  background-color: ${(props) => props.theme.palette.primary.steel};
  color: ${(props) =>
    props.$color &&
    props.$colorPalette === 'primary' &&
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.$color]
      : props.$colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'initial'};
  text-shadow: ${(props) =>
    props.$shadow &&
    props.$colorPalette === 'primary' &&
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 0.6px 0.5px 0.3px`
      : props.$colorPalette === 'secondary' &&
        props.$shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 0.6px 0.5px 0.3px`
      : props.$colorPalette === 'tertiary' &&
        props.$shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 0.6px 0.5px 0.3px`
      : 'unset'};
  text-align: ${(props) => props.$align ?? 'inherit'};
  flex: ${(props) => props.$flex ?? '2 1 12vw'};
  min-height: 5vh;
  border: 1.5px inset ${(props) => props.theme.palette.primary.black};
  border-radius: 12% / 12%;
  margin: 4px 4px;
  padding: 4px 4px;

  &:hover {
    /* border: 1.8px outset ${(props) => props.theme.palette.secondary.black}; */
    /* text-shadow: ${(props) =>
      props.$shadow
        ? props.$shadow + '1px 1px 0.6px'
        : props.theme.palette.secondary.black + '1px 1px 0.6px'}; */
    cursor: pointer;
    filter: brightness(1.2);
  }

  /* @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    display: none;
    font-size: 28px;
    min-height: 50%;
  } */

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
  }
`;

export const BtnClose = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.orange};

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    /* display: none; */
  }
`;

export const BtnMax = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.cyan};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.cyan + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    /* font-size: 28px;
    min-height: 50%; */
  }
`;

export const BtnMin = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.yellow};
  /* fill: aqua; */
  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.yellow + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    /* display: none; */
  }
`;
