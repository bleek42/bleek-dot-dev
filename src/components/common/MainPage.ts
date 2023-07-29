import styled from 'styled-components';

export const MainPage = styled.main(({ theme }) => `
  display: inline-block;
  width: 90vw;
  min-width: 50%;
  height: 90vh;

  background: ${theme.palette.primary.linear};
`,
);
