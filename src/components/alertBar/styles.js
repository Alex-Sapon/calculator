import styled from 'styled-components';

import { width, fontSize, boxShadow } from '@styles/theme';

export const AlertBarContainer = styled.div`
  position: absolute; 
  overflow: hidden;
  display: grid;
  align-content: flex-start;
  column-gap: 15px;
  grid-template-columns: auto 1fr;
  z-index: 900;
  font-size: ${fontSize.fz20};
  width: ${width.errorBar}%;
  background-color: ${({ theme }) => theme.color.errorBarBG};
  color: ${({ theme }) => theme.color.errorBarText};
  left: 5%;
  bottom: 5%;
  padding: 15px 10px;
  -webkit-box-shadow: ${boxShadow.appContainer};
`;

export const AlertBarContent = styled.div``;

export const AlertBarTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AlertBarSubtitle = styled.div``;
