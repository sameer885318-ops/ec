import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";
import "./Addproduct.css";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  const navigate = useNavigate();
  const ADMIN_PASSWORD = "1234";

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) setIsAuthorized(true);
    else alert("Wrong Password!");
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!name || !price || !quantity || !image) {
      return alert("Fill all fields!");
    }

    // 🔥 instant redirect
    navigate("/");

    try {
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onloadend = async () => {
        await addDoc(collection(db, "products"), {
          name,
          price: Number(price),
          quantity: Number(quantity),
          image: reader.result,
          createdAt: serverTimestamp(),
        });
      };
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthorized) {
    return (
      <div className="add-product-container">
        <h2>Enter Admin Password</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Verify</button>
        </form>
      </div>
    );
  }

  return (
    <div className="add-product-container">
      <h2>Add Product</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
