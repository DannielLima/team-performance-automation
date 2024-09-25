import PerformanceChart from './components/PerformanceChart';
import PerformanceTable from './components/PerformanceTable';

const Page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-extrabold mb-6">Análise de Desempenho da Equipe</h1>
      <PerformanceChart />
      <PerformanceTable />
    </div>
  );
};

export default Page;
