import styled from 'styled-components';

import { fontSize, border, height, column } from '@styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${column.calculator.basic};
  gap: 10px;
  height: ${height.calculator.basic}px;
  border: ${({ theme }) => `${border.b1}px solid ${theme.color.border}`};

  @media (max-width: 767.98px) {
    grid-template-columns: ${column.calculator.small};
    gap: 0;
    height: ${height.calculator.small}px;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  padding: 20px;

  @media (max-width: 767.98px) {
    padding: 20px 20px 0 20px;
  }
`;

export const RightSide = styled.div`
  padding: 20px;
  border-left: ${({ theme }) => `${border.b2}px solid ${theme.color.border}`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 767.98px) {
    border-left: none;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${fontSize.fz16}px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.primary};
`;
