"use client";

import { foods } from "@/data/foods";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Button from "../ui/button";

type Food = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export default function FoodDetails({ food }: { food: Food }) {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const limit = 7;

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="flex md:gap-20 gap-4 md:flex-row flex-col py-8 justify-center">
          <figure className="aspect-square md:max-w-xl w-full">
            <Image
              src={food.image}
              alt={food.name}
              height={800}
              width={800}
              className="object-contain w-full h-full border rounded-sm shadow-lg"
              quality={100}
            />
          </figure>
          <div className="w-full h-full sticky top-4">
            <div className="flex flex-col gap-4">
              <h2 className="text-gray-700 font-bold text-3xl">{food.name}</h2>
              <p className="text-gray-800 font-bold text-xl">
                Price: <span className="text-green-600">${food.price}</span>
              </p>
              <p className="font-medium">
                <span>Availability: </span>
                <span className="text-green-500">In Stock</span>
              </p>
              <p className="text-gray-600">
                {food.description || "No description available for this item."}
              </p>
              {food.rating && (
                <div className="text-gray-700">
                  <span className="font-semibold">{food.rating.rate}</span>{" "}
                  <FaStar className="fill-yellow-400 inline mr-2" />
                  <span>by {food.rating.count} users</span>
                  {/* Rating Bar */}
                  <div className="w-40 bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${(food.rating.rate / 5) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
              )}
              <Button variant="bgcart">Add to Cart</Button>
            </div>
          </div>
        </div>

        {/* Tabs for Details and Reviews */}
        <div className="mt-10 border-t pt-10">
          <div className="flex gap-4">
            <button
              className={`px-6 py-2 text-lg font-medium rounded-t-lg transition duration-300 ${
                activeTab === "details"
                  ? "bg-white text-blue-600 border-b-2 border-blue-600"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleTabChange("details")}
            >
              Details
            </button>
            <button
              className={`px-6 py-2 text-lg font-medium rounded-t-lg transition duration-300 ${
                activeTab === "reviews"
                  ? "bg-white text-blue-600 border-b-2 border-blue-600"
                  : "bg-gray-200 text-gray-600"
              }`}
              onClick={() => handleTabChange("reviews")}
            >
              Reviews
            </button>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-b-lg">
            {activeTab === "details" && (
              <div>
                <h3 className="font-semibold text-xl mb-4">Product Details</h3>
                <p>
                  {food.description ||
                    "Detailed information about the food will be displayed here."}
                </p>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                <h3 className="font-semibold text-xl mb-4">Customer Reviews</h3>

                <div className="py-8 flex flex-col gap-3">
                  <div className="flex">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-slate-200" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <h2 className="font-semibold">Amazing food!</h2>
                    <p>
                      This food has exceeded my expectations. The flavor is
                      incredible, and the texture is just right!
                    </p>
                    <div className="flex gap-2 items-center">
                      <Image
                        src={
                          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                        }
                        alt="avatar"
                        width={50}
                        height={50}
                        className="object-cover w-[50px] aspect-square rounded-full"
                      />
                      <div>
                        <p>Apsara Bishwokarma</p>
                        <p>1 April, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg">Write a Review</h4>
                  <form className="flex flex-col gap-4 mt-4">
                    <textarea
                      className="w-full h-24 border rounded-lg p-4"
                      placeholder="Share your thoughts..."
                    ></textarea>
                    <Button variant="solid">Submit Review</Button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-10">
          <h3 className="font-semibold text-xl mb-4">Related Products</h3>
          <div className="flex gap-6 overflow-x-auto cursor-pointer">
            {foods.slice(0, limit).map((relatedFood) => (
              <div
                key={relatedFood.id}
                className="w-48 bg-white shadow-md rounded-lg p-2 flex flex-col justify-between min-h-[300px]"
              >
                <Link href={`/food/${relatedFood.id}`}>
                  <Image
                    src={relatedFood.image}
                    alt={relatedFood.name}
                    width={150}
                    height={150}
                    className="rounded-md"
                  />
                  <div className="flex flex-col flex-grow mt-2">
                    <h4 className="font-semibold text-sm truncate">
                      {relatedFood.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ${relatedFood.price}
                    </p>
                  </div>
                  <Button variant="solid" className="mt-2 text-sm">
                    View Details
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
