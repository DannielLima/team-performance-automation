"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type TeamMember = {
  name: string;
  sales: number;
  collections: number;
  target: number;
};

type Props = {
  team: TeamMember[];
};

export default function PerformanceChart({ team }: Props) {
  const data = {
    labels: team.map((member) => member.name),
    datasets: [
      {
        label: "Vendas",
        data: team.map((member) => member.sales),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "Cobranças",
        data: team.map((member) => member.collections),
        backgroundColor: "rgba(153, 102, 255, 0.6)",
      },
      {
        label: "Meta",
        data: team.map((member) => member.target),
        backgroundColor: "rgba(255, 159, 64, 0.6)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Desempenho da Equipe",
      },
    },
  };

  return <Bar data={data} options={options} />;
}
