import { useParams, Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { productsData } from "../data/product"
import "../Styles/ProductDetails.css";

function ProductDetails() {
  const { category, id } = useParams();

  const categoryData = productsData[category];
  const product = categoryData?.products.find((p) => p.id === id);

  if (!product) {
    return (
      <div>
        <Navbar />
        <h2>Product not found</h2>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="breadcrumb-separator">/</span>
        <Link to="/products" className="breadcrumb-link">Products</Link>
        <span className="breadcrumb-separator">/</span>
        <span className="breadcrumb-current">{product.name}</span>
      </div>

      {/* Product Detail Section */}
      <div className="product-detail-container">
        {/* Left: Images */}
        <div className="product-images">
          <div className="thumbnail-list">
            {product.images?.map((img, index) => (
              <img key={index} src={img} alt={product.name} />
            ))}
          </div>
          <div className="main-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right: Info */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <h3 className="price">{product.variations[0].price}</h3>
          <p className="desc">{product.shortDesc}</p>

          <label>Colours:</label>
          <select>
            <option>Natural</option>
            <option>Brown</option>
            <option>Dark Oak</option>
          </select>

          {/* Quantity + Order */}
          <div className="order-section">
            <input type="number" defaultValue={1} min={1} />
            <button className="order-btn">Order Now</button>
          </div>

          {/* Key Features */}
          <div className="features">
            <h4>Key Features</h4>
            <ul>
              <li>Durable and dense</li>
              <li>Smooth surface, easy to finish</li>
              <li>Resistant to cracking and warping</li>
              <li>Affordable alternative to solid wood</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Similar Products */}
      <div className="similar-products">
        <h3>Similar Products</h3>
        <div className="product-grid">
          {categoryData.products.slice(0, 4).map((p) => (
            <Link key={p.id} to={`/products/${category}/${p.id}`} className="product-card">
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>{p.shortDesc}</p>
              <span className="price">{p.variations[0].price}</span>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails;
