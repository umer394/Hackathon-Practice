"use client"
import { createContext, useState,ReactNode, useContext, useEffect } from "react";


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
    quantity?: number;
    
}

interface CartContextType {
    cart: ProductsItem[];
    addToCart: (product: ProductsItem) => void;
    // count:number;
    // removeFromCart: (id: string) => void;
}



const CartContext = createContext<CartContextType|null>(null)

interface CartProviderProps {
    children: ReactNode;
}

export default function CartProvider({children}: CartProviderProps) {
    const [cart,setCart] = useState<ProductsItem[]>([])
    // const [count,setCount] = useState<number>(0)
    
    useEffect(()=>{
      const storedCart = localStorage.getItem("cart")
      // const storedCount = localStorage.getItem("count")
      if(storedCart){
        setCart(JSON.parse(storedCart))
      }
      // if(storedCount){
      //   setCart(JSON.parse(storedCount))
      // }
    },[])

    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart))
      // localStorage.setItem("count",JSON.stringify(count))
    },[cart])
    const addToCart = (product: ProductsItem) => {
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item._id === product._id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
                
            );
            
          }
          
          return [...prevCart, { ...product, quantity: 1 }];
        });
        // setCount(cart.length)
      };
     
    return (
        <CartContext.Provider value={{cart,addToCart}}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  };