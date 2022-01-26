import React from "react";
import "./DashBoard.css";

import HeaderNav from "./HeaderNav/HeaderNav";
import VerticalNav from "./VerticalNav/VerticalNav";

import UserInfos from "./UserInfos/UserInfos";
import MacroNutrimentsList from "./MacroNutriments/MacroNutrimentList";

import ObjectifGraph from "./ObjectifGraph/ObjectifGraph";

function Dashboard() {
  return (
    <>
      <HeaderNav />
      <UserInfos />
      <div className="AverageSession">
        <ObjectifGraph />
      </div>
      <div className="MacroList">
        <MacroNutrimentsList />
      </div>
      <VerticalNav />
    </>
  );
}

export default Dashboard;
