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
  $size: `${string}px` | string | 'initial' | 'unset';
  $color: keyof Colors;
  $font: Fonts;
  $colorPalette?: ColorPalettes;
  $shadow: keyof Colors;
  $align: 'center' | 'left' | 'right' | string;
  $flex: string | 'initial';
}

type TextProps = StyledComponentProps<
  'h4' | 'h2' | 'p' | AnyStyledComponent,
  DefaultTheme,
  object,
  string | number | symbol
>;

// 'Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Verdana, Geneva, Tahoma, Arial, sans-serif, monospace'
export const SmTxt = styled.p<TextProps & TextOptions>`
  flex: ${(props) => props.$flex ?? 'inherit'};
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(1)};
  font-size: ${(props) => props.$size ?? 'initial'};
  color: ${(props) => {
    console.log({ 'sm-txt-props': props });
    return props.$colorPalette === 'primary' &&
      props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.$color]
      : props.colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'initial';
  }};
  text-shadow: ${(props) =>
    props.$shadow &&
    props.$colorPalette === 'primary' &&
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 2px 1px 2px`
      : props.$colorPalette === 'secondary' &&
        props.$shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2x 1px 2px`
      : props.$colorPalette === 'tertiary' &&
        props.$shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2px 1px 2px`
      : 'inherit'};
  text-align: ${(props) => props.$align ?? 'inherit'};
  /* text-decoration: underline;
  text-decoration-color: rgb(0, 0, 0);
  text-decoration-style: double; */
`;

// 'Verdana, Geneva, Tahoma, Arial, sans-serif, monospace, system-ui, -apple-system, BlinkMacSystemFont'

export const MdTxt = styled.h2<TextProps & TextOptions>`
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(1)};
  color: ${(props) =>
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'inherit'};
  text-shadow: ${(props) =>
    props.$colorPalette && props.$shadow && props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 1px 1.5px .5px`
      : props.$shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1px 1.5px .5px`
      : props.$shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1px 1.5px .5px`
      : 'inherit'};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.primary.black};
  text-decoration-style: solid;
`;

export const LgTxt = styled.h1<TextProps & TextOptions>`
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(0)};
  color: ${(props) =>
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'initial'};
  text-shadow: ${(props) =>
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 1px 1.5px .5px`
      : props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.$shadow]} 1px 1.5px .5px`
      : props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 1px 1.5px .5px`
      : 'initial'};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.green};
  text-decoration-style: solid;
`;

export const Icon = styled.em<TextProps & TextOptions>`
  font-family: ${(props) => props.$font ?? props.theme.fonts.at(2)};
  font-size: ${(props) => props.$size ?? '24px'};
  color: ${(props) =>
    props.$color && props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : 'inherit'};
  text-shadow: ${(props) =>
    props.$colorPalette !== 'common' && props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 2px 1px 1px`
      : props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.$shadow]} 2px 1px 1px`
      : props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2px 1px 1px`
      : `${props.$shadow} 2px 1px 1px`};
`;

// export const StlLg = styled.h2`
//   color: rgb(66, 66, 66);
//   font-family: Birdman;
//   font-weight: 650;
//   text-align: center;
//   text-shadow: rgb(0, 0, 0) 1px 1px 1px;
//   text-decoration: underline;
//   text-decoration-color: rgb(0, 0, 0);
//   text-decoration-style: double;
// `;

// export const NeonLg = styled.h2`
//   color: rgb(135, 255, 0);
//   font-family: Birdman;
//   font-weight: 650;
//   text-align: center;
//   text-shadow: rgb(38, 136, 60) 1px 0 1px;
//   text-decoration: underline;
//   text-decoration-color: rgb(135, 255, 0);
//   text-decoration-style: double;
// `;

// export const NeonTxt = styled.p`
//   color: rgb(135, 255, 0);
//   font-family: 'MonocraftNF';
//   font-weight: 650;
//   text-align: center;
//   text-shadow: rgb(38, 136, 60) 1px 0 1px;
//   text-decoration: underline;
//   text-decoration-color: rgb(135, 255, 0);
//   text-decoration-style: double;
// `;

// export const GrnMd = styled.h5`
//   color: rgb(45, 230, 35);
//   font-family: 'Oxanium';
//   font-weight: 650;
//   text-align: center;
//   text-shadow: rgb(12, 95, 151) 1px;
//   text-decoration: underline;
//   text-decoration-color: rgb(0, 0, 0);
//   text-decoration-style: double;
// `;

// export const BlkMd = styled.h5`
//   color: rgb(0, 0, 0);
//   font-family: 'Oxanium';
//   font-weight: 650;
//   text-align: center;
//   text-shadow: rgb(66, 66, 66) 1px 1px 0;
//   text-decoration: underline;
//   text-decoration-color: rgb(0, 0, 0);
//   text-decoration-style: double;
// `;

// export const BlkTxt = styled.p`
//   font-family: 'MonocraftNF';
//   font-weight: 450;
//   color: rgb(0, 0, 0);
//   text-shadow: rgb(12, 95, 151) 1px 1px o;
// `;

// // text-align: left;
// // text-decoration: 0.5px underline;
// // text-decoration-color: rgb(11, 205, 163);

// export const CyTxt = styled.p`
//   font-family: Oxanium, MonocraftNF;
//   font-weight: 700;
//   color: rgb(11, 205, 163);
//   text-shadow: 1px rgb(12, 95, 151);
// `;

// // text-decoration: underline;
// // text-decoration-style: double;
// // text-decoration-thickness: 300;

// export const GrnTxt = styled.p`
//   font-family: MonocraftNF;
//   font-weight: 700;
//   color: rgb(43, 230, 33);
//   text-shadow: rgb(38, 136, 59) 1px 0 1px;
// `;

// const foreground = {
//   green: 'rgb(43, 230, 33)',
//   red: 'rgb(214, 30, 30)',
//   orange: 'rgb(222, 76, 18)',
//   purple: 'rgb(161, 85, 233)',
//   blue: 'rgb(12, 95, 151)',
//   cyan: 'rgb(11, 205, 163)',
//   drab: 'rgb(38, 136, 59)',
//   steel: 'rgb(69, 66, 66)',
//   tan: 'rgb(177, 177, 165)',
//   black: 'rgb(0, 0, 0)',
//   neon: 'rgb(136, 255, 0)',
// };

// const background = {
//   cyan: 'rgb(11, 205, 163)',
//   blue: 'rgb(12, 95, 151)',
//   green: 'rgb(43, 230, 33)',
//   drab: 'rgb(38, 136, 59)',
//   steel: 'rgb(69, 66, 66)',
//   black: 'rgb(0, 0, 0)',
//   steelBlue: 'linear-gradient(65deg, rgb(69, 66, 66), rgb(12, 95, 151))',
//   greenCyan: 'linear-gradient(65deg, rgb(43, 230, 33), rgb(11, 205, 163))',
//   blackSteel: 'linear-gradient(65deg, rgb(0, 0, 0), rgb(69, 66, 66))',
// };

// const fgColors = new Map(Object.entries(foreground));
// const bgColors = new Map(Object.entries(background));
