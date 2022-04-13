import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function BannerHeading() {
  return (
    <div
      style={{
        paddingTop: "100px",
        paddingBottom: "50px",
        backgroundImage: 'url("/images/Group 1293.svg")',
      }}
    >
      <h3 style={{ color: "white", textAlign: "center" }}>
        Features That Set As A Part
      </h3>
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ color: "white" }}>Push Notification</h5>
                <p
                  style={{
                    color: "white",
                    paddingRight: "60px",
                    fontFamily: "none",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div style={{ paddingRight: "50px" }}>
                <img
                  style={{ width: "80px" }}
                  src="/images/Mask Group 13 (1).svg"
                />
              </div>
            </div>
            <div>
              <p style={{ color: "white" }}></p>
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ color: "white" }}>Social Integration</h5>
                <p
                  style={{
                    color: "white",
                    paddingRight: "60px",
                    fontFamily: "none",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div style={{ paddingRight: "50px" }}>
                <img
                  style={{ width: "80px" }}
                  src="/images/Mask Group 14 (1).svg"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ color: "white" }}>Augmented Reality</h5>
                <p
                  style={{
                    color: "white",
                    paddingRight: "60px",
                    fontFamily: "none",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div style={{ paddingRight: "50px" }}>
                <img
                  style={{ width: "80px" }}
                  src="/images/Mask Group 15 (1).svg"
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: "50px" }}>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ color: "white" }}>Advance Analytics</h5>
                <p
                  style={{
                    color: "white",
                    paddingRight: "60px",
                    fontFamily: "none",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div style={{ paddingRight: "50px" }}>
                <img
                  style={{ width: "80px" }}
                  src="/images/Mask Group 16.svg"
                />
              </div>
            </div>
            {/* <div>
              <p style={{ color: "white" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div> */}
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ color: "white" }}>Payment Gateway Integration</h5>
                <p
                  style={{
                    color: "white",
                    paddingRight: "60px",
                    fontFamily: "none",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div style={{ paddingRight: "50px" }}>
                <img
                  style={{ width: "80px" }}
                  src="/images/Mask Group 17.svg"
                />
              </div>
            </div>
          </Col>
          <Col>
            <div style={{ display: "flex" }}>
              <div>
                <h5 style={{ color: "white" }}>Barcode Scanner</h5>
                <p
                  style={{
                    color: "white",
                    paddingRight: "60px",
                    fontFamily: "none",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div style={{ paddingRight: "50px" }}>
                <img
                  style={{ width: "80px" }}
                  src="/images/Mask Group 18.svg"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BannerHeading;
