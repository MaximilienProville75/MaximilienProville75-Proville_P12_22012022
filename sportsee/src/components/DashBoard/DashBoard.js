import React from "react";
import "./DashBoard.css";

import HeaderNav from "./HeaderNav/HeaderNav";
import VerticalNav from "./VerticalNav/VerticalNav";

import UserInfos from "./UserInfos/UserInfos";
import MacroNutriments from "./MacroNutriments/MacroNutriments";

function Dashboard() {
  return (
    <>
      <HeaderNav />
      <UserInfos />
      <VerticalNav />

      {/* Map over Nutriments Data to create 4 MACROCARD
      <MacroNutriments /> */}
    </>
  );
}

export default Dashboard;
