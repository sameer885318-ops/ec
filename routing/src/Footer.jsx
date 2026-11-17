import React from "react";
import "./App.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2>U.S Shop</h2>
          <p>© 2026 U.S Shop. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
