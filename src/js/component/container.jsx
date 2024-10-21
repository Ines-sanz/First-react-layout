import React from "react";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./card";

export const Container = () => {
  return (
    <div class="container">
      <Jumbotron />
      <div class="row gx-4">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

    </div>
  );
};
