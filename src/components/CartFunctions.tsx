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

export const  MockData = async () => {
  const res = await client.fetch('*[_type == "mockproductsdata"]{id,stock_quantity,brand,rating,total_orders,category,description,sizes,price,_id,gender,color,name,discount_percent,image}')
  return res
}

type MockData = {
  name: string,
  image: string,
  description: string,
  price: number,
  sizes: string[],
  rating: number,
  stock_quantity: number,
  discount_percent: number,
  total_orders: number,
  brand:number,
  color: string[],
  category: string,
  gender: string,
  id: string,
  _id:string,
  }

export const mockdata:MockData[] = await MockData()