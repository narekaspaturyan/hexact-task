import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ChartImage from 'components/assets/images/ChartImage.png';
import styled from 'styled-components';
import Button from 'components/utils/Button';
import SimpleSlider from './LogoCarusel';
import RaitingWrapper from './RaitingWrapper';
import FeedBackCarusel from './FeedbackCarusel';

const HeaderH1 = styled.h1`
  color: ${({ theme }) => theme.text_color};
  font-weight: 800;
  margin: 2rem 0;
`;

const HeaderH2 = styled.h2`
  color: ${({ theme }) => theme.text_color};
  font-weight: 700;
  margin: 2rem 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.text_color};
  font-weight: 500;
  margin: 2rem 0;
  font-size: 1rem;
`;

function LandingMain() {
  return (
    <Container>
      <Row>
        <Col lg={5} xl={6}>
          <HeaderH1>Beyond user experiance</HeaderH1>
          <HeaderH2>
            Meet Hexometer, your AI sidekick that works 24/7 to catch problems
            before they affect your business.
          </HeaderH2>
          <Text>
            Every day your website can face an increasing range of threats.
            Server problems, slow landing pages, broken links, frustrating
            mobile experiences, embarrassing spelling mistakes, changing SEO
            rules, 3rd party services breaking, or security issues that put your
            business at risk.
          </Text>

          <Text>
            To make matters worse, these issues can linger unnoticed, wasting
            your ad-budget and costing your business lost sales.
          </Text>
          <Text>
            Hexometer monitors your website 24/7, to catch Availability,
            Performance, User experience, SEO, Health and Security problems,
            before they affect your customers.
          </Text>

          <Button style={{ maxWidth: '320px' }} size="l">
            Get started with our free plan
          </Button>
        </Col>
        <Col lg={7} xl={6}>
          <img src={ChartImage} alt="ChartImage" />
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <HeaderH2>
            Trusted by 15,000+ businesses &amp; compatible with over 100+
            platforms
          </HeaderH2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <SimpleSlider />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col lg={5} className="mb-4">
          <RaitingWrapper />
        </Col>
        <Col lg={7} className="mb-4">
          <FeedBackCarusel />
        </Col>
      </Row>
    </Container>
  );
}

export default LandingMain;
