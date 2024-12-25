

import { CategoryCarousel } from "./CategoryCrousel";

export default function Category(){
    return (
        <main>
            <div  className="my-24">
                <section className="flex items-center gap-3">
                    <div className="bg-[#DB4444] w-4 rounded-sm py-4 "/>
                    <h1 className="text-[#DB4444] font-semibold">Categories</h1>
                </section>
                <section className="flex items-center mt-4 max-w-xl justify-between">
                    <h2 className="font-semibold md:text-3xl">Browse By Category</h2>  
                </section>
                <section className="my-10">
                    <CategoryCarousel/>
                </section>
            </div>
            <hr />
        </main>
    )
}