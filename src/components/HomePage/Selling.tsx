import { Button } from "../ui/button";
import SellingCarousel from "./SellingCarousel";
import Image from "next/image"
export default function Sellling(){
    return (
        <main className="mt-20">
    
        <div>
            <section className="flex items-center gap-3">
                <div className="bg-[#DB4444] w-4 rounded-sm py-4 "/>
                <h1 className="text-[#DB4444] font-semibold">This Month</h1>
            </section>
            <section className="flex  mt-4  justify-between">
                <h2 className="font-semibold text-3xl">Best Selling Products</h2>  
                <Button className="px-12 py-7 bg-[#DB4444]">View All</Button>
            </section>
            <section className="my-10">
                <SellingCarousel/>
            </section>
        </div>
        <div className="bg-black  mt-32">
            <div className="flex justify-between py-[80px] max-w-[1000px] mx-auto">
            <section className="max-w-md space-y-12">
                <h1 className="text-[#00FF66] font-semibold">Categories</h1>
                <h2 className="text-white font-semibold text-5xl">Enhance Your Music Experience</h2>
                <div className="flex space-x-4">
                    <div className="bg-white max-w-[60px] flex flex-col justify-center items-center rounded-[50px] p-4">
                        <h1 className="text-sm font-bold">23</h1>
                        <h1 className="text-[9px] font-bold">Hours</h1>
                    </div>
                    <div className="bg-white max-w-[60px] flex flex-col justify-center items-center rounded-[50px] px-7 py-3">
                        <h1 className="text-sm font-bold">05</h1>
                        <h1 className="text-[9px] font-bold">Days</h1>
                    </div>
                    <div className="bg-white max-w-[60px] flex flex-col justify-center items-center rounded-[50px] p-3">
                        <h1 className="text-sm font-bold">59</h1>
                        <h1 className="text-[9px] font-bold">Minutes</h1>
                    </div>
                    <div className="bg-white max-w-[60px] flex flex-col justify-center items-center rounded-[50px] p-3">
                        <h1 className="text-sm font-bold">35</h1>
                        <h1 className="text-[9px] font-bold">Seconds</h1>
                    </div>
                    <div>
                        <h1>35</h1>
                        <h1>Seconds</h1>
                    </div>
                </div>
                <Button className="bg-[#00FF66] px-10  py-6">Buy Now</Button>
            </section>
            <section className="flex justify-center items-center ">
                <Image src={"/Selling/speaker.png"} alt={"speaker"} width={568} height={330} />
            </section>
            </div>
        </div>
    </main>
    )
}