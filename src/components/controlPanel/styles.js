import styled from 'styled-components';

import { fontSize, border, height, radius, column } from '@styles/theme';

export const SettingsContainer = styled.div`
  padding: 20px;
  height: ${height.settings.basic}px;
  background-color: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => `${border.b1}px solid ${theme.color.border}`};

  @media (max-width: 767.98px) {
    height: ${height.settings.small}px;
  }
`;

export const Title = styled.h2`
  font-size: ${fontSize.fz20}px;
  text-align: left;
  margin-bottom: 20px;
`;

export const SettingsGroup = styled.div`
  display: grid;
  grid-template-columns: ${column.settings.basic};
  gap: 30px;

  @media (max-width: 767.98px) {
    grid-template-columns: ${column.settings.small};
  }
`;

export const Select = styled.select`
  border: ${({ theme }) => `${border.b2}px solid ${theme.color.border}`};
  border-radius: ${radius.r5}px;
  font-size: ${fontSize.fz16}px;
  padding: 7px;

  @media (max-width: 767.98px) {
    option {
      font-size: ${fontSize.fz16}px;
    }
  }
`;
