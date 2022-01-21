"use client";
import { foods } from "@/data/foods";
import { useCart } from "../cart/cart-context";

export default function FoodRecommend() {
  const { addCartItem } = useCart();

  return (
    <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 bg-gray-50 p-6">
      {/* Popular Foods Section */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-2xl font-bold text-center mb-6">Popular Foods</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.slice(0, 9).map((food) => (
            <div
              key={food.id}
              className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow group flex flex-col justify-between"
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
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition"
                onClick={() =>
                  addCartItem({
                    id: food.id,
                    image: food.image,
                    name: food.name,
                    price: food.price,
                    description: food.description,
                    itemQuantity: 1,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center w-full lg:w-1/3">
        <figure className="relative w-full h-full">
          <img
            src="/assets/col-md-4.jpg"
            alt="Delicious Donuts - Special Offer"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
          <figcaption className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded-lg">
            <h3 className="text-lg font-semibold">Special Offer!</h3>
            <p className="text-sm">Grab your favorite donuts today!</p>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
