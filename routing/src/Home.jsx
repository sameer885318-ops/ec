import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "./firebase";
import "./Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const q = query(
      collection(db, "products"),
      orderBy("createdAt", "desc"),
      limit(20)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setLoading(false);
      },
      (err) => {
        console.error(err);
        setError("Failed to load products");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="home-container">
      <div className="products-grid">
        {loading && <p>Loading products...</p>}
        {!loading && error && <p className="error">{error}</p>}
        {!loading && !error && products.length === 0 && <p>No products added yet!</p>}

        {!loading &&
          !error &&
          products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                loading="lazy"
                src={product.image || "/placeholder.png"}
                alt={product.name || "Product"}
                onError={(e) => (e.target.src = "/placeholder.png")}
              />
              <h3>{product.name || "Unnamed Product"}</h3>
              <p>Price: ₹{product.price ?? 0}</p>
              <p>Quantity: {product.quantity ?? 0}</p>

              {/* BYE NOW Button */}
              <button
                className="bye-now-button"
                onClick={() => alert(`Buy from ${product.name || "this product"}!`)}
                style={{ marginTop: "10px", padding: "8px 16px", cursor: "pointer",backgroundColor:"black",color:"white",borderRadius:20 }}
              >
                Buy NOW
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
