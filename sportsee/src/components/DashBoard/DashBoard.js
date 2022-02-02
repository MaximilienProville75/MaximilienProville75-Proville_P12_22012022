import React from "react";
import "./DashBoard.css";

import HeaderNav from "./HeaderNav/HeaderNav";
import VerticalNav from "./VerticalNav/VerticalNav";

import UserInfos from "./UserInfos/UserInfos";
import MacroNutrimentsList from "./MacroNutriments/MacroNutrimentList";

import ObjectifGraph from "./ObjectifGraph/ObjectifGraph";
import RadarGraph from "./RadarGraph/RadarGraph";
import KpiGraph from "./KpiGraph/KpiGraph";
import DailyActivities from "./DailyActivity/DailyActivity";

function Dashboard() {
  //TODO Realiser les fetch et transferer de props par composant

  return (
    <>
      <HeaderNav />
      <UserInfos />
      <div className="GraphList">
        <div className="DailyActivities">
          <DailyActivities />
        </div>
        <div className="ThreeGraphs">
          <div className="AverageSession">
            <ObjectifGraph />
          </div>
          <div className="PerformanceGraph">
            <RadarGraph />
          </div>
          <div className="kpiGraph">
            <KpiGraph />
          </div>
        </div>
      </div>
      <div className="MacroList">{/* <MacroNutrimentsList /> */}</div>
      <VerticalNav />
    </>
  );
}

export default Dashboard;
