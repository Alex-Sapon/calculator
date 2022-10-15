import styled from 'styled-components';

export const RightSide = styled.div`
  padding: 20px;
  border-left: ${({theme}) => `2px solid ${theme.border}`};
  overflow: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme}) => theme.secondaryBackground};
    border-radius: 6px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 20px;
`;

export const History = styled.div`
  font-size: 18px;

  div {
    margin-bottom: 5px;
  }
`;
