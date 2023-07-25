import styled, {
  type DefaultTheme,
  type StyledComponentProps,
  type AnyStyledComponent,
  type StyledComponentPropsWithRef,
} from 'styled-components';

import { type XTermComponent } from '@/interfaces/Component';

type XTermProps = StyledComponentProps<
  'textarea' | 'form' | 'input' | 'label' | 'code',
  DefaultTheme,
  object,
  string | number | symbol
> &
  XTermComponent;

export const XTForm = styled.form.attrs((props: XTermProps) => ({
  id: props.id || 'xt-form',
  name: props.name || 'xt-form',
}))<XTermProps>`
  /* align-items: center; */
  box-shadow: ${(props) => props.theme.palette.primary.steel} 3em 3em;
  border: 2px solid ${(props) => props.theme.palette.primary.blue};
  /* margin: 10px 4px 4px 10px;
  padding: 8px 8px 8px 8px; */
  /* border-radius: 20% 20% / 20% 20%; */
  background-color: ${(props) => props.theme.palette.common.black};
`;

export const XTLabel = styled.label.attrs<XTermProps>((props) => ({
  htmlFor: props.htmlFor || 'xtinput-id',
  form: props.form || 'xt-form-id',
}))<XTermProps>`
  display: flex;
  flex-flow: column wrap;
  font-size: 24px;
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

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    flex-flow: column nowrap;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    /* min-height: 16vh; */
    align-content: flex-start;
  }
`;

export const XTBtns = styled.label.attrs<XTermProps>((props) => ({
  htmlFor: props.htmlFor || 'xt-btns',
  form: props.form || 'xt-form',
}))<XTermProps>`
  display: flex;
  align-items: center;
  margin: 4px 6px 4px 6px;
  /* width: 100vw; */
  min-width: 40%;
  padding: 8px 4px 4px 8px;
  font-family: ${(props) => `var(${props.theme.fonts.at(2)})`};
  color: ${(props) => props.theme.palette.secondary.gray};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  border: ${(props) => '2px solid ' + props.theme.palette.secondary.green};

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    flex-flow: row nowrap;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    flex-flow: column wrap;
    align-items: flex-start;
  }
`;

export const XTInput = styled.input.attrs<XTermProps>((props) => ({
  htmlFor: props.htmlFor || 'xt-textarea',
  form: props.form || 'xt-form',
  id: props.id || 'xt-prompt',
  name: props.name || 'xt-prompt',
  type: props.type || 'text',
}))<XTermProps>`
  background-color: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.secondary.green};
  padding: 4px 4px;
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  id: props.id || 'xt-textarea',
  name: props.name || 'xt-textarea',
  spellCheck: props.spellCheck || 'false',
  autoCorrect: props.spellCheck || 'false',
  autoCapitalize: props.autoCapitalize || 'false',
  wrap: props.wrap || 'hard',
  placeholder: props.placeholder || 'Welcome to bleekDotDev!',
  // cols: props.cols || 60,
  // rows: props.rows || 60,
}))<XTermProps>`
  background-color: ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fonts.at(2)};
  color: ${(props) => props.theme.palette.primary.orange};
  flex: 2 0 70vw;
  /* width: 90vw; */

  &:hover {
    border: 1px solid rgb(136, 255, 0);
    cursor: text;
  }

  &:active {
    border: 2px solid rgb(136, 255, 0);
    cursor: text;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    font-size: 24px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 28px;
  }
`;

export const XTCode = styled.code<XTermProps>(
  (props) => `font-size: 16px;
  font-weight: 650;
  flex: 2 1 4vw;
  color: ${props.theme.palette.secondary.neon};
  /* text-align: left; */
  text-decoration: underline;
  text-decoration-color: ${props.theme.palette.secondary.gray};

  @media(min-width: ${props.theme.breakpoints.fullDisplay}) {
    font-size: 18px;
  }

  @media(max-width: ${props.theme.breakpoints.phone}) {
    font-size: 12px;
  }
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
