import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Projectpage from "../components/Projectpage.js";
import AboutContent from "../components/AboutContent.js";

const About = () => {
  return (
    <div>
      <Navbar />
      <Projectpage
        heading="ABOUT."
        text="I am a friendly Front-End Developer."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
