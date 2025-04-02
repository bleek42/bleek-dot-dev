import type { ComponentType } from 'react';
import type { Colors, CommonColors, DefaultTheme, StyledComponentProps } from 'styled-components';

import styled from 'styled-components';

type TextProps = StyledComponentProps<
  keyof JSX.IntrinsicElements | ComponentType<unknown>,
  DefaultTheme,
  Record<string, unknown>,
  string | number | symbol
> & {
  font: string;
  color: keyof Colors;
  shadow?: keyof Colors;
};

export const SmTxt = styled.p<TextProps>`
  text-align: center;
  font-weight: 450;
  font-family: ${(props) =>
    props.theme.fonts.includes(props.font)
      ? props.font
      : 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'};
  color: ${(props) =>
    props.color in props.theme.palette.primary
      ? props.theme.palette.primary[props.color]
      : props.color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.color]
      : props.color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.color]
      : props.theme.palette.common.black};
  text-shadow: ${(props) =>
    props?.shadow && props.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.color]} 3px 1px 3px`
      : props.color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.color]} 3px 1px 3px`
      : props.color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.color]} 3px 1px 3px`
      : 'none'};
  /* text-decoration: underline;
  text-decoration-color: rgb(0, 0, 0);
  text-decoration-style: double; */
`;

export const MdTxt = styled.h5<TextProps>`
  text-align: center;
  font-weight: 550;
  font-family: ${(props) =>
    props.theme.fonts.includes(props.font)
      ? props.font
      : 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'};
  color: ${(props) =>
    props.color in props.theme.palette.primary
      ? props.theme.palette.primary[props.color]
      : props.color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.color]
      : props.color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.color]
      : props.theme.palette.common.white};
  text-shadow: ${(props) =>
    props?.shadow && props.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.color]} 3px 1px 3px`
      : props.color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.color]} 3px 1px 3px`
      : props.color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.color]} 3px 1px 3px`
      : null};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.steel};
  text-decoration-style: solid;
`;

export const LgTxt = styled.h2<TextProps>`
  text-align: center;
  font-weight: 750;
  font-family: ${(props) =>
    props.theme.fonts.includes(props.font)
      ? props.font
      : 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif'};
  color: ${(props) =>
    props.color in props.theme.palette.primary
      ? props.theme.palette.primary[props.color]
      : props.color in props.theme.palette.secondary
      ? props.theme.palette.secondary[props.color]
      : props.color in props.theme.palette.tertiary
      ? props.theme.palette.tertiary[props.color]
      : props.theme.palette.common.white};
  text-shadow: ${(props) =>
    props?.shadow && props.shadow in props.theme.palette.primary
      ? `${props.theme.palette.primary[props.color]} 5px 3px 5px`
      : props.color in props.theme.palette.secondary
      ? `${props.theme.palette.secondary[props.color]} 5px 3px 5px`
      : props.color in props.theme.palette.tertiary
      ? `${props.theme.palette.tertiary[props.color]} 5px 3px 5px`
      : null};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.neon};
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
