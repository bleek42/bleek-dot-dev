import { createGlobalStyle } from 'styled-components';
import theme from '@global/theme';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'Birdman';
	src: url('../../fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf') format('truetype');
}

@font-face {
  font-family: 'Oxanium';
  src: url('fonts/Oxanium/Oxanium-Light.ttf') format('truetype'),
    url('fonts/Oxanium/Oxanium-Medium.ttf') format('truetype'),
    url('fonts/Oxanium/Oxanium-Regular.ttf') format('truetype'),
    url('fonts/Oxanium/Oxanium-SemiBold.ttf') format('truetype'),
    url('fonts/Oxanium/Oxanium-Bold.ttf') format('truetype');
}

@font-face {
	font-family: 'Monocraft NF';
	src: url('../../fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf') format('truetype');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: rgb(5, 5, 5);
}

main {
  background: radial-gradient(rgb(0, 0, 0) 24%, rgb(35, 230, 45) 36%);
  height: 100vh;
  min-height: 50%;
  width: 25vh;
}

code, i {
  font-family: "'Monocraft NF',  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
  font-weight: 800;
  font-size: 15px;
}

/* main {
  height: 100vh;
  min-height: 50%;
} */
`;

export default GlobalStyle;
