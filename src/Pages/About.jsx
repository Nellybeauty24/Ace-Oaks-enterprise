import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Rectangle from "../assets/Images/Rectangle .png"
import '../Styles/About.css'
import BrownBg from "../assets/Images/brown-bg.png"; // your wood background
import BurgerIcon from "../assets/Images/BurgerIcon.png"

const About = () => {
  return (
    <div>
      <Navbar/>
      <section className="about">
        <h2><span> About</span> Ace Oaks Ltd</h2>
    <div className="who-we-are">
  <img src={Rectangle} alt="About Background" className="about-bg" />
  <div className="about-text">
    <h3>Who We Are</h3>
    <p>
      Ace Oaks Ltd is a trusted supplier of top-grade construction and
      furniture materials. From UV Boards to Flush Doors and Marine Boards,
      we offer the finest materials to meet your building and interior needs.
    </p>
  </div>
</div>


      
      </section>

      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>To provide top-tier materials that elevate the quality of furniture, interiors, and constructions across Nigeria and beyond.</p>


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

      <section className="director-section" style={{ backgroundImage: `url(${BrownBg})` }}>
  <div className="director-image">
    <img src={BurgerIcon} alt="Director" />
  </div>
  <div className="director-text">
    <h3>Director:</h3>
    <p>
      Obidike Smart – Director of Ace Oaks Ltd, with a strong passion for
      quality service and customer satisfaction.
    </p>
  </div>
</section>


    <Footer/>
    </div>
  )
}

export default About
