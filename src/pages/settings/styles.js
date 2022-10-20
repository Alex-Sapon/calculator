import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  height: 490px;
  background-color: ${({ theme }) => theme.background};
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: left;
  margin-bottom: 20px;
`;

export const SettingsGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  width: 250px;
  height: 50px;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  border-radius: 5px;
  margin-right: 40px;
  font-size: 18px;
  padding: 10px;

  option {
    font-size: 16px;
  }
`;

export const ButtonClear = styled.div`
  width: 250px;
  height: 50px;
  background-color: #f2f2f2;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: #959595;
    color: #fff;
  }
`;
