import styled, {
  type DefaultTheme,
  type StyledComponentProps,
} from 'styled-components';

import { type XTermComponent } from '@/interfaces/Component';
import { Icon, borderPulse, fadeInBright } from '../common';

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
  display: block;
  box-shadow: ${(props) => props.theme.palette.secondary.steel} 2em 1em;
  border: 3px solid ${(props) => props.theme.palette.secondary.blue};
  margin: 8px 4px 8px 4px;
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
    border: 1px solid ${({ theme }) => theme.palette.secondary.cyan};
  }

  &:active {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.palette.primary.neon};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    max-height: 80vh;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smallTab}) {
    flex-flow: column wrap;
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


export const XTxtArea = styled.textarea.attrs((props) => ({
  name: props.name || 'xt-txt',
  placeholder: props.placeholder || '/usr/bin/bash',
}))<XTermProps>`
  resize: none;
  overflow: scroll;
  flex: 1 1 80vh;
  
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
  color: ${({ theme }) => theme.palette.secondary.neon};
  background-color: ${({ theme }) => theme.palette.common.black};
  caret-color: ${({ theme }) => theme.palette.secondary.green};
  padding: 4px 10px 10px 4px;
  font-size: 18px;
  caret-shape: block;

  border: 0;

  /* accent-color: ${({ theme }) => theme.palette.tertiary.steel}; */

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 16px;
    /* padding-bottom: 5px; */
  }
`;

export const XTCode = styled.code.attrs((props) => ({
  contentEditable: props.contentEditable || 'false',
}))<XTermProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  color: ${({ theme }) => theme.palette.secondary.green};
  background-color: ${(props) => props.theme.palette.secondary.black};
  font-size: 18px;
  font-weight: 450;
  /* text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.palette.secondary.gray}; */
  max-width: 42vw;
  min-width: fit-content;
  white-space: pre;
/* 
  &::before {
    white-space: pre;
    content: '  ';
  }
  */

  /* &:after {
     content: ' \n '
  }  */

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 20px;
    /* flex-flow: row nowrap; */
    /* flex: 2 1 2vw; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    font-size: 16px;
    flex-flow: row wrap;
  }
`;

export const XTPrompt = styled(XTCode)`
  color: ${({ theme }) => theme.palette.secondary.green};
  background-color: ${({ theme }) => theme.palette.secondary.steel};
  margin: 2px 2px;
  padding: 2px 2px;

  font-size: 16px;

  &:before {
    /* white-space: pre; */
    /* content: '  ' */
  }

  &:after {
    /* content: ' \n ' */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 20px;
    /* flex-flow: row nowrap; */
    /* flex: 2 1 2vw; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  }
`;



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

// export const XTCmd = styled(XTCode)`
//   display: unset;
//   color: ${({ theme }) => theme.palette.secondary.neon};
//   background-color: ${({ theme }) => theme.palette.common.black};

//   caret-color: ${({ theme }) => theme.palette.secondary.neon};
//   caret-shape: block;

//   @media(min-width: ${({ theme }) => theme.breakpoints.fullDisplay}) {
//     font-size: 20px;
//     /* flex-flow: row nowrap; */
//     /* flex: 2 1 2vw; */
//   }

//   @media(max-width: ${({ theme }) => theme.breakpoints.phone}) {
//     font-size: 16px;
//   }
// `
