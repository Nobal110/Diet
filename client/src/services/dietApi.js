import axios from "axios";

const API_URL = "http://127.0.0.1:5000/recommendation";
app.use((req, res, next) => {
  console.log(res.getHeaders()); // Check if CORS headers are set
  next();
});

export const fetchRecommendation = async (formData) => {
  try {
    const res = await axios.post(API_URL, formData);
    return res.data.meals; // Ensure backend returns { meals: [...] }
  } catch (err) {
    console.error("API Error:", err);
    return [];
  }
};
