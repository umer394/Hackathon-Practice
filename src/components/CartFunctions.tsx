import { client } from "@/sanity/lib/client"
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
export default async function CarouselProducts() {

  const res = await client.fetch(`*[_type=="flashsales"]{
  _id,rating,width,height,percent,img,className,price,title
}`)
  
  return res
}

export  const data:ProductsItem[] = await CarouselProducts()