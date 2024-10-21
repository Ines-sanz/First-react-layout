import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Cards = () => {
  return (
    <div className="col-12 col-md-6 col-lg-3">
    <div class="card" >
      <img src={rigoImage} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    </div>
  );
};
