"use client";

import FoodDetails from "@/components/product/food-details";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FoodDetailsPage() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id"); // Get the product ID from query parameters
  const [food, setFood] = useState(null); // State to store food data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState<string | null>(null); // State for error handling

  useEffect(() => {
    if (!id) return; // Ensure `id` is available

    const fetchFood = async () => {
      try {
        const res = await fetch(`/api/foods/${id}`); // Replace with your API endpoint
        if (!res.ok) {
          throw new Error(`Failed to fetch food with id: ${id}`);
        }
        const data = await res.json();
        setFood(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Access the message safely
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFood();
  }, [id]);

  if (loading) {
    return <p>Loading food details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!food) {
    return <p>No food details available.</p>;
  }

  return (
    <FoodDetails
      product={{
        id: 0,
        title: "",
        price: 0,
        description: "",
        category: "",
        image: "",
        rating: {
          rate: 0,
          count: 0,
        },
      }}
    />
  );
}
