import React from 'react'
import './gradient.css';

const Navbar = () => {
  return (
    <div>
    <div className="gradient-bg">
       <nav class="navbar navbar-expand-lg navigation">
    <div class="container-fluid">
      <nav class="navbar bg-body-tertiary">
        <div className='container Logo'>
          <a class="navbar-brand" href="#">
          HomeQuest.com
          </a>
        </div>
      </nav>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Buy</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Rent</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Commercial</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">PG/Co-living</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Plots</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  <h1 className="welcome">Step into comfort</h1>
  </div>
  </div>
  )
}

export default Navbar; 
