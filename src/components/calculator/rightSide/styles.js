import styled from 'styled-components';

export const RightSideContainer = styled.div`
  padding: 20px;
  border-left: ${({ theme }) => `2px solid ${theme.border}`};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;

  @media (max-width: 767.98px) {
    border-left: none;
  }
`;
