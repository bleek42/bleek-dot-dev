import styled, { createGlobalStyle } from 'styled-components';

export const Main = styled.main`
  height: 800px;
  background-color: rgb(24, 24, 0);
  border: 5px solid blue;
`;

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
	src: url('../../fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background: radial-gradient(rgb(0, 0, 0) 24%, rgb(35, 230, 45) 36%);
  font-family: "'Monocraft NF',  Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";
}

code, i {
  font-weight: 800;
  font-size: 12px;
}

main {
  height: 100vh;
  min-height: 50%;
}
`;

export default GlobalStyle;
