import styled, {
  type DefaultTheme,
  type StyledComponentProps,
  type AnyStyledComponent,
  type StyledComponentPropsWithRef,
} from 'styled-components';

import { type XTermComponent } from 'src/interfaces/Component';

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
  id: props.id || undefined,
}))<XTermProps>`
  display: flex;
  flex-flow: column nowrap;

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
  flex-flow: row nowrap;
  align-items: space-around;
  margin: 4px 6px 4px 6px;
  padding: 4px 4px 4px 4px;
  font-family: ${(props) => `var(${props.theme.fonts.at(2)})`};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  border: ${(props) => `2px solid  ${props.theme.palette.secondary.green}`};

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    /* flex-flow: row nowrap; */
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap;
    align-items: center; */
    display: none;
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
  padding: 2px 2px 2px 2px;
  margin: 2px 2px;
  flex: 1 1 4vw;

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 14px;
    padding-bottom: 5px;
  }
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  id: props.id || 'xt-textarea',
  name: props.name || 'xt-textarea',
  spellCheck: props.spellCheck || 'false',
  autoCorrect: props.spellCheck || 'false',
  autoCapitalize: props.autoCapitalize || 'false',
  wrap: props.wrap || 'hard',
  placeholder:
    props.placeholder || 'Welcome to bleekDotDev! \n Click/touch here to continue.',
}))<XTermProps>`
  background-color: ${({ theme }) => theme.palette.common.black};
  font-family: ${({ theme }) => theme.fonts.at(1)};
  color: ${({ theme }) => theme.palette.primary.orange};
  flex: 3 1 70vw;
  max-height: 60vh;
  /* max-width: 100vw; */
  text-align: center;
  font-size: 20px;

  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.secondary.cyan};
  }

  &:active {
    border: 2px solid ${({ theme }) => theme.palette.primary.neon};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    font-size: 24px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 28px;
  }
`;

export const XTCode = styled.code<XTermProps>(
  (props) => `
  display: inline-flex;
  flex: 2 1 4vh;
  margin: 2px 2px;
  padding: 4px 4px;
  color: ${props.theme.palette.secondary.neon};
  font-size: 18px;
  font-weight: 450;
  text-align: left;
  text-decoration: underline;
  text-decoration-color: ${props.theme.palette.secondary.gray};

  @media(min-width: ${props.theme.breakpoints.fullDisplay}) {
    font-size: 22px;
  }

  @media(max-width: ${props.theme.breakpoints.phone}) {
    font-size: 14px;
    font-weight: 500;
    padding-right: 8px;
  }
`,
);

// export const Minmz = styled.button`
//   /* flex: 0 2 10%; */
//   width: 10vh;
//   font-family: 'MonocraftNF';
//   font-size: 24px;
//   background-color: yellow;
// `;
