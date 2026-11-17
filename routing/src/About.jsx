import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <h1>About This Website</h1>
      
      <p>
        Welcome to <strong>Our Product Showcase Website</strong>! This platform 
        is designed to help you manage and display products in a simple, 
        organized, and visually appealing way. Whether you are a small business 
        owner or just experimenting, this website allows you to add products, 
        upload images, set prices, and view them instantly on the Home page.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li><strong>Add Products:</strong> Easily add product name, price, and image.</li>
        <li><strong>Persistent Storage:</strong> Products remain even after refreshing the page, thanks to local storage.</li>
        <li><strong>Responsive Design:</strong> Works perfectly on desktops, tablets, and mobile devices.</li>
        <li><strong>Delete Option:</strong> Remove products anytime with a simple click.</li>
        <li><strong>Simple Navigation:</strong> Navigate between Home, About, and Add Product pages seamlessly.</li>
      </ul>

      <h2>How to Use</h2>
      <ol>
        <li>Go to the <Link to="/add-product">Add Product</Link> page to create a new product.</li>
        <li>Fill in the product name, price, and upload an image.</li>
        <li>Click "Add" and see your product appear instantly on the Home page.</li>
        <li>To remove a product, click the "Delete" button under the product.</li>
      </ol>

      <h2>Future Improvements</h2>
      <p>
        We plan to add user accounts, advanced search, and categorization of products, 
        making it easier for users to manage larger product catalogs. Our goal is to 
        create a full-featured product management platform while keeping it simple 
        and accessible for everyone.
      </p>

      <Link to="/HOME" className="btn-home">
        Go to Home
      </Link>
    </div>
  );
}

export default About;
