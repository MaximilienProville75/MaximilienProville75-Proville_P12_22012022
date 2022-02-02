import React from "react";
import "../MacroNutriments/MacroNutriments.css";
import caloriesIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/calories-icon.png";
import proteinIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/protein-icon.png";
import carbsIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/carbs-icon.png";
import lipidIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/fat-icon.png";

function generateImgSrc(props) {
  if (props.dataInfos[0] === "calorieCount") {
    return caloriesIntact;
  }
  if (props.dataInfos[0] === "proteinCount") {
    return proteinIntact;
  }
  if (props.dataInfos[0] === "carbohydrateCount") {
    return carbsIntact;
  }
  if (props.dataInfos[0] === "lipidCount") {
    return lipidIntact;
  }
  console.log(props);
}

function generateValue(props) {
  if (props.dataInfos[0] === "calorieCount") {
    return "kCal";
  } else {
    return "g";
  }
}

function generateItems(props) {
  if (props.dataInfos[0] === "calorieCount") {
    return "Calories";
  }
  if (props.dataInfos[0] === "proteinCount") {
    return "Proteines";
  }
  if (props.dataInfos[0] === "carbohydrateCount") {
    return "Glucides";
  }
  if (props.dataInfos[0] === "lipidCount") {
    return "Lipides";
  }
}

function MacroNutriments(props) {
  return (
    <div className="MacroCard">
      <div className="MacoInfosImg">
        <img src={generateImgSrc(props)} alt="bla" />
        <div className="MacoInfos">
          {/* Infos from data KeyData */}
          <p className="MacroValue">
            {props.dataInfos[1]}
            {generateValue(props)}
          </p>
          <p className="MacroName">{generateItems(props)}</p>
        </div>
      </div>
    </div>
  );
}

export default MacroNutriments;
