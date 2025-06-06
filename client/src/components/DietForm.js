import { useState } from "react";
import axios from "axios";

export default function DietForm({ setMeals }) {
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activity_level: "sedentary",
    goal: "weight_loss",
  });

  const cors = require("cors");
app.use(cors());

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:5000/recommendation", formData);
      setMeals(res.data.meals || res.data || []); // send to parent
    }
     catch (error) {

      console.error("Failed to get recommendations:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required className="input" />
      <select name="gender" value={formData.gender} onChange={handleChange} className="input">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="number" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight (kg)" required className="input" />
      <input type="number" name="height" value={formData.height} onChange={handleChange} placeholder="Height (cm)" required className="input" />
      <select name="activity_level" value={formData.activity_level} onChange={handleChange} className="input">
        <option value="sedentary">Sedentary</option>
        <option value="light">Lightly Active</option>
        <option value="moderate">Moderate</option>
        <option value="active">Active</option>
        <option value="very_active">Very Active</option>
      </select>
      <select name="goal" value={formData.goal} onChange={handleChange} className="input">
        <option value="weight_loss">Weight Loss</option>
        <option value="maintain">Maintain Weight</option>
        <option value="weight_gain">Weight Gain</option>
      </select>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Get Recommendations
      </button>
    </form>
  );
}
