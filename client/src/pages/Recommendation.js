import { useState } from "react";
import DietForm from "../components/DietForm";
import MealCard from "../components/MealCard";
import axios from "axios";

export default function Recommendation() {
  const [meals, setMeals] = useState([]);
const API_URL = "http://127.0.0.1:5000/recommendation";
  const handleSubmit = async (formData) => {
    try {
      const res = await axios.post(API, formData);
       console.log("Response data:", res.data);

       // Adjust this line depending on your API response structure
    setMeals(res.data.meals || res.data || []);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    }
    
  };
const cors = require("cors");
app.use(cors());

  
  return (
    <div className="p-6">
      <DietForm onSubmit={handleSubmit} /> {/* ✅ using correct prop */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
       
       {Array.isArray(meals) ? (
        meals.map((meal, idx) => <MealCard key={idx} meals={meal} />)
      ) : (
        <p>No meals to display or data is not an array.</p>
      )}
      </div>
    </div>
  );
}
