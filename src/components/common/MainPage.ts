import styled from 'styled-components';

export const MainPage = styled.main(({ theme }) => `
  display: inline-block;
  width: 80vw;
  height: 60vh;
  background: ${theme.palette.tertiary.linear};
`);
