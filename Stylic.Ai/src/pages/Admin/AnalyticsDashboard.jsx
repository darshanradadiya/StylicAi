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

// Register required chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Users Engaged",
      data: [10, 20, 30, 40, 50],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
    {
      label: "AI Processing Speed (ms)",
      data: [200, 180, 150, 130, 110],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Analytics Overview",
    },
  },
};

export default function AnalyticsDashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
        Analytics Dashboard
      </h2>
      <div className="overflow-x-auto">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}