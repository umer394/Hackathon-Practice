"use client"
import { Button } from "./ui/button"
import Link from "next/link"
import Image from "next/image"
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { RxHamburgerMenu } from "react-icons/rx";
import Badge from '@mui/material/Badge';

import { useCart } from "./context/context"


export default function Navbar() {
    const {count} = useCart()

    

    return (
        <main className="flex flex-col overflow-hidden ">
            <section className="bg-black ">
                <header className=" flex justify-between p-2 max-w-4xl mx-auto">
                    <div className="md:flex md:space-x-4">
                        <h1 className={`text-white text-[9px] md:text-[14px]`}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%</h1>
                        <u className="text-white font-semibold text-[9px] md:text-[14px]">ShopNow</u>
                    </div>

                    <h3 className="text-white text-[9px] md:text-[14px] flex items-center gap-1">
                        English
                        <span>
                            <Image src={"/navbar/drop.png"} alt={"drop"} width={10} height={10} className="relataive" />
                        </span>
                    </h3>
                </header>
            </section>
            <section className="flex border-b-[1px]  py-4 justify-between md:px-10  border-[#D9D9D9] overflow-clip  ">
                <h4 className="font-bold text-lg pl-2 lg:pl-0 md:text-2xl">Exclusive</h4>
                <div className="hidden lg:flex">
                    <Link href={"/"}><Button variant={"link"}>Home</Button></Link>
                    <Link href={"/contact"}><Button variant={"link"}>Contact</Button></Link>
                    <Link href={"/about"}><Button variant={"link"}>About</Button></Link>
                    <Link href={""}><Button variant={"link"}>Sign Up</Button></Link>
                </div>



                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center relative">
                        <input type="text" className=" bg-slate-100 w-64 py-[5px]  pl-[12px] pr-[20px] placeholder:text-sm placeholder:text-black rounded-sm" placeholder="what are you looking for?" />
                        <Image src={"/navbar/search.png"} alt={"search"} width={16} height={15} className="absolute lg:left-56" />
                    </div>
                    <div>
                        <Image src={"/navbar/heart.png"} alt={"heart"} width={20} height={18} className=" " />
                    </div>
                    <div >
                        <Link href={"/cart"}>
                            <Badge badgeContent={count} color="error">
                                <Image src={"/navbar/cart.png"} alt={"cart"} width={23} height={17} className="" />
                            </Badge>
                        </Link>
                    </div>
                </div>
                <div className="lg:hidden pr-2">
                    <Sheet>
                        <SheetTrigger><RxHamburgerMenu size={20} /></SheetTrigger>
                        <SheetContent className="flex flex-col justify-center items-center">

                            <SheetTitle>
                                <div className="flex items-center gap-4">
                                    <div className="hidden md:flex items-center relative">
                                        <input type="text" className=" bg-slate-100 w-64 py-[5px]  pl-[12px] pr-[20px] placeholder:text-sm placeholder:text-black rounded-sm" placeholder="what are you looking for?" />
                                        <Image src={"/navbar/search.png"} alt={"search"} width={16} height={15} className="absolute left-56" />
                                    </div>
                                    <div>
                                        <Image src={"/navbar/heart.png"} alt={"heart"} width={20} height={18} className=" " />
                                    </div>
                                    <div >
                                        <Link href={"/cart"}>
                                            <Badge badgeContent={count} color="error">
                                                <Image src={"/navbar/cart.png"} alt={"cart"} width={23} height={17} className="" />
                                            </Badge>
                                        </Link>
                                    </div>
                                </div>
                            </SheetTitle>
                            <SheetTitle>
                                <div className="flex flex-col space-y-4">
                                    <Button variant={"link"}><Link href={"/"}>Home</Link></Button>
                                    <Button variant={"link"}><Link href={"/contact"}>Contact</Link></Button>
                                    <Button variant={"link"}><Link href={"/about"}>About</Link></Button>
                                    <Button variant={"link"}><Link href={"/"}>Sign Up</Link></Button>
                                </div>
                            </SheetTitle>

                        </SheetContent>
                    </Sheet>
                </div>


            </section>
        </main>
    )
}