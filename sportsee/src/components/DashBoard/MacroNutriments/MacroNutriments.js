import React from "react";
import "../MacroNutriments/MacroNutriments.css";

function generateImgSrc() {
  //? conditional to give to return a value that will be use for the Img Src
}

function MacroNutriments() {
  return (
    <div className="MacroCard">
      <div className="MacoInfos&Img">
        {/* Conditiona Base On Macro Title to generate SRC imgs */}
        <img alt="bla" />
        <div className="MacoInfos">
          {/* Infos from data KeyData */}
          <p>Number Of Cal or Gram</p>
          <p>Macro Name</p>
        </div>
      </div>
    </div>
  );
}

export default MacroNutriments;
