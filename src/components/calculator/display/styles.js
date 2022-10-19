import styled from 'styled-components';

export const DisplayMain = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => `2px solid ${theme.border}`};
  text-align: right;
  font-size: 26px;
  height: 50px;
  color: ${({ theme }) => theme.text};
`;

export const DisplayHistory = styled.div`
  position: absolute;
  right: 35px;
  top: 5px;
  font-size: 14px;
  word-wrap: break-word;
  word-break: break-all;
  color: ${({ theme }) => theme.text};
`;
