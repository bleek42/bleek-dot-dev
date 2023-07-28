import styled from 'styled-components';
// import { theme } from './Theme';

export const MainPage = styled.main(
  ({ theme }) => `
  display: inline-block;
  width: 100vw;
  height: 60vh;
  background: ${theme.palette.tertiary.linear};
  /* font-family: var(${theme.fonts.at(1)}); */
`,
);
