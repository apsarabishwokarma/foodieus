import HeroCarousel from "@/components/hero/hero-carousel";
import DeliveryFoodShowcase from "@/components/product/delivery-showcase";
import FoodRecommend from "@/components/product/food-recommendation";
import BestSellingFoods from "@/components/product/foods-grid";
import FoodShowcase from "@/components/product/foods-showcase";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <BestSellingFoods />
      <BestSellingFoods
        title="Trending Foods"
        subtitle="Don't miss out!"
        limit={10}
      />

      <FoodShowcase />
      <FoodRecommend
        food={{
          id: 0,
          name: "",
          price: 0,
          description: "",
          image: "",
        }}
      />
      <DeliveryFoodShowcase />
      <Testimonials />
    </>
  );
}
