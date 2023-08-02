import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import Projectpage from "../components/Projectpage.js";
import Form from "../components/Form.js";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Projectpage heading="CONTACT." text="Lets have a chat" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
