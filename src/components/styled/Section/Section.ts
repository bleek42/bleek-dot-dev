import styled from 'styled-components';

const foreground = {
  green: 'rgb(43, 230, 33)',
  red: 'rgb(214, 30, 30)',
  orange: 'rgb(222, 76, 18)',
  purple: 'rgb(161, 85, 233)',
  blue: 'rgb(12, 95, 151)',
  cyan: 'rgb(11, 205, 163)',
  drab: 'rgb(38, 136, 59)',
  steel: 'rgb(69, 66, 66)',
  tan: 'rgb(177, 177, 165)',
  black: 'rgb(0, 0, 0)',
  neon: 'rgb(136, 255, 0)',
};

const background = {
  cyan: 'rgb(11, 205, 163)',
  blue: 'rgb(12, 95, 151)',
  green: 'rgb(43, 230, 33)',
  drab: 'rgb(38, 136, 59)',
  steel: 'rgb(69, 66, 66)',
  black: 'rgb(0, 0, 0)',
  steelBlue: 'linear-gradient(65deg, rgb(69, 66, 66), rgb(12, 95, 151))',
  greenCyan: 'linear-gradient(65deg, rgb(43, 230, 33), rgb(11, 205, 163))',
  blackSteel: 'linear-gradient(65deg, rgb(0, 0, 0), rgb(69, 66, 66))',
};

const fgColors = new Map(Object.entries(foreground));
const bgColors = new Map(Object.entries(background));
console.log(fgColors, bgColors);

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  background-color: rgb(69, 66, 66);
  border: 4px solid rgb(136, 255, 0);
  border-radius: 30% 25% / 10% 25%;
  margin: 4px 4px;
  padding 2px 2px 2px 2px;
`;

export const Article = styled.article`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  background-color: rgb(177, 177, 165);
  border: 2px solid rgb(11, 205, 163);
  border-radius: 25% 10% / 10% 25%;
  margin: 3px 3px auto;
  padding: 2px 2px;
`;
