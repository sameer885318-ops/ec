import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import"./Home.css";

function Page() {
  return (
    <>
    <div className="container-bg">
      <div className="hero-content">
        <h1>Welcome to your shop</h1>
        <p>
          Discover quality products, great deals, and a seamless shopping experience.
        </p>

        <div className="hero-buttons">
          <Link to="/home" className="btn-primary">
            Get Started
          </Link>

          <Link to="/about" className="btn-primary"
          style={{backgroundColor:"green"}}>
          
            Learn More
      </Link>
        </div>
      </div>
      
    </div>
    <footer className="footer">
      <div className="footer-content">
        <h2>U.S Shop</h2>
        <p>© 2026 U.S Shop. All rights reserved BY SAMIR KHAN .</p>
        <div className="footer-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        
        </div>
        <div className="social-icons">
          <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i className="fa-brands fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </footer>
    </> 
  );
}

export default Page;
