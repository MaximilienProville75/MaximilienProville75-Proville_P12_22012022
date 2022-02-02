import React from "react";
import MacroNutriments from "./MacroNutriments";

function MacroNutrimentsList(props) {
  console.log(props.userKeyData.entries);
  const arrData = Object.entries(props.userKeyData);
  console.log(arrData);

  return arrData.map((item) => {
    return <MacroNutriments dataInfos={item} />;
  });
}

export default MacroNutrimentsList;
