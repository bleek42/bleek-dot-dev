import styled from 'styled-components';

export const Btn = styled.button(
  (props) => `
  color: ${props.theme.palette.primary.neon};
  background-color: ${props.theme.palette.primary.gray};
  font-family: var(${props.theme.fonts.at(2)});
  flex: 2 1 12vw;
  /* max-width: 40vw; */
  min-height: 10vh;
  font-size: 28px;
  border: 2px solid ${props.theme.palette.common.black};
  border-radius: 12% / 12%;
  margin: 4px 4px auto;
  padding: 4px 4px;

  /* @media (max-width: ${props.theme.breakpoints.phone}) {
    display: none;
    font-size: 28px;
    min-height: 50%;
  } */

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */

  }
`,
);

export const BtnClose = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.orange};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.orange + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    /* display: none; */
  }
`;

export const BtnMax = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.cyan};

  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.cyan + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    /* font-size: 28px;
    min-height: 50%; */
  }
`;

export const BtnMin = styled(Btn)`
  color: ${({ theme }) => theme.palette.primary.yellow};
  fill: aqua;
  &:hover {
    text-shadow: ${({ theme }) => theme.palette.secondary.yellow + '1px 2px'};
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.phone}) {
    /* display: none; */
  }
`;
