import { type DefaultTheme, createGlobalStyle } from 'styled-components';
// import { Birdman, MonocraftNF, Oxanium } from './Text';

export const theme: DefaultTheme = {
  name: 'Default',
  borderRadius: '12% 16% / 16% 12%',

  fonts: [
    '--font-Birdman',
    '--font-Oxanium',
    '--font-MonocraftNF',
    'Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", Verdana, Geneva, Tahoma, Arial, sans-serif, monospace',
    'Verdana, Geneva, Tahoma, Arial, sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
    '"Times New Roman", Times, Haettenschweiler, monospace, system-ui, -apple-system, BlinkMacSystemFont',
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

  @font-face {
	  font-family: Birdman;
	  src: url('/fonts/birdman/birdman.ttf') format('truetype');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: Oxanium;
    src: url('/fonts/Oxanium/Oxanium.ttf') format('truetype');
    font-display: swap;
    font-style: normal;

  }

  @font-face {
	  font-family: MonocraftNF;
	  src: url('/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf') format('truetype');
    font-display: swap;
    font-weight: 400;
  }

  :root {
    --font-Birdman: Birdman;
    --font-Oxanium: Oxanium;
    --font-MonocraftNF: MonocraftNF;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: rgb(5, 5, 5);
    font-family: var(--font-Oxanium);
  }

  code, i {
    font-family: var(--font-MonocraftNF);
    font-size: 16px;
  }

`;
