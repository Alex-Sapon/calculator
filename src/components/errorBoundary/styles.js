import styled from 'styled-components';

import { fontSize, border, height, width, boxShadow } from '@styles/theme';

export const ErrorWrapper = styled.div`
  max-width: ${width.error}px;
  height: ${height.error}px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `${border.b1}px solid ${theme.color.error}`};
  margin: 10% auto 0;
  color: ${({ theme }) => theme.color.error};
  -webkit-box-shadow: ${boxShadow[0]};

  @media (max-width: 767.98px) {
    padding: 20px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: ${fontSize.fz20}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const ErrorSubtitle = styled.h3`
  font-size: ${fontSize.fz18}px;
  margin-bottom: 20px;
`;
