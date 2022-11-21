import styled from 'styled-components';

import { border, width, height, fontSize } from '@styles/theme';

export const AlertBarContainer = styled.div`
  position: absolute; 
  overflow: hidden;
  z-index: 900;
  font-size: ${fontSize.fz20};
  max-width: ${width.errorBar}px;
  height: ${height.errorBar}px;
  background-color: ${({ theme }) => theme.color.errorBar}; 
  left: 5%;
  bottom: 5%;
  padding: 10px;
  border: ${({ theme }) => `${border.b2}px solid ${theme.color.border}`};
`;

export const AlertBarContent = styled.div`
  margin-top: 15px;
  padding: 0 15px 0;
`;