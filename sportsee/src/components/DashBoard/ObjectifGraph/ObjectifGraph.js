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

function generateData(props) {
  const data = Object.values(props.datas);
  data.forEach((d) => {
    if (d.day === 1) {
      d.day = "L";
    }
    if (d.day === 2) {
      d.day = "M";
    }
    if (d.day === 3) {
      d.day = "M";
    }
    if (d.day === 4) {
      d.day = "J";
    }
    if (d.day === 5) {
      d.day = "V";
    }
    if (d.day === 6) {
      d.day = "S";
    }
    if (d.day === 7) {
      d.day = "S";
    }
    return d;
  });
  return data;
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="toolTipAvgAct">
        <p className="label">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};

function ObjectifGraph(props) {
  const data = generateData(props);
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
          dataKey="day"
          className="dataNaming"
          tick={{ fill: "white", fontSize: 12 }}
        ></XAxis>
        <Tooltip content={<CustomTooltip />} />
        <Line
          type="monotone"
          dataKey="sessionLength"
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
