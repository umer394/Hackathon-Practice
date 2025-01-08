import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


interface ListingProps {
    _id:number
    title:string
    price:string
    img:string
    rating:string
}
export default async function Listing({params}:{params:Promise<{id:string}>}){

    const id = (await params).id;
    const listingData = async () =>{
        const res = await client.fetch(`*[_id == "${id}"]{_id,title,price,rating,img}`)
        return res
    }
    const data:ListingProps[] = await listingData();
    
    
    return (
        <main className="max-w-[1200px] mx-auto">
            {data.map((item)=>{
                return (
                    <div key={item._id} className="mb-20">
                    <div className="flex text-sm gap-2 mb-20 my-20">
                    <Link href={"/"} >Home </Link>
                    <h1 className="font-semibold"> / {item.title}</h1>
                    </div>
                    <section className="flex gap-4 max-w-[900px] mx-auto">
                        <div className="bg-[#F5F5F5] max-w-sm py-24 flex items-center justify-center">
                        <Image src={urlFor(item.img).width(300).url()} alt="title" width={250} height={315}/>
                        </div>
                        <div className="max-w-sm space-y-2">
                            <h1 className="text-lg font-semibold" >{item.title}</h1>
                            <div className="flex gap-2">
                            <Image src={"/FlashSales/stars.png"} alt="title" width={60} height={20}/>
                            <h1 className="text-sm">({item.rating} Reviews) |</h1>
                            <h2 className="text-sm text-[#00FF66]">In Stock</h2>
                            </div>
                            <h2 className="text-xl">{item.price}.00</h2>
                            <p className="text-[13px]">PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>
                            <hr className="border-black"/>
                            <div className="flex gap-4 text-sm">
                                <h1 className="text-lg">Size:</h1>
                                <div className="border-2 w-[28px] h-[26px] px-1 rounded-sm hover:text-white hover:bg-[#DB4444] cursor-pointer">
                                    <h2>XS</h2>
                                </div>
                                <div className="border-2 w-[28px] h-[26px] px-2 rounded-sm hover:text-white hover:bg-[#DB4444] cursor-pointer">
                                    <h2>S</h2>
                                </div>
                                <div className="border-2 w-[28px] h-[26px] px-2 rounded-sm hover:text-white hover:bg-[#DB4444] cursor-pointer">
                                    <h2>M</h2>
                                </div>  
                                <div className="border-2 w-[28px] h-[26px] px-2 rounded-sm hover:text-white hover:bg-[#DB4444] cursor-pointer">
                                    <h2>L</h2>
                                </div>
                                <div className="border-2 w-[28px] h-[26px] px-1 rounded-sm hover:text-white hover:bg-[#DB4444] cursor-pointer">
                                    <h2>XL</h2>
                                </div>
                            </div>
                            <div className="">  
                                <Button className="px-8 py-6 bg-[#DB4444] ">Buy Now</Button>
                            </div>
                        </div>  
                    </section>
                </div>         
                )
            })}
           
        </main>
    )
}
