import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  max-width: 590px;
  height: 505px;
  padding: 40px;
  background-color: #fff;
  border: 1px solid #ea5d5d;
  margin: 10% auto 0;
  color: #ea5d5d;
  -webkit-box-shadow: 0 3px 9px 2px rgba(34, 60, 80, .1);

  @media (max-width: 767.98px) {
    padding: 20px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const ErrorSubtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;
