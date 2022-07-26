import React from "react";
import { Container } from "react-bootstrap";

function ContactNow() {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
          backgroundColor: "#2980B9",
          width: "100%",
          padding: "50px",
          gap: "600px",
        }}
      >
        <h4 style={{ color: "white" }}>Hello Amjad How Are You!</h4>
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
          Contact Now
        </button>
      </div>
    </Container>
  );
}

export default ContactNow;
