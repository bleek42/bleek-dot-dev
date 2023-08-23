import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type XTermComponent } from '@/interfaces/Component';
import { Icon, borderPulse, fadeInBright } from '../common';

export type XTermProps = StyledComponentProps<
  'textarea' | 'form' | 'input' | 'label' | 'code',
  DefaultTheme,
  object,
  string | number | symbol
>;

export const XTForm = styled.form.attrs((props: XTermProps & XTermComponent) => ({
  id: props.id || 'xt-form',
  name: props.name || 'xt-form',
}))<XTermProps>`
  display: block;
  box-shadow: ${(props) => props.theme.palette.secondary.steel} 2em 1em;
  border: 3px solid ${(props) => props.theme.palette.secondary.blue};
  margin: 8px 4px 8px 4px;
  background-color: ${(props) => props.theme.palette.common.black};
`;

export const XTLabel = styled.label.attrs<XTermProps & XTermComponent>((props) => ({
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

  &:hover {
    cursor: text;
    border: 1px solid ${({ theme }) => theme.palette.secondary.cyan};
  }

  &:active {
    cursor: pointer;
    border: 1.5 solid ${({ theme }) => theme.palette.primary.cyan};
  }

  @media (min-width: ${(props) => props.theme.breakpoints.laptop}) {
    max-height: 80vh;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smallTab}) {
    flex-flow: column wrap;
    align-content: flex-start;
  }
`;

export const XTBtns = styled.label.attrs<XTermProps & XTermComponent>((props) => ({
  htmlFor: props.htmlFor || 'xt-btns',
  form: props.form || 'xt-form',
}))<XTermProps & XTermComponent>`
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
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    display: none;
  }
`;

export const XTxtArea = styled.textarea.attrs((props) => ({
  id: props.id || 'xt-txt-tty0',
  name: props.name || 'xt-txt',
  placeholder: props.placeholder || '/usr/bin/bash',
}))<XTermProps & XTermComponent>`
  resize: none;
  overflow: hidden;
  flex: 1 1 80vh;
  border: 0;
  opacity: 0;
  padding: 4px 2px 2px 2px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.secondary.cyan};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  font-size: 32px;
  letter-spacing: 0.3px;
  caret-shape: block;
  text-align: center;
  animation:
    ${fadeInBright} 1850ms steps(35) 400ms 1 normal both,
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

export const XTInput = styled.input.attrs<XTermProps & XTermComponent>((props) => ({
  form: props.form || 'xt-form',
  id: props.id || 'xt-prompt-tty0',
  name: props.name || 'xt-prompt',
  type: props.type || 'text',
  placeHolder: props.placeHolder || '\uf120',
  // defaultValue: props.defaultValue || 'enter',
}))<XTermProps>`
  color: ${({ theme }) => theme.palette.secondary.neon};
  background-color: ${({ theme }) => theme.palette.common.black};
  caret-color: ${({ theme }) => theme.palette.secondary.green};
  width: 50vw;
  max-height: 4vh;
  font-size: 18px;
  caret-shape: block;
  margin-left: 4px;
  border: 0;

  /* accent-color: ${({ theme }) => theme.palette.tertiary.steel}; */

  /* @media (max-width: ${(props) => props.theme.breakpoints.phone}) {
    font-size: 16px;
    padding-bottom: 5px;
  } */
`;

export const XTCode = styled.code<XTermProps & XTermComponent>`
  display: flex;
  flex-flow: row nowrap;
  justify-content: stretch;
  color: ${({ theme }) => theme.palette.tertiary.green};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  font-size: 24px;
  font-weight: 450;
  white-space: pre;
  min-width: fit-content;
  text-decoration: underline solid ${({ theme }) => theme.palette.primary.black};

  /* @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 20px;
    flex: 1 1 4vw;
    flex-flow: row nowrap;
    flex: 2 1 2vw;
  } */

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    font-size: 16px;
    flex-flow: row wrap;
  }
`;

export const XTPrompt = styled(XTCode)`
  color: ${({ theme }) => theme.palette.primary.green};
  background-color: ${({ theme }) => theme.palette.primary.black};
  font-size: 16px;
  margin: 2px;
  padding: 4px;

  &:before {
    /* white-space: pre; */
    /* content: '  ' */
  }

  &:after {
    /* content: ' \n ' */
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    /* font-size: 20px; */
    /* flex-flow: row nowrap; */
    /* flex: 2 1 2vw; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
  }
`;

/* text-decoration-color: ${({ theme }) => theme.palette.secondary.gray}; */
/* text-decoration: underline; */
export const XTIcon = styled(Icon)`
  align-items: unset;
  display: inline-block;
  position: absolute;
  object-position: left top;
  text-align: left;
  margin: 2px 2px 2px 2px;
  padding: 3px 3px;
  z-index: 2;
`;
