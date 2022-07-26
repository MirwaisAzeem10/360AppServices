import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Stamp() {
  return (
    <div style={{ paddingTop: "50px" }}>
      <Container>
        <Row>
          <Col>
            <img src="./images/100-premium-quality.svg" />
          </Col>
          <Col>
            <img src="./images/100-premium-quality.svg" />
          </Col>
          <Col>
            <img src="./images/100-premium-quality.svg" />
          </Col>
          <Col>
            <img src="./images/100-premium-quality.svg" />
          </Col>
          <Col>
            <img src="./images/100-premium-quality.svg" />
          </Col>
        </Row>
      </Container>

      <div
        style={{
          display: "flex", 
          
          justifyContent: "between",
          gap: "600px",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <h5>Contact Us If You Want More Detail.</h5>
        <button
          style={{
            background: "#fb8c00",

            border: "2px solid #fb8c00",
            borderRadius: "5px",
            color: "#fff",
            flexShrink: "0",
            fontSize: "1.1rem",
            fontWeight: "700",
            width: "20%",
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Stamp;
