import React from "react";
import MacroNutriments from "./MacroNutriments";

function MacroNutrimentsList(props) {
  const arrData = Object.entries(props.userKeyData);

  return arrData.map((item) => {
    return <MacroNutriments dataInfos={item} />;
  });
}

export default MacroNutrimentsList;
