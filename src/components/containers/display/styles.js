import styled from 'styled-components';

import { fontSize, border, height, width } from '@styles/theme';

export const DisplayMain = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => `${border.b2}px solid ${theme.color.border}`};
  text-align: right;
  font-size: ${fontSize.fz26}px;
  height: ${height.displayMain}px;
  color: ${({ theme }) => theme.color.primary};
`;

export const DisplayHistory = styled.div`
  padding: 0 10px;
  height: ${height.displayHistory}px;
  text-align: right;
  font-size: ${fontSize.fz14}px;
  word-wrap: break-word;
  word-break: break-all;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Expression = styled.span``;

export const Operator = styled.span`
  display: inline-block; 
  width: ${width.operator}px;
`;
