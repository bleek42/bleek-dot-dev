import styled, {
  type DefaultTheme,
  AnyStyledComponent,
  type StyledComponentPropsWithRef,
  type StyledComponentProps,
} from 'styled-components';
import { type XTermComponent, type ComponentBase } from '@/interfaces/BaseComponent';

export const XTForm = styled.form.attrs((props) => ({
  id: props.id || 'tty0',
  name: props.name || 'xterm',
}))`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  box-shadow: ${(props) => props.theme.palette.primary.steel} 3em 3em;
  border: 2px solid blue;
  margin: 10px 4px 4px 10px;
  padding: 8px 8px 8px 8px;
  /* border-radius: 20% 20% / 20% 20%; */
  background-color: ${(props) => props.theme.palette.common.black};
`;

export const XTLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor || 'labeled-inputs',
}))`
  display: inline-flex;
  justify-content: flex-start;
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

export const XTInput = styled.input.attrs((props) => ({
  id: props.id || 'xt-prompt',
  name: props.name || 'xt-prompt',
  type: props.type || 'text',
}))`
  background-color: rgb(0, 0, 0);
  color: rgb(35, 230, 45);
  font-size: 18px;
  padding: 4px 4px;
  flex: 1 auto;
  font-family: ${(props) => props.theme.fonts.at(1)};
`;

export const XTBtns = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor || 'xt-btns',
}))`
  /* display: inline-flex; */
  flex: 2 2 50px;
  margin: 2px 4px 4px 2px;
  padding: 8px 4px 4px 8px;
  width: 100vh;
  font-family: 'MonocraftNF';
  color: ${(props) => props.theme.palette.secondary.gray};
  background-color: ${(props) => props.theme.palette.secondary.blue};
  border: 2px solid rgb(175, 175, 165);
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  id: props.id || 'xt-textarea',
  name: props.name || '/dev/pts/tty0',
  cols: props.cols || 20,
  rows: props.rows || 20,
  autoCapitalize: props.autoCapitalize || 'off',
  autoCorrect: props.spellCheck || 'off',
  spellCheck: props.spellCheck || 'off',
  placeholder:
    props.placeholder ||
    'Welcome to bleekDotDev: My name is Brandon C. Leek, & I am a FullStack Web Developer',
}))`
  background-color: rgb(0, 0, 0);
  font-family: 'MonocraftNF';
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

export const XTCode = styled.code`
  font-family: ${(props) => props.theme.fonts.at(2)};

  font-size: 28px;
  font-weight: 650;
  color: ${(props) => props.theme.palette.secondary.neon};
  text-align: left;
  text-decoration: underline;
  text-decoration-color: rgb(225, 75, 15);
`;

//   /* flex: 0 2 10%; */
//   width: 10vh;
//   font-family: 'MonocraftNF';
//   font-size: 24px;
//   background-color: rgb(15, 95, 150);
// `;

// export const Minmz = styled.button`
//   /* flex: 0 2 10%; */
//   width: 10vh;
//   font-family: 'MonocraftNF';
//   font-size: 24px;
//   background-color: yellow;
// `;

// // export const XTBtn = styled.button`
// //   background-color: ${(props) =>
// //     props?.close
// //       ? 'rgb(215, 30, 30)'
// //       : props?.max
// //       ? 'rgb(15, 95, 150)'
// //       : props?.min
// //       ? 'yellow'
// //       : 'grey'};
// // `;
