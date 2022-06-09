import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
	font-family: MonocraftNF;
	src: url();
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: radial-gradient(#263349 24%, #5f48a0 36%);
  font-family: "'ProFontWindows NF', 'CodeNewRoman', 'CaskaydiaCove NF'";
}

code {
  font-family: MonocraftNF, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

  main {
    height: 800px;
    min-height: 40%;
  }
`;

export const StlLg = styled.h2`
	color: rgb(66, 66, 66);
	font-family: Birdman;
	font-weight: 650;
	text-align: center;
	text-shadow: rgb(0, 0, 0) 1px 1px 1px;
	text-decoration: underline;
	text-decoration-color: rgb(0, 0, 0);
	text-decoration-style: double;
`;

export const CyLg = styled.h2`
	color: rgb(11, 205, 163);
	font-family: MonocraftNF;
	font-weight: 650;
	text-shadow: rgb(0, 0, 0) 1px 1px 1px;
	text-decoration: underline;
	text-decoration-color: rgb(12, 96, 150);
	text-decoration-style: double;
`;

export const NeonLg = styled.h2`
	color: rgb(135, 255, 0);
	font-family: Birdman;
	font-weight: 650;
	text-align: center;
	text-shadow: rgb(38, 136, 60) 1px 0 1px;
	text-decoration: underline;
	text-decoration-color: rgb(135, 255, 0);
	text-decoration-style: double;
`;

export const GrnMd = styled.h5`
	color: rgb(45, 230, 35);
	font-family: MonocraftNF;
	font-weight: 650;
	text-align: center;
	text-shadow: rgb(12, 95, 151) 1px;
	text-decoration: underline;
	text-decoration-color: rgb(0, 0, 0);
	text-decoration-style: double;
`;

export const BlkMd = styled.h5`
	color: rgb(0, 0, 0);
	font-family: Oxanium;
	font-weight: 650;
	text-align: center;
	text-shadow: rgb(66, 66, 66) 1px 1px 0;
	text-decoration: underline;
	text-decoration-color: rgb(0, 0, 0);
	text-decoration-style: double;
`;

export const BlkTxt = styled.p`
	font-family: MonocraftNF;
	font-weight: 450;
	color: rgb(0, 0, 0);
	text-shadow: rgb(12, 95, 151) 1px 1px o;
`;

// text-align: left;
// text-decoration: 0.5px underline;
// text-decoration-color: rgb(11, 205, 163);

export const CyTxt = styled.p`
	font-family: Oxanium, MonocraftNF;
	font-weight: 700;
	color: rgb(11, 205, 163);
	text-shadow: 1px rgb(12, 95, 151);
`;

// text-decoration: underline;
// text-decoration-style: double;
// text-decoration-thickness: 300;

export const GrnTxt = styled.p`
	font-family: MonocraftNF;
	font-weight: 700;
	color: rgb(43, 230, 33);
	text-shadow: rgb(38, 136, 59) 1px 0 1px;
`;

export default GlobalStyle;