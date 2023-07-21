import styled from 'styled-components';

export const List = styled.ul((props) => `
  display: flex;
  border: 2px solid black;
  margin: 2px 2px;
  padding: 2px 1px 2px 1px;
  background-color: rgb(0, 0, 0);

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    
  }
`);

export const Item = styled.li((props) => `
  display: inline-flex;
  color: rgb(5, 5, 5);

  @media (max-width: ${props.theme.breakpoints.phone}) {
    /* display: none; */
    /* font-size: 28px;
    min-height: 50%; */
  }

  @media (min-width: ${props.theme.breakpoints.fullDisplay}) {
    /* flex: 3 4 6vh; */
    
  }
  
  `
);
