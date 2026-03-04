import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaGithub,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      {/* SOCIAL ICONS */}
      <div className="social-icons">

        <a href="https://facebook.com/shah.zaib.mughal.521478" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>

        <a href="https://instagram.com/mughlia_shahzada" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>

        <a href="https://linkedin.com/in/sz-digitals-0b19803b4/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>

        <a href="https://wa.me/923124718598" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>

        <a href="https://github.com/shahzaibXdev" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

      </div>

      {/* CONTACT INFO */}
      <div className="footer-contact">

        <a href="mailto:sz.digitals0@gmail.com">
          <FaEnvelope /> sz.digitals0@gmail.com
        </a>

        <a href="tel:+923124718598">
          <FaPhoneAlt /> +92 312 4718598
        </a>

      </div>

      <p>© 2026 Shahzaib • All Rights Reserved</p>
    </footer>
  );
}

export default Footer;