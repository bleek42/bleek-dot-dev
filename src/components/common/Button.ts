import styled from 'styled-components';

export const Btn = styled.button`
  color: ${({ theme }) => theme.palette.primary.neon};
  background-color: ${({ theme }) => theme.palette.primary.gray};
  flex: 1 3 12vh;
  font-family: ${({ theme }) => theme.fonts.at(2)};
  font-size: 24px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 12% / 12%;
  margin: 4px 4px;
  padding: 4px 4px;
`;

export const BtnClose = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.orange};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.orange + '1px 2px'};
    cursor: pointer;
  }
`;

export const BtnMax = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.cyan};
  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.cyan + '1px 2px'};
    cursor: pointer;
  }
`;

export const BtnMin = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.yellow};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.yellow + '1px 2px'};
    cursor: pointer;
  }
`;
