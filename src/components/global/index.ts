import styled, { createGlobalStyle } from 'styled-components';
import { GrnTxt, BlkTxt, StlLg, BlkMd, GrnMd, NeonLg, CyLg, CyTxt } from './Text';

export { GrnMd, GrnTxt, BlkTxt, BlkMd, StlLg, NeonLg, CyLg, CyTxt };

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
	font-family: 'MonocraftNF';
	src: url('../../fonts/Monocraft-NerdFont/Monocraft-nerd-fonts-patched.ttf');
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: radial-gradient(#263349 24%, #5f48a0 36%);
  font-family: "'ProFontWindows NF', 'CodeNewRoman NF', 'CaskaydiaCove NF'";
}

code {
  font-family: 'TerminessTTF NFM', Impact,  Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

main {
  height: 800px;
  min-height: 40%;
}
`;

export default GlobalStyle;
