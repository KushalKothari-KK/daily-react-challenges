import React, { useState } from "react";
import "../styles/ResponsiveMenu.css";

const ResponsiveHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleShowList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <h1>Responsive Menu</h1>
      <nav>
        <button className="menu-icon" onClick={handleShowList}>
          ☰
        </button>
        <ul className={`nav-list ${isOpen ? "open-menu" : ""} menu`}>
          <li>Home</li>
          <li>Login</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default ResponsiveHamburgerMenu;
