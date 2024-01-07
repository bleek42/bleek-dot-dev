import styled, { createGlobalStyle, type DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  name: 'Default',
  defaultBorder: '2px solid rgb(20, 8, 8)',
  defaultRadius: '2px 4px 2px 4px',

  fonts: [
    'Birdman',
    'Oxanium',
    'MonocraftNF',
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
      blue: 'rgb(7, 52, 228)',
      cyan: 'rgb(21, 245, 245)',
      green: 'rgb(77, 197, 12)',
      neon: 'rgba(20, 255, 0, 0.95)',
      drab: 'rgb(13, 139, 80)',
      gray: 'rgba(125, 135, 165, 0.95)',
      steel: 'rgba(132, 165, 184, 0.85)',
      purple: 'rgb(255, 0, 255)',
      teal: 'rgba(54, 213, 181, 0.9)',
      orange: 'rgb(237, 169, 38)',
      yellow: 'rgb(222, 210, 76)',
      tan: 'rgb(199, 178, 178)',
      black: 'rgb(5, 5, 5)',
      white: 'rgb(250, 250, 235)',
      linear:
        'linear-gradient(-45deg, rgb(11, 236, 224) 23%, rgb(0, 0, 0) 44%, rgb(33, 241, 59) 100%)',
    },

    secondary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(52, 105, 249)',
      green: 'rgb(38, 229, 22)',
      orange: 'rgb(240, 135, 0)',
      yellow: 'rgba(242, 162, 10, 0.91)',
      purple: 'rgba(220, 106, 220, 0.85)',
      cyan: 'rgb(36, 237, 255)',
      neon: 'rgb(89, 255, 0)',
      drab: 'rgb(15, 226, 96)',
      gray: 'rgba(224, 235, 230, 0.8)',
      steel: 'rgba(116, 132, 145, 0.65)',
      teal: 'rgba(27, 185, 153, 0.9)',
      tan: 'rgb(121, 116, 116)',
      black: 'rgba(39, 32, 32, 0.9)',
      white: 'rgb(255, 255, 255)',
      linear:
        'linear-gradient(100deg, rgba(45, 147, 243, 0.75) 35%, rgba(23, 240, 193, 0.8) 65%)',
    },

    tertiary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(0, 55, 207)',
      green: 'rgb(43, 230, 33)',
      orange: 'rgb(200, 45, 45)',
      yellow: 'rgb(252, 231, 0, 0.85)',
      purple: 'rgba(229, 54, 229, 0.8)',
      cyan: 'rgb(114, 220, 220)',
      neon: 'rgba(135, 255, 0, 0.9)',
      drab: 'rgb(29, 123, 47)',
      gray: 'rgb(181, 181, 181)',
      steel: 'rgba(36, 39, 59, 0.75)',
      teal: 'rgba(11, 205, 165, 0.9)',
      tan: 'rgb(196, 157, 157)',
      black: 'rgb(15, 8, 10)',
      white: 'rgb(234, 255, 241)',
      linear:
        'linear-gradient(105deg, rgba(132, 255, 0.85) 35%, rgba(22, 247, 135, 0.9) 35%)',
    },
  },
};

export const PageBg = styled.main`
  min-width: 90vw;
  min-height: 90vh;
  background: ${({ theme }) => theme.palette.primary.linear};
`;

export const GlobalStyle = createGlobalStyle`

  @font-face {
	  font-family: 'Birdman';
	  src: url('/fonts/Birdman/Birdman.ttf') format('truetype');
    font-display: swap;
    font-style: normal;
  }

  @font-face {
    font-family: 'Oxanium';
    src: url('/fonts/Oxanium/Oxanium.ttf') format('truetype');
    font-display: swap;
    font-style: normal;

  }

  @font-face {
	  font-family: 'MonocraftNF';
	  src: url('/fonts/MonocraftNF/Monocraft-nerd-fonts-patched.ttf') format('truetype');
    font-display: swap;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: linear-gradient(100deg,rgba(10,5,20,0.6) 24%, rgba(70, 213, 213, 0.8) 58%, rgba(35, 230, 45, 0.8) 34%);
    font-family: 'Ubuntu, Tahoma, Arial, sans-serif, monospace, system-ui, -apple-system, BlinkMacSystemFont';
  }

  code, i, em, a {
    font-family: 'MonocraftNF';
    font-size: 1.5em;
  }

`;
