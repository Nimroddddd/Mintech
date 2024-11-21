"use client"
import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import Total from "./Total"
import { cartQuery } from "@/controllers/api"
import { useCartStore } from "@/controllers/store"


export default function DisplayCart() {


  const [cart, setCart] = useState([])
  const { total, setTotal, count, setCount } = useCartStore()

  async function checkCart() {
    const { filteredResult:newCart, total, count } = await cartQuery.handleCheck()
    setCart(newCart)
    setCount(count)
    setTotal(total)
  }

  useEffect(() => {
    checkCart()
  }, [])

  function ListCart(item, index) {
    return (
      <CartItem product={item} key={index} updated={checkCart} />
    )
  }


  return (
    <div className="flex justify-end w-full h-screen bg-black bg-opacity-50 absolute duration-300">
      <div className="flex flex-col items-center bg-background  min-w-full sm:min-w-[460px]">
        <div className="w-full max-h-[70vh] text-center overflow-y-scroll">
          <p className="text-2xl mb-5">My Cart</p>
          <hr />
          {cart.map(ListCart)}
        </div>
        <Total total={total} count={count} />
      </div>
    </div>
  )
}