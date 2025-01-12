"use client"
import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Link from "next/link"

import { urlFor } from "@/sanity/lib/image"
import { Button } from "../ui/button"
import { data1 } from "../CartFunctions"
import { useCart } from "../context/context"





export  function ProductsCarousel() {

  const {addToCart} = useCart()
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full "
    >
      <CarouselContent className="flex flex-wrap">
        {data1.map((item) => (
          
          <CarouselItem key={item._id} className="p-6 md:basis-1/4 lg:basis-1/4 ">
            
            <div className="">
            <Link href={`/product/${item._id}`}>
              <Card className="py-0">
                <CardContent className=" bg-[#F5F5F5] aspect-square group">
                  <div className="flex flex-col">
                    
                    <div className="flex justify-between mt-4 px-6 ">
                      <h1 className="bg-[#F5F5F5] text-white text-[10px] w-11 h-9 p-2  rounded-md">
                      
                      </h1>
                      <div className=" space-y-2">
                        <div className="bg-white p-2 rounded-2xl ">
                        <Image src={"/FlashSales/heart.png"} alt={"heart"} className="" width={16} height={14}/>
                        </div>
                        <div className="bg-white p-2 rounded-2xl">
                        <Image src={"/FlashSales/eye.png"} alt={"eye"} width={19} height={14}/>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                    <div className={`${item.className}  flex justify-center items-center aspect-ratio `}>
                    <Image src={urlFor(item.img).width(item.width).url()} alt={"pic"} width={item.width}  height={item.height}/>
                    
                    </div>  
                  
                    {/* <div className="w-full">
                    <Button className="hidden px-12 group-hover:block absolute  bottom-[0px]">Add to cart</Button>
                  </div> */}
                </CardContent>
                
              </Card>
              </Link>
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
                  <Button variant={"outline"} onClick={()=>addToCart(item)}  className=" px-16 ml-1 ">Add to cart</Button>
                </div>
                
          </CarouselItem>
        ))}
        
      </CarouselContent>
      {/* <div className="absolute bottom-[850px] md:hidden right-10">
      <CarouselPrevious />
      <CarouselNext />
      </div> */}
   
    </Carousel>
  )
}
