import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 420px;

  @media (max-width: 767.98px) {
    height: 651px;
  }
`;

export const SpinnerStyled = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${({ theme }) => theme.color.secondaryBackground};
    animation: spinner-animation 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
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
