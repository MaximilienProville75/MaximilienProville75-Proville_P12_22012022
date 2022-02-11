import React from "react";
import propTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import "../ObjectifGraph/ObjectifGraph.css";

const generateData = (props) => {
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
      d.day = "D";
    }
    return d;
  });
  return data;
};

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

const ObjectifGraph = (datas) => {
  const data = generateData(datas);

  return (
    <>
      <div className="LineChart2"></div>

      <div>
        <LineChart
          width={220}
          height={220}
          data={data}
          margin={{ top: 40, right: 1, left: 5, bottom: 20 }}
          className="LineChart1"
        >
          {/* <div className="blabla"> */}
          <XAxis
            dataKey="day"
            className="dataNaming"
            tick={{ fill: "white", fontSize: 15 }}
            tickLine={false}
            axisLine={false}
            dy={15}
          ></XAxis>
          <Tooltip content={<CustomTooltip />} />
          <text
            x="32%"
            y="15%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="objectifTitle"
            fill="white"
          >
            Durée moyenne des
          </text>
          <text
            x="17%"
            y="20%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="objectifTitle"
            fill="white"
          >
            sessions
          </text>
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            strokeWidth="3"
            dot={{ r: 0 }}
            activeDot={{
              fill: "#FFFFFF",
              stroke: " 5px solid rgba(255, 255, 255, 0.198345)",
              strokeWidth: 5,
              r: 5,
            }}
          />
          {/* </div> */}
        </LineChart>
      </div>
    </>
  );
};

CustomTooltip.propTypes = {
  payload: propTypes.array,
};

ObjectifGraph.propTypes = {
  datas: propTypes.array,
};

export default ObjectifGraph;
