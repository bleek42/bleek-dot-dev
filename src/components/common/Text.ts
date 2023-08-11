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
  $color: keyof Colors;
  $font?: Fonts;
  $colorPalette?: ColorPalettes;
  $size?: `${string}px`;
  $shadow: keyof Colors;
  $align?: 'center' | 'left' | 'right' | string;
  $flex?: string | 'auto';
}

type TextProps = StyledComponentProps<
  'h4' | 'h2' | 'p' | AnyStyledComponent,
  DefaultTheme,
  object,
  string | number | symbol
> &
  TextOptions;

// 'Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Verdana, Geneva, Tahoma, Arial, sans-serif, monospace'
export const SmTxt = styled.p.attrs<TextProps>((props) => ({
  $color: props.color,
  $shadow: props.shadow || 'inherit',
  $font: props.font || props.theme.fonts.at(2),
  $align: props.align || 'initial',
  $size: props.size || 'initial',
  $flex: props.flex || 'auto',
}))<TextProps>`
  flex: ${(props) => props.$flex};
  font-size: ${(props) => props.$size};
  font-family: ${(props) => props.$font};
  color: ${(props) =>
    props.colorPalette === 'primary' && props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.colorPalette === 'secondary' &&
        props.$color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.$color]
      : props.colorPalette === 'tertiary' && props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : props.theme.palette.common.black};
  text-shadow: ${(props) =>
    props.shadow &&
    props.colorPalette === 'primary' &&
    props.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 2px 1px 2px`
      : props.shadow &&
        props.colorPalette === 'secondary' &&
        props.shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2x 1px 2px`
      : props.shadow &&
        props.colorPalette === 'tertiary' &&
        props.shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2px 1px 2px`
      : props.shadow};
  text-align: ${(props) => props.$align};
  /* text-decoration: underline;
  text-decoration-color: rgb(0, 0, 0);
  text-decoration-style: double; */
`;

// 'Verdana, Geneva, Tahoma, Arial, sans-serif, monospace, system-ui, -apple-system, BlinkMacSystemFont'

export const MdTxt = styled.h4.attrs<TextProps>((props) => ({
  $colorPalette: props.colorPalette,
  $color: props.color || props.theme.palette.secondary.green,
  $shadow: props.color || props.theme.palette.secondary.steel,
  $font: props.font || props.theme.fonts.at(1),
}))<TextProps>`
  font-family: ${(props) => props.$font};
  color: ${(props) =>
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color};
  text-shadow: ${(props) =>
    props.$colorPalette && props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 2px 2px 1px`
      : props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2px 2px 1px`
      : props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2px 2px 1px`
      : `${props.$shadow} 2px 2px 1px`};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.steel};
  text-decoration-style: solid;
`;

export const LgTxt = styled.h2.attrs<TextProps>((props) => ({
  $font: props.font || props.theme.fonts.at(0),
  $colorPalette: props.colorPalette,
  $color: props.color || props.theme.palette.primary.orange,
  $shadow: props.shadow || 'black',
}))<TextProps>`
  /* padding-top: 24px; */
  font-family: ${(props) => props.$font};
  color: ${(props) =>
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : props.theme.palette.common['black']};
  text-shadow: ${(props) =>
    props.$shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.$shadow]} 2px 1px 2px`
      : props.$color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.$shadow]} 2px 1px 2px`
      : props.$color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.$shadow]} 2px 1px 2px`
      : `${props.theme.palette.common['black']} 2px 1px 2px`};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.green};
  text-decoration-style: solid;
`;

export const Icon = styled.em.attrs<TextProps>((props) => ({
  $font: props.font || props.theme.fonts.at(2),
  $colorPalette: props.colorPalette || 'common',
  $color: props.color || 'black',
  $size: props.size || '16px',
  $shadow: props.shadow || 'white',
}))<TextProps>`
  display: inline-flex;
  flex: 2 1 fit-content;

  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  color: ${(props) =>
    props.$color in props.theme.palette.primary
      ? props.theme.palette.primary[props.$color]
      : props.$color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.$color]
      : props.$color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.$color]
      : props.theme.palette.common['black']};
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
