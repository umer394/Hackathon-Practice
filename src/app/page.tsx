import Arrival from "@/components/HomePage/Arrival";
import Category from "@/components/HomePage/Category";
import FlashSales from "@/components/HomePage/FlashSales";
import Hero from "@/components/HomePage/Hero";
import Products from "@/components/HomePage/Products";
import Selling from "@/components/HomePage/Selling";


export default async function Home() {
  return (
    <main>
      <div className="max-w-[288px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1200px]  mx-auto">
        <Hero/>
        <FlashSales/>
        <Category/>
        <Selling/>
        <Products/>
        <Arrival/>
      </div>
    </main>
  );
}
