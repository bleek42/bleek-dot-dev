import styled from 'styled-components';

export const Btn = styled.button((props) => `
  color: ${props.theme.palette.primary.neon};
  background-color: ${props.theme.palette.primary.gray};
  flex: 2 1 56vw;
  height: 16vh;
  font-family: ${props.theme.fonts.at(2)};
    font-size: 26px;
  font-size: 24px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 12% / 12%;
  margin: 4px 4px;
  padding: 4px 4px;

  @media (max-width: ${props.theme.breakpoints.phone}) {
    display: none;
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    
  }
`
);

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
