import styled from 'styled-components';

export const Header = styled.header`
  display: inline-flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  height: 12vh;
  width: 100vh;
  min-width: 50%;
  border: 4px solid ${({ theme }) => theme.palette.secondary.cyan};
  border-radius: 10% 20% / 10% 20%;
  margin: 4px 4px 4px 4px;
  padding: 4px 4px 4px 4px;
  background-color: ${({ theme }) => theme.palette.tertiary.linear};
`;
