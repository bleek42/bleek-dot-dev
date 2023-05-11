import styled from 'styled-components';

export const Main = styled.main`
  width: 100vh;
  min-width: 15%;
  height: 100vh;
  background: ${({ theme }) => theme.palette.tertiary.linear};
`;
