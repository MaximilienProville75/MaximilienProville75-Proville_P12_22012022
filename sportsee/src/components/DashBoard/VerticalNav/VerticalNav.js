import React from "react";
import "../VerticalNav/VerticalNav.css";
import yoga from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/yoga.png";
import swimming from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/swimming.png";
import cycling from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/cycling.png";
import bodybuilding from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/bodybuilding.png";

function VerticalNav() {
  return (
    <div className="verticalNav">
      <div className="activityList">
        <img src={yoga} alt="yoga" />
        <img src={swimming} alt="swimming" />
        <img src={cycling} alt="cycling" />
        <img src={bodybuilding} alt="bodybuilding" />
      </div>
      <div className="copyRightText">Copiryght, SportSee 2020</div>
    </div>
  );
}

export default VerticalNav;
