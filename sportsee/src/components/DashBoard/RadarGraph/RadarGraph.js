import React from "react";
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts";

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
    <RadarChart outerRadius={90} width={730} height={250} data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      {/* <PolarRadiusAxis angle={30} domain={[0, 150]} /> */}
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
      {/* <Legend /> */}
    </RadarChart>
  );
}

export default RadarGraph;
