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

export const productsItem:Items[] = [
    {
        id:1,
        img:"/Products/prod1.png",
        percent:"-40%",
        title:"Breed Dry Dog Food",
        rating:"78",
        width:100,
        height:102,
        price:"$120"
    },
    {
        id:2,
        img:"/Products/prod2.png",
        percent:"-30%",
        title:"CANON EOS DSLR Camera",
        rating:"88",
        width:120,
        height:82,
        price:"$180",
        className:"mt-2"

    },
    {
        id:3,
        img:"/Products/prod3.png",
        percent:"-20%",
        title:"ASUS FHD Gaming Laptop",
        rating:"98",
        width:120,
        height:82,
        price:"$160"
    },
    {
        id:4,
        img:"/Products/prod7.png",
        percent:"-40%",
        title:"Curology Product Set ",
        rating:"95",
        width:120,
        height:52,
        price:"$280",
    
    },
    {
        id:5,
        img:"/Products/prod5.png",
        percent:"-35%",
        title:"Kids Electric Car",
        rating:"52",
        width:122,
        height:82,
         price:"$40",
     
    },
    {
        id:6,
        img:"/Products/prod6.png",
        percent:"-40%",
        title:"Jr. Zoom Soccer Cleats",
        rating:"78",
        width:150,
        height:102,
         price:"$120",
    },
    {
        id:7,
        img:"/Products/prod7.png",
        percent:"-40%",
        title:"GP11 Shooter USB Gamepad",
        rating:"78",
        width:120,
        height:102,
         price:"$120"
    },
    {
        id:8,
        img:"/Products/prod8.png",
        percent:"-40%",
        title:"Quilted Satin Jacket",
        rating:"78",
        width:160,
        height:102,
         price:"$120"
    },
    // {
    //     id:9,
    //     img:"/Products/prod1.png",
    //     percent:"-40%",
    //     title:"Breed Dry Dog Food",
    //     rating:"78",
    //     width:100,
    //     height:102,
    //     price:"$120"
    // },
    // {
    //     id:10,
    //     img:"/Products/prod2.png",
    //     percent:"-30%",
    //     title:"CANON EOS DSLR Camera",
    //     rating:"88",
    //     width:120,
    //     height:82,
    //     price:"$180",
    //     className:"mt-2"

    // },
    // {
    //     id:11,
    //     img:"/Products/prod3.png",
    //     percent:"-20%",
    //     title:"ASUS FHD Gaming Laptop",
    //     rating:"98",
    //     width:120,
    //     height:82,
    //     price:"$160"
    // },
    // {
    //     id:12,
    //     img:"/Products/prod7.png",
    //     percent:"-40%",
    //     title:"Curology Product Set ",
    //     rating:"95",
    //     width:120,
    //     height:52,
    //     price:"$280",
    
    // },
    // {
    //     id:13,
    //     img:"/Products/prod5.png",
    //     percent:"-35%",
    //     title:"Kids Electric Car",
    //     rating:"52",
    //     width:122,
    //     height:82,
    //      price:"$40",
     
    // },
    // {
    //     id:14,
    //     img:"/Products/prod6.png",
    //     percent:"-40%",
    //     title:"Jr. Zoom Soccer Cleats",
    //     rating:"78",
    //     width:150,
    //     height:102,
    //      price:"$120",
    // },
    // {
    //     id:15,
    //     img:"/Products/prod7.png",
    //     percent:"-40%",
    //     title:"GP11 Shooter USB Gamepad",
    //     rating:"78",
    //     width:120,
    //     height:102,
    //      price:"$120"
    // },
    // {
    //     id:16,
    //     img:"/Products/prod8.png",
    //     percent:"-40%",
    //     title:"Quilted Satin Jacket",
    //     rating:"78",
    //     width:160,
    //     height:102,
    //      price:"$120"
    // },
]
