import styled from 'styled-components';

export const DisplayMain = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 20px;
  border-bottom: ${({ theme }) => `2px solid ${theme.color.border}`};
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize[5]}px;
  height: 50px;
  color: ${({ theme }) => theme.color.primary};
`;

export const DisplayHistory = styled.div`
  padding: 0 10px;
  height: 20px;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize[1]}px;
  word-wrap: break-word;
  word-break: break-all;
  color: ${({ theme }) => theme.color.secondary};
`;

export const Expression = styled.span``;

export const Operator = styled.span`
  display: inline-block; 
  width: 10px;
`;
