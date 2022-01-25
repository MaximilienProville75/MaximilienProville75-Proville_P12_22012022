import React from "react";
import "../MacroNutriments/MacroNutriments.css";
import caloriesIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/calories-icon.png";
import proteinIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/protein-icon.png";
import carbsIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/carbs-icon.png";
import lipidIntact from "/Users/maximilienproville/Desktop/FORMATION Openclassrooms/Projet_12_Sports/sportsee/src/assets/fat-icon.png";

function generateImgSrc(props) {
  if (props.itemsKey === "calorieCount") {
    return caloriesIntact;
  }
  if (props.itemsKey === "proteinCount") {
    return proteinIntact;
  }
  if (props.itemsKey === "carbohydrateCount") {
    return carbsIntact;
  }
  if (props.itemsKey === "lipidCount") {
    return lipidIntact;
  }
}

function generateValue(props) {
  if (props.itemsKey === "calorieCount") {
    return "kCal";
  } else {
    return "g";
  }
}

function generateItems(props) {
  if (props.itemsKey === "calorieCount") {
    return "Calories";
  }
  if (props.itemsKey === "proteinCount") {
    return "Proteines";
  }
  if (props.itemsKey === "carbohydrateCount") {
    return "Glucides";
  }
  if (props.itemsKey === "lipidCount") {
    return "Lipides";
  }
}

function MacroNutriments(props) {
  console.log(props);
  return (
    <div className="MacroCard">
      <div className="MacoInfosImg">
        {/* Conditiona Base On Macro Title to generate SRC imgs */}
        <img src={generateImgSrc(props)} alt="bla" />
        <div className="MacoInfos">
          {/* Infos from data KeyData */}
          <p className="MacroValue">
            {props.itemsValue}
            {generateValue(props)}
          </p>
          <p className="MacroName">{generateItems(props)}</p>
        </div>
      </div>
    </div>
  );
}

export default MacroNutriments;
