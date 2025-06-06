import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function ProgressChart({ data }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow w-full max-w-xl">
      <h2 className="text-xl font-bold mb-4">📈 Weight Progress</h2>
      <LineChart width={400} height={250} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#4f46e5" />
      </LineChart>
    </div>
  );
}
