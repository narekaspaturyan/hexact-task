import React from 'react';
import StarCount from 'components/utils/StarCount';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GetAppStar from 'components/assets/images/GetAppStar';
import CapterraStar from 'components/assets/images/CapterraStar';
import Star1 from 'components/assets/images/Star1';
import Star from 'components/assets/images/Star';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Span = styled.span`
  width: 40px;
  height: 40px;
  margin: 1rem, 0;
`;
const Ratingnumber = styled.p`
  margin: 0 0.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text_color};
`;

function RaitingWrapper({ count, ...rest }) {
  return (
    <Container>
      <Row>
        <Col>
          <Span>
            <span className="d-flex align-items-center">
              <GetAppStar />
              <Ratingnumber>5/4</Ratingnumber>
            </span>
            <StarCount count={2} />
          </Span>
        </Col>
        <Col>
          <Span>
            <span className="d-flex align-items-center">
              <CapterraStar />
              <Ratingnumber>5/4</Ratingnumber>
            </span>
            <StarCount count={5} />
          </Span>
        </Col>
        <Col>
          <Span>
            <span className="d-flex align-items-center">
              <Star />
              <Ratingnumber>5/4</Ratingnumber>
            </span>
            <StarCount count={3} />
          </Span>
        </Col>
        <Col>
          <Span>
            <span className="d-flex align-items-center">
              <Star1 />
              <Ratingnumber>5/4</Ratingnumber>
            </span>
            <StarCount count={1} />
          </Span>
        </Col>
      </Row>
    </Container>
  );
}

RaitingWrapper.propTypes = {
  count: PropTypes.number,
};

export default RaitingWrapper;
