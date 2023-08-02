import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Projectpage from "../components/Projectpage.js";
import PricingCard from "../components/PricingCard.js";
import Work from "../components/Work.js";

const Project = () => {
  return (
    <div>
      <Navbar />
      <Projectpage heading="PROJECTS." text="Some of my most recent works" />
      <Work />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Project;
