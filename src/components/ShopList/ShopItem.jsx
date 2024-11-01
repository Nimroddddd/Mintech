import Link from "next/link"

function PhoneItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[300px] w-52 shadow-xl" style={{backgroundImage: `url("/phones/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>
    </div>
  )
}

function TVItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/televisions/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>
    </div>
  )
}

function LaptopItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/laptops/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>    
    </div>
  )
}

function SmartwatchItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/smartwatches/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <div className="flex flex-row gap-2">
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
        <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor"><Link href={`/product/${item.product_id}`}>Details</Link></button>
      </div>    
    </div>
  )
}

export { PhoneItem, TVItem, LaptopItem, SmartwatchItem }