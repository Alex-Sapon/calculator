import styled from 'styled-components';

import { width, boxShadow } from '@styles/theme';

export const Container = styled.div`
  min-width: ${width.app.basic}px;
  background-color: ${({ theme }) => theme.color.background};
  margin-top: 10%;
  -webkit-box-shadow: ${boxShadow.appContainer};

  @media (max-width: 767.98px) {
    min-width: ${width.app.small}px;
`;
