import React from "react";
import MacroNutriments from "./MacroNutriments";
import propTypes from "prop-types";

function MacroNutrimentsList(props) {
  const arrData = Object.entries(props.userKeyData);

  return arrData.map((item) => {
    return <MacroNutriments dataInfos={item} />;
  });
}
MacroNutrimentsList.propTypes = {
  userKeyData: propTypes.object,
};

export default MacroNutrimentsList;
