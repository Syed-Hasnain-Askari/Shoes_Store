import React from 'react';
import './navbar.css';
import navbarimage from './navbarimage.png';
export default function Navbar() {
    return (
        <div>
            {/* Navbar-Section */}
            <nav className="navbar">
        <div className="container">
          <a className="navbar-brand">
          <img src={navbarimage} width="90" height="80" alt="" loading="lazy"/>
            Shopify
          </a>
          <form className="d-flex">
            
                <li className="nav-item text-light list-unstyled m-lg-2">My Account<i className="fa fa-user m-lg-2 m-sm-2"></i></li>
                <li className="nav-item text-light list-unstyled m-lg-2">View Cart<i class="fa fa-cart-arrow-down m-lg-2 m-sm-2" aria-hidden="true"></i></li>
          </form>
          
        </div>
      </nav>
            {/* Menu Options */}
            <ul class="nav justify-content-center" style={{backgroundColor:"#1fc0a0",height:"70px"}}>
  <li class="nav-item mt-3">
    <a class="nav-link active" href="">Home</a>
  </li>
  <li class="nav-item mt-3">
    <a class="nav-link" href="#">Shope</a>
  </li>
  <li class="nav-item mt-3">
    <a class="nav-link" href="#">Contact</a>
  </li>
  <li class="nav-item mt-3">
    <a class="nav-link text-decoration-none" href="#">About Us</a>
  </li>
</ul>
        </div>
    )
}
