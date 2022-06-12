import React, { useState } from "react";
import "../App.css";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = ({ navbarLinks }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };
  return (
    <nav className="navbar">
      <span className="navbarLogo">travell</span>
      {isClicked ? (
        <FiX size={25} className="navbarMenu" onClick={toggleMenu} />
      ) : (
        <FiMenu size={25} className="navbarMenu" onClick={toggleMenu} />
      )}
      <ul className={isClicked ? "navbarList navbarListActive" : "navbarList"}>
        {navbarLinks.map((item, index) => {
          return (
            <li className="navbarItem" key={index}>
              <a className="navbarLink" href={item.url}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
