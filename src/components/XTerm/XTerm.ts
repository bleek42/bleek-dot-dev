import styled, {
  type DefaultTheme,
  type StyledComponentProps,
  type AnyStyledComponent,
  type StyledComponentPropsWithRef,
} from 'styled-components';

import { XTermComponent } from '@/interfaces/Component';

type XTermProps = StyledComponentProps<
  'textarea' | 'form' | 'input' | 'label' | 'code',
  DefaultTheme,
  XTermComponent,
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
  htmlFor: props.htmlFor || 'labeled-inputs',
  form: props.form || 'xt-form',
}))<XTermProps>`
  display: flex;
  flex-flow: column wrap;
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

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    /* min-height: 16vh; */
    align-content: flex-start;
  }
`;

export const XTBtns = styled.label.attrs<XTermProps>((props) => ({
  htmlFor: props.htmlFor || 'xt-btns',
}))<XTermProps>`
  display: flex;
  margin: 2px 4px 4px 2px;
  width: 100vw;
  padding: 8px 4px 4px 8px;
  font-family: ${(props) => props.theme.fonts.at(2)};
  color: ${(props) => props.theme.palette.secondary.gray};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  border: ${(props) => '2px solid ' + props.theme.palette.secondary.green};

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    flex-flow: row nowrap;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    min-width: 40%;
    flex-flow: column wrap;
    align-content: flex-start;
  }
`;

export const XTInput = styled.input.attrs<XTermProps>((props) => ({
  id: props.id || 'xt-prompt',
  name: props.name || 'xt-prompt',
  type: props.type || 'text',
}))<XTermProps>`
  background-color: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.secondary.green};
  font-size: 18px;
  padding: 4px 4px;
  font-family: ${(props) => props.theme.fonts.at(1)};
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  id: props.id,
  name: props.name,
  // cols: props.cols || 60,
  // rows: props.rows || 60,
  autoCapitalize: props.autoCapitalize || 'false',
  autoCorrect: props.spellCheck || 'false',
  spellCheck: props.spellCheck || 'false',
  wrap: 'hard',
  placeholder: props.placeholder || 'Welcome to bleekDotDev!',
}))<XTermProps>`
  background-color: ${(props) => props.theme.palette.common.black};
  font-family: ${(props) => props.theme.fonts.at(2)};
  color: ${(props) => props.theme.palette.primary.orange};
  flex: 5 3 90vw;
  width: 90vw;

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
    min-width: 50%;
  }
`;

export const XTCode = styled.code<XTermProps>(
  (props) => `font-size: 16px;
  font-weight: 650;
  flex: 3 1 8vw;
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
