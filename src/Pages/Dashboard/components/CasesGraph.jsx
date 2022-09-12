import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
const data = [
  { name: "Jan", uv: 34 },
  { name: "Feb", uv: 10 },
  { name: "Mar", uv: 14 },
  { name: "Apri", uv: 20 },
  { name: "May", uv: 17 },
  { name: "Jun", uv: 22 },
];

export const CasesGraph = () => {
  return (
    <div className="col-span-1 bg-emerald-200 p-2 rounded-2xl h-64">
      <p className="font-semibold">Cases per region</p>
      <ResponsiveContainer>
        <BarChart
          width={600}
          height={230}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Bar dataKey="uv" fill="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
