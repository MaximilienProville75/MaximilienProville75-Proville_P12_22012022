import React from "react";
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
  let dataArrDate = [];
  const data = Object.values(props.data);

  // data.map((item) => {
  //   dataArrDate.push(item.day);
  //   for (let i = 0; dataArrDate.length > i; i++) {
  //     item.day = dataArrDate[i] = i + 1;
  //   }
  // });
  // console.log(dataArrDate);

  return data;
};

const CustomTooltip = ({ active, payload, label }) => {
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

const DailyActivities = (props) => {
  const data = generateData(props);

  return (
    <BarChart
      width={900}
      height={320}
      data={data}
      margin={{ top: 30, bottom: 0 }}
    >
      <text
        x="10%"
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
          top: "-320px",
        }}
        iconType="circle"
      />
      <CartesianGrid strokeDasharray="5 5" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="kilogram"
        fill="#282D30"
        barSize={10}
        radius={[3.5, 3.5, 0, 0]}
      />
      <Bar
        dataKey="calories"
        fill="#E60000"
        barSize={10}
        radius={[3.5, 3.5, 0, 0]}
      />
    </BarChart>
  );
};

export default DailyActivities;
