import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"

export default async function CarouselProducts() {
  const res = await client.fetch(`*[_type=="flashsales"]{
  _id,rating,width,height,percent,img,className,price,title
}`)
  return res
}
interface ProductsItem {
  _id:number,
  percent:string
  title:string
  rating:string
  width:number
  height:number
  price:string
  img:string
  className?:string
  
}

export async function CarouselSize() {
  const data:ProductsItem[] = await CarouselProducts()
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((item) => (
          
          <CarouselItem key={item._id} className="md:basis-1/2 lg:basis-1/5">
            <Link href={""}>
            <div className="p-1">
              <Card>
                <CardContent className=" bg-[#F5F5F5] aspect-square group ">
                  <div className="flex flex-col">
                    
                    <div className="flex justify-between mt-4">
                      <h1 className="bg-[#DB4444] text-white text-[10px] w-11 h-9 p-2  rounded-md">
                        {item.percent}
                      </h1>
                      <div className=" space-y-2">
                        <div className="bg-white p-2 rounded-2xl">
                        <Image src={"/FlashSales/heart.png"} alt={"heart"} className="" width={16} height={14}/>
                        </div>
                        <div className="bg-white p-2 rounded-2xl">
                        <Image src={"/FlashSales/eye.png"} alt={"eye"} width={19} height={14}/>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                    <div className={`${item.className}  flex justify-center items-center aspect-square`}>
                    <Image src={urlFor(item.img).width(item.width).url()} alt={"pic"} width={item.width}  height={item.height}/>
                    </div>  
                  
                    <div className="w-full">
                    <Button className="hidden px-12 group-hover:block absolute bottom-[90px]">Add to cart</Button>
                  </div>
                </CardContent>
                
              </Card>
            </div>
                <div className="mt-1 space-y-2">
                  <h1 className="font-semibold text-sm">{item.title}</h1>
                  <div className="flex gap-4">
                  <h2 className="text-[#DB4444] font-semibold ">{item.price}</h2>
                  <span className="line-through text-black opacity-70">$1160</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Image src={"/FlashSales/stars.png"} alt={"stars"} width={80} height={15}/>
                    <h4 className="text-sm">({item.rating})</h4>
                    
                  </div>
                 
                </div>
                </Link>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <div className="absolute bottom-[440px] md:bottom-[490px]  xl:bottom-96 right-10">
      <CarouselPrevious />
      <CarouselNext />
      </div>
   
    </Carousel>
  )
}
