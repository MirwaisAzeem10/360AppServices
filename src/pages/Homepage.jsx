import React from "react";
import Banner from "../components/Banner";
import BannerHeading from "../components/BannerHeading";
import Footer from "../components/Footer";
import FooterTwo from "../components/FooterTwo";
import Header from "../components/Header";
import Heading from "../components/Heading";
import HeadingThree from "../components/HeadingThree";

function Homepage() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <Heading />
      <BannerHeading />
      <HeadingThree />
      <Footer />
      <FooterTwo />
    </React.Fragment>
  );
}

export default Homepage;
