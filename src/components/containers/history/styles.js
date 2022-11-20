import styled from 'styled-components';

import { fontSize, radius, height, width } from '@styles/theme';

export const HistoryContainer = styled.div`
  overflow: auto;

  @media (max-width: 767.98px) {
    height: ${height.history.small}px;
  }

  &::-webkit-scrollbar {
    width: ${width.scrollbar}px;
  }

  &::-webkit-scrollbar-track {
    background: none;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.secondaryBackground};
    border-radius: ${radius.r6}px;
  }
`;

export const HistoryList = styled.div`
  font-size: ${fontSize.fz16}px;
  color: ${({ theme }) => theme.color.primary};
`;

export const HistoryItem = styled.div`
  margin-bottom: 5px;
`;
