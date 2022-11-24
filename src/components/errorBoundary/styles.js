import styled from 'styled-components';

import { fontSize, border, height, width, boxShadow, padding, margin } from '@styles/theme';

export const ErrorWrapper = styled.div`
  min-width: ${width.app.basic}px;
  height: ${height.error.basic}px;
  padding: ${padding.errorWrap.basic}px;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `${border.b1}px solid ${theme.color.error}`};
  margin: ${margin.errorWrap}% auto 0;
  color: ${({ theme }) => theme.color.error};
  -webkit-box-shadow: ${boxShadow[0]};

  @media (max-width: 767.98px) {
    min-width: ${width.app.small}px;
    height: ${height.error.small}px;
    padding: ${padding.errorWrap.small}px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: ${fontSize.fz20}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: ${margin.errorTitle}px;
`;

export const ErrorSubtitle = styled.h3`
  font-size: ${fontSize.fz18}px;
`;
