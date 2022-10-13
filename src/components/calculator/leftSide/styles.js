import styled from 'styled-components';

export const LeftSide = styled.div`
  position: relative;
  padding: 20px;
`;

export const Keyboard = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(5, 1fr);
`;

export const Display = styled.div`
  position: relative;
  padding: 15px;
  margin-bottom: 20px;
  border-bottom: ${({theme}) => `2px solid ${theme.border}`};
  text-align: right;
  font-size: 26px;
  height: 70px;
  color: ${({theme}) => theme.text};
`;

export const DisplayHistory = styled.div`
  position: absolute;
  right: 35px;
  top: 5px;
  font-size: 14px;
  color: ${({theme}) => theme.text};
`;

export const Button = styled.div`
  font-size: 26px;
  width: 70px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #cacaca;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  align-self: center;
  justify-self: center;

  &:active {
    scale: 0.93;
  }
`;
