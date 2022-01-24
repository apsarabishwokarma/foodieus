"use client";
import FoodDetails from "@/components/product/food-details";
import { foods } from "@/data/foods";
import { useParams } from "next/navigation";

export default function FoodDetailsPage() {
  const { id } = useParams(); // Dynamic route parameter
  const food = foods.find((item) => item.id === Number(id)); // Find food by ID

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Food details not found.</p>
      </div>
    );
  }

  return <FoodDetails food={food} />;
}
