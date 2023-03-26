import styled from 'styled-components';

export const XTerminal = styled.div`
  display: flex;
  background-color: rgb(0, 0, 0);
`;

export const XTHeader = styled.header`
  display: flex;
  background-color: rgb(10, 10, 10);
  border: 2px solid blue;
`;

export const XTShell = styled.section`
  height: 200px;
  min-height: 80%
  width: 1000px;
  min-width: 40%;
  background-color: rgb(0, 0, 0);
`;

export const XTSpan = styled.span`
  display: inline-flex;
  flex-flow: row nowrap;
`;

export const Shebang = styled.code`
  color: rgb(160, 85, 132);
  font-size: 28px;
  font-weight: 650;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: ;
`;

export const XTBtns = styled.span`
  color: rgb(0, 0, 0);
  border: 1px solid rgb(0, 0, 0);
`;

export const ClsBtn = styled.button`
  background-color: red;
`;

export const MaxBtn = styled.button`
  background-color: blue;
`;

export const MinBtn = styled.button`
  background-color: yellow;
`;

export const XTScreen = styled.textarea`
  background-color: rgb(0, 0, 0);
`;
