import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./DashBoard.css";

import { Model } from "../../model";

import HeaderNav from "./HeaderNav/HeaderNav";
import VerticalNav from "./VerticalNav/VerticalNav";
import UserInfos from "./UserInfos/UserInfos";
import MacroNutrimentsList from "./MacroNutriments/MacroNutrimentList";
import ObjectifGraph from "./ObjectifGraph/ObjectifGraph";
import RadarGraph from "./RadarGraph/RadarGraph";
import KpiGraph from "./KpiGraph/KpiGraph";
import DailyActivities from "./DailyActivity/DailyActivity";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  console.log(params);
  return <WrappedComponent {...props} params={params} />;
};

function Dashboard(props) {
  //TODO Realiser les fetch et transferer de props par composant
  const [user, setUser] = useState(" ");
  const [userActivity, setUserActivity] = React.useState(" ");
  const idUrlUser = props.params.id;

  React.useEffect(() => {
    Model.getUser(idUrlUser).then((res) => {
      setUser(res.userInfos);
    });

    //? getUserActivity --> ........

    Model.getUserAvgSession(idUrlUser).then((res) => {
      setUserActivity(res.sessions);
    });
  }, []);

  return (
    <>
      <HeaderNav />
      <UserInfos user={user} />
      <div className="GraphList">
        <div className="DailyActivities">
          <DailyActivities />
        </div>
        <div className="ThreeGraphs">
          <div className="AverageSession">
            <ObjectifGraph datas={userActivity} />
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

export default withRouter(Dashboard);
