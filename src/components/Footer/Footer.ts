import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  height: 8vh;
  width: 80vh;
  min-width: 40%;
  border: 4px solid ${({ theme }) => theme.palette.secondary.cyan};
  border-radius: 10% 10% / 10% 10%;
  margin: 4px 2px 4px 2px;
  padding: 2px 2px 2px 2px;
  background-color: ${({ theme }) => theme.palette.secondary.steel};
`;
