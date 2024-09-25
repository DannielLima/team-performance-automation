"use client";
import { useState } from "react";
import PerformanceTable from "./components/PerformanceTable";
import PerformanceChart from "./components/PerformanceChart";

type TeamMember = {
  name: string;
  sales: number;
  collections: number;
  target: number;
};

export default function Home() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [member, setMember] = useState<TeamMember>({
    name: "",
    sales: 0,
    collections: 0,
    target: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: Number(value) || value });
  };

  const addMember = () => {
    if (member.name && member.sales && member.collections && member.target) {
      setTeam([...team, member]);
      setMember({ name: "", sales: 0, collections: 0, target: 0 });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Análise de Desempenho de Equipe
      </h1>

      {/* Formulário */}
      <div className="flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          name="name"
          value={member.name}
          onChange={handleInputChange}
          placeholder="Nome"
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <input
          type="number"
          name="sales"
          value={member.sales}
          onChange={handleInputChange}
          placeholder="Vendas"
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <input
          type="number"
          name="collections"
          value={member.collections}
          onChange={handleInputChange}
          placeholder="Cobranças"
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <input
          type="number"
          name="target"
          value={member.target}
          onChange={handleInputChange}
          placeholder="Meta"
          className="border p-2 rounded w-full sm:w-1/4"
        />
        <button
          onClick={addMember}
          className="bg-blue-500 text-white p-2 rounded w-full sm:w-1/4"
        >
          Adicionar
        </button>
      </div>

      {/* Tabela de Desempenho */}
      <PerformanceTable team={team} />

      {/* Gráfico */}
      <PerformanceChart team={team} />
    </div>
  );
}
