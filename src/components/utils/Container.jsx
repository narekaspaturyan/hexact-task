import styled from 'styled-components';

const Container = styled.div`
  // width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 24px;
  }

  @media (min-width: 1024px) {
    max-width: 1188px;
    padding: 0 24px;
  }

  @media (min-width: 1440px) {
    max-width: 1320px;
    padding: 0;
  }
`;

export default Container;
