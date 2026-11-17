import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import Home from "./Home";
import About from "./About";
import Navbar from "./nav";
import Page from "./landingpage";
import AddProduct from "./Addproduct";

function App() {
  const [products, setProducts] = useState([]);



  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route
          path="/HOME"
          element={<Home products={products} setProducts={setProducts} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/add-product"
          element={<AddProduct products={products} setProducts={setProducts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
