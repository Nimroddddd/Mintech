function PhoneItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[300px] w-52 shadow-xl" style={{backgroundImage: `url("/phones/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <button className="bg-foreground py-2 px-12 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
    </div>
  )
}

function TVItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center h-[200px] w-60 shadow-xl" style={{backgroundImage: `url("/tvs/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <button className="bg-foreground py-2 px-12 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
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
      <button className="bg-foreground py-2 px-12 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
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
      <button className="bg-foreground py-2 px-12 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
    </div>
  )
}

export { PhoneItem, TVItem, LaptopItem, SmartwatchItem }