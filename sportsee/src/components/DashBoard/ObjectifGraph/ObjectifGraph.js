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
  Brush,
} from "recharts";
import "../ObjectifGraph/ObjectifGraph.css";

const data = [
  {
    name: "L",
    min: 30,
  },
  {
    name: "M",
    min: 23,
  },
  {
    name: "M",
    min: 45,
  },
  {
    name: "J",
    min: 50,
  },
  {
    name: "V",
    min: 0,
  },
  {
    name: "S",
    min: 0,
  },
  {
    name: "S",
    min: 60,
  },
];

function ObjectifGraph() {
  return (
    <div>
      <LineChart
        width={260}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        background="#FF0000"
        className="LineChart1"
      >
        <XAxis
          dataKey="name"
          className="dataNaming"
          tick={{ fill: "white", fontSize: 12 }}
        ></XAxis>
        <Tooltip />
        <Line
          type="monotone"
          dataKey="min"
          stroke="#FFFFFF"
          strokeWidth="5"
          dot={{ r: 0 }}
          activeDot={{
            fill: "#FFFFFF",
            stroke: " 5px solid rgba(255, 255, 255, 0.198345)",
            strokeWidth: 5,
            r: 5,
          }}
        />
      </LineChart>
    </div>
  );
}

export default ObjectifGraph;
