import Arrival from "@/components/HomePage/Arrival";
import Category from "@/components/HomePage/Category";
import FlashSales from "@/components/HomePage/FlashSales";
import Hero from "@/components/HomePage/Hero";
import Products from "@/components/HomePage/Products";
import Selling from "@/components/HomePage/Selling";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="xl:max-w-[1200px]  xl:mx-auto">
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
