import styled from 'styled-components';

import { height, width, animation } from '@styles/theme';

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${height.calculator.basic}px;

  @media (max-width: 767.98px) {
    height: ${height.calculator.small}px;
  }
`;

export const SpinnerStyled = styled.div`
  position: relative;
  width: ${width.spinner.wrapper}px;
  height: ${height.spinner}px;

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: ${width.spinner.element}px;
    background: ${({ theme }) => theme.color.secondaryBackground};
    animation: spinner-animation ${animation.spinner};
  }

  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }

  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }

  div:nth-child(3) {
    left: 56px;
    animation-delay: 0s;
  }

  @keyframes spinner-animation {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
`;
