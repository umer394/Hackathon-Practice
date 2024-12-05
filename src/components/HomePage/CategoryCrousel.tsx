import * as React from "react"
import { cardsItem, CategoryItem } from "@/data/homepage"
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

export function CategoryCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {CategoryItem.map((item) => (
          
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/6">
            <Link href={""}>
            <div className="p-1">
              <Card className="border-[2px] border-black border-opacity-50">
                <CardContent className="  aspect-square px-0">
                    <div className={`${item.clasName} flex flex-col justify-center items-center h-full`}>
                        <Image src={item.img} alt={"img"} width={70} height={20}/>
                        <h1 className="">{item.text}</h1>
                    </div>
                </CardContent>
                
              </Card>
      
                 
                </div>
                </Link>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <div className="absolute bottom-64 right-10">
      <CarouselPrevious />
      <CarouselNext />
      </div>
   
    </Carousel>
  )
}
