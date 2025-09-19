import { useParams, Link } from "react-router-dom";
import { productsData } from "../data/product";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Categories.css";

const CategoryPage = () => {
  const { category } = useParams();
  const categoryData = category ? productsData[category] : null;

  if (!categoryData) {
    return <h2>Category not found</h2>;
  }

  // ✅ Debug: check how many products are loaded
  console.log("Products in this category:", categoryData.products);

  return (
    <div>
      <Navbar />

      <div className="category-page">
        {/* Breadcrumb */}
        <nav className="breadcrumb">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">/</span>
          <Link to="/products" className="breadcrumb-link">Products</Link>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{categoryData.name}</span>
        </nav>

        {/* Category Title */}
        <h2 className="category-title">{categoryData.name}</h2>

        {/* Products Grid */}
        <div className="product-grid">
          {categoryData.products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>

              {/* Old price if it exists */}
              {product.oldPrice && (
                <span className="old-price">{product.oldPrice}</span>
              )}

              {/* ✅ Show price from first variation */}
              <span className="price">{product.variations[0]?.price}</span>

              <Link
                to={`/products/${category}/${product.id}`}
                className="btn-view"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CategoryPage;
