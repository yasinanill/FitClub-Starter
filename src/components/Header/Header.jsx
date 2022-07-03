import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt='' className="logo" />
 
     
     
      <ul className="header-menu">
        <li>Home</li>
        <li>programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Questions</li>
      </ul>
    </div>
  );
};

export default Header;
