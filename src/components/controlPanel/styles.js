import styled from 'styled-components';

export const SettingsContainer = styled.div`
  width: 590px;
  padding: 20px;
  height: 420px;
  background-color: ${({ theme }) => theme.color.background};

  @media (max-width: 767.98px) {
    width: 380px;
    height: 651px;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[3]}px;
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
  border: ${({ theme }) => `2px solid ${theme.color.border}`};
  border-radius: 5px;
  margin-right: 40px;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  padding: 7px;

  @media (max-width: 767.98px) {
    width: 160px;
    margin-right: 20px;
  }

  @media (max-width: 767.98px) {
    option {
      font-size: ${({ theme }) => theme.fontSize[2]}px;
    }
  }
`;
