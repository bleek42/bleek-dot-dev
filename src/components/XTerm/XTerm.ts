import styled from 'styled-components';

export const XTMain = styled.main`
  display: flex;
  width: 120px;
  min-width: 50%;
  height: 500px;
  min-height: 50%;
  background-color: rgb(0, 0, 0);
`;

export const XTerminal = styled.form`
  display: flex;
  border: 2px solid blue;
  height: 200px;
  min-height: 80%;
  width: 1000px;
  min-width: 40%;
  background-color: rgb(0, 0, 0);
`;

export const XTLabel = styled.label`
  color: rgb(12, 205, 165);
  background-color: rgb(66, 66, 66);
`;

export const XTInput = styled.input`
  background-color: rgb(0, 0, 0);

  &:active {
    border: 1px solid rgb(136, 255, 0);
    cursor: text;
  }
`;

export const XTCode = styled.code`
  font-size: 28px;
  font-weight: 650;
  color: rgb(160, 85, 132);
  text-align: left;
  text-decoration: underline;
  text-decoration-color: rgb(225, 75, 15);
`;

export const XTBtns = styled.label`
  color: rgb(66, 66, 66);
  background-color: rgb(0, 0, 0);
  border: 2px solid rgb(175, 175, 165);
`;

export const Close = styled.button`
  background-color: rgb(215, 30, 30);
`;

export const Maxmz = styled.button`
  background-color: rgb(15, 95, 150);
`;

export const Minmz = styled.button`
  background-color: yellow;
`;

export const XTPrompt = styled.label`
  color: rgb(11, 205, 163);
`;

export const XTxtArea = styled.textarea`
  background-color: rgb(0, 0, 0);
  display: inline-flex;
  flex-flow: column wrap;
  cursor: text;
`;
