import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <span id="logo">DS</span>
      <FaBars id="menu-icon" />
      <button className="nav-item">About</button>
      <button className="nav-item">Experience</button>
      <button className="nav-item">Contact</button>
    </nav>
  );
};

export default Navbar;
