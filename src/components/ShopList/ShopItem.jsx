export default function ShopItem(item, index) {
  return (
    <div key={index}>
      <div className="bg-cover bg-center center h-[300px] w-52 shadow-xl" style={{backgroundImage: `url("/${item.img}")`}}>

      </div>
      <p className="text-2xl mt-5 mb-1">{item.name}</p>
      <p>${item.price}</p>
      <button className="bg-foreground py-2 px-12 w-full rounded text-white mt-3 hover:bg-hoverColor">Add to cart</button>
    </div>
  )
}