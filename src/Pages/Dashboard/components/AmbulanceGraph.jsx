import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Jan", uv: 34 },
  { name: "Feb", uv: 10 },
  { name: "Mar", uv: 14 },
  { name: "Apri", uv: 20 },
  { name: "May", uv: 17 },
  { name: "Jun", uv: 22 },
];

export const AmbulanceGraph = () => {
  return (
    <div className="col-span-2 bg-emerald-200 p-2 rounded-2xl h-64">
      <p className="font-semibold">Alarms per month</p>
      <ResponsiveContainer>
        <LineChart
          width={600}
          height={230}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
