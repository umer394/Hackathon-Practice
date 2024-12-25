import Image from "next/image"
export default function Hero(){
    return (
        <main  className="overflow-clip">
            <div className="flex justify-between">
                <section className="w-[22%] md:w-[35%] border-r-2  ">
                    <div className="mt-10 space-y-4 text-[7px] md:text-sm">

                    
                    <h1 className="md:flex items-center justify-between md:mr-8">Woman’s Fashion
                        <span className="hidden lg:block"> <Image src={"/Hero/rightarrow.png"} alt={"apple"} width={8} height={8}/></span>
                    </h1>
                    <h1 className="md:flex items-center justify-between md:mr-8">Man’s Fashion
                        <span className="hidden lg:block"> <Image src={"/Hero/rightarrow.png"} alt={"apple"} width={8} height={8}/></span>
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
                <section className="bg-black md:pl-5 lg:pl-16 md:flex justify-between items-center w-full mx-4 py-2 md:py-0 lg:py-4 md:mx-5 mt-10 ">
                    <div className="md:max-w-lg flex flex-col  space-y-6">
                        <div className="flex items-center gap-4 mx-auto lg:mx-0">
                            <Image src={"/Hero/apple.png"} alt={"apple"} width={40} height={49}/>
                            <h2 className="text-white text-sm font-light">iPhone 14 Series</h2>
                        </div>
                        <div className="flex flex-col md:space-y-3 lg:mx-auto">
                            <h3 className="text-white font-bold text-sm md:text-lg lg:text-4xl">Up to 10%</h3>
                            <h3 className="text-white font-bold text-sm md:text-lg lg:text-4xl">off Voucher</h3>
                        </div>
                        <div className="flex space-x-4   items-center mx-aut">
                            <u className="text-white font-light  text-sm ">
                                Shop Now
                            </u>
                            <Image src={"/Hero/whitearrow.png"} alt={"apple"} width={14} height={8}/>
                        </div>
      
                    </div>
                        <div>
                        <Image src={"/Hero/phone.png"} alt={"phone"} width={495} height={352}/>
                        </div>
                        
                    
                </section>
            </div>
        </main>
    )
}