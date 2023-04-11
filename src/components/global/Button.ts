import styled from 'styled-components';

enum BTNS {
  'default',
  'close',
  'max',
  'min',
}

export const Btn = styled.button.attrs((props) => ({
  btnType: BTNS['close'] | BTNS['max'] | BTNS['min'] | BTNS['default'],
}))`
  color: ${(props) =>
    props.btnType['max']
      ? props.theme.palette.primary.cyan
      : props.btnType['min']
      ? props.theme.palette.primary.yellow
      : props.btnType['close']
      ? props.theme.palette.primary.orange
      : props.theme.palette.primary.neon};
  background-color: ${({ theme }) => theme.palette.primary.gray};
  width: 10vh;
  font-family: 'Monocraft NF';
  font-size: 24px;
`;
