import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { day: "1", kilogram: 80, calories: 240 },
  { day: "2", kilogram: 80, calories: 220 },
  { day: "3", kilogram: 81, calories: 280 },
  { day: "4", kilogram: 81, calories: 290 },
  { day: "5", kilogram: 80, calories: 160 },
  { day: "6", kilogram: 78, calories: 162 },
  { day: "7", kilogram: 76, calories: 390 },
];

function DailyActivities() {
  return (
    <BarChart width={900} height={320} data={data}>
      <CartesianGrid strokeDasharray="5 5" vertical={false} />
      <XAxis dataKey="day" />
      <YAxis orientation="right" />
      <Tooltip />
      <Legend />
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
}

export default DailyActivities;
