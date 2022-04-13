import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/Header.jsx";
import Banner from "./components/Banner.jsx";
import Heading from "./components/Heading.jsx";
import BannerHeading from "./components/BannerHeading.jsx";
import HeadingThree from "./components/HeadingThree.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Header />
    <Banner />
    <Heading />
    <BannerHeading />
    <HeadingThree />
    <Footer />
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
