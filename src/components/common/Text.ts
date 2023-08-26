import styled, {
  type Fonts,
  type AnyStyledComponent,
  type ColorPalettes,
  type Colors,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
import { type StyledOptions } from '@/interfaces/StyledOptions';

type TextProps = StyledComponentProps<
  AnyStyledComponent | keyof JSX.Element,
  DefaultTheme,
  StyledOptions,
  string | number | symbol
> &
  StyledOptions;

export const SmTxt = styled.p<TextProps>`
  flex: ${(props) => props.$flex ?? 'unset'};
  font-size: ${(props) => props.$size ?? 'inherit'};
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(1)};
  font-size: ${(props) => props.$size ?? 'inherit'};
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
      ? `${props.theme.palette.primary[props.$shadow]} 0.8px 0.6px 0.4px`
      : props.$colorPalette === 'secondary' &&
        props.$shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 0.8px 0.6px 0.4px`
      : props.$colorPalette === 'tertiary' &&
        props.$shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 0.8px 0.6px 0.4px`
      : 'unset'};
  text-align: ${(props) => props.$align ?? 'inherit'};
`;

export const MdTxt = styled.h2<TextProps>`
  flex: ${(props) => props.$flex ?? 'unset'};
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(1)};
  font-size: ${(props) => props.$size ?? 'inherit'};
  color: ${(props) =>
    props.$color &&
    props.$colorPalette === 'primary' &&
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'inherit'};
  text-shadow: ${(props) =>
    props.$shadow &&
    props.$colorPalette === 'primary' &&
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 1.5px 1.2px 0.8px`
      : props.$colorPalette === 'secondary' &&
        props.$shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1.5px 1.2px 0.8px`
      : props.$colorPalette === 'tertiary' &&
        props.$shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1.5px 1.2px 0.8px`
      : 'inherit'};
  text-align: ${(props) => props.$align ?? 'inherit'};
  text-decoration: underline solid ${({ theme }) => theme.palette.primary.black};
`;

export const LgTxt = styled.h1<TextProps>`
  flex: ${(props) => props.$flex ?? 'unset'};
  font-size: ${(props) => props.$size ?? 'inherit'};
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(0)};
  color: ${(props) =>
    props.$colorPalette === 'primary' && props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'initial'};
  text-shadow: ${(props) =>
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 1.5px 1px .5px`
      : props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.$shadow]} 1.5px 1px .5px`
      : props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1.5px 1px .5px`
      : 'inherit'};
  text-align: ${(props) => props.$align ?? 'inherit'};
  text-decoration: underline solid ${({ theme }) => theme.palette.primary.black};
`;

export const Icon = styled.em<TextProps>`
  /* flex: ${(props) => props.$flex ?? 'unset'}; */
  display: contents;
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(2)};
  font-size: ${(props) => props.$size ?? 'inherit'};
  letter-spacing: 0.5px;
  color: ${(props) =>
    props.$color &&
    props.$colorPalette === 'primary' &&
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$colorPalette === 'secondary' &&
        props.$color &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$colorPalette === 'tertiary' &&
        props.$color &&
        props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : props.theme.palette.common.black};
  text-shadow: ${(props) =>
    props.$shadow &&
    props.$colorPalette === 'primary' &&
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 1.5px 1.5px 1px`
      : props.$colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.$shadow]} 1.5px 1.5px 1px`
      : props.$colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1.5px 1.5px 1px`
      : 'unset'};
  text-align: ${(props) => props.$align ?? 'inherit'};
  text-decoration: underline solid
    ${(props) =>
      props.$shadow &&
      props.$colorPalette === 'primary' &&
      props.$shadow in props.theme.palette.primary
        ? `${props.theme.palette.primary[props.$shadow]}`
        : props.$colorPalette === 'secondary' &&
          props.$color in props.theme.palette.secondary
        ? `${props.theme.palette.secondary[props.$shadow]}`
        : props.$colorPalette === 'tertiary' &&
          props.$color in props.theme.palette.tertiary
        ? `${props.theme.palette.tertiary[props.$shadow]}`
        : 'inherit'};
`;

export const ExtLink = styled.a<TextProps>`
  display: inline;
  font-size: ${(props) => props.$size ?? 'inherit'};
  color: ${(props) =>
    props.$color &&
    props.$colorPalette === 'primary' &&
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$colorPalette === 'secondary' &&
        props.$color &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$colorPalette === 'tertiary' &&
        props.$color &&
        props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : props.theme.palette.common.black};
  text-shadow: ${(props) =>
    props.$shadow &&
    props.$colorPalette === 'primary' &&
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 1.5px 1.5px 1px`
      : props.$colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.$shadow]} 1.5px 1.5px 1px`
      : props.$colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1.5px 1.5px 1px`
      : 'unset'};
  text-align: ${(props) => props.$align ?? 'inherit'};
  text-decoration: underline solid
    ${(props) =>
      props.$shadow &&
      props.$colorPalette === 'primary' &&
      props.$shadow in props.theme.palette.primary
        ? `${props.theme.palette.primary[props.$shadow]}`
        : props.$colorPalette === 'secondary' &&
          props.$color in props.theme.palette.secondary
        ? `${props.theme.palette.secondary[props.$shadow]}`
        : props.$colorPalette === 'tertiary' &&
          props.$color in props.theme.palette.tertiary
        ? `${props.theme.palette.tertiary[props.$shadow]}`
        : 'inherit'};

  transition:
    filter 360ms ease-in,
    color 360ms ease-in;

  &:hover {
    color: ${({ theme }) => theme.palette.primary.neon};
    filter: brightness(1.15);
  }

  &:visited {
    filter: brightness(0.9);
    color: ${({ theme }) => theme.palette.secondary.purple};
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smallTab}) {
    font-size: 1em;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    flex-flow: column wrap;
    justify-content: flex-start;
  }
`;
