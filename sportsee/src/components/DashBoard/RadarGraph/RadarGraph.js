import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";

import "./../RadarGraph/RadarGraph.css";

const data = [
  {
    subject: "cardio",
    A: 80,
  },
  {
    subject: "energy",
    A: 120,
  },
  {
    subject: "endurance",
    A: 140,
  },
  {
    subject: "strength",
    A: 50,
  },
  {
    subject: "speed",
    A: 200,
  },
  {
    subject: "intensity",
    A: 90,
  },
];

function RadarGraph() {
  return (
    <RadarChart
      outerRadius={90}
      width={280}
      height={250}
      data={data}
      className="radarCharts"
    >
      <PolarGrid />
      <PolarAngleAxis
        dataKey="subject"
        tick={{ fill: "white", fontSize: 12 }}
      />
      {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
      <Radar name="Mike" dataKey="A" fill="#FF0101" fillOpacity={0.7} />
      {/* <Legend /> */}
    </RadarChart>
  );
}

export default RadarGraph;
