import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { Link } from "react-router-dom"
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div>
        <Navbar/>

         {/* Get In Touch */}
      <section  className="Contact-us">
        <h2>Get In Touch</h2>

        <div className="get-in-touch">
                 <h2>Contact Info</h2>
        <p>📍 No 83, Palm Avenue, Mushin Lagos <br />
📞 09074274154 / 07026205563 <br />
📧 aceoaksltd@gmail.com</p>
        <Link to="/contact-us" className="btn-primary">
          Contact Us
        </Link>
        </div>
   
      </section>

        <Footer/>
      
    </div>
  )
}

export default Contact
