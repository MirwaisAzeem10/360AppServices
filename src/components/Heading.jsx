import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Heading.css";
function Heading() {
  return (
    <div>
      <h4 style={{ textAlign: "center", padding: "70px", color: "#2980B9" }}>
        WHAT WE ARE OFFERING
      </h4>

      <Container style={{ paddingBottom: "50px" }}>
        <Row>
          <Col>
            <div
              className="relative"
              style={{
                display: "flex",
                backgroundColor: "#f9f9f9",
                padding: "18px",
                width: "276px",
                position: "relative",
              }}
            >
              <div
                className=" absolute"
                style={{
                  width: "4px",
                  height: "50px",
                  backgroundColor: "black",
                  right: "0px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  position: "absolute",
                  left: "273px",
                }}
              ></div>
              <div>
                {" "}
                <p>
                  <b>App Development</b>
                </p>
                <span style={{ color: "#2980B9" }}>
                  <u>See More</u>
                </span>
              </div>
              <div>
                <img
                  src="/images/Mask Group 20.svg"
                  style={{ width: "80px" }}
                />
              </div>
            </div>
          </Col>
          <Col>
            {" "}
            <div
              style={{
                display: "flex",
                backgroundColor: "#f9f9f9",
                padding: "18px",
                width: "276px",
                position: "relative",
              }}
            >
              <div
                className=" absolute"
                style={{
                  width: "4px",
                  height: "50px",
                  backgroundColor: "black",
                  right: "0px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  position: "absolute",
                  left: "273px",
                }}
              ></div>
              <div>
                <p>
                  <b>Web Development</b>
                </p>
                <span style={{ color: "#2980B9" }}>
                  <u>See More</u>
                </span>
              </div>
              <img src="/images/Mask Group 21.svg" style={{ width: "80px" }} />
            </div>
          </Col>
          <Col>
            {" "}
            <div
              style={{
                display: "flex",
                backgroundColor: "#f9f9f9",
                padding: "18px",
                width: "276px",
                position: "relative",
              }}
            >
              <div
                className=" absolute"
                style={{
                  width: "4px",
                  height: "50px",
                  backgroundColor: "black",
                  right: "0px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  position: "absolute",
                  left: "273px",
                }}
              ></div>
              <div>
                <p>
                  <b>Digital Marketing</b>
                </p>
                <span style={{ color: "#2980B9" }}>
                  <u>See More</u>
                </span>
              </div>
              <img src="/images/Mask Group 21.svg" style={{ width: "80px" }} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Heading;
