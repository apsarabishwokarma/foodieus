import HeroCarousel from "@/components/hero/hero-carousel";
import ProductShowcase from "@/components/product/deliveryshowcase";
import FoodShowcase from "@/components/product/foods-showcase";
import ProductGrid from "@/components/product/product-grid";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <ProductGrid
        heading="Featured Products"
        title="BEST SELLER PRODUCTS"
        subtitle="Discover, click, and shop, Just a click away from your next
            purchase."
      />
      <ProductShowcase />
      <FoodShowcase />
    </>
  );
}
