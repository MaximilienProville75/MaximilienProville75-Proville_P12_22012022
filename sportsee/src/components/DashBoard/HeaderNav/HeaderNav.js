import React from "react";
import "../HeaderNav/HeaderNav.css";
import logo from "./sportsee/src/assets/logo.png";

function HeaderNav() {
  return (
    <header>
      <img src={logo} alt="sportseeLogo" />
      <div className="headerDiv">Accueil</div>
      <div className="headerDiv">Profil</div>
      <div className="headerDiv">Réglage</div>
      <div className="headerDiv">Communauté</div>
    </header>
  );
}

export default HeaderNav;
