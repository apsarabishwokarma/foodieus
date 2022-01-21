"use client";

import { foods } from "@/data/foods";
import React from "react";

const BestSellingFoods: React.FC = ({
  title,
  subtitle,
  limit,
}: {
  title?: string;
  subtitle?: string;
  limit?: number;
}) => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 capitalize">
          {title || "Best Selling Foods"}
        </h1>
        {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
      </div>

      <div>
        <h1 className="text-xl font-bold text-center mb-6">Popular Foods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {foods.slice(0, 15).map((food) => (
            <div
              key={food.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow group min-h-[16rem] flex flex-col justify-between"
            >
              <img
                src={food.image}
                alt={food.name}
                className="w-full h-40 object-cover rounded-t-md"
              />
              <div className="p-2 flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-500 transition">
                  {food.name}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {food.description ||
                    "A delicious treat to satisfy your cravings!"}
                </p>
                <p className="text-gray-900 font-bold mt-4">${food.price}</p>
              </div>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSellingFoods;
