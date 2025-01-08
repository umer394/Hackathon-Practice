"use client"
import Link from "next/link";
import Image from "next/image"
// import { ProductContext } from "@/components/context/ProductContext";


export default function About(){
    
    return (
        <div>
            <main className="my-20 md:pl-20  mx-10 md:mx-0">
                <div className="flex text-sm gap-2">
                <Link href={"/"} >Home </Link>
                <h1 className="font-semibold"> / About</h1>
                </div>
                <div className="mt-10 md:flex justify-between ">
                    <div className="max-w-md md:max-w-sm lg:max-w-md flex flex-col justify-center gap-y-10">
                        <h1 className="text-5xl font-semibold">Our Story</h1>
                        <p className="text-sm">Launced in 2015, Exclusive is South Asia&apos;s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region</p>
                        <p className="text-sm">Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer</p>
                    </div>
                    
                    <div>
                        <Image src={"/aboutHero.png"} alt={"girls"} width={500} height={300}/>
                    </div>
                </div>
                {/* {products.map((item)=>{
                    return (
                        <div>
                            <h1>{item.title}</h1>
                        </div>
                    )
                })} */}
            </main>
        </div>
    )
}