import React from "react";
import { navLogo, userLogo } from "../../configs/externalUrl";

const Nav = () => {
  return (
    <div className="nav">
      <div className="left__panel">
        <i className="fa-solid fa-bars"></i>
        <img src={navLogo} alt={navLogo} className="nav__logo" />
      </div>
      <div className="center__panel">
        <div>
          <input type="text" placeholder="Search" />
          <button className="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <button className="nav__mic">
          <i className="fa-solid fa-microphone"></i>
        </button>
      </div>
      <div className="right__panel">
        <i className="fa-solid fa-video"></i>
        <i className="fa-solid fa-bell"></i>
        <img src={userLogo} alt={userLogo} className="user__logo" />
      </div>
    </div>
  );
};

export default Nav;
