"use client"
import { useCart } from "@/components/context/context";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import IncDec from "./incdec";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';


export default function Page() {
  const {cart,removeFromCart,updateCartQuantity} = useCart()
 
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
                    <div className=" flex justify-between items-center ml-20 gap-x-80">
                    <h1 className="">{item.price}</h1>
                    <h1><IncDec quantity={item.quantity} 
                    updateQuantity={(newQuantity)=>updateCartQuantity(item._id,newQuantity)} /></h1>
                    <h1 className="flex items-center ">
                    {(parseInt(item.price.slice(1)) * item.quantity).toFixed(2)}
                      {/* {(parseInt(item.price.slice(1)))*2} */}
                      {/* {count} */}
                      <Tooltip title="Delete">
                      <IconButton onClick={()=>removeFromCart(item._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                      </h1>  
                    </div>
                    
                  </header>
                  )
                })}
                <div className="flex justify-between">
                  <button className="border-2 py-3 px-8 rounded-sm border-[#20201f54]"> <Link href={"/"}> Return To Shop</Link></button>
                  <button className="border-2 py-3 px-8 rounded-sm border-[#20201f54]"> <Link href={"/"}>Update Cart</Link></button>
                </div>
                <div className="flex justify-between mt-10 mb-20 ">
                <div className="flex space-x-4">
                  <input type="text" placeholder="Coupon Code" className="w-[300] h-[56] px-6 border-black border-2"/>
                  <div>
                  <button className="border-2 py-3 px-8 rounded-sm bg-[#DB4444] text-white">Apply Coupon</button>
                  </div>
                  
                </div>
                <div className="border-black border-2 px-4 py-5">
                  <h1 className="font-semibold my-3">Cart Total</h1>
                  <div className="flex justify-between space-x-60  text-sm my-2">
                    <h1>Subtotal:</h1>
                    <h1>{cart.reduce(
                  (acc, item) => acc + parseInt(item.price.slice(1)) * item.quantity,
                  0
                ).toFixed(2)}</h1>
                  </div>
                  <hr />
                  <div className="flex justify-between text-sm my-2">
                    <h1>Shipping</h1>
                    <h1>Free</h1>
                  </div>
                  <hr />
                  <div className="flex justify-between text-sm my-2">
                    <h1>Total:</h1>
                    <h1>{cart.reduce(
                  (acc, item) => acc + parseInt(item.price.slice(1)) * item.quantity,
                  0
                ).toFixed(2)}</h1>
                  </div>
                  <button className="border-2 py-3 mx-20 px-8 rounded-sm bg-[#DB4444] text-sm text-white">Proceed To checkout</button>
                </div>
                </div>
                
              </div>
            </div>
        </div>
      ):(
        <div>
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
              <h1 className="font-semibold">Your Cart is Empty</h1>
            </div>
        </div>
        </div>
      )}
    </main>
  );
}
