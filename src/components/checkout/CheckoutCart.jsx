"use client"
import CartItem from "@/components/Header/Cart/CartItem"
import { cartQuery } from "@/controllers/api"
import { useState, useEffect } from "react"

export default function CheckoutCart({ pay, setMainTotal }) {

  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(null)

  async function checkCart() {
    const { filteredResult:cart, total } = await cartQuery.handleCheck()
    setCart(cart)
    setTotal(total)
  }


  useEffect(() => {
    checkCart()
  })

  useEffect(() => {
    setMainTotal(total)
  }, [total])

  function ListCart(item, index) {
    return (
      <CartItem product={item} key={index} updated={checkCart} />
    )
  }

  return (
    <div>
      {cart.map(ListCart)}
      <div className="flex justify-between pt-3">
        <p className="font-bold">Total</p>
        <p>${total}</p>
      </div>
      <button onClick={() => pay()} className="bg-foreground mt-5 py-2 px-1 w-full rounded text-white hover:bg-hoverColor">Pay</button>
    </div>
  )
}