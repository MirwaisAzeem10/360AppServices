import React from "react";
import { Row, Col, Container } from "react-bootstrap";

function Footer() {
  return (
    <div
      style={{
        paddingTop: "100px",
        backgroundImage: 'url("/images/Group 1293.svg")',
      }}
    >
      <h3 style={{ color: "white", textAlign: "center" }}>360 AppServices</h3>

      <div style={{ paddingTop: "50px" }}>
        <Container style={{ paddingTop: "50px" }}>
          <Row>
            <Col>
              <h5 style={{ color: "white" }}>Our Targeted Cities</h5>
              <ul style={{ color: "white" }}>
                <li>Boston</li>
                <li>Minneapolis</li>
                <li>Seattle</li>
                <li>Nashville</li>
                <li>Columbus</li>
                <li>Denver</li>
                <li>Portland</li>
                <li>Louisville</li>
              </ul>
            </Col>

            <Col>
              <ul style={{ color: "white" }}>
                <li>Boston</li>
                <li>Minneapolis</li>
                <li>Seattle</li>
                <li>Nashville</li>
                <li>Columbus</li>
                <li>Denver</li>
                <li>Portland</li>
                <li>Louisville</li>
              </ul>
            </Col>

            <Col>
              <ul style={{ color: "white" }}>
                <li>Boston</li>
                <li>Minneapolis</li>
                <li>Seattle</li>
                <li>Nashville</li>
                <li>Columbus</li>
              </ul>
            </Col>

            <Col style={{ color: "white" }}>
              <h5>Contact Us</h5>
              <p>info@360AppServices</p>
              <p>0345568655</p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  filter: "brightness(0) invert(1)",
                }}
              >
                <img style={{ width: "20px" }} src="/images/facebook.png" />
                <img style={{ width: "20px" }} src="/images/instagram.png" />
                <img style={{ width: "20px" }} src="/images/twitter.png" />
                <img style={{ width: "20px" }} src="/images/linkedin.png" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
