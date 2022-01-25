import React from "react";
import MacroNutriments from "./MacroNutriments";

import { getUserById } from "../../../models";

const userIdInfo12 = getUserById(12);
const keyData = userIdInfo12.keyData;
const lengthArr = Object.values(keyData);
const keyValues = Object.keys(keyData);

function MacroNutrimentsList() {
  let count = 0;
  const card = keyValues.map((y) => {
    count++;
    return <MacroNutriments itemsValue={lengthArr[count - 1]} itemsKey={y} />;
  });
  return card;
}

export default MacroNutrimentsList;
