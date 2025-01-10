"use client"
import { useCart } from "@/components/context/context";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";


export default function Page() {
  const {cart} = useCart()
  console.log(cart)
  return (
    <main>
      {cart.length > 0 ? (
        <div className="my-20 max-w-[1200px] mx-auto">
            <h1>
              <div className="flex text-sm gap-2">
                <Link href={"/"} >Home </Link>
                <h1 className="font-semibold"> / Cart</h1>
              </div>
            </h1>
            <div className="">
              <header className="flex justify-between my-10 border-[1px] p-4 shadow-sm">
                <h1>Product</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Subtotal</h1>
              </header>
              <div>
                {cart.map((item)=>{
                  return (
                    <header key={item._id} className="flex gap-12 my-10 border-[1px] p-4 shadow-sm items-center">
                    <div className="flex items-center gap-3">
                      <Image src={urlFor(item.img).width(item.width).url()} alt={item.title} width={54} height={54}/>
                      <h1 className="text-sm">{item.title}</h1>
                    </div>
                    <div className=" flex justify-between ml-20 gap-x-80">
                    <h1 className="">{item.price}</h1>
                    <h1>Quantity</h1>
                    <h1>{(parseInt(item.price.slice(1)))*2}</h1>  
                    </div>
                    
                  </header>
                  )
                })}
              </div>
            </div>
        </div>
      ):(
        <div>
          <h1>Your Cart is Empty</h1>
        </div>
      )}
    </main>
  );
}
