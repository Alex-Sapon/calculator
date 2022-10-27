import styled from 'styled-components';

export const DisplayMain = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => `2px solid ${theme.border}`};
  text-align: right;
  font-size: 26px;
  height: 50px;
  color: ${({ theme }) => theme.primary};
`;

export const DisplayHistory = styled.div`
  padding: 0 10px;
  height: 20px;
  text-align: right;
  font-size: 14px;
  word-wrap: break-word;
  word-break: break-all;
  color: ${({ theme }) => theme.secondary};
`;
