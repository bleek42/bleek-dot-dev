import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  height: 20vh;

  border: 4px solid rgb(0, 0, 0);
  border-radius: 30% 25% / 10% 35%;
  margin: 4px 4px 4px 4px;
  padding: 4px 4px 4px 4px;
  background-color: ${({ theme }) => theme.palette.tertiary.linear};
`;
