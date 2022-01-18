"use client";

import { foods } from "@/data/foods";
import React, { useState } from "react";

const BestSellingFoods: React.FC = ({
  title,
  subtitle,
  limit,
}: {
  title?: string;
  subtitle?: string;
  limit?: number;
}) => {
  const [cart, setCart] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Best Selling Foods
      </h1>
      <h1 className="font-bold text-3xl capitalize">{title}</h1>
      <p className="font-medium text-lg">{subtitle}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {foods.map((food) => (
          <div
            key={food.id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{food.name}</h2>
            <p className="text-gray-500">${food.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingFoods;
