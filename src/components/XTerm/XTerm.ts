import { printIntrospectionSchema } from 'graphql';
import styled, {
  type DefaultTheme,
  AnyStyledComponent,
  type StyledComponentPropsWithRef,
  type StyledComponentProps,
} from 'styled-components';

export const XTForm = styled.form.attrs((props) => ({
  id: props.id || 'xt-form',
  name: props.name || 'xt-form',
}))`
  /* align-items: center; */
  box-shadow: ${(props) => props.theme.palette.primary.steel} 3em 3em;
  border: 2px solid blue;
  margin: 10px 4px 4px 10px;
  padding: 8px 8px 8px 8px;
  /* border-radius: 20% 20% / 20% 20%; */
  background-color: ${(props) => props.theme.palette.common.black};
`;

export const XTLabel = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor || 'labeled-inputs',
  form: props.form || 'xt-form',
}))`
  display: flex;
  flex-flow: row wrap;

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
  color: ${(props) => props.theme.palette.secondary.green};
  flex: 2 1 40vh;
  font-size: 18px;
  padding: 4px 4px;
  font-family: ${(props) => props.theme.fonts.at(1)};
  /* flex: 1 auto; */
`;

export const XTBtns = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor || 'xt-btns',
}))`
  display: flex;
  flex-flow: row nowrap;
  margin: 2px 4px 4px 2px;
  padding: 8px 4px 4px 8px;
  font-family: ${(props) => props.theme.fonts.at(2)};
  color: ${(props) => props.theme.palette.secondary.gray};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  border: ${(props) => '2px solid ' + props.theme.palette.secondary.green};
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  id: props.id,
  name: props.name,
  cols: props?.cols,
  rows: props?.rows,
  autoCapitalize: props.autoCapitalize || false,
  autoCorrect: props.spellCheck || false,
  spellCheck: props.spellCheck || false,
  wrap: 'hard',
  placeholder: props.placeholder || 'Welcome to bleekDotDev!',
}))`
  background-color: ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fonts.at(2)};
  color: ${(props) => props.theme.palette.primary.orange};
  font-size: 18px;
  flex: 1 3 90vh;
  height: 90vh;

  &:hover {
    border: 1px solid rgb(136, 255, 0);
    cursor: text;
  }

  &:active {
    border: 2px solid rgb(136, 255, 0);
    cursor: text;
  }
`;

export const XTCode = styled.code(
  (props) => `
  font-size: 18px;
  font-weight: 650;
  flex: 2 1 4vh;
  color: ${props.theme.palette.secondary.neon};
  text-align: left;
  text-decoration: underline;
  text-decoration-color: ${props.theme.palette.secondary.gray};
`
);

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
