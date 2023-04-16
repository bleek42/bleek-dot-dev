import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  text-align: center;
  border: 4px solid rgb(136, 255, 0);
  border-radius: 30% 25% / 10% 25%;
  margin: 4px 4px;
  padding: 4px 2px 2px 4px;
  background-color: rgb(69, 66, 66);
`;

export const Article = styled.article`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
  text-align: center;
  text-shadow: rgb(69, 66, 66) 2px 1px 2px;
  font-family: MonocraftNF;
  border: 2px solid rgb(11, 205, 163);
  border-radius: 25% 10% / 10% 25%;
  margin: 2px 2px auto;
  padding: 2px 2px 2px 2px;
  background-color: linear-gradient(65deg, rgb(43, 230, 33), rgb(11, 205, 163));
`;
