import React from "react";
import "./../KpiGraph/KpiGraph.css";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from "recharts";

const data = [
  {
    name: "l1",
    value: 12,
  },
];

function KpiGraph() {
  return (
    <RadialBarChart
      width={250}
      height={250}
      cx="50%"
      cy="50%"
      innerRadius={100}
      outerRadius={100}
      barSize={15}
      data={data}
      startAngle={90}
      endAngle={-270}
    >
      <text
        x="12%"
        y="5%"
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
      <RadialBar background clockWise dataKey="value" fill="#FF0000" />
      <text
        x="50%"
        y="40%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="percentageKpi"
      >
        12%
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
}

export default KpiGraph;
