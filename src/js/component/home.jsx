import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Container } from "./container";
import { Footer } from "./footer";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <Navbar />
      <Container/>
      <Footer/>
    </div>
  );
};

export default Home;
