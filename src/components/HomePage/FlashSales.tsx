import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { CarouselSize } from "./CarouselSize"
import { Button } from "../ui/button"
  

export default function FlashSales(){
    return (
        <main className="mt-24">
            <div>
                <section className="flex items-center gap-3">
                    <div className="bg-[#DB4444] w-4 rounded-sm py-4 "/>
                    <h1 className="text-[#DB4444] font-semibold">Today's</h1>
                </section>
                <section className="flex items-center mt-4 max-w-xl justify-between">
                    <h2 className="font-semibold text-3xl">Flash Sales</h2>
                    <main className="flex items-center gap-4">
                        <div>
                            <h3 className="font-semibold text-[12px]">Days</h3>
                            <h3 className="font-bold text-3xl">03</h3>
                        </div>
                        <span className="text-[#DB4444] text-3xl">:</span>
                        <div>
                            <h3 className="font-semibold text-[12px]">Hours</h3>
                            <h3 className="font-bold text-3xl">23</h3>
                        </div>
                        <span className="text-[#DB4444] text-3xl">:</span>
                        <div>
                            <h3  className="font-semibold text-[12px]">Minutes</h3>
                            <h3 className="font-bold text-3xl">19</h3>
                        </div>
                        <span className="text-[#DB4444] text-3xl">:</span>
                        <div>
                            <h3  className="font-semibold text-[12px]">Seconds</h3>
                            <h3 className="font-bold text-3xl">56</h3>
                        </div>
                    </main>  
                </section>
                <section className="my-10">
                    <CarouselSize/>
                </section>
                
                <div className="flex justify-center my-20">
                <Button className="px-16 py-8 bg-[#DB4444]">View All Products</Button>
                </div>
            </div>
            <hr />
        </main>
    )
}