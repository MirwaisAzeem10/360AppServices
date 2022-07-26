import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./Gallery.css";

function Gallery() {
  const data = [
    {
      image:
        "https://360appservices.com/assets/images/portfolio-page/3%20mobile%20screens.png",
      title: "AA Imports",
      detail: "Hey Me i am Here",
    },
    {
      image:
        "https://360appservices.com/assets/images/portfolio-page/banner.png",
      title: "Aundreas Rental",
      detail: "Hello Amjad",
    },
    {
      image:
        "https://360appservices.com/assets/images/portfolio-page/for%20banner.png",
      title: "Digital Junction",
      detail: "Salman Bhai kia sen hai",
    },
    // {
    //   image:
    //     "https://360appservices.com/assets/images/portfolio-page/3%20mobile%20screens.png",
    //   title: "AA Imports",
    //   detail: "Hey Me i am Here",
    // },
    // {
    //   image:
    //     "https://360appservices.com/assets/images/portfolio-page/banner.png",
    //   title: "Aundreas Rental",
    //   detail: "Hello Amjad",
    // },
    // {
    //   image:
    //     "https://360appservices.com/assets/images/portfolio-page/for%20banner.png",
    //   title: "Digital Junction",
    //   detail: "Salman Bhai kia sen hai",
    // },
  ];

  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            padding: "20px",
          }}
        >
          <h3>Categories</h3>
          <button className="mybtn">ALL</button>
          <button className="mybtn">Web Designing</button>
          <button className="mybtn">App Designing</button>
        </div>
        <Row>
          {data.map(({ image, title, detail }) => (
            <Col>
              <div className="image-wrapper" style={{ paddingTop: "50px" }}>
                <div className="media">
                  <div className="overlay"></div>
                  <img
                    src={image}
                    alt=""
                    style={{ width: "100%", height: "300px" }}
                  />
                  <div className="image-details">
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Gallery;
