import React from "react";
import logo from "../images/rickandmorty-logo.png";

const Header = () => {
  return (
    <header className="">
      <img src={logo} alt="Rick and Morty logo" className="logoheader" />
    </header>
  );
};

export default Header;
