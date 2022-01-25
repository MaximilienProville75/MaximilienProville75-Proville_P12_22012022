import React from "react";
import { Line } from "react-chartjs-2";

import { getUserAverageSession } from "../../../models";

const data = getUserAverageSession(12);
console.log(data.sessions);

function ObjectifGraph() {
  return (
    <div>
      <Line
        data={{
          labels: ["L", "M", "M", "J", "V", "S", "D"],
          datasets: data.sessions,
          backgroundColor: [
            "rgba(255, 0, 0, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(255, 0, 0, 1)",
            "rgba(230, 0, 0, 1)",
            "rgba(230, 0, 0, 1)",
          ],
        }}
        height={250}
        width={250}
      />
    </div>
  );
}

export default ObjectifGraph;
