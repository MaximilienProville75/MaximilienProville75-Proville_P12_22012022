import React from "react";
import "../MacroNutriments/MacroNutriments.css";
import propTypes from "prop-types";

import caloriesIntact from "../../../assets/calories-icon.png";
import proteinIntact from "../../../assets/protein-icon.png";
import carbsIntact from "../../../assets/carbs-icon.png";
import lipidIntact from "../../../assets/fat-icon.png";

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

MacroNutriments.propTypes = {
  dataInfos: propTypes.array,
};

export default MacroNutriments;
