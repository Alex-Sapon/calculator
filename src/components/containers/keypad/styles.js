import styled from 'styled-components';

import { fontSize, radius, border, column, row } from '@styles/theme';

export const KeypadContainer = styled.div`
  display: grid;
  grid-template-columns: ${column.keypad.basic};
  grid-template-rows: ${row.keypad.basic};
  gap: 10px;
  justify-content: center;
  align-content: center;

  @media (max-width: 767.98px) {
    padding-bottom: 20px;
    border-bottom: ${({ theme }) => `${border.b2}px solid ${theme.color.border}`};
  }
`;

export const KeyStyled = styled.div`
  font-size: ${fontSize.fz26}px;
  border: ${({ theme }) => `${border.b1}px solid ${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.secondaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: ${radius.r4}px;
  transition: background-color .3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
  }

  &:active {
    scale: 0.93;
  }
`;
