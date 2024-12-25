export default function Footer(){
    return (
        <main className="bg-black">
            <div  className="md:flex md:p-10 max-w-[200px] md:max-w-[1000px] mx-auto justify-between py-6 md:py-10 space-y-10 md:space-y-0">
                <section className="text-white ">
                    <h1 className="font-semibold text-xl mb-4">Exclusive</h1>
                    <h2 className="text-md mb-3">Subscribe</h2>
                    <h3 className="text-[12px] mb-1">Get 10% off your first order</h3>
                    <input type="text" placeholder="Enter your Email" className="border-white bg-black w-40 text-white border-2 placeholder:text-sm border-opacity-80 rounded-md"  />
                </section>
                <section className="text-white md:max-w-[130px]">
                <h1 className="font-semibold text-xl mb-4">Support</h1>
                <p className="text-[11px]  mb-4">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <h2 className="text-[11px] mb-3">exclusive@gmail.com</h2>
                <h3 className="text-[11px]">+88015-88888-9999</h3>
                </section>
                <section className="text-white">
                <h1 className="font-semibold text-xl mb-4">Account</h1>
                <div className="space-y-3">
                    <h1 className="text-[11px]">My Account</h1>
                    <h1 className="text-[11px]">Login / Register</h1>
                    <h1 className="text-[11px]">Cart</h1>
                    <h1 className="text-[11px]">Whishlist</h1>
                    <h1 className="text-[11px]">Shop</h1>
                </div>
                </section>
            </div>
        </main>
    )
}