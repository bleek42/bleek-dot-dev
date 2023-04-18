import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  text-align: left;
  border: 4px solid ${({ theme }) => theme.palette.secondary.green};
  border-radius: 15% 20% / 15% 20%;
  margin: 4px 4px 4px 4px;
  padding: 2px 2px 2px 2px;
  background-color: ${({ theme }) => theme.palette.secondary.steel};
`;

export const Article = styled.article`
  display: inline-flex;
  color: ${({ theme }) => theme.palette.secondary.steel};
  font-family: ${({ theme }) => theme.fonts.at(1)};
  text-shadow: ${({ theme }) => theme.palette.secondary.green} 2px 2px 2px;
  text-align: center;
  border: 2px solid ${({ theme }) => theme.palette.secondary.neon};
  border-radius: 5% 10% / 10% 5%;
  margin: 2px 2px 2px 2px;
  padding: 4px 2px 4px 2px;
  background-color: ${({ theme }) => theme.palette.secondary.gray};
`;
