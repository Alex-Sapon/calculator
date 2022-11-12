import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 10px;
  height: ${({ theme }) => theme.size.height}px;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    gap: 0;
    height: 651px;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  padding: 20px;

  @media (max-width: 767.98px) {
    padding: 20px 20px 0 20px;
  }
`;

export const RightSide = styled.div`
  padding: 20px;
  border-left: ${({ theme }) => `2px solid ${theme.color.border}`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 767.98px) {
    border-left: none;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize[2]}px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.color.primary};
`;
