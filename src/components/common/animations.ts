import { keyframes } from 'styled-components';

export const borderPulse = keyframes`
  from {
    filter: brightness(0.8);
    border: 0.4px inset rgb(0, 0, 0);
    margin: 0.8px;
  }

  50% {
    border: 0.7px inset rgb(40, 225, 31);
    margin: 1px;
    filter: brightness(0.9) drop-shadow(0 0 0.4rem rgb(155, 56, 205));
  }

  75% {
    filter: brightness(1.05)  drop-shadow(0 0 0.7rem rgb(158, 64, 210));
    border: 1px outset rgb(40, 225, 31);
    margin: 2px;
  }

  to {
    filter: brightness(1.1) drop-shadow(0 0 0.9rem rgb(162, 65, 211));
    border: 1.1px outset rgb(40, 220, 30);
    margin: 2.5px;
  }

`;

export const fadeInBright = keyframes`
  from {
    opacity: 0;
    filter: brightness(0.1) drop-shadow(0 0 0.4rem rgb(120, 24, 200));
  }

  20% {
    opacity: 0.15;
    filter: brightness(0.2) ;
  }

  40% {
    opacity: 0.3;
    filter: brightness(0.4) ;
  }

  60% {
    opacity: 0.6;
    filter: brightness(0.6) ;
  }

  80% {
    opacity: 0.8;
    filter: brightness(0.9) ;
  }

  to {
    opacity: 1;
    filter: brightness(1.15) ;
  }
`;

export const shimmerUnderline = keyframes`
  from {
    filter: brightness(0.8) drop-shadow(0 0 0.6rem rgb(155, 50, 204));
    /* transform: ; */
  }

  25% {
    filter: brightness(0.9) drop-shadow(0 0 0.7rem rgb(155, 56, 205));

  }

  50% {
    filter: brightness(0.9) drop-shadow(0 0 0.9rem rgb(162, 65, 211));

  }

  75% {
    filter: brightness(1.05)  drop-shadow(0 0 0.8rem rgb(158, 64, 210));
  }

  to {
    filter: brightness(1.1) drop-shadow(0 0 0.9rem rgb(162, 65, 211));
  }
`;
