import React from "react";
import "./DashBoard.css";

import HeaderNav from "./HeaderNav/HeaderNav";
import VerticalNav from "./VerticalNav/VerticalNav";

import UserInfos from "./UserInfos/UserInfos";
import MacroNutrimentsList from "./MacroNutriments/MacroNutrimentList";

import ObjectifGraph from "./ObjectifGraph/ObjectifGraph";
import RadarGraph from "./RadarGraph/RadarGraph";
import KpiGraph from "./KpiGraph/KpiGraph";

function Dashboard() {
  return (
    <>
      <HeaderNav />
      <UserInfos />
      <div className="AverageSession">
        <ObjectifGraph />
      </div>
      <div className="PerformanceGraph">
        <RadarGraph />
      </div>
      <div className="kpiGraph">
        <KpiGraph />
      </div>
      <div className="MacroList">
        <MacroNutrimentsList />
      </div>
      <VerticalNav />
    </>
  );
}

export default Dashboard;
