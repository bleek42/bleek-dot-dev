import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  width: 100vh;
  border: 4px solid ${({ theme }) => theme.palette.secondary.cyan};
  border-radius: 10% 25% / 10% 25%;
  margin: 4px 4px 4px 4px;
  padding: 4px 4px 4px 4px;
  background-color: ${({ theme }) => theme.palette.tertiary.linear};
`;
