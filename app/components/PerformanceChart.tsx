"use client";

import React, { useEffect, useState } from "react";
import { Chart } from "react-chartjs-2";
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

const PerformanceChart = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    loadData();
  }, []);

  const chartData = {
    labels: data.map((item) => item.nome),
    datasets: [
      {
        label: "Vendas",
        data: data.map((item) => item.vendas),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Cobranças",
        data: data.map((item) => item.cobranças),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-center">Gráfico de Vendas e Cobranças</h2>
      <div className="chart-container">
        <Chart
          type="bar"
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Desempenho de Vendas e Cobranças",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default PerformanceChart;
