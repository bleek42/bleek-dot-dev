import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: 'Birdman';
	src: url('/fonts/birdman/BIRDMAN_.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Oxanium';
  src: url('/fonts/Oxanium/Oxanium-Regular.ttf') format('truetype');
  font-display: swap;
}

@font-face {
	font-family: 'MonocraftNF';
	src: url('/fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf') format('truetype');
  font-display: swap;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
    background: linear-gradient(rgb(5, 5, 5) 25%, rgb(35, 230, 45) 75%)
}

main {
  background-color: radial-gradient(rgb(10, 15, 15) 64%, rgb(35, 230, 45) 36%);
  height: 100vh;
  min-height: 50%;
  width: 25vh;
  font-family: Oxanium, Arial, Helvetica, sans-serif;
}

code, i {
  font-family: 'MonocraftNF',  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: 800;
  font-size: 15px;
}

`;

export default GlobalStyle;
