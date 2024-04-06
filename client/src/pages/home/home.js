import "./home.scss"
import React from 'react';
import  main_team from"../../images/main_team.png"
import background from "../../images/keral_blasters_logo3_hd.jpg"

function Home(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img id="logo" src="https://www.leagueteamupdates.com/wp-content/uploads/2018/01/ISL-Kerala-Blasters-Logo-PNG-256x256-Size-150x150.png"></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div class="wrapper">
    <header>
          <img src= {background} class="background"/>
          <img src= {main_team } class="foreground"/>
          <h1 class="title">#YENNUMYELLOW</h1>
          <div class="overlay-text"> <a href="https://insider.in/isl-2023-24-kerala-blasters-fc-season-ticket/event">BUY TICKETS</a></div>
    
    
        </header>
</div>


        </div>
    )
}

export default Home