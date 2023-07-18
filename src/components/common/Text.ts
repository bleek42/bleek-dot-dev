import type {
  AnyStyledComponent,
  ColorPalettes,
  Colors,
  DefaultTheme,
  StyledComponentProps,
} from 'styled-components';

import styled from 'styled-components';

interface TextOptions {
  colorPalette: ColorPalettes;
  color: keyof Colors;
  font: string;
  size?: string;
  shadow?: keyof Colors;
}

type TextProps = StyledComponentProps<
  AnyStyledComponent | keyof JSX.IntrinsicElements,
  DefaultTheme,
  TextOptions,
  string | number | symbol
> &
  TextOptions;

export const SmTxt = styled.p.attrs<TextProps>((props) => ({
  font: props.font || 'Verdana, Geneva, Tahoma, Arial, sans-serif, monospace',
  colorPalette: props.colorPalette || 'common',
  color: props.color || 'rgb(0, 0, 0)',
  size: props.size || undefined,
  shadow: props.shadow || undefined,
}))<TextProps>`
  text-align: left;
  font-weight: 450;
  font-size: ${(props) => props.size ?? '12px'};
  font-family: ${(props) => props.theme.fonts.find((font) => props.font === font)};
  color: ${(props) =>
    props.colorPalette === 'primary' && props.color in props.theme.palette.primary
      ? props.theme.palette.primary[props.color]
      : props.colorPalette === 'secondary' && props.color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.color]
      : props.colorPalette === 'tertiary' && props.color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.color]
      : props.theme.palette.common.black};
  text-shadow: ${(props) =>
    props.shadow &&
    props.colorPalette === 'primary' &&
    props.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.shadow]} 3px 2px 1px`
      : props.shadow &&
        props.colorPalette === 'secondary' &&
        props.shadow in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.shadow]} 3px 1px 3px`
      : props.shadow &&
        props.colorPalette === 'tertiary' &&
        props.shadow in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.shadow]} 3px 1px 3px`
      : `${props.theme.palette.common.white} 1px 1px 1px`};
  /* text-decoration: underline;
  text-decoration-color: rgb(0, 0, 0);
  text-decoration-style: double; */
`;

export const MdTxt = styled.h5<TextProps>`
  text-align: center;
  font-weight: 350;
  font-family: ${(props) =>
    props?.font &&
    props.theme.fonts.find(([font]) =>
      props.font === font
        ? `${font}`
        : '"Arial Narrow Bold", Impact, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    )};
  color: ${(props) =>
    props?.color in props.theme.palette.primary
      ? props.theme.palette.primary[props?.color]
      : props.color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.shadow as keyof Colors]
      : props.color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.shadow as keyof Colors]
      : props.theme.palette.common.white};
  text-shadow: ${(props) =>
    props?.shadow && props?.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props?.shadow]} 2px 1px 2px`
      : props.color in props.theme.palette.secondary
      ? `${props.theme.palette.tertiary[props.shadow as keyof Colors]} 2px 1px 2px`
      : props.color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.shadow as keyof Colors]} 2px 1px 2px`
      : 'none'};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.steel};
  text-decoration-style: solid;
`;

export const LgTxt = styled.h2<TextProps>`
  text-align: center;
  font-weight: 450;
  font-family: ${(props) =>
    props?.font &&
    props.theme.fonts.find(([font]) =>
      props.font === font ? `${font}` : '"Times New Roman", Times, Haettenschweiler, serif'
    )};
  color: ${(props) =>
    props?.color in props.theme.palette.primary
      ? props.theme.palette.primary[props?.color]
      : props.color in props.theme.palette.secondary
      ? props.theme.palette.tertiary[props.shadow as keyof Colors]
      : props.color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.shadow as keyof Colors]
      : props.theme.palette.common.white};
  text-shadow: ${(props) =>
    props?.shadow && props.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.shadow]} 2px 1px 2px`
      : props.color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.shadow as keyof Colors]} 2px 1px 2px`
      : props.color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.shadow as keyof Colors]} 2px 1px 2px`
      : 'none'};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.green};
  text-decoration-style: solid;
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
