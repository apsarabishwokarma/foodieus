"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Button from "../ui/button";

type food = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type foodDetailsProps = {
  foodId: string;
};

export default function foodDetails({ food }: { food: food }) {
  return (
    <div className="container mx-auto px-6">
      <div className="flex md:gap-20 gap-4 md:flex-row flex-col py-8 justify-center">
        <figure className="aspect-square md:max-w-xl w-full">
          <Image
            src={food.image}
            alt={food.name}
            height={800}
            width={800}
            className="object-contain w-full h-full  border rounded-sm"
            quality={100}
          />
        </figure>
        <div className="w-full h-full sticky top-4 ">
          <div className="flex flex-col gap-4">
            <h2 className="text-gray-600 font-bold text-2xl">{food.name}</h2>
            <p className="text-gray-600 font-bold text-xl">
              Price: ${food.price}
            </p>
            <p className="font-semibold">
              <span>Availability: </span>
              <span className="text-green-500 ">In Stock</span>{" "}
            </p>
            <p>{food.description}</p>
            <p className="text-gray-600 font-bold text-xl">
              Price: ${food.price}
            </p>
            <div className="text-gray-600">
              {food.rating.rate}{" "}
              <FaStar className="fill-yellow-400 inline mr-2" /> by{" "}
              {food.rating.count} users
            </div>

            <Button variant="outlined">Add to cart</Button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-10 md:max-w-xl w-full">
        <p className="font-semibold text-xl">Rating & Review </p>
        <div>
          <div className="py-8 flex flex-col gap-3">
            <div className="flex">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-slate-200" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold"> Amazing food!</h2>
              <p>
                {" "}
                This foodhas exceeded my expectations. It's well-designed and
                easy to use. However, I wish it had a few more features.
                Overall, I'm satisfied with my purchase.
              </p>
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    src={
                      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    }
                    alt="avatar"
                    width={200}
                    height={200}
                    className="object-cover w-[50px] aspect-square rounded-full"
                  />
                </div>
                <div>
                  <p>Apsara Bishwokarma</p>
                  <p>1 April, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex">
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-yellow-400" />
              <FaStar className="text-slate-200" />
              <FaStar className="text-slate-200" />
            </div>
            <div className="flex flex-col gap-3">
              <h2 className="font-semibold">Great food!</h2>
              <p>
                This foodhas exceeded my expectations. It's well-designed and
                easy to use. However, I wish it had a few more features.
                Overall, I'm satisfied with my purchase.
              </p>
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    src={
                      "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
                    }
                    alt="avatar"
                    width={200}
                    height={200}
                    className="object-cover w-[50px] aspect-square rounded-full"
                  />
                </div>
                <div className="">
                  <p>John Doe</p>
                  <p>15 feb, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
