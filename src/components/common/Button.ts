import styled from 'styled-components';

export const Btn = styled.button(
  (props) => `
  color: ${props.theme.palette.primary.neon};
  background-color: ${props.theme.palette.primary.gray};
  font-family: var(${props.theme.fonts.at(2)});
  flex: 3 1 36vw;
  min-height: 16vh;
  font-size: 28px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 12% / 12%;
  margin: 4px 4px;
  padding: 4px 4px;

  /* @media (max-width: ${props.theme.breakpoints.phone}) {
    display: none;
    font-size: 28px;
    min-height: 50%;
  } */

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

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
    /* font-size: 28px;
    min-height: 50%; */
  }
`;

export const BtnMax = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.cyan};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.cyan + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
    /* font-size: 28px;
    min-height: 50%; */
  }
`;

export const BtnMin = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.yellow};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.yellow + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    display: none;
    /* font-size: 28px;
    min-height: 50%; */
  }
`;
