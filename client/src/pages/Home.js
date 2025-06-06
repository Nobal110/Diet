import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-br from-green-100 to-black">
      <h1 className="text-4xl font-bold mb-4">🥗 Smart Diet Recommendation System</h1>
      <p className="text-lg text-gray-600 mb-8">
        Get personalized meal plans, track your progress, and talk to our AI diet assistant!
      </p>
      <div className="space-x-4">
        <Link to="/recommendation" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Get Recommendation
        </Link>
        <Link to="/progress" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          View Progress
        </Link>
        <Link to="/chat" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          AI Chat
        </Link>
      </div>
    </div>
  );
}
