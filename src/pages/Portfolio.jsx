import React from "react";
import ContactNow from "../components/ContactNow";
import Gallery from "../components/Gallery";
import SecoundBanner from "../components/SecoundBanner";
import Stamp from "../components/Stamp";

function Portfolio() {
  return (
    <React.Fragment>
      <SecoundBanner />
      <Gallery />
      <ContactNow />
      <Stamp />
    </React.Fragment>
  );
}

export default Portfolio;
