import styled from 'styled-components';

export const Calculator = styled.div`
  padding: 20px;
  height: 440px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 30px;
`;

export const RightSide = styled.div`
  padding: 20px;
  border-left: ${({ theme }) => `2px solid ${theme.border}`};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.secondaryBackground};
    border-radius: 6px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text};
`;

export const LeftSide = styled.div`
  position: relative;
  padding: 20px;
`;
