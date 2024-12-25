import Image from "next/image"
export default function Arrival(){
    return (
        <main className="my-24">
            <div>
                <section className="flex items-center gap-3">
                <div className="bg-[#DB4444] w-4 rounded-sm py-4 "/>
                <h1 className="text-[#DB4444] font-semibold">Featured</h1>
                </section>
                <section className="flex items-center mt-5 mb-10 max-w-xl justify-between">
                <h2 className="font-semibold text-3xl">New Arrival</h2>  
                </section>
                <section className="md:flex gap-4 space-y-4 md:space-y-0">
                    <div className="bg-black max-w-[600px] relative">
                        <Image src={"/Arrival/ps5.png"} alt={"ps5"} width={611} height={511}/>
                        <div className="absolute bottom-10 max-w-sm left-10 space-y-4">
                        <h1 className="text-white text-2xl font-semibold">PlayStation 5</h1>
                            <p className="text-white font-extralight text-sm text-opacity-80">
                            Black and White version of the PS5 <br /> coming out on sale
                            </p>
                            <div>
                            <u className="text-white">Shop Now</u>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4   -p-6 md:-p-0">
                        <div className="max-w-[700px] bg-[#0e0c0c] md:flex items-center justify-center ">
                        <div className=" flex- flex-col space-y-4 ml-3 mt-16 ">
                            <h1 className="text-white md:text-xl font-semibold">Women's Collection</h1>
                            <p className="text-white font-extralight text-[9px] md:text-sm text-opacity-80">
                            Featured woman collections that give you another vibe.
                            </p>
                            <div>
                            <u className="text-white">Shop Now</u>
                            </div>
                        </div>
                        <Image src={"/Arrival/women.png"} alt={"women"} width={380} height={286} className=""/>
                        </div>
                        <div className="md:flex justify-between md:gap-4 lg:gap-4 space-y-4 md:space-y-0 ">
                            <div className="bg-[#0e0c0c] max-w-[400px] px-12 py-10 relative">
                            <Image src={"/Arrival/speaker.png"} alt={"ps5"} width={210} height={222}/>
                            <div className="absolute bottom-8 left-4 space-y-1">
                                <h1 className="text-white text-xl font-semibold">Speakers</h1>
                                <p className="text-white font-extralight text-sm text-opacity-80">
                                Amazon wireless speakers
                                </p>
                                <div>
                                <u className="text-white">Shop Now</u>
                                </div>
                            </div>  
                            </div>
                            <div className="bg-[#0e0c0c] max-w-[400px] px-12 py-10 relative">
                            <Image src={"/Arrival/gucci.png"} alt={"ps5"} width={210} height={222}/>
                            <div className="absolute bottom-8 left-4 space-y-1">
                                <h1 className="text-white text-xl font-semibold">Perfume</h1>
                                <p className="text-white font-extralight text-sm text-opacity-80">
                                GUCCI INTENSE OUD EDP
                                </p>
                                <div>
                                <u className="text-white">Shop Now</u>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="my-32 md:flex md:max-w-[1000px] mx-auto justify-between space-y-10 md:space-y-0">
                    
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#cac7c7] p-2 w-[64px] rounded-full mb-4 max-w-md">
                            <div className="bg-black p-2 w-12 rounded-full">
                                <Image src={"/Arrival/delivery.png"} alt={"delivery"} width={40} height={40}/>
                            </div>
                        </div>
                        <h1 className="text-xl md:text-sm font-semibold">FREE AND FAST DELIVERY</h1>
                        <p className="text-sm">Free delivery for all orders over $140</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#cac7c7] p-2 w-[64px] rounded-full mb-4 max-w-md">
                            <div className="bg-black p-2 w-12 rounded-full">
                                <Image src={"/Arrival/customer.png"} alt={"delivery"} width={40} height={40}/>
                            </div>
                        </div>
                        <h1 className="text-xl md:text-sm font-semibold">24/7 CUSTOMER SERVICE</h1>
                        <p className="text-sm">Friendly 24/7 customer support</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="bg-[#cac7c7] p-2 w-[64px] rounded-full mb-4 max-w-md">
                            <div className="bg-black p-2 w-12 rounded-full">
                                <Image src={"/Arrival/secure.png"} alt={"delivery"} width={40} height={40}/>
                            </div>
                        </div>
                        <h1 className="text-xl md:text-sm font-semibold">MONEY BACK GUARANTEE</h1>
                        <p className="text-sm">We reurn money within 30 days</p>
                    </div>
                </section>
            </div>
        </main>    
    )
}