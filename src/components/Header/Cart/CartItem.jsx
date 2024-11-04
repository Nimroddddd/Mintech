export default function CartItem({product}) {
  return(
    <div className="flex justify-between w-full px-3">
      <div className="border border-black">
        <img src={`/${product.category}/${product.img}`} className="h-36" />
      </div>
      <div className="border border-black">
        <h1>{product.name}</h1>
      </div>
    </div>
  ) 
}