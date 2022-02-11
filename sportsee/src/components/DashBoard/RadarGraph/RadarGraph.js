import React from "react";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis } from "recharts";

import propTypes from "prop-types";

import "./../RadarGraph/RadarGraph.css";

const generateData = (props) => {
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
};

const RadarGraph = (props) => {
  const data = generateData(props);

  return (
    <RadarChart
      outerRadius={75}
      width={230}
      height={220}
      data={data}
      className="radarCharts"
    >
      <PolarGrid tick={{ fill: "red" }} radialLines={false} />
      <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 8 }} />
      <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
    </RadarChart>
  );
};

RadarGraph.propTypes = {
  userPerf: propTypes.array,
};

export default RadarGraph;
