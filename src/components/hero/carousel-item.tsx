"use client";

import type { HeroCarouselItem } from "@/data/hero-carousel";
import { GrNext, GrPrevious } from "react-icons/gr";
import Button from "../ui/button";

type CarouselItemProps = {
  onPrevious?: () => void;
  onNext?: () => void;
} & HeroCarouselItem;

export default function CarouselItem({
  image,
  category,
  subtitle,
  onPrevious,
  onNext,
}: CarouselItemProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="bg-cover bg-no-repeat h-screen max-h-[800px] bg-center relative w-full"
    >
      <div className="flex flex-col items-center text-white container mx-auto text-center md:px-20 pt-[400px] gap-4">
        <h1 className="font-bold text-3xl md:text-5xl">{category}</h1>
        <p className="font-medium text-base">{subtitle}</p>
        <div>
          <Button variant="outlined" className="mt-4" />
        </div>
      </div>

      {onPrevious && (
        <button onClick={onPrevious}>
          <GrPrevious
            className="absolute top-[40%] left-6"
            size={40}
            color="white"
          />
        </button>
      )}
      {onNext && (
        <button onClick={onNext}>
          <GrNext
            className="absolute top-[40%] right-6"
            size={40}
            color="white"
          />
        </button>
      )}
    </div>
  );
}
