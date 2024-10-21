import React from "react";

export const Navbar = () =>{
    return (
        <nav class="navbar bg-dark  navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-between">
    
    <a class="navbar-brand text-light" href="#">Bootstrap start</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
      </nav>
    )
}