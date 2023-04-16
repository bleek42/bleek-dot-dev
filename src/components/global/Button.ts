import styled from 'styled-components';

export const Btn = styled.button`
  color: ${({ theme }) => theme.palette.primary.neon};
  background-color: ${({ theme }) => theme.palette.primary.gray};
  width: 10vh;
  font-family: 'MonocraftNF';
  font-size: 24px;
`;

export const BtnClose = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.orange};
`;

export const BtnMax = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.cyan};
`;

export const BtnMin = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.yellow};
`;
