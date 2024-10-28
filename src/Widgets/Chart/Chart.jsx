import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { faker } from "@faker-js/faker";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      text: "Chart.js",
    },
  },
};
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  type: "bubble",
  labels,
  datasets: [
    {
      fill: true,
      label: "Chart",
      data: labels.map(() => faker.datatype.boolean({ min: 0, max: 1 })),
      borderColor: "rgb(53,162,235)",
      backgroundColor: "rgba(53,162,235,1)",
      borderWidth: 3,
    },
  ],
};
const ChartDiagram = () => {
  return (
    <div className="chart-diagram">
      <h2 className="chart-title">Гарфик</h2>
      <div className="chart-wrapper">
        <Line options={options} data={data} className="canvas" />
      </div>
    </div>
  );
};
export default ChartDiagram;
