import Image from "next/image"
export default function Hero(){
    return (
        <main >
            <div className="flex justify-between">
                <section className="w-[35%] border-r-2 ">
                    <div className="mt-10 space-y-4">

                    
                    <h1 className="flex items-center justify-between mr-8">Woman’s Fashion
                        <span> <Image src={"/Hero/rightarrow.png"} alt={"apple"} width={8} height={8}/></span>
                    </h1>
                    <h1 className="flex items-center justify-between mr-8">Man’s Fashion
                        <span> <Image src={"/Hero/rightarrow.png"} alt={"apple"} width={8} height={8}/></span>
                    </h1>
                    <h1>Electronics</h1>
                    <h1>Home & Lifestyle</h1>
                    <h1>Medicine</h1>
                    <h1>Sports & Outdoor</h1>
                    <h1>Baby’s & Toys</h1>
                    <h1>Groceries & Pets</h1>
                    <h1>Health & Beauty</h1>
                    </div>
                </section>
                <section className="bg-black pl-16 flex justify-between items-center w-full mx-10 mt-10">
                    <div className="max-w-md flex flex-col space-y-6">
                        <div className="flex items-center gap-4">
                            <Image src={"/Hero/apple.png"} alt={"apple"} width={40} height={49}/>
                            <h2 className="text-white text-sm font-light">iPhone 14 Series</h2>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h3 className="text-white font-bold text-4xl">Up to 10%</h3>
                            <h3 className="text-white font-bold text-4xl">off Voucher</h3>
                        </div>
                        <div className="grid grid-cols-2 -space-x-4 items-center">
                            <u className="text-white font-light">
                                Shop Now
                            </u>
                            <Image src={"/Hero/whitearrow.png"} alt={"apple"} width={14} height={8}/>
                        </div>
      
                    </div>
                        <Image src={"/Hero/phone.png"} alt={"phone"} width={495} height={352}/>
                    
                </section>
            </div>
        </main>
    )
}