import styled from 'styled-components';

export const SettingsContainer = styled.div`
  width: 590px;
  padding: 20px;
  height: 420px;
  background-color: ${({ theme }) => theme.background};

  @media (max-width: 767.98px) {
    width: 380px;
    min-height: 553px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
`;

export const SettingsGroup = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767.98px) {
    justify-content: space-between;
  }
`;

export const Select = styled.select`
  width: 180px;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  border-radius: 5px;
  margin-right: 40px;
  font-size: 16px;
  padding: 7px;

  @media (max-width: 767.98px) {
    width: 160px;
    margin-right: 20px;
  }

  @media (max-width: 767.98px) {
    option {
      font-size: 16px;
    }
  }
`;
