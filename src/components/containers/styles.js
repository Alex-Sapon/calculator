import styled from 'styled-components';

import { fontSize, border, height, column, gap, padding, margin } from '@styles/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: ${column.calculator.basic};
  gap: ${gap.calculator}px;
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
  padding: ${padding.leftSide.basic}px;

  @media (max-width: 767.98px) {
    padding: 
    ${padding.leftSide.small.t}px 
    ${padding.leftSide.small.r}px 
    ${padding.leftSide.small.b}px 
    ${padding.leftSide.small.l}px;
  }
`;

export const RightSide = styled.div`
  padding: ${padding.rightSide.basic}px;
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
  margin-bottom: ${margin.calculator}px;
  color: ${({ theme }) => theme.color.primary};
`;
