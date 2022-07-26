import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Banner.css";
function SecoundBanner() {
  return (
    <Container>
      <Row style={{ position: "relative" }}>
        <Col md={6} style={{ paddingTop: "150px" }}>
          <div
            style={{
              position: "absolute",
              backgroundColor: "#2980B9",
              width: "50%",
              borderBottomRightRadius: "50px",
              top: "0",
            }}
          >
            <h4>Horror</h4>
          </div>
          <h1 style={{ color: "#2980B9" }}>
            High Quality Apps Provide In Time
          </h1>
          <h6>
            360 App Services delivers business and IT solutions in spectrum of
            various platforms.
          </h6>
          <button className="btn-one">Estimate With An Expert</button>
        </Col>
        <Col md={6}>
          <img
            style={{ width: "65%", display: "block", margin: "0 auto" }}
            src="/images/Mask Group 102.svg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SecoundBanner;
