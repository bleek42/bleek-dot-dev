import { type DefaultTheme, createGlobalStyle } from 'styled-components';
import localFont from 'next/font/local';

export const Birdman = localFont<'--font-Birdman'>({
  src: [
    {
      path: '../../../public/fonts/birdman/BIRDMAN_REG.ttf',
      style: 'regular',
    },
    {
      path: '../../../public/fonts/birdman/BIRDMAN_LT.ttf',
      style: 'light',
    },
    {
      path: '../../../public/fonts/birdman/BIRDMAN_BD.ttf',
      style: 'bold',
    },
    {
      path: '../../../public/fonts/birdman/BIRDMAN_OBL.ttf',
      style: 'oblique',
    },
  ],
  variable: '--font-Birdman',
  display: 'swap',
});

export const Oxanium = localFont<'--font-Oxanium'>({
  src: [
    {
      path: '../../../public/fonts/Oxanium/Oxanium-Regular.ttf',
      style: 'regular',
    },
    {
      path: '../../../public/fonts/Oxanium/Oxanium-Light.ttf',
      style: 'light',
    },
    {
      path: '../../../public/fonts/Oxanium/Oxanium-Bold.ttf',
      style: 'bold',
    },
    {
      path: '../../../public/fonts/Oxanium/Oxanium-SemiBold.ttf',
      style: 'semi-bold',
    },
  ],
  variable: '--font-Oxanium',
  display: 'swap',
});

export const MonocraftNF = localFont<'--font-MonocraftNF'>({
  src: '../../../public/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf',
  display: 'swap',
  variable: '--font-MonocraftNF',
});

MonocraftNF.variable;

export const theme: DefaultTheme = {
  name: 'Default',
  borderRadius: '12% 16% / 16% 12%',

  fonts: [
    MonocraftNF,
    Birdman,
    Oxanium,
    // '--font-Birdman',
    // '--font-Oxanium',
    // '--font-MonocraftNF',
    // 'Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Verdana, Geneva, Tahoma, Arial, sans-serif, monospace',
    // '"Times New Roman", Times, Haettenschweiler, system-ui, -apple-system, BlinkMacSystemFont',
    // 'Verdana, Geneva, Tahoma, Arial, sans-serif, monospace, system-ui, -apple-system, BlinkMacSystemFont',
  ],

  breakpoints: {
    phone: '480px',
    smallTab: '640px',
    laptop: '768px',
    fullDisplay: '1024px',
    largeDisplay: '1280px',
  },

  palette: {
    common: {
      black: 'rgb(0, 0, 0)',
      white: 'rgb(255, 255, 255)',
    },

    primary: {
      red: 'rgb(226, 49, 0)',
      blue: 'rgb(13, 0, 201)',
      orange: 'rgb(237, 172, 88)',
      cyan: 'rgb(0, 191, 255)',
      green: 'rgb(77, 197, 12)',
      drab: 'rgb(0, 208, 142)',
      steel: 'rgb(49, 64, 105)',
      tan: 'rgb(199, 178, 178)',
      gray: 'rgb(139, 139, 178)',
      teal: 'rgb(54, 213, 181)',
      neon: 'rgb(0, 255, 30)',
      yellow: 'rgb(222, 210, 76)',
      linear: 'linear-gradient(45deg, rgb(35, 230, 45) 45%, rgb(5, 5, 5) 55%)',
    },

    secondary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(52, 105, 249)',
      orange: 'rgb(240, 135, 0)',
      cyan: 'rgb(36, 237, 255)',
      green: 'rgb(27, 250, 15)',
      drab: 'rgb(15, 226, 96)',
      steel: 'rgb(71, 89, 87)',
      tan: 'rgb(121, 116, 116)',
      gray: 'rgb(181, 192, 187)',
      teal: 'rgb(40, 171, 145)',
      neon: 'rgb(89, 255, 0)',
      yellow: 'rgb(225, 255, 0)',
      linear: 'linear-gradient(25deg, rgb(45, 147, 243) 35%, rgb(23, 240, 193) 65%)',
    },

    tertiary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(0, 55, 207)',
      orange: 'rgb(200, 45, 45)',
      cyan: 'rgb(114, 220, 220)',
      green: 'rgb(43, 230, 33)',
      drab: 'rgb(29, 123, 47)',
      steel: 'rgb(125, 120, 138)',
      tan: 'rgb(196, 157, 157)',
      gray: 'rgb(181, 181, 181)',
      teal: 'rgb(11, 205, 165)',
      neon: 'rgb(135, 255, 0)',
      yellow: 'rgb(252, 231, 0)',
      linear: 'linear-gradient(45deg, rgb(132, 255, 0) 35%, rgb(22, 247, 135) 35%)',
    },
  },
};

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme.palette.primary.linear};
  }

  code, i {
    font-family: ${({ theme }) => theme.fonts.at(0)};
    font-weight: 500;
    font-size: 16px;
  }

`;

/* @font-face {
	  font-family: 'Birdman';
	  src: url('/publc/fonts/birdman/BIRDMAN_.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Oxanium';
    src: url('/public/fonts/Oxanium/Oxanium-Regular.ttf') format('truetype');
    font-display: swap;
  }

  @font-face {
	  font-family: 'MonocraftNF';
	  src: url('/public/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf') format('truetype');
    font-display: swap;

  } */
