import styled, {
  createGlobalStyle,
  keyframes,
  type DefaultTheme,
} from 'styled-components';

export const theme: DefaultTheme = {
  name: 'Default',
  defaultBorder: '2px solid rgb(8, 8, 8)',
  defaultRadius: '4% / 4%',

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
      blue: 'rgb(13, 0, 201)',
      orange: 'rgb(237, 172, 88)',
      cyan: 'rgb(21, 245, 245)',
      green: 'rgb(77, 197, 12)',
      drab: 'rgba(0, 208, 142, 0.9)',
      steel: 'rgba(105, 112, 140, 0.4)',
      tan: 'rgb(199, 178, 178)',
      gray: 'rgb(139, 139, 178)',
      teal: 'rgba(54, 213, 181, 0.9)',
      neon: 'rgb(0, 255, 30)',
      yellow: 'rgb(222, 210, 76)',
      black: 'rgb(5, 5, 5)',
      white: 'rgb(250, 250, 235)',
      linear:
        'linear-gradient(175deg,rgba(10, 5, 20, 0.7) 45%, rgba(35, 230, 45, 0.7) 55%)',
    },

    secondary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(52, 105, 249)',
      orange: 'rgb(240, 135, 0)',
      cyan: 'rgb(36, 237, 255)',
      green: 'rgb(55, 175, 101)',
      drab: 'rgb(15, 226, 96)',
      steel: 'rgba(116, 132, 145, 0.57)',
      tan: 'rgb(121, 116, 116)',
      gray: 'rgb(181, 192, 187)',
      teal: 'rgba(40, 171, 145, 0.91)',
      neon: 'rgb(89, 255, 0)',
      yellow: 'rgb(225, 255, 0)',
      black: 'rgb(10, 5, 10)',
      white: 'rgb(255, 255, 255)',
      linear:
        'linear-gradient(25deg, rgba(45, 147, 243, 0.7) 35%, rgba(23, 240, 193, 0.8) 65%)',
    },

    tertiary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(0, 55, 207)',
      orange: 'rgb(200, 45, 45)',
      cyan: 'rgb(114, 220, 220)',
      green: 'rgb(43, 230, 33)',
      drab: 'rgb(29, 123, 47)',
      steel: 'rgba(36, 39, 59, 0.3)',
      tan: 'rgb(196, 157, 157)',
      gray: 'rgb(181, 181, 181)',
      teal: 'rgba(11, 205, 165, 0.9)',
      neon: 'rgb(135, 255, 0)',
      yellow: 'rgb(252, 231, 0)',
      black: 'rgb(15, 8, 10)',
      white: 'rgb(234, 255, 241)',
      linear:
        'linear-gradient(45deg, rgba(132, 255, 0.8) 35%, rgba(22, 247, 135, 0.9) 35%)',
    },
  },
};

export const PageBg = styled.main(
  ({ theme }) => `
  display: block;
  min-width: 100vw;
  min-height: 100vh;
  background: ${theme.palette.primary.linear};
`,
);

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

  /* :root {
    Birdman: 'Birdman';
    Oxanium: 'Oxanium';
    MonocraftNF: 'MonocraftNF';
  } */

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  body {
    background: rgb(5, 5, 5);
    font-family: 'Ubuntu, Tahoma, Arial, sans-serif, monospace, system-ui, -apple-system, BlinkMacSystemFont';
  }

  code, i, em {
    font-family: 'MonocraftNF';
    font-size: 16px;
  }

`;

export const borderPulse = keyframes`
  from {
    border: .3px solid rgb(0, 0, 0);
    margin: .5px;
    box-shadow:  1.2px 1.2px .8px rgba(0, 229, 255, 0.664);
    /* filter: drop-shadow(2px 4px 2px rgb(125, 5, 45)) invert(75%); */
  }

  50% {
    border: .6px solid rgb(40, 225, 31);
    margin: 1px;
    box-shadow:  2px 2.5px 1.8px rgba(0, 229, 255, 0.838);
  }


  to {
    border: .9px solid rgb(40, 220, 30);
    margin: 1.8px;
    box-shadow:  1.2px 1.5px 1px rgba(0, 229, 255, 0.664);
    /* box-shadow:;
    content: '\n \n Hey there, I'm Brandon & I'm a Web Dev! \n \n \n Click/touch anywhere to continue.'; */
  }

  /* 20% {
    opacity: 0.15;
    filter: brightness(20%);
    box-shadow: 0.5px 0.5px 0.5px rgb(2, 1, 4);
  }

  40% {
    opacity: 0.3;
    filter: brightness(50%);
    box-shadow: 1px 1px 1px rgb(12, 1, 4);
  }

  60% {
    opacity: 0.6;
    filter: brightness(75%);
     box-shadow: 1px 1px 1px rgb(16, 5, 10);
  }

  80% {
    opacity: 0.8;
    filter: brightness(110%);
     box-shadow: 1px 1px 1px rgb(12, 1, 4);
  } */
`;

export const fadeInBright = keyframes`
  from {
    opacity: 0;
    filter: brightness(8%)
    /* box-shadow: unset; */
    /* filter: drop-shadow(2px 4px 2px rgb(125, 5, 45)) invert(75%); */
  }

  20% {
    opacity: 0.15;
    filter: brightness(20%);
    /* box-shadow: 0.5px 0.5px 0.5px rgb(2, 1, 4); */
  }

  40% {
    opacity: 0.3;
    filter: brightness(42%);
    /* box-shadow: 1px 1px 1px rgb(12, 1, 4); */
  }

  60% {
    opacity: 0.6;
    filter: brightness(76%);
    /* box-shadow: 1px 1px 1px rgb(16, 5, 10); */
  }

  80% {
    opacity: 0.8;
    filter: brightness(90%);
    /* box-shadow: 1px 1px 1px rgb(12, 1, 4); */
  }

  to {
    opacity: 1;
    filter: brightness(100%);
    /* box-shadow: 1px 1px 1px rgb(26, 8, 12); */
    /* content: '\n \n Hey there, I'm Brandon & I'm a Web Dev! \n \n \n Click/touch anywhere to continue.'; */
  }
`;
