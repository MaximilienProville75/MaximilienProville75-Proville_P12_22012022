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

function generateData(props) {
  const data = Object.values(props.userPerf);
  data.forEach((d) => {
    if (d.kind === 1) {
      d.kind = "cardio";
    }
    if (d.kind === 2) {
      d.kind = "energy";
    }
    if (d.kind === 3) {
      d.kind = "endurance";
    }
    if (d.kind === 4) {
      d.kind = "strength";
    }
    if (d.kind === 5) {
      d.kind = "speed";
    }
    if (d.kind === 6) {
      d.kind = "intensity";
    }

    return d;
  });
  return data;
}

function RadarGraph(props) {
  const data = generateData(props);

  return (
    <RadarChart
      outerRadius={90}
      width={280}
      height={250}
      data={data}
      className="radarCharts"
    >
      <PolarGrid tick={{ fill: "red" }} />
      <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 12 }} />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
}

export default RadarGraph;
