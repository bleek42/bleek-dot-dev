import styled, {
  keyframes,
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';

import { type XTermComponent } from '@/interfaces/Component';
import { Icon } from '../common';

export type XTermProps = StyledComponentProps<
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
  display: inline-block;
  width: 90vw;
  height: 96vh;
  box-shadow: ${(props) => props.theme.palette.secondary.steel} 2em 2em;
  border: 6px solid ${(props) => props.theme.palette.secondary.blue};
  margin: 8px 8px 8px 8px;
  background-color: ${(props) => props.theme.palette.common.black};
`;

export const XTLabel = styled.label.attrs<XTermProps>((props) => ({
  htmlFor: props.htmlFor || 'xt-txt-inputs',
  form: props.form || 'xt-form-id',
  id: props.id || undefined,
}))<XTermProps>`
  display: flex;
  flex-flow: column nowrap;
  background-color: ${({ theme }) => theme.palette.common.black};
  margin: 4px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  /* border-radius: ${(props) => props.theme.defaultRadius}; */
  /* border-radius: ${(props) => props.theme.defaultRadius}; */

  &:hover {
    cursor: text;
    border: 2px solid ${({ theme }) => theme.palette.secondary.cyan};
  }

  &:active {
    cursor: pointer;
    border: 3px solid ${({ theme }) => theme.palette.primary.neon};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap; */
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
  justify-content: space-around;
  align-items: space-around;
  margin: 4px 6px 4px 6px;
  padding: 4px 4px 4px 4px;
  border: ${(props) => `4px solid  ${props.theme.palette.common.black}`};
  border-radius: ${(props) => props.theme.defaultRadius};
  font-family: ${(props) => props.theme.fonts.at(2)};
  background-color: ${(props) => props.theme.palette.secondary.steel};

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    /* flex-flow: row nowrap; */
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    /* flex-flow: column wrap;
    align-items: center; */
    display: none;
  }
`;

const borderPulse = keyframes`
  from {
    border: .3px solid rgb(0, 0, 0);
    margin: 0;
    box-shadow:  1px 2px 1px rgba(0, 229, 255, 0.664);
    /* filter: drop-shadow(2px 4px 2px rgb(125, 5, 45)) invert(75%); */
  }

  50% {
    border: .6px solid rgb(40, 225, 31);
    margin: 1px;
    box-shadow:  2px 2px 3px rgba(0, 229, 255, 0.838);
  }


  to {
    border: .8px solid rgb(40, 220, 30);
    margin: 2px;
    box-shadow:  2px 3px 3px rgba(0, 229, 255, 0.664);
    /* box-shadow:;
    content: '\n \n Hey there, I'm Brandon & I'm a Web Dev! \n \n \n Click/touch anywhere to continue.'; */
  }

  /* 20% {
    opacity: 0.15;
    filter: brightness(20%);
    box-shadow: 0.5px 0.5px 0.5px rgb(2, 1, 4);
  }

  40% {
    opacity: 0.3;
    filter: brightness(50%);
    box-shadow: 1px 1px 1px rgb(12, 1, 4);
  }

  60% {
    opacity: 0.6;
    filter: brightness(75%);
     box-shadow: 1px 1px 1px rgb(16, 5, 10);
  }

  80% {
    opacity: 0.8;
    filter: brightness(110%);
     box-shadow: 1px 1px 1px rgb(12, 1, 4);
  } */
`;

const fadeInBright = keyframes`
  from {
    opacity: 0;
    filter: brightness(8%)
    /* box-shadow: unset; */
    /* filter: drop-shadow(2px 4px 2px rgb(125, 5, 45)) invert(75%); */
  }

  20% {
    opacity: 0.15;
    filter: brightness(20%);
    /* box-shadow: 0.5px 0.5px 0.5px rgb(2, 1, 4); */
  }

  40% {
    opacity: 0.3;
    filter: brightness(42%);
    /* box-shadow: 1px 1px 1px rgb(12, 1, 4); */
  }

  60% {
    opacity: 0.6;
    filter: brightness(76%);
    /* box-shadow: 1px 1px 1px rgb(16, 5, 10); */
  }

  80% {
    opacity: 0.8;
    filter: brightness(90%);
    /* box-shadow: 1px 1px 1px rgb(12, 1, 4); */
  }

  to {
    opacity: 1;
    filter: brightness(100%);
    /* box-shadow: 1px 1px 1px rgb(26, 8, 12); */
    /* content: '\n \n Hey there, I'm Brandon & I'm a Web Dev! \n \n \n Click/touch anywhere to continue.'; */
  }
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  name: props.name || 'xt-txt',
  placeholder: props.placeholder || '/usr/bin/bash',
}))<XTermProps>`
  resize: none;
  overflow: scroll;
  flex: 2 1 60vw;
  min-height: 60vh;
  padding: 4px 2px 2px 2px;

  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.secondary.cyan};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  font-size: 32px;
  letter-spacing: 0.5px;
  caret-shape: block;
  text-align: center;
  text-transform: full-size-kana;
  border: 0;
  opacity: 0;
  animation:
    ${fadeInBright} 1850ms steps(30, end) 450ms 1 normal both,
    ${borderPulse} 980ms linear 2000ms infinite;

  /*
  &::after {
  }
  */

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    font-size: 30px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 24px;
  }
`;

export const XTInput = styled.input.attrs<XTermProps>((props) => ({
  htmlFor: props.htmlFor || 'xt-textarea',
  form: props.form || 'xt-form',
  id: props.id || 'xt-prompt',
  name: props.name || 'xt-prompt',
  type: props.type || 'text',
  placeHolder: props.placeHolder || '\uf120',
  // defaultValue: props.defaultValue || 'enter',
}))<XTermProps>`
  background-color: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.secondary.green};
  padding: 4px 10px 10px 4px;
  font-size: 16px;
  flex: 2 1 6vh;
  /* justify-self: end; */
  caret-color: ${({ theme }) => theme.palette.secondary.neon};
  caret-shape: block;
  border: 0;
  /*
  &:after {
    content: '\ue4096';
  } */

  /* accent-color: ${({ theme }) => theme.palette.tertiary.steel}; */

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 16px;
    /* padding-bottom: 5px; */
  }
`;

export const XTCode = styled.code<XTermProps>(
  (props) => `
  display: inline-flex;
  align-items: center;
  margin: 4px 4px auto;
  color: ${props.theme.palette.secondary.neon};
  font-size: 18px;
  font-weight: 450;
  text-align: right;
  text-decoration: underline;
  text-decoration-color: ${props.theme.palette.secondary.gray};

  /* max-width: 60vw;
     padding: 4px 4px 4px 4px; */

  @media(min-width: ${props.theme.breakpoints.fullDisplay}) {
    font-size: 20px;
    /* flex: 2 1 2vw; */
  }

  @media(max-width: ${props.theme.breakpoints.phone}) {
    font-size: 16px;
  }
`,
);

/* text-decoration-color: ${({ theme }) => theme.palette.secondary.gray}; */
/* text-decoration: underline; */
export const XTIcon = styled(Icon)`
  display: unset;
  align-items: unset;
  position: absolute;
  object-position: left top;
  text-align: left;
  margin: 2px 2px 2px 2px;
  padding: 3px 3px;
  position: absolute;
  z-index: 2;
`;





// export const Minmz = styled.button`
//   /* flex: 0 2 10%; */
//   width: 10vh;
//   font-family: 'MonocraftNF';
//   font-size: 24px;
//   background-color: yellow;
// `;
