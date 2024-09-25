"use client";

import React, { useEffect, useState } from "react";

const PerformanceTable = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch("/data.json");
      const jsonData = await response.json();
      setData(jsonData);
    };

    loadData();
  }, []);

  return (
    <div>
      <h2>Tabela de Vendas e Cobranças</h2>
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row">
            <th className="bg-gray-100 p-2 border border-gray-300 md:border-none">
              Nome
            </th>
            <th className="bg-gray-100 p-2 border border-gray-300 md:border-none">
              Vendas
            </th>
            <th className="bg-gray-100 p-2 border border-gray-300 md:border-none">
              Cobranças
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border border-gray-300 md:border-none block md:table-row"
            >
              <td className="p-2 border border-gray-300 md:border-none">
                {item.nome}
              </td>
              <td className="p-2 border border-gray-300 md:border-none">
                {item.vendas}
              </td>
              <td className="p-2 border border-gray-300 md:border-none">
                {item.cobranças}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceTable;
