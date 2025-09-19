// src/pages/Home.jsx
import "../Styles/Home.css";
import { Link } from "react-router-dom"
// import group from "../assets/Images/group.png";
import board1 from "../assets/Images/board1.png"
import board2 from "../assets/Images/board2.png"
import board3 from "../assets/Images/board3.png"
import board4 from "../assets/Images/board4.png"
import board5 from "../assets/Images/board5.png"
import board6 from "../assets/Images/board6.png"
// import group1 from "../assets/Images/group1.png";
import Footer from "../Components/Footer";
import { GoArrowUpRight } from "react-icons/go";
import gallery1 from "../assets/Images/gallery1.png"
import gallery2 from "../assets/Images/gallery2.png"
import gallery3 from "../assets/Images/gallery3.png"
import gallery4 from "../assets/Images/gallery4.png"
import gallery5 from "../assets/Images/gallery5.png"
import gallery6 from "../assets/Images/gallery6.png"
import Navbar from "../Components/Navbar"




function Home() {
  return (
    <div className="home">
      < Navbar/>

      {/* Hero Section */}
      <section className="hero">
        <h1>
          <span> PREMIUM</span> Boards & <br />
          Furniture Materials <br />
          <span> for EVERY PROJECT!!</span>
        </h1>
        <p>
          High-quality HDF, MDF, UV Boards, Flush Doors & More — Delivered with
          Excellence.
        </p>
        <Link to="/products" className="btn-primary">
          View Products <GoArrowUpRight />
        </Link>

        <div className="hero-images">
          <img src={board1} alt="Board" />
           <img src={board3} alt="Board" />
            <img src={board5} alt="Board" />
             <img src={board4} alt="Board" />
              <img src={board2} alt="Board" />
               <img src={board4} alt="Board" />
                <img src={board6} alt="Board" />
        </div>
      </section>

      {/* Who We Are */}
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          Ace Oaks Ltd is a trusted supplier of top-grade construction and
          furniture materials. From UV Boards to Flush Doors and Marine Boards,
          we offer the finest materials to meet your building and interior
          needs.
        </p>
        <button className="btn-secondaryy">Learn More  <GoArrowUpRight /></button>
      </section>

      {/* What We Offer */}
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <div className="offer-grid">
       {/* <img src={board1} alt="Board" />
           <img src={board2} alt="Board" />
            <img src={board3} alt="Board" />
             <img src={board4} alt="Board" />
              <img src={board5} alt="Board" />
               <img src={board6} alt="Board" />
                <img src={board1} alt="Board" /> */}
        </div>
        <Link to="/products" className="btn-secondary">
          View Products  <GoArrowUpRight />
        </Link>
      </section>

      {/* Why Customers Love Us */}
      <section className="why-customers">
        <h2>Why Customers Love Us</h2>
        <div className="cards">
          <div className="card">
            <span>⭐</span>
            <h3>Premium Quality</h3>
            <p>Top-notch boards and accessories for all projects.</p>
          </div>
          <div className="card">
            <span>⚡</span>
            <h3>Reliable Service</h3>
            <p>Fast delivery and trusted customer support.</p>
          </div>
          <div className="card">
            <span>🤝</span>
            <h3>Professional Support</h3>
            <p>We guide you in choosing the right materials.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* Gallery Section */}
<section className="gallery">
  <h2>See Our Products in Action</h2>
  <div className="gallery-grid">
    <img src={gallery1} alt="Furniture" />
    <img src={gallery2} alt="Furniture" />
    <img src={gallery3} alt="Furniture" />
     <img src={gallery4} alt="Furniture" />
    <img src={gallery5} alt="Furniture" />
    <img src={gallery6} alt="Furniture" />
     <img src={gallery1} alt="Furniture" />
     {/* <img src={gallery1} alt="Furniture" />
    <img src={gallery1} alt="Furniture" /> */}
  </div>
</section>


      {/* Get In Touch */}
      <section className="get-in-touch">
        <h2>Get In Touch</h2>
        <p>📍 No 83, Palm Avenue, Mushin Lagos <br />
📞 09074274154 / 07026205563 <br />
📧 aceoaksltd@gmail.com</p>
        <Link to="/contact-us" className="btn-primary">
          Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
