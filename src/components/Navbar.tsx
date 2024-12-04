import {Poppins} from "next/font/google"
import { poppins } from "@/app/layout"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
export default function Navbar(){
 
    return (
        <main className="flex flex-col">
            <section className="bg-black">
                <header className=" flex justify-between p-2 max-w-4xl mx-auto">
                    <div className="flex space-x-4">
                    <h1 className={`text-white text-[14px]`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</h1>
                    <u className="text-white font-semibold text-[14px]">ShopNow</u>
                    </div>
                    
                    <h3 className="text-white text-[14px] flex items-center gap-1">
                        English
                        <span>
                        <Image src={"/navbar/drop.png"} alt={"drop"} width={10} height={10} className="relataive"/>
                        </span>
                    </h3>
                </header>
            </section>
            <section className="flex border-b-[1px] py-4 justify-center gap-60 border-[#D9D9D9]">
                <h4 className="font-bold text-2xl">Exclusive</h4>
                <div className="flex ">
                <Link href={""}><Button variant={"link"}>Home</Button></Link>
                <Link href={""}><Button variant={"link"}>Contact</Button></Link>
                <Link href={""}><Button variant={"link"}>About</Button></Link>
                <Link href={""}><Button variant={"link"}>Sign Up</Button></Link>
                </div>

                
        
                <div className="flex items-center gap-4">
                    <div className="flex items-center ">
                        <input type="text" className=" bg-slate-100 w-64 py-[5px]  pl-[12px] pr-[20px] placeholder:text-sm placeholder:text-black rounded-sm" placeholder="what are you looking for?"/>
                        <Image src={"/navbar/search.png"} alt={"heart"} width={16} height={15} className="absolute right-[135px]"/> 
                    </div>
                    <div>
                        <Image src={"/navbar/heart.png"} alt={"heart"} width={20} height={18} className="relative "/>     
                    </div>
                    <div >
                        <Image src={"/navbar/cart.png"} alt={"cart"} width={23} height={17} className="relataive"/>
                    </div>
                </div>
                
                
            </section>
        </main>
    )
}