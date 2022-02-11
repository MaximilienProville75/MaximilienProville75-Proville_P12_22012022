import React from "react";
import propTypes from "prop-types";
import "./../DailyActivity/DailyActivity.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const generateData = (props) => {
  const data = props.data.map((item, idx) => ({ ...item, day: idx + 1 }));
  return data;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="toolTipActivityDaily">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="intro">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

const renderLegend = (props) => {
  const { payload } = props;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <div>Poids (Kg)</div>
      <div>Calories brulees (Kcal)</div>
    </div>
  );
};

const DailyActivities = (props) => {
  const data = generateData(props);

  return (
    <BarChart
      width={700}
      height={250}
      data={data}
      margin={{ top: 30, bottom: 20, left: 25, right: 10 }}
      className="barCharts"
    >
      <text
        x="13%"
        y="5%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="dailyActivityText"
      >
        Activité quotidienne
      </text>
      <Legend
        layout="horizontal"
        verticalAlign="top"
        align="right"
        wrapperStyle={{
          position: "relative",
          top: "-253px",
          right: "-30px",
        }}
        style={{
          fontSize: "10px",
        }}
        iconType="circle"
        fontFamily={"Roboto, sans-serif"}
        fontSize={"8px"}
        // content={renderLegend}
      />
      <CartesianGrid strokeDasharray="5 5" vertical={false} />
      <XAxis
        dataKey="day"
        tickSize
        className="dayLight"
        tick={{ fill: "#9B9EAC", fontSize: 17 }}
        axisLine={false}
        dy={20}
      />
      <YAxis
        orientation="right"
        tick={{ fill: "#9B9EAC", fontSize: 17 }}
        axisLine={false}
        tickLine={false}
        dx={20}
      />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        barSize={10}
        radius={[3.5, 3.5, 0, 0]}
        name="Poids (Kg)"
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        barSize={10}
        radius={[3.5, 3.5, 0, 0]}
        name="Calories brûlées (kCal)"
      />
    </BarChart>
  );
};

DailyActivities.propTypes = {
  data: propTypes.arrayOf(propTypes.object),
};

export default DailyActivities;
