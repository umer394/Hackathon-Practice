interface Items {
    id:number,
    img:string
    percent:string
    title:string
    rating:string
    width:number
    height:number
    price:string
    className?:string
}

interface Category {
    id:number
    img:string,
    text:string,
    clasName?:string
}
export const cardsItem:Items[] = [
    {
        id:1,
        img:"/FlashSales/card1.png",
        percent:"-40%",
        title:"HAVIT HV-G92 Gamepad",
        rating:"78",
        width:150,
        height:102,
        price:"$120"
    },
    {
        id:2,
        img:"/FlashSales/card2.png",
        percent:"-30%",
        title:"AK-900 Wired Keyboard",
        rating:"88",
        width:250,
        height:82,
        price:"$180",
        className:"mt-2"

    },
    {
        id:3,
        img:"/FlashSales/card3.png",
        percent:"-20%",
        title:"IPS LCD Gaming Monitor",
        rating:"98",
        width:200,
        height:152,
        price:"$160"
    },
    {
        id:4,
        img:"/FlashSales/card4.png",
        percent:"-40%",
        title:"S-Series Comfort Chair",
        rating:"95",
        width:80,
        height:52,
        price:"$280",
        className:"pl-8"
    },
    {
        id:5,
        img:"/FlashSales/card5.png",
        percent:"-35%",
        title:"S-Series Comfort Chair",
        rating:"52",
        width:82,
        height:52,
         price:"$40",
         className:"pl-8"
    },
    {
        id:6,
        img:"/FlashSales/card1.png",
        percent:"-40%",
        title:"HAVIT HV-G92 Gamepad",
        rating:"78",
        width:150,
        height:102,
         price:"$120",
    },
    {
        id:7,
        img:"/FlashSales/card1.png",
        percent:"-40%",
        title:"HAVIT HV-G92 Gamepad",
        rating:"78",
        width:150,
        height:102,
         price:"$120"
    },
    {
        id:8,
        img:"/FlashSales/card1.png",
        percent:"-40%",
        title:"HAVIT HV-G92 Gamepad",
        rating:"78",
        width:150,
        height:102,
         price:"$120"
    },
]

export const CategoryItem:Category[] = [ 
    {
        id:1,
        img:"/Category/pic1.png",
        text:"Phones"
    },
    {
        id:2,
        img:"/Category/pic2.png",
        text:"Computers"
    },
    {
        id:3,
        img:"/Category/pic3.png",
        text:"SmartWatch"
    },
    {
        id:4,
        img:"/Category/pic4.png",
        text:"Camera",
        clasName:"text-white bg-[#DB4444] bg-cover"
    },
    {
        id:5,
        img:"/Category/pic5.png",
        text:"HeadPhones"
    },
    {
        id:6,
        img:"/Category/pic6.png",
        text:"Gaming"
    },
    {
        id:7,
        img:"/Category/pic1.png",
        text:"Phones"
    },
    {
        id:8,
        img:"/Category/pic1.png",
        text:"Phones"
    },
]

export const sellingItem:Items[] = [
    {
        id:1,
        img:"/Selling/img1.png",
        percent:"-40%",
        title:"The north coat",
        rating:"78",
        width:250,
        height:102,
        price:"$120"
    },
    {
        id:2,
        img:"/Selling/img2.png",
        percent:"-30%",
        title:"Gucci duffle bag",
        rating:"88",
        width:200,
        height:82,
        price:"$180",

    },
    {
        id:3,
        img:"/Selling/img3.png",
        percent:"-20%",
        title:"RGB liquid CPU Cooler",
        rating:"98",
        width:200,
        height:152,
        price:"$160"
    },
    {
        id:4,
        img:"/Selling/img4.png",
        percent:"-40%",
        title:"Small BookSelf",
        rating:"95",
        width:130,
        height:52,
        price:"$280",
        className:"pl-8"
    },
    
]