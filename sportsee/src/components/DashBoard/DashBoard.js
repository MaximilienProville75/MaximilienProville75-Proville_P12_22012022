import React, { useState } from "react";
import { useParams } from "react-router-dom";
import propTypes from "prop-types";
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

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(" ");
  const [userScore, setUserScore] = useState("");
  const [userActivity, setUserActivity] = useState(" ");
  const [userKeyData, setUserKeyData] = useState("");
  const [userAvgActivity, setUserAvgActivity] = useState(" ");
  const [userPerformance, setUserPerformance] = useState(" ");

  //* ----------------------------------------------------------

  const idUrlUser = useParams().id;

  React.useEffect(() => {
    Promise.all([
      Model.getUser(idUrlUser).then((res) => {
        setUser(res.userInfos);
      }),
      Model.getUser(idUrlUser).then((res) => {
        setUserScore(res.score);
      }),
      Model.getUser(idUrlUser).then((res) => {
        setUserKeyData(res.keyData);
      }),

      Model.getUserActivity(idUrlUser).then((res) => {
        setUserActivity(res.sessions);
      }),

      Model.getUserAvgSession(idUrlUser).then((res) => {
        setUserAvgActivity(res.sessions);
      }),

      Model.getUserPerformance(idUrlUser).then((res) => {
        setUserPerformance(res.data);
      }),
    ])
      .then(() => {
        setIsLoading(false);
      })

      .catch((err) => {
        setIsLoading(false);
        alert("ERROR");
      });
  }, []);

  return (
    <>
      <HeaderNav />
      {isLoading ? (
        <div>...Loading</div>
      ) : (
        <>
          <UserInfos infos={user} />
          <div className="GraphList">
            <div className="DailyActivities">
              <DailyActivities data={userActivity} />
            </div>
            <div className="ThreeGraphs">
              <div className="AverageSession">
                <ObjectifGraph datas={userAvgActivity} />
              </div>
              <div className="PerformanceGraph">
                <RadarGraph userPerf={userPerformance} />
              </div>
              <div className="kpiGraph">
                <KpiGraph userScore={userScore} />
              </div>
            </div>
          </div>
          <div className="MacroList">
            <MacroNutrimentsList userKeyData={userKeyData} />
          </div>
        </>
      )}
      <VerticalNav />
    </>
  );
};

// export default withRouter(Dashboard);
export default Dashboard;
