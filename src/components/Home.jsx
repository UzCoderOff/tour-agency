import React from "react";
import Face from "./Face";
import Navbar from "./Navbar";
import OurService from "./OurService";
import ServiceStats from "./ServiceStats";
import Packages from "./Packages";
import Contact from "./Contact";
import Comments from "./Comments";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Face />
      <OurService />
      <ServiceStats />
      <Packages/>
      <Contact/>
      <Comments/>
      <Form/>
      <Footer/>
    </div>
  );
};

export default Home;
