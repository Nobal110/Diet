import { useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function Progress({ progressData, setProgressData }) {
  const [form, setForm] = useState({ user_id: 1, date: "", weight: "", notes: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const submitProgress = async e => {
    e.preventDefault();
    await axios.post("http://127.0.0.1:5000/progress", form);
    setProgressData([...progressData, { date: form.date, weight: parseFloat(form.weight) }]);
  };

  return (
    <div className="mt-8 max-w-md bg-gray-200">
      <h2 className="text-2xl mb-4">Progress Tracker</h2>
      <form onSubmit={submitProgress} className="space-y-3">
        <input type="date" name="date" onChange={handleChange} required className="input" />
        <input type="number" name="weight" onChange={handleChange} placeholder="Weight" required className="input" />
<input type="text" name="notes" onChange={handleChange} placeholder="Notes" className="input" />
<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Save Progress</button>
</form>
<LineChart width={300} height={200} data={progressData} className="mt-6">
<XAxis dataKey="date" />
<YAxis />
<Tooltip />
<CartesianGrid stroke="#ccc" />
<Line type="monotone" dataKey="weight" stroke="#8884d8" />
</LineChart>
</div>
);
}
