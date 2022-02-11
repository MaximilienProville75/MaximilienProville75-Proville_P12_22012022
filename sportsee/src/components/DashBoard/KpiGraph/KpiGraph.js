import React from "react";
import "./../KpiGraph/KpiGraph.css";
import propTypes from "prop-types";
import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts";

const KpiGraph = (props) => {
  const data = [...new Array(props)];

  return (
    <RadialBarChart
      width={220}
      height={220}
      cx="50%"
      cy="50%"
      innerRadius={100}
      outerRadius={100}
      barSize={15}
      data={data}
      startAngle={90}
      endAngle={-270}
      className="scoreGraph"
    >
      <text
        x="13%"
        y="6%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="kpiTitle"
      >
        Score
      </text>
      <PolarAngleAxis
        type="number"
        domain={[0, 100]}
        angleAxisId={0}
        tick={false}
      />
      <RadialBar
        background
        clockWise
        dataKey="userScore"
        fill="#FF0000"
        cornerRadius={15}
      />
      <text
        x="50%"
        y="40%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="percentageKpi"
      >
        {props.userScore}%
      </text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="descriptionKpi"
      >
        de votre objectif
      </text>
    </RadialBarChart>
  );
};

KpiGraph.propTypes = {
  userScore: propTypes.number,
};

export default KpiGraph;
