import styled from 'styled-components';

export const SettingsContainer = styled.div`
  padding: 20px;
  height: 424px;
  background-color: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => `1px solid ${theme.color.border}`};

  @media (max-width: 767.98px) {
    height: 651px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  text-align: left;
  margin-bottom: 20px;
`;

export const SettingsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;

  @media (max-width: 767.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Select = styled.select`
  border: ${({ theme }) => `2px solid ${theme.color.border}`};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  padding: 7px;

  @media (max-width: 767.98px) {
    option {
      font-size: ${({ theme }) => theme.fontSize[2]}px;
    }
  }
`;
