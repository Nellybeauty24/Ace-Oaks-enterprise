import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div>
      <Navbar/>

      {/* Get In Touch */}
      <section className="Contact-us">
        <h2>Get In Touch</h2>

        <div className="get-in-touch">
          <h2>Contact Info</h2>
          <p>
            📍 No 83, Palm Avenue, Mushin Lagos <br />
            📞 09074274154 / 07026205563 <br />
            📧 aceoaksltd@gmail.com
          </p>

          {/* ✅ WhatsApp Link */}
          <a
            href="https://wa.me/2347026205563?text=Hello%20Ace%20Oaks%2C%20I%20would%20like%20to%20make%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Contact
