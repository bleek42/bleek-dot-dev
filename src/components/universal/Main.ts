import styled from 'styled-components';

export const Main = styled.main`
  width: 100vh;
  min-width: 15%;
  height: 100vh;
  min-height: 20%;
  background-color: ${({ theme }) => theme.palette.secondary.linear ?? 'rgb(5, 5, 5)'};
`;
