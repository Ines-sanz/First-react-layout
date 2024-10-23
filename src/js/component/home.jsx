import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Container } from "./container";
import { Footer } from "./footer";
import { Digit } from "./digit";

//create your first component
const Home = ({ counter }) => {
  let auxArr = counter.toString().split("").reverse();


  return (
    <div>
      <div class="container p-5 bg-dark d-flex justify-content-center my-3 rounded">
        <Digit value={<i class="fa-regular fa-clock"></i>} />
        <Digit value={auxArr[5] || 0} />
        <Digit value={auxArr[4] || 0} />
        <Digit value={auxArr[3] || 0} />
        <Digit value={auxArr[2] || 0} />
        <Digit value={auxArr[1] || 0} />
        <Digit value={auxArr[0]} />
      </div>
      <div class="d-flex justify-content-center">
        <button type="button" id="stop" class="btn btn-success btn-lg mx-3">
          Stop
        </button>
        <button type="button" id="restart" class="btn btn-danger btn-lg mx-3">
          Restart
        </button>
      </div>
    </div>
  );
};

export default Home;
