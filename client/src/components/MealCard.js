import React from 'react';

const MealsCard = ({ meals }) => {
  // meal = { name, calories, protein, carbs, fats, image_url }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {meals.images && (
        <img 
          className="w-full h-48 object-cover" 
          src={meals.image} 
          alt={meals.name} 
        />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{meals.name}</div>
        <p className="text-gray-700 text-base">
          Calories: {meals.calories} kcal
        </p>
        <p className="text-gray-700 text-base">
          Protein: {meals.protein} g
        </p>
        <p className="text-gray-700 text-base">
          Carbs: {meals.carbs} g
        </p>
        <p className="text-gray-700 text-base">
          Fats: {meals.fats} g
        </p>
      </div>
    </div>
  );
};

export default MealsCard;
