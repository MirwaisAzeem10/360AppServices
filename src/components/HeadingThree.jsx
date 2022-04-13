import React from "react";
import { Row, Col, Container } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./HeadingThree.css";

function HeadingThree() {
  return (
    <div style={{ paddingTop: "150px", paddingBottom: "100px" }}>
      <h4 style={{ textAlign: "center", color: "#2980B9" }}>
        AREAS WHERE WE DELIVER
      </h4>
      <p style={{ textAlign: "center" }}>
        Wondering where we can assist you? 360-app Services dominates the web
        app development arena in multiple industries.
      </p>

      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col className="my-box d-flex justify-content-center align-items-center ">
            <img src="/images/Mask Group 217.svg" />
            <h5 style={{ color: "#2980B9", paddingTop: "30px" }}>E-COMMERCE</h5>
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-right" /> */}
          </Col>
          <Col className="my-box d-flex justify-content-center align-items-center ">
            <img src="/images/Mask Group 218.svg" />
            <h5 style={{ color: "#2980B9", paddingTop: "30px" }}>
              {/* <FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-right" /> */}
              SOCIAL NETWORKING
            </h5>
          </Col>
          <Col className="my-box d-flex justify-content-center align-items-center ">
            <img src="/images/Mask Group 219.svg" />
            <h5 style={{ color: "#2980B9", paddingTop: "30px" }}>
              {/* <FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-right" /> */}
              HEALTH CARE
            </h5>
          </Col>
          <Col className="my-box d-flex justify-content-center align-items-center ">
            <img src="/images/Mask Group 220.svg" />
            <h5 style={{ color: "#2980B9", paddingTop: "30px" }}>REAl STATE</h5>
            {/* <FontAwesomeIcon icon="fa-solid fa-arrow-turn-down-right" /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeadingThree;
