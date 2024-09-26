// app/components/PerformanceTable.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const PerformanceTable = () => {
  const data = [
    { id: 1, nome: "João", vendas: 150, cobranças: 75 },
    { id: 2, nome: "Maria", vendas: 200, cobranças: 50 },
    { id: 3, nome: "Pedro", vendas: 100, cobranças: 100 },
  ];

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Tabela de Desempenho</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left">Nome</th>
              <th className="px-4 py-2 text-left">Vendas</th>
              <th className="px-4 py-2 text-left">Cobranças</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="hover:bg-gray-100"
              >
                <td className="border px-4 py-2">{item.nome}</td>
                <td className="border px-4 py-2">{item.vendas}</td>
                <td className="border px-4 py-2">{item.cobranças}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
