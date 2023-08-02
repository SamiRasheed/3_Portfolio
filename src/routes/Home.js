import React from "react";
import Navbar from "../components/Navbar.js";
import Homepage from "../components/Homepage.js";
import Work from "../components/Work.js";
import Footer from "../components/Footer.js";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
