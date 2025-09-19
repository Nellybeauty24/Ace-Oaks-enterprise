import { Routes, Route } from "react-router-dom";

// ✅ Import Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products"; // categories listing
import ProductCategory from "./Pages/ProductCategory"; // e.g. Marine Plywood
import ProductDetails from "./Pages/ProductDetails"; // single product
// import Gallery from "./Pages/Gallery"; // or Blog if you decide

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:category" element={<ProductCategory />} />
      <Route path="/products/:category/:id" element={<ProductDetails />} />
      {/* <Route path="/gallery" element={<Gallery />} /> */}

      {/* ✅ Optional: 404 Page */}
      <Route path="*" element={<h2>404 | Page Not Found</h2>} />
    </Routes>
  );
}

export default App;
