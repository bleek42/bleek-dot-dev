import styled, {
  type Fonts,
  type AnyStyledComponent,
  type ColorPalettes,
  type Colors,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';
// import localFont from 'next/font/local';

// export const Birdman = localFont<'Birdman'>({
//   src: [
//     {
//       path: '../../../public/fonts/birdman/BIRDMAN_REG.ttf',
//       style: 'regular',
//       weight: '400',
//     },
//     {
//       path: '../../../public/fonts/birdman/BIRDMAN_LT.ttf',
//       style: 'light',
//       weight: '300',
//     },
//     {
//       path: '../../../public/fonts/birdman/BIRDMAN_BD.ttf',
//       style: 'bold',
//       weight: '600',
//     },
//     {
//       path: '../../../public/fonts/birdman/BIRDMAN_OBL.ttf',
//       style: 'oblique',
//       weight: '750',
//     },
//   ],

//   variable: 'Birdman',
// });

// export const Oxanium = localFont<'Oxanium'>({
//   src: [
//     {
//       path: '../../../public/fonts/Oxanium/Oxanium-Regular.ttf',
//       style: 'regular',
//     },
//     {
//       path: '../../../public/fonts/Oxanium/Oxanium-Light.ttf',
//       style: 'light',
//     },
//     {
//       path: '../../../public/fonts/Oxanium/Oxanium-Bold.ttf',
//       style: 'bold',
//     },
//     {
//       path: '../../../public/fonts/Oxanium/Oxanium-SemiBold.ttf',
//       style: 'semi-bold',
//     },
//   ],

//   variable: 'Oxanium',
// });

// export const MonocraftNF = localFont<'MonocraftNF'>({
//   src: '../../../public/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf',
//   variable: 'MonocraftNF',
// });

interface TextOptions {
  $colorPalette: ColorPalettes;
  $color: keyof Colors;
  $shadow: keyof Colors;
  $font: Fonts;
  $size: `${string}px` | `${string}em` | `${string}rem` | 'initial' | 'inherit' | 'unset';
  $align: 'center' | 'left' | 'right' | string;
  $flex: string | '1 1 auto';
}

type TextProps = StyledComponentProps<
  'h4' | 'h2' | 'p' | AnyStyledComponent,
  DefaultTheme,
  object,
  string | number | symbol
> &
  TextOptions;

export const SmTxt = styled.p<TextProps>`
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
`;

export const MdTxt = styled.h2<TextProps>`
  flex: ${(props) => props.$flex ?? 'unset'};
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(1)};
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
  display: inline-block;
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(2)};
  font-size: ${(props) => props.$size ?? '28px'};
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
