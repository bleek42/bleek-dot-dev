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
  flex-flow: column wrap;
  align-items: center;
  box-shadow: 3em 3em rgb(66, 166, 66);
  border: 2px solid blue;
  margin: 10px 4px 4px 10px;
  padding: 8px 8px 8px 8px;
  /* border-radius: 20% 20% / 20% 20%; */
  background-color: rgb(5, 5, 5);
`;

export const XTLabel = styled.label`
  /* display: inline-flex;
  justify-content: flex-start; */

  font-size: 26px;
  color: rgb(12, 205, 165);
  background-color: rgb(0, 0, 0);
  &:hover {
    border: 2px solid rgb(136, 255, 0);
    cursor: text;
  }
  &:active {
    border: 2px solid rgb(136, 255, 0);
    cursor: text;
  }
`;

export const XTInput = styled.input`
  background-color: rgb(0, 0, 0);
  color: rgb(35, 230, 45);
  font-size: 18px;
  padding: 4px 4px;
  flex: 1 auto;
  font-family: 'Monocraft NF';
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

export const XTBtnLabel = styled.label`
  /* display: inline-flex; */
  flex: 2 2 50px;
  margin: 2px 4px 4px 2px;
  padding: 8px 4px 4px 8px;
  width: 100vh;
  font-family: 'Monocraft NF';
  color: rgb(66, 66, 66);
  background-color: rgb(66, 66, 66);
  border: 2px solid rgb(175, 175, 165);
`;

export const XTBtn = styled.button`
  color: ${(props) =>
    props.color === 'rgb(215, 220, 25)'
      ? 'rgb(215, 220, 25)'
      : props.color === 'rgb(195, 15, 155)'
      ? 'rgb(195, 15, 155)'
      : props.color === 'rgb(25, 180, 220)'
      ? 'rgb(25, 180, 220)'
      : 'rgb(19, 174, 32)'};
  width: 10vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
  background-color: rgb(215, 30, 30);
`;

export const Maxmz = styled.button`
  /* flex: 0 2 10%; */
  width: 10vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
  background-color: rgb(15, 95, 150);
`;

export const Minmz = styled.button`
  /* flex: 0 2 10%; */
  width: 10vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
  background-color: yellow;
`;

// export const XTBtn = styled.button`
//   background-color: ${(props) =>
//     props?.close
//       ? 'rgb(215, 30, 30)'
//       : props?.max
//       ? 'rgb(15, 95, 150)'
//       : props?.min
//       ? 'yellow'
//       : 'grey'};
// `;

export const XTxtArea = styled.textarea`
  background-color: rgb(0, 0, 0);
  font-family: 'Monocraft NF';
  color: rgb(15, 95, 150);
  font-size: 18px;
  &:hover {
    border: 2px solid rgb(136, 255, 0);
    cursor: text;
  }
  &:active {
    border: 2px solid rgb(136, 255, 0);
    cursor: text;
  }
`;
