import { keyframes } from 'styled-components';

export const borderPulse = keyframes`
  from {
    border: 0.6px inset rgb(5, 12, 10, 0.6);
    margin: 1px;
  }

  50% {
    border: 0.8px outset rgb(40, 225, 31, 0.78);
    margin: 1.5px;
  }

  75% {
    border: 1.2px inset rgb(40, 225, 31, 0.86);
    margin: 1.5px;
  }


  to {
    border: 1.5px outset rgb(40, 220, 30, 0.94);
    margin: 1.8px;
  }

`;

export const fadeInBright = keyframes`
  from {
    opacity: 0;
    filter: brightness(0.1) drop-shadow(0 0 0.5rem rgb(45, 120, 125));
  }

  20% {
    opacity: 0.15;
    filter: brightness(0.2) drop-shadow(0 0 0.5rem rgb(48, 145, 125));
  }

  40% {
    opacity: 0.3;
    filter: brightness(0.4) drop-shadow(0 0 0.5rem rgb(56, 145, 120));

  }

  60% {
    opacity: 0.6;
    filter: brightness(0.6) drop-shadow(0 0 0.5rem rgb(88, 138, 128));
  }

  80% {
    opacity: 0.8;
    filter: brightness(0.95) drop-shadow(0 0 0.5rem rgb(88, 130, 125));
  }

  to {
    opacity: 1;
    filter: brightness(1.1) drop-shadow(0 0 0.5rem rgb(45, 120, 125));
  }
`;

export const shimmer = keyframes`
  from {
    mask-position: 150%;
    -webkit-mask-position: 150%;
  }

  50% {
    mask-position: 50%;
    -webkit-mask-position: 50%;
  }

  to {
    mask-position: -50%;
   -webkit-mask-position: -50%;

  }
`;
