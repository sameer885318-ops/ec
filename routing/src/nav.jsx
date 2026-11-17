import { Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">U.S</h1>

      {/* Nav Links */}
      <div className={`nav-links ${showMenu ? "active" : ""}`}>
        <Link to="/home" onClick={() => setShowMenu(false)}>Home</Link>
        <Link to="/about" onClick={() => setShowMenu(false)}>About</Link>

        {/* NEW SECTION */}
        <Link
          to="/add-product"
          className="add-product-btn"
          onClick={() => setShowMenu(false)}
        >
          + Add Your Product
        </Link>
      </div>

      { /* Search */ }
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>

      
      <i
        className="fa-solid fa-bars menu-icon"
        onClick={() => setShowMenu(!showMenu)}
      ></i>
    </nav>
  );
}

export default Navbar;
