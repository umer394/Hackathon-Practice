"use client"
import { useCart } from "@/components/context/context";


export default function Page() {
  const {cart} = useCart()
  console.log(cart)
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bo.ld mb-4">Your Cart</h1>
      {cart.length  === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b pb-2"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold">{item.title}</h2>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
