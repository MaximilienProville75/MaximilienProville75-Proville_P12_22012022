import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const data = [
  {
    name: "L",
    uv: 30,
  },
  {
    name: "M",
    uv: 23,
  },
  {
    name: "M",
    uv: 45,
  },
  {
    name: "J",
    uv: 50,
  },
  {
    name: "V",
    uv: 0,
  },
  {
    name: "S",
    uv: 0,
  },
  {
    name: "S",
    uv: 60,
  },
];

function ObjectifGraph() {
  return (
    <div>
      <LineChart
        width={260}
        height={260}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        backgroundColor="#FF0000"
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#FF0000" />
      </LineChart>
    </div>
  );
}

export default ObjectifGraph;
