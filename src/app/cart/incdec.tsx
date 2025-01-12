"use client"

import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export default function IncDec({ quantity, updateQuantity}: { quantity: number; updateQuantity: (newQuantity: number) => void }){
      const [increment,setIncrement] = useState<number>(1)

      function Increment(){
        const newQuantity = increment + 1;
        setIncrement(newQuantity);
        updateQuantity(newQuantity);
      }
      function Decrement(){
    const newQuantity = increment - 1;
      setIncrement(newQuantity);
      updateQuantity(newQuantity);
      }
    // const {Increment,Decrement , increment} = useIncrement()
    
    return(
        <div>
            {quantity >= 2 ? (
                <div className="flex items-center border-[#070505] border-[2px] rounded-lg gap-x-3 px-4 py-2">
                    <h1>{quantity}</h1>
                    <div className="flex flex-col -space-y-1">
                        <button className="rotate-180" onClick={Increment}><IoMdArrowDropdown/></button>
                        <button onClick={Decrement}><IoMdArrowDropdown/></button>    
                    </div>
                </div>
            ):(
                <div className="flex space-x-3 px-4 py-2 border-[#828282] border-[2px] rounded-lg">
                    <h1>{increment}</h1>
                    <button className="rotate-180" onClick={Increment}><IoMdArrowDropdown/></button>
                </div>
            )}
            
        </div>
    )
}