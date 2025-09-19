
import { Link } from 'react-router-dom';
import logo from '../assets/Images/logo.png'
import "../Components/ComponentStyles/Navbar.css"




const Navbar = () => {
  return (
    <nav>
      {/* Logo */}
      <Link to="/">
        <img src={logo} alt="Ace Oaks Logo" />
      </Link>

      {/* Navigation Links */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;


