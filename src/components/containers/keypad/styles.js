import styled from 'styled-components';

export const KeypadContainer = styled.div`
  display: grid;
  gap: 10px;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, 60px);
  grid-template-rows: repeat(5, 50px);

  @media (max-width: 767.98px) {
    padding-bottom: 20px;
    border-bottom: ${({ theme }) => `2px solid ${theme.color.border}`};
  }
`;

export const KeyStyled = styled.div`
  font-size: ${({ theme }) => theme.fontSize[5]}px;
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  background-color: ${({ theme }) => theme.color.secondaryWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryWhite};
  }

  &:active {
    scale: 0.93;
  }
`;
