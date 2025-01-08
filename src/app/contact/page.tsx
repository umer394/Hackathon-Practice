import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Contact(){
    return (
        <main className="max-w-[1200px] md:mx-auto my-20 mx-10">
            <main>
                <div className="flex text-sm gap-2 mb-20">
                <Link href={"/"} >Home </Link>
                <h1 className="font-semibold"> / Contact</h1>
                </div>
                <div className="md:flex gap-4 space-y-4 md:space-y-0">
                <section className="bg-[#000000] text-white max-w-sm p-6 space-y-4">
                <div className="flex gap-4 items-center ">
                    <div className="bg-[#DB4444] w-8  h-8 p-2 rounded-full"><Image src={"/phone.png"} alt={"call"} width={20} height={20}/></div>
                    <h1 className="font-semibold">Call To Us</h1>
                </div>
                <h1 className="text-sm">We are available 24/7, 7 days a week.</h1>
                <h1 className="text-sm">Phone: +8801611112222</h1>
                <hr className="border-white w-full"/>
                <div className="flex gap-4 items-center ">
                    <div className="bg-[#DB4444] w-8  h-8 p-2 rounded-full"><Image src={"/phone.png"} alt={"call"} width={20} height={20}/></div>
                    <h1 className="font-semibold">Write To US</h1>
                </div>
                <h1 className="text-sm">Fill out our form and we will contact you within 24 hours.</h1>
                <h2 className="text-sm">Emails: customer@exclusive.com</h2>
                <h3 className="text-sm">Emails: support@exclusive.com</h3>
                </section>
                <section className="bg-black p-6 space-y-4 overflow-clip">
                    <div className="md:flex gap-4 space-y-4 md:space-y-0">
                        <input type="text" className="p-2 w-full mx-auto" placeholder="Your Name"/>
                        <input type="text" className="p-2 w-full mx-auto" placeholder="Your Email"/>
                        <input type="text" className="p-2 w-full mx-auto" placeholder="Your Phone"/>
                    </div>
                    <textarea name="" id="" rows={6} className="w-full mx-auto p-2" placeholder="Your Message"></textarea>
                    <div className="flex justify-end">  
                    <Button className="px-8 py-6 bg-[#DB4444] ">Send Message</Button>
                    </div>
                    
                </section>
                </div>
                
            </main>
            
        </main> 
    )
}