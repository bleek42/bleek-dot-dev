import styled from 'styled-components';
// import { theme } from './Theme';

export const MainPage = styled.main(({ theme }) => `
  display: inline-block;
  width: 100vw;
  height: 60vh;
  /* font-family: var(${theme.fonts.at(1)}); */
  background: ${theme.palette.tertiary.linear};
`
);
