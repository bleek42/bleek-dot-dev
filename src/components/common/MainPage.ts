import styled from 'styled-components';

export const MainPage = styled.main(({ theme }) => `
  width: 100vh;
  min-width: 15%;
  height: 100vh;
  background: ${theme.palette.tertiary.linear};
`);
