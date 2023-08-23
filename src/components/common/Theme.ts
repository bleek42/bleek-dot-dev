import styled, {
  createGlobalStyle,
  keyframes,
  type DefaultTheme,
} from 'styled-components';

export const theme: DefaultTheme = {
  name: 'Default',
  defaultBorder: '2px solid rgb(20, 8, 8)',
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
      blue: 'rgb(7, 52, 228)',
      cyan: 'rgb(21, 245, 245)',
      green: 'rgb(77, 197, 12)',
      neon: 'rgba(20, 255, 0, 0.95)',
      drab: 'rgb(13, 139, 80)',
      gray: 'rgba(125, 135, 165, 0.95)',
      steel: 'rgba(132, 165, 184, 0.85)',
      purple: 'rgb(255, 0, 255)',
      teal: 'rgba(54, 213, 181, 0.9)',
      orange: 'rgb(237, 172, 88)',
      yellow: 'rgb(222, 210, 76)',
      tan: 'rgb(199, 178, 178)',
      black: 'rgb(5, 5, 5)',
      white: 'rgb(250, 250, 235)',
      linear:
        'linear-gradient(95deg, rgba(90, 218, 225, 0.75) 46%, rgba(105, 190, 105, 0.75) 53%)',
    },

    secondary: {
      red: 'rgb(214, 30, 30)',
      blue: 'rgb(52, 105, 249)',
      green: 'rgb(38, 229, 22)',
      neon: 'rgb(89, 255, 0)',
      drab: 'rgb(15, 226, 96)',
      cyan: 'rgb(36, 237, 255)',
      gray: 'rgb(181, 192, 187)',
      steel: 'rgba(116, 132, 145, 0.8)',
      purple: 'rgba(220, 106, 220, 0.85)',
      teal: 'rgba(27, 185, 153, 0.9)',
      orange: 'rgb(240, 135, 0)',
      yellow: 'rgb(225, 255, 0)',
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
      neon: 'rgb(135, 255, 0)',
      drab: 'rgb(29, 123, 47)',
      cyan: 'rgb(114, 220, 220)',
      gray: 'rgb(181, 181, 181)',
      steel: 'rgba(36, 39, 59, 0.5)',
      purple: 'rgb(229, 54, 229)',
      teal: 'rgba(11, 205, 165, 0.9)',
      orange: 'rgb(200, 45, 45)',
      yellow: 'rgb(252, 231, 0)',
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
    background: linear-gradient(100deg, rgba(10, 5, 20, 0.9) 45%, rgba(35, 230, 45, 0.9) 55%);
    font-family: 'Ubuntu, Tahoma, Arial, sans-serif, monospace, system-ui, -apple-system, BlinkMacSystemFont';
  }

  code, i, em {
    font-family: 'MonocraftNF';
    font-size: 20px;
  }

`;

export const borderPulse = keyframes`
  from {
    border: .3px dashed rgb(0, 0, 0);
    margin: .5px;
    box-shadow:  1.2px 1.2px .8px rgba(0, 229, 255, 0.664);

  }

  50% {
    border: .6px dashed rgb(40, 225, 31);
    margin: 1px;
    box-shadow:  2px 2.5px 1.8px rgba(0, 229, 255, 0.838);
  }


  to {
    border: .9px dashed rgb(40, 220, 30);
    margin: 1.8px;
    box-shadow:  1.2px 1.5px 1px rgba(0, 229, 255, 0.664);

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
