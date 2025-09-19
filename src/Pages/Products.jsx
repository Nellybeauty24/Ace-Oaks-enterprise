// src/Pages/ProductsPage.js
import { Link, useLocation } from "react-router-dom";
import { productsData } from '../data/product';
import "../Styles/Products.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const ProductsPage = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      <div className="products-page">
        
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">
            Home
          </Link>
          <span className="breadcrumb-separator">/</span>
          <span
            className={`breadcrumb-current ${
              location.pathname.includes("/products") ? "active" : ""
            }`}
          >
            Products
          </span>
        </nav>

        {/* Heading */}
        <h2 className="products-heading">Our Products</h2>

        {/* Loop through all categories */}
        {Object.keys(productsData).map((categoryKey) => {
          const category = productsData[categoryKey];

          return (
            <section key={categoryKey} className="category-section">
              {/* Category title + see more */}
              <div className="category-header">
                <h3>{category.name}</h3>
                <Link to={`/products/${categoryKey}`} className="see-more">
                  See More →
                </Link>
              </div>

              {/* Product preview (limit 4 items for preview) */}
              <div className="product-grid">
                {category.products.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    to={`/products/${categoryKey}/${product.id}`}
                    className="product-card"
                  >
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    <p>{product.shortDesc}</p>
                    <span className="price">{product.price}</span>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
