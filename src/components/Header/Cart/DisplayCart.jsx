"use client"
import { useEffect, useState } from "react"
import CartItem from "./CartItem"
import Total from "./Total"
import axios from "axios"
import { getCookie } from "cookies-next"
import { useCartStore } from "@/controllers/store"


export default function DisplayCart() {


  const [cart, setCart] = useState([])
  const api = process.env.NEXT_PUBLIC_API_URL
  const { total, setTotal, count, setCount } = useCartStore()

  async function checkLocalCart() {
    const currentCart = getCookie("cart");
    const parsedCart = currentCart ? JSON.parse(currentCart) : [];
    const response = await axios.post(`${api}get-public-cart`, parsedCart)
    const { result, total, count } = response.data
    setCart(result)
    setCount(count)
    setTotal(total)
  }

  useEffect(() => {
    async function checkOnlineCart() {
      try {
        const response = await axios.get(`${api}get-cart`, {withCredentials: true})
        const { filteredResult:newCart, total, count } = response.data
        setCart(newCart)
        setCount(count)
        setTotal(total)
      } catch {
        checkLocalCart()
      }
    }

    checkOnlineCart()
  }, [])

  function ListCart(item, index) {
    return (
      <CartItem product={item} key={index} removed={checkLocalCart} />
    )
  }

  return (
    <div className="flex justify-end w-full h-screen bg-black bg-opacity-50 absolute [z-10000]">
      <div className="flex flex-col items-center bg-background  min-w-full sm:min-w-[460px] z-[12313123]">
        <div className="w-full max-h-[70vh] text-center overflow-y-scroll">
          <p className="text-2xl mb-5">My Cart</p>
          <hr />
          {cart.map(ListCart)}
        </div>
        <Total  total={total} count={count} />
      </div>
    </div>
  )
}