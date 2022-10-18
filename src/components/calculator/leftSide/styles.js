import styled from 'styled-components';

export const LeftSide = styled.div`
  position: relative;
  padding: 20px;
`;

export const Keyboard = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, 60px);
  grid-template-rows: repeat(5, 50px);
`;

export const Display = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: ${({theme}) => `2px solid ${theme.border}`};
  text-align: right;
  font-size: 26px;
  height: 50px;
  color: ${({theme}) => theme.text};
`;

export const DisplayHistory = styled.div`
  position: absolute;
  right: 35px;
  top: 5px;
  font-size: 14px;
  word-wrap: break-word;
  word-break: break-all;
  color: ${({theme}) => theme.text};
`;

export const Button = styled.div`
  font-size: 26px;
  border: 1px solid #cacaca;
  background-color: rgba(229, 229, 229, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: rgba(242, 242, 242, 1);
  }

  &:active {
    scale: 0.93;
  }
`;
