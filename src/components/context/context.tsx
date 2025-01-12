"use client"

import { createContext, useState,ReactNode, useContext, useEffect } from "react";
import { toast } from "sonner";


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
    quantity: number;
    
}

interface CartContextType {
    cart: ProductsItem[];
    count:number
    addToCart: (product: ProductsItem) => void;
    // count:number;
    removeFromCart: (id: number) => void;
    updateCartQuantity:(id:number,quantity:number)=>void
}



const CartContext = createContext<CartContextType|null>(null)

interface CartProviderProps {
    children: ReactNode;
}

export default function CartProvider({children}: CartProviderProps) {
    const [cart,setCart] = useState<ProductsItem[]>([])
    const [count,setCount] = useState<number>(0)
    // const [count,setCount] = useState<number>(0)
    
    useEffect(()=>{
      const storedCart = localStorage.getItem("cart")
      // const storedCount = localStorage.getItem("count")
      if(storedCart){
        setCart(JSON.parse(storedCart))
        setCount(JSON.parse(storedCart).length)
      }
      // if(storedCount){
      //   setCart(JSON.parse(storedCount))
      // }
    },[1000])

    useEffect(()=>{
      localStorage.setItem("cart",JSON.stringify(cart))
      // localStorage.setItem("count",JSON.stringify(count))
    },[cart])
    const addToCart = (product: ProductsItem) => {
      toast("Item added to cart!", {
        description: `${product.title} has been successfully added to your cart.`,
        action: {
          label: "View Cart",
          onClick: () => console.log("cart"), // Or navigate to cart page
        },
      });
        setCart((prevCart) => {
          const existingProduct = prevCart.find((item) => item._id === product._id);
          if (existingProduct) {
            return prevCart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
                
            );
            
          }
          setCount(cart.length)
          
          return [...prevCart, { ...product, quantity: 1 }];
        });
        // setCount(cart.length)
      };
      const removeFromCart = (id: number) => {
        setCart((prevItems) =>
          prevItems.filter((cartItem) => cartItem._id   !== id)
        );
      };  

      const updateCartQuantity = (id: number, quantity: number) => {
        setCart((prevCart) =>
          prevCart.map((item) =>
            item._id === id ? { ...item, quantity } : item
          )
        );
      };
     
    return (
        <CartContext.Provider value={{cart,addToCart,count,removeFromCart,updateCartQuantity}}>{children}</CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
      throw new Error("useCart must be used within a CartProvider");
    }
    return context;
  };