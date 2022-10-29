import styled from 'styled-components';

export const HistoryContainer = styled.div`
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

export const HistoryList = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
`;

export const HistoryItem = styled.div`
  margin-bottom: 5px;
`;
