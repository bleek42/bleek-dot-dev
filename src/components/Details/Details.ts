import styled from 'styled-components';

export const Details = styled.details`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 4px 4px;
  padding: 2px 2px;
  color: rgb(45, 230, 35);
  border: 2px solid rgb(0, 0, 0);
  border-radius: 20% 10% / 10% 20%;
`;

export const Summary = styled.summary`
  font-family: Oxanium;
  width: 400px;
  min-width: 60%;
  height: 180px;
  min-height: 45%;
  border: 1px solid rgb(43, 230, 33);
`;
