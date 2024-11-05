export default function Total() {
  return (
    <div className="flex flex-col gap-5 w-full px-5 py-5">
      <div className="flex justify-between">
        <p>Subtotal <span className="font-light">(3 items)</span></p>
        <p>$500</p>
      </div>
      <button className="bg-foreground py-2 px-1 w-full rounded text-white mt-3 hover:bg-hoverColor">Proceed To Checkout</button>
    </div>
  )
}