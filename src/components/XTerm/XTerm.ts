import styled from 'styled-components';

export const XTMain = styled.main`
  width: 120vh;
  min-width: 50%;
  height: 100vh;
  min-height: 50%;
  background-color: rgb(0, 0, 0);
`;

export const XTerminal = styled.form`
  display: flex;
  border: 2px solid blue;
  border-radius: 20% 20% / 20% 20%;
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
  font-family: 'Monocraft NF';
  font-size: 28px;
  font-weight: 650;
  color: rgb(160, 85, 132);
  text-align: left;
  /* font-family: 'Courier New', Courier, monospace; */
  text-decoration: underline;
  text-decoration-color: rgb(225, 75, 15);
`;

export const XTBtns = styled.label`
  flex-flow: row wrap;
  font-family: 'Monocraft NF';
  color: rgb(66, 66, 66);
  background-color: rgb(66, 66, 66);
  border: 2px solid rgb(175, 175, 165);
`;

export const Close = styled.button`
  flex: 5vh 1vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
  background-color: rgb(215, 30, 30);
`;

export const Maxmz = styled.button`
  flex: 5vh 1vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
  background-color: rgb(15, 95, 150);
`;

export const Minmz = styled.button`
  flex: 5vh 1vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
  background-color: yellow;
`;

export const XTPrompt = styled.label`
  color: rgb(11, 205, 163);
`;

export const XTxtArea = styled.textarea`
  background-color: rgb(0, 0, 0);
  display: flex;
  flex-flow: column wrap;
  cursor: text;
`;
