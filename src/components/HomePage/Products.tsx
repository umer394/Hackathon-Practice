import { Button } from "../ui/button";
import { ProductsCarousel } from "./ProductsCarousel";

export default function Products (){
    return (
        <main className="mt-24">
        <div>
            <section className="flex items-center gap-3">
                <div className="bg-[#DB4444] w-4 rounded-sm py-4 "/>
                <h1 className="text-[#DB4444]  font-semibold">Our Products</h1>
            </section>
            <section className="flex items-center mt-4 max-w-xl justify-between">
                <h2 className="font-semibold md:text-3xl">Explore Our Products</h2>  
            </section>
            <section className="my-10">
                <ProductsCarousel/>
            </section>
            <div className="flex justify-center my-20">
                <Button className="px-16 py-8 bg-[#DB4444]">View All Products</Button>
                </div>
        </div>
 
    </main>
    )
}