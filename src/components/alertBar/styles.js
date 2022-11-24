import styled from 'styled-components';

import { width, fontSize, boxShadow, padding, margin, column, gap, position } from '@styles/theme';

export const AlertBarContainer = styled.div`
  position: absolute; 
  overflow: hidden;
  display: grid;
  align-content: flex-start;
  column-gap: ${gap.alertBar}px;
  grid-template-columns: ${column.alertBar.basic};
  z-index: 900;
  font-size: ${fontSize.fz20};
  width: ${width.errorBar}%;
  background-color: ${({ theme }) => theme.color.errorBarBG};
  color: ${({ theme }) => theme.color.errorBarText};
  left: ${position.alertBar.l}%;
  bottom: ${position.alertBar.b}%;
  padding: ${padding.alertBar.tb}px ${padding.alertBar.rl}px;
  -webkit-box-shadow: ${boxShadow.appContainer};
`;

export const AlertBarContent = styled.div``;

export const AlertBarTitle = styled.div`
  font-weight: bold;
  margin-bottom: ${margin.alertBar}px;
`;

export const AlertBarSubtitle = styled.div``;
