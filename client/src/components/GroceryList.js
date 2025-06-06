import React, { useState } from 'react';

const GroceryList = ({ items }) => {
  // items = [{ id, name, quantity, bought }, ...]

  const [groceryItems, setGroceryItems] = useState(items);

  const toggleBought = (user_id) => {
    setGroceryItems(prevItems =>
      prevItems.map(item =>
        item.user_id ===user_id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded shadow p-4">
      <h2 className="text-2xl font-bold mb-4">Grocery List</h2>
      <ul>
        {groceryItems.map(({ user_id, name, quantity, bought }) => (
          <li
            key={id}
            className={`flex items-center justify-between p-2 border-b ${
              bought ? 'line-through text-gray-400' : ''
            }`}
          >
            <div>
              <input
                type="checkbox"
                checked={bought}
                onChange={() => toggleBought(id)}
                className="mr-2"
              />
              <span>{name}</span>
            </div>
            <span className="text-gray-600">{quantity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroceryList;
