type TeamMember = {
  name: string;
  sales: number;
  collections: number;
  target: number;
};

type Props = {
  team: TeamMember[];
};

export default function PerformanceTable({ team }: Props) {
  return (
    <div className="overflow-x-auto mb-8">
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">Vendas</th>
            <th className="px-4 py-2">Cobranças</th>
            <th className="px-4 py-2">Meta</th>
          </tr>
        </thead>
        <tbody>
          {team.map((member, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="border px-4 py-2">{member.name}</td>
              <td className="border px-4 py-2">{member.sales}</td>
              <td className="border px-4 py-2">{member.collections}</td>
              <td className="border px-4 py-2">{member.target}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
