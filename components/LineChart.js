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
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function LineChart(props) {
  if (props.data)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <Line options={options} data={props.data} />
      </div>
    );
  else
    return (
      <div className="flex h-full w-full text-sm justify-center items-center">
        <div className="bg-primary-100 px-10 py-4 rounded-xl font-bold text-primary-900">
          Pas de données
        </div>
      </div>
    );
}
