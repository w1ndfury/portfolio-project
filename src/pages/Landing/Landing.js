import React from "react";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Contact from "../Contact/Contact";
import Footer from "../../layouts/Footer/Footer";
import SlideBar from "../../layouts/SlideBar/SlideBar";

function LandingPage() {
  return (
    <>
      <SlideBar />
      <section className="main-container">
        <section className="pp-section-wraper pp-section-about" id="about">
          <About />
        </section>
        <section
          className="pp-section-wraper pp-section-experience"
          id="experience"
        >
          <Experience />
        </section>
        <section className="pp-section-wraper pp-section-contact" id="contact">
          <Contact />
        </section>
        <Footer />
      </section>
    </>
  );
}

export default LandingPage;
