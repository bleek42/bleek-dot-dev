import styled, { type DefaultTheme, type StyledComponentProps } from 'styled-components';

import { type XTermComponent } from '@/interfaces/Component';
import { Icon, borderPulse, fadeInBright } from '@/components/common';

export type XTermProps = StyledComponentProps<
  'textarea' | 'form' | 'input' | 'label' | 'code',
  DefaultTheme,
  XTermComponent,
  string | number | symbol
>;

export const XTForm = styled.form.attrs((props: XTermProps & XTermComponent) => ({
  id: props.id || 'xt-form',
  name: props.name || 'xt-form',
}))<XTermProps>`
  display: inline-block;
  max-width: 98vw;
  max-height: 96vh;
  box-shadow: ${(props) => props.theme.palette.secondary.steel} 1.5em 1.25em;
  border: 4px groove ${(props) => props.theme.palette.secondary.blue};
  margin: 8px 8px 8px 8px;
  background-color: ${(props) => props.theme.palette.common.black};
`;

export const XTLabel = styled.label.attrs<XTermProps & XTermComponent>((props) => ({
  htmlFor: props.htmlFor || 'xt-txt-inputs',
  form: props.form || 'xt-form-id',
  id: props.id || undefined,
}))<XTermProps>`
  display: flex;
  justify-content: stretch;
  align-items: stretch;
  background-color: ${({ theme }) => theme.palette.common.black};
  flex-flow: column nowrap;
  border: none;

  &:hover {
    cursor: text;
    border: 1px solid ${({ theme }) => theme.palette.secondary.cyan};
  }

  &:active {
    cursor: pointer;
    border: 1.5 solid ${({ theme }) => theme.palette.primary.cyan};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallTab}) {
    flex-flow: column wrap;
    /* align-content: flex-start; */
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
  flex: 2 1 72vh;

  min-width: 96vw;
  border: 0;
  opacity: 0;
  padding: 4px 2px 2px 2px;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.secondary.cyan};
  font-family: ${({ theme }) => theme.fonts.at(2)};
  font-size: 1.7em;
  letter-spacing: 0.3px;
  caret-shape: block;
  text-align: center;

  animation:
    ${fadeInBright} 1850ms steps(30) 360ms 1 normal both,
    ${borderPulse} 900ms steps(45) 2000ms infinite;

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
    justify-content: space-around;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smallTab}) {
    align-self: flex-start;
    font-size: 1.5em;
  }
`;

export const XTInput = styled.input.attrs<XTermProps & XTermComponent>((props) => ({
  form: props.form || 'xt-form',
  id: props.id || 'xt-prompt-tty0',
  name: props.name || 'xt-prompt',
  type: props.type || 'text',
  // placeHolder: props.placeHolder || '\uf120',
}))<XTermProps>`
  caret-shape: block;
  caret-color: ${({ theme }) => theme.palette.secondary.green};
  color: ${({ theme }) => theme.palette.secondary.neon};
  background-color: ${({ theme }) => theme.palette.secondary.black};
  font-size: 1em;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.at(2)};
  padding: 2px 2px 2px 2px;
  border: 0;
  overflow: visible;

  @media (min-width: ${(props) => props.theme.breakpoints.fullDisplay}) {
  }

  @media (max-width: ${(props) => props.theme.breakpoints.smallTab}) {
    /* align-self: center; */
    /* padding-bottom: 5px; */
  }
`;
// ${XTLabel} > & {
//   flex-flow: row nowrap;
// }

export const XTCode = styled.code<XTermProps & XTermComponent>`
  color: ${({ theme }) => theme.palette.tertiary.green};
  background-color: ${(props) => props.theme.palette.secondary.steel};
  font-size: 1.65em;
  white-space: pre;
  padding: 0 8px;
  margin: 0 0 12px 12px;
  border: 0.5px solid ${({ theme }) => theme.palette.secondary.cyan};
`;

export const XTPrompt = styled(XTLabel)`
  display: inline-flex;
  flex-flow: row wrap;
  align-items: stretch;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.fonts.at(2)};
  min-width: 52vw;
  min-height: 2vw;
  max-width: 90vw;
  border: 0.8px groove ${({ theme }) => theme.palette.secondary.cyan};

  /* justify-content: stretch; */
  color: ${({ theme }) => theme.palette.secondary.green};
  background-color: ${({ theme }) => theme.palette.secondary.black};
  margin: 2px;
  padding: 4px;
  font-size: 1em;

  @media (min-width: ${({ theme }) => theme.breakpoints.fullDisplay}) {
    font-size: 1.5em;
    align-self: stretch;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    font-size: 0.8em;
    /* flex-flow: column wrap; */
  }
`;

export const XTIcon = styled(Icon)`
  display: inline-block;
  position: absolute;
  margin: 4px;
  padding: 2px;
  z-index: 2;
  font-size: 2em;
`;

// ${XTLabel} > & {
//   flex-flow: row wrap;
// }
