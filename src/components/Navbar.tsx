import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          SZ-Digitals
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/resume" className="nav-link">Resume</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;