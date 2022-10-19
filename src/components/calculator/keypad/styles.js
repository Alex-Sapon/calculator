import styled from 'styled-components';

export const KeypadContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, 60px);
  grid-template-rows: repeat(5, 50px);
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
